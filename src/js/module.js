/*!
 * Treejs
 * JavaScript component for generating views of tree data structures
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

// N/A

/* ================================ Variables =============================== */

// variable to store tree fragment to enable searching operations with
// minimised repaints and reflows
let inMemTree;
// track user interaction with tree
let onHoverRow = { style: {} };
let singleClickedRow = { style: {} };
let dblClickedRow = { style: {} };

/* ============================= Private Methods ============================ */

function _handleUndefined(value, returnValue) {
  if (typeof value === 'undefined') {
    return returnValue;
  }
  return value;
}

function _toTitleCase(str) {
  return str.replace(/\w\S*/g,
    function tc(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function _addElement(parent, type) {
  const element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _deleteElement(id) {
  const e = document.getElementById(id);
  if (e) {
    e.parentNode.removeChild(e);
  }
}

function _onHoverDefault(tr) {
  if (onHoverRow !== tr) {
    // clear current styling
    if (onHoverRow !== singleClickedRow) {
      onHoverRow.style.backgroundColor = '';
    }
    // set new row
    onHoverRow = tr;
    if (tr !== singleClickedRow) {
      // set default styling
      tr.style.backgroundColor = 'rgba(206,230,253,1)';
    }
  }
}

function _onClickDefault(tr) {
  if (singleClickedRow !== tr) {
    // clear current styling
    singleClickedRow.style.backgroundColor = '';
    // set new row
    singleClickedRow = tr;
    // set default styling
    tr.style.backgroundColor = 'rgba(28,144,243,1)';
  }
}

function _onDblClickDefault(tr) {
  if (dblClickedRow !== tr) {
    // set new row
    dblClickedRow = tr;
  }
}

function _containerRenderer() {
  const container = {};
  container.className = 'treejs-tree';
  container.style = {
    height: '500px',
    boxSizing: 'border-box',
    fontSize: '13px',
    overflow: 'scroll',
    fontFamily: 'sans-serif'
  };
  return container;
}

function _rowRenderer() {
  const row = {};
  row.className = '';
  row.style = {
    wordBreak: 'break-all'
  };
  return row;
}

function _applyRender(element, properties) {
  const arr = Object.keys(properties);
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i];
    if (typeof properties[prop] === 'object' && properties[prop] !== null) {
      Object.assign(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }
  return element;
}

function _addHighlight(tdElement, filter) {
  let t = (tdElement.innerText || tdElement.textContent);
  // flags... ig
  // i = case insensitive
  // g = global. Search for ALL matches in string
  let outerHtml = '';
  if (tdElement.firstChild.outerHTML) {
    outerHtml = tdElement.firstChild.outerHTML;
  }
  // remove chevron from text
  t = t.replace(tdElement.firstChild.innerText, '');
  tdElement.innerHTML = outerHtml + t.replace(new RegExp(`(${filter})`, 'ig'), '<span style="background-color: yellow;">$1</span>');
}

function _getParentsToDisplay(parents, depth, previousDepth, tr) {
  // add level to array
  if (!parents[depth]) {
    parents[depth] = [];
  }
  // case 1 - minimum depth reached - reset parents array
  if (depth === 0) {
    parents = [];
    parents[0] = [];
    parents[0].push(tr);
  // case 2 - depth remains the same
  } else if (depth === previousDepth) {
    // reset current depth level
    parents[depth] = [];
    parents[depth].push(tr);
  // case 3 - depth increased
  } else if (depth > previousDepth) {
    parents[depth].push(tr);
  // case 4 - depth decreased
  } else {
    // clear current depth and lower depths
    for (let i = depth; i < parents.length; i++) {
      parents[i] = [];
    }
    parents[depth].push(tr);
  }
  return parents;
}

function _displayParents(parents) {
  if (parents) {
    for (let x = 0; x < parents.length; x++) {
      const depthParents = parents[x];
      if (depthParents) {
        for (let y = 0; y < depthParents.length; y++) {
          depthParents[y].style.display = '';
        }
      }
    }
  }
}

// get all sibling elements until an element with a particular selector is
// encountered. In this case data-depth = current value.
// elem = element to start search with
// selector = css selector pattern to stop at. e.g. class, div, attribute etc.
function _nextUntil(elem, selector, filter, callback) {
  // matches() polyfill
  // normalise behaviour of matches function in older browsers
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector
    || Element.prototype.webkitMatchesSelector;
  }
  // Setup siblings array
  const siblings = [];
  // Get the next sibling element. Sibling immediately after starting element.
  elem = elem.nextElementSibling;
  // Loop through all sibling elements until no sibling is encountered
  while (elem) {
    // If we've reached our match, bail
    if (elem.matches(selector)) break;
    // If filtering by a selector, check if the sibling matches
    if (filter && !elem.matches(filter)) {
      // move to next element
      elem = elem.nextElementSibling;
      // restart loop
      continue;
    }
    // custom callback selector
    if (callback && !callback(elem)) {
      break;
    }
    // Otherwise, push it to the siblings array
    siblings.push(elem);
    // Get the next sibling element
    elem = elem.nextElementSibling;
  }
  return siblings;
}

function _getChildren(parent, depth) {
  return _nextUntil(parent, null, null, function cb(sibling) {
    // get sibling attribute
    const siblingDepth = sibling.getAttribute('data-depth');
    // confirm within allowable depth
    if (depth < siblingDepth) {
      return true;
    }
    return false;
  });
}

function _hide(ele) {
  ele.style.display = 'none';
}

function _show(ele) {
  ele.style.display = '';
}

function _toggleTreeView(options, tableElement) {
  const cnf = {
    collapseIcon: options.tree.rows.collapseIcon || '▾'
    , expandIcon: options.tree.rows.expandIcon || '▸'
  }
  // get currently clicked element in table
  const target = tableElement.target; // eslint-disable-line prefer-destructuring
  // get parent table row
  const parent = target.parentNode.parentNode;
  // get data depth value
  const depth = parent.getAttribute('data-depth');
  // only attempt to filter elements if a data depth is detected
  if (depth && depth >= 0) {
    // get all siblings until the next sibling with the same depth is
    // reached
    const children = _getChildren(parent, depth);
    // Remove already collapsed nodes from children so that we don't
    // make them visible.
    // (Confused? Remove this code and close Item 2, close Item 1
    // then open Item 1 again, then you will understand)
    // get all children with expand
    const expandnodes = children.filter(function cb(item) {
      return item.classList.contains('treejs-tree--expand');
    });
    let childrenCopy = children;
    // loop through all collapsed rows
    expandnodes.map(function cb(subnode) { // eslint-disable-line array-callback-return
      // get all children of expand items
      const subnodeDepth = subnode.getAttribute('data-depth');
      const subnodeChildren = _getChildren(subnode, subnodeDepth);
      // remove expand items from display list
      childrenCopy = childrenCopy.filter(function cb(child) {
        for (let i = 0; i < subnodeChildren.length; i++) {
          if (subnodeChildren[i] === child) {
            return false;
          }
        }
        return true;
      });
    });
    // Change icon and hide/show children
    if (target.innerHTML === cnf.collapseIcon) {
      parent.classList.remove('treejs-tree--collapse');
      parent.classList.add('treejs-tree--expand');
      target.innerHTML = cnf.expandIcon;
      // hide all children
      children.map(function cb(e) {
        return _hide(e);
      });
    } else if (target.innerHTML === cnf.expandIcon) {
      // prevents adding chevrons to rows with no children
      parent.classList.remove('treejs-tree--expand');
      parent.classList.add('treejs-tree--collapse');
      target.innerHTML = cnf.collapseIcon;
      // show on specific children
      childrenCopy.map(function cb(e) {
        return _show(e);
      });
    }
  }
}

function _addTreeToDom(treeElement, divId, tableDivId) {
  // remove old tree
  const oldTree = document.getElementById(tableDivId);
  if (oldTree) {
    oldTree.parentNode.removeChild(oldTree);
  }
  // add new filtered tree
  const parent = document.getElementById(divId);
  parent.appendChild(treeElement);
}

function _displayTree(treeRoot, divId, searchDivId, options) {
  const div = document.getElementById(divId);
  const input = document.getElementById(searchDivId);
  // add filtered tree if applicable
  if (input && input.value) {
    searchTable(searchDivId, 'treejs-tree', divId, options);
  } else {
    // add tree to DOM
    div.appendChild(treeRoot);
  }
}

function _addHeaders(options, treeRoot) {
  const columnNames = options.tree.columns.sourceNames;
  const newColumnNames = options.tree.columns.newNames;
  const widths = options.tree.columns.widths;
  // add tree view header
  const treeHeader = _addElement(treeRoot, 'thead');
  // add headers to header element
  for (let i = 0; i < columnNames.length; i++) {
    // add header
    const th = _addElement(treeHeader, 'th');
    // calculate values
    const header = _toTitleCase(newColumnNames[i]);
    let width;
    if (widths) {
      width = `${widths[i]}px`;
    }
    // apply header styles
    th.width = width;
    // apply header values
    th.innerHTML = header;
  }
}

function _addCells(options, row, columns, tableRow, expand) {
  let cnf = {
    expandIcon: options.tree.rows.expandIcon || '▸'
  }
  for (let n = 0; n < columns.length; n++) {
    const tableCell = _addElement(tableRow, 'td');
    // add indent or chevron into cell
    if (n === 0) {
      const tableCellSpan = _addElement(tableCell, 'span');
      tableCellSpan.style.height = '18px';
      tableCellSpan.style.width = '18px';
      tableCellSpan.style.display = 'inline-block';
      if (expand === 'treejs-tree--expand') {
        tableCellSpan.style.cursor = 'pointer';
        tableCellSpan.style.textAlign = 'center';
        tableCellSpan.innerHTML = cnf.expandIcon;
      }
      // set tablecell indent
      tableCell.style.paddingLeft = `${row.DATA_DEPTH * 15}px`
      // add toggle function to tree elements
      tableCell.onclick = function cb(e) {
        _toggleTreeView(options, e);
      };
    }
    // determine cell alignments
    const alignments = options.tree.columns.alignment;
    const cellValue = _handleUndefined(row[columns[n]], '');
    // add cell content
    tableCell.innerHTML = tableCell.innerHTML + cellValue;
    tableCell.style.textAlign = alignments[n];
    tableCell.style.whiteSpace = 'nowrap';
    tableCell.style.overflow = 'hidden';
    tableCell.title = cellValue;
  }
}

function _addRowEvents(tableRow, options) {
  const cnf = {
    onClick: options.tree.rows.onClick || _onClickDefault,
    onDblClick: options.tree.rows.onDblClick || _onDblClickDefault,
    onHover: options.tree.rows.onHover || _onHoverDefault,
    onHoverOut: options.tree.rows.onHoverOut || function () {}
  };
  tableRow.onclick = function onclick() {
    return cnf.onClick(tableRow);
  };
  tableRow.ondblclick = function ondblclick() {
    return cnf.onDblClick(tableRow);
  };
  tableRow.onmouseover = function onmouseover() {
    return cnf.onHover(tableRow);
  };
  tableRow.onmouseout = function onmouseout() {
    return cnf.onHoverOut(tableRow);
  };
}

function _addRows(options, treeBody) {
  const cnf = {
    renderer: options.tree.rows.renderer || _rowRenderer
  };
  const data = options.tree.data;
  // add rows to table
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    let expand = '';
    let display = 'none';
    let colourCode = '';
    // confirm if row element has children
    if (i < data.length - 1) {
      if (row.DATA_DEPTH < (data[i + 1]).DATA_DEPTH) {
        expand = 'treejs-tree--expand';
      }
    }
    // confirm if row should be displayed
    if (row.DATA_DEPTH === 0) {
      display = '';
    }
    // confirm if row should be coloured
    if (row.COLOUR_CODE) {
      colourCode = `rgba(${row.COLOUR_CODE})`;
    }
    // create table row
    const tableRow = _addElement(treeBody, 'tr');
    // apply styling to row
    tableRow.setAttribute('data-depth', row.DATA_DEPTH);
    tableRow.style.display = display;
    tableRow.style.backgroundColor = colourCode;
    const render = cnf.renderer();
    _applyRender(tableRow, render);
    // must occur after the renderer to prevent the class name being overwritten
    tableRow.className = expand;
    // apply row functionality
    _addRowEvents(tableRow, options);
    // add cells to row
    _addCells(options, row, options.tree.columns.sourceNames, tableRow, expand);
  }
}

/**
 * createTreeView - generate a view of a tree datastructure based on config
 * options passed
 */
function _createTreeView(options, frag) {
  // delete dynamic tree element if it already exists
  _deleteElement('treejs-tree');
  // create new dynamic tree element
  // cellspacing 0 to support IE6 and IE7 - Removes unwanted whitespace between
  // table cells
  const treeRoot = _addElement(frag, 'table');
  treeRoot.id = 'treejs-tree';
  treeRoot.cellSpacing = '0';
  treeRoot.style.tableLayout = 'fixed';
  // add headers to tree
  _addHeaders(options, treeRoot);
  // add table body
  const treeBody = _addElement(treeRoot, 'tbody');
  // add table rows
  _addRows(options, treeBody);
  // copy tree root to global variable
  inMemTree = treeRoot.cloneNode(true);
  // apply styling to tree view container
  const cnf = { renderer: options.tree.renderer || _containerRenderer };
  const container = document.getElementById(options.tree.div);
  const render = cnf.renderer();
  _applyRender(container, render);
  return treeRoot;
}

/* ============================== Public Methods ============================ */

function searchTable(searchDivId, tableDivId, divId, options) {
  // Declare variables
  const input = document.getElementById(searchDivId);
  const filter = input.value.toUpperCase();
  // create copy of tree to filter and reload into dom
  const table = inMemTree.cloneNode(true);
  const tr = table.getElementsByTagName('tr');
  let parents = [];
  let previousDepth = -1;
  // Only search through table if a input value is provided
  if (filter) {
    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < tr.length; i++) {
      // track parent elements of current row
      const depth = tr[i].getAttribute('data-depth');
      parents = _getParentsToDisplay(parents, depth, previousDepth, tr[i]);
      // get all table cells
      const td = tr[i].getElementsByTagName('td');
      // loop through all table cells
      let found = false;
      for (let n = 0; n < td.length; n++) {
        const text = (td[n].innerText || td[n].textContent);
        if (text.toUpperCase().indexOf(filter) > -1) {
          found = true;
          _addHighlight(td[n], filter);
        }
      }
      // set display of table row
      if (found) {
        tr[i].style.display = '';
        // fix chevron status to allow drilling down
        tr[i].classList.remove('treejs-tree--collapse');
        tr[i].classList.add('treejs-tree--expand');
        // display parent elements
        _displayParents(parents);
      } else {
        tr[i].style.display = 'none';
      }
      // re-add double click to newly cloned tree
      _addRowEvents(tr[i], options);
      previousDepth = depth;
    }
  // No input value therefore dont attempt to filter
  }
  // add toggle function to tree elements
  table.onclick = function toggle(e) {
    _toggleTreeView(options, e);
  };
  // replace existing tree view with filtered tree view
  _addTreeToDom(table, divId, tableDivId);
}

function init(options) {
  // create in-memory fragment to store tree DOM elements - limits DOM to one repaint
  const frag = document.createDocumentFragment();
  // add tree container element
  const tree = _createTreeView(options, frag);
  // display to user
  _displayTree(tree, options.tree.div, options.search.div, options);
}

/* =========================== Export Public APIs =========================== */

export default {
  init,
  searchTable
};

var treeator =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * npm Entry File
 * (c) 2020 Joshua Adams
 */

/**
 * index.js is the default 'entry file' for npm.
 * This means that any require('package name') or import 'package name'
 * statements will refer to this file.
 */
var pkg = __webpack_require__(1); // export a file with the same name as the package by default


module.exports = __webpack_require__(2)("./".concat(pkg.name, ".js"));

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"treeator\",\"version\":\"1.4.3\",\"description\":\"A JavaScript component to create views of tree data structures\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Joshua-W-Adams/treeator.git\"},\"author\":\"Joshua Adams\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/Joshua-W-Adams/treeator/issues\"},\"homepage\":\"https://github.com/Joshua-W-Adams/treeator#readme\",\"devDependencies\":{\"@babel/core\":\"^7.8.4\",\"@babel/preset-env\":\"^7.8.4\",\"babel-loader\":\"^8.0.6\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-plugin-import\":\"^2.20.0\",\"express\":\"^4.17.1\",\"gulp\":\"^4.0.2\",\"gulp-concat\":\"^2.6.1\",\"gulp-eslint\":\"^6.0.0\",\"gulp-minify-css\":\"^1.2.4\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^4.0.2\",\"gulp-stylelint\":\"^13.0.0\",\"inputator\":\"^1.0.1\",\"stylelint\":\"^13.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"webpack-stream\":\"^5.2.1\"},\"dependencies\":{\"gulp-nodemon\":\"^2.5.0\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./treeator.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Treeator
 * JavaScript component for generating views of tree data structures
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// N/A

/* ================================ Variables =============================== */
// variable to store tree fragment to enable searching operations with
// minimised repaints and reflows
var inMemTree; // stores the current tree element display so that its state can be tracked

var currentTree; // store globalOptions for use in calls to treeator after initial construction

var globalOptions; // track user interaction with tree

var onHoverRow = {
  style: {}
};
var singleClickedRow = {
  style: {}
};
var dblClickedRow = {
  style: {}
};
/* ============================= Private Methods ============================ */

function _handleUndefined(value, returnValue) {
  if (typeof value === 'undefined') {
    return returnValue;
  }

  return value;
}

function _toTitleCase(str) {
  return str.replace(/\w\S*/g, function tc(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function _addElement(parent, type) {
  var element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _deleteElement(id) {
  var e = document.getElementById(id);

  if (e) {
    e.parentNode.removeChild(e);
  }
}

function onHoverDefault(tr) {
  if (onHoverRow !== tr) {
    // clear current styling
    if (onHoverRow !== singleClickedRow) {
      onHoverRow.style.backgroundColor = '';
    } // set new row


    onHoverRow = tr;

    if (tr !== singleClickedRow) {
      // set default styling
      tr.style.backgroundColor = 'rgba(206,230,253,1)';
    }
  }
}

function onClickDefault(tr) {
  if (singleClickedRow !== tr) {
    // clear current styling
    singleClickedRow.style.backgroundColor = ''; // set new row

    singleClickedRow = tr; // set default styling

    tr.style.backgroundColor = 'rgba(28,144,243,1)';
  }
}

function onDblClickDefault(tr) {
  if (dblClickedRow !== tr) {
    // set new row
    dblClickedRow = tr;
  }
}

function _containerRenderer() {
  var container = {};
  container.className = 'treeator-tree';
  container.style = {
    'font-family': 'roboto',
    margin: '0px',
    fontFamily: 'roboto',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '13px',
    overflow: 'scroll'
  };
  return container;
}

function _rowRenderer() {
  var row = {};
  row.className = '';
  row.style = {
    wordBreak: 'break-all',
    'font-size': '14px'
  };
  return row;
}

function _cellRenderer() {
  var cell = {};
  cell.className = '';
  cell.style = {
    padding: '5px'
  };
  return cell;
}

function _applyRender(element, properties) {
  var arr = Object.keys(properties);

  for (var i = 0; i < arr.length; i++) {
    var prop = arr[i];

    if (_typeof(properties[prop]) === 'object' && properties[prop] !== null) {
      Object.assign(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }

  return element;
}

function _addHighlight(tdElement, filter) {
  var t = tdElement.innerText || tdElement.textContent; // flags... ig
  // i = case insensitive
  // g = global. Search for ALL matches in string

  var outerHtml = ''; // case 1 - one child element to persist (chevron)

  if (tdElement.firstChild && tdElement.firstChild.outerHTML) {
    // persist html
    outerHtml = tdElement.firstChild.outerHTML; // remove child text

    t = t.replace(tdElement.firstChild.innerText, ''); // case 2 - two child elements to persist

    if (tdElement.childNodes[1] && tdElement.childNodes[1].outerHTML) {
      // persist html
      outerHtml = outerHtml + tdElement.childNodes[1].outerHTML; // remove child text

      t = t.replace(tdElement.childNodes[1].innerText, '');
    }
  } // case 1 - filter passed


  if (filter !== '') {
    tdElement.innerHTML = outerHtml + t.replace(new RegExp("(".concat(filter, ")"), 'ig'), '<span style="background-color: yellow;">$1</span>'); // case 2 - empty filter therefore remove highlight
  } else {
    tdElement.innerHTML = outerHtml + t;
  }
}

function _getParentsToDisplay(parents, depth, previousDepth, tr) {
  // add level to array
  if (!parents[depth]) {
    parents[depth] = [];
  } // case 1 - minimum depth reached - reset parents array


  if (depth === 0) {
    parents = [];
    parents[0] = [];
    parents[0].push(tr); // case 2 - depth remains the same
  } else if (depth === previousDepth) {
    // reset current depth level
    parents[depth] = [];
    parents[depth].push(tr); // case 3 - depth increased
  } else if (depth > previousDepth) {
    parents[depth].push(tr); // case 4 - depth decreased
  } else {
    // clear current depth and lower depths
    for (var i = depth; i < parents.length; i++) {
      parents[i] = [];
    }

    parents[depth].push(tr);
  }

  return parents;
}

function _displayParents(parents) {
  if (parents) {
    for (var x = 0; x < parents.length; x++) {
      var depthParents = parents[x];

      if (depthParents) {
        for (var y = 0; y < depthParents.length; y++) {
          depthParents[y].style.display = '';
        }
      }
    }
  }
} // get all sibling elements until an element with a particular selector is
// encountered. In this case data-depth = current value.
// elem = element to start search with
// selector = css selector pattern to stop at. e.g. class, div, attribute etc.


function _nextUntil(elem, selector, filter, callback) {
  // matches() polyfill
  // normalise behaviour of matches function in older browsers
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  } // Setup siblings array


  var siblings = []; // Get the next sibling element. Sibling immediately after starting element.

  elem = elem.nextElementSibling; // Loop through all sibling elements until no sibling is encountered

  while (elem) {
    // If we've reached our match, bail
    if (elem.matches(selector)) break; // If filtering by a selector, check if the sibling matches

    if (filter && !elem.matches(filter)) {
      // move to next element
      elem = elem.nextElementSibling; // restart loop

      continue;
    } // custom callback selector


    if (callback && !callback(elem)) {
      break;
    } // Otherwise, push it to the siblings array


    siblings.push(elem); // Get the next sibling element

    elem = elem.nextElementSibling;
  }

  return siblings;
}

function _getChildren(parent, depth) {
  return _nextUntil(parent, null, null, function cb(sibling) {
    // get sibling attribute
    var siblingDepth = sibling.getAttribute('data-depth'); // confirm within allowable depth

    if (depth < siblingDepth) {
      return true;
    }

    return false;
  });
}

function _getParentIndex(elementPosition, data, depth) {
  // loop upwards (backwards) through table array
  // need to start at element position - 1 as element position is
  // the position that the new element is to be inserted into
  for (var i = elementPosition - 1; i > -1; i--) {
    var row = data[i];
    var rowDepth = void 0; // handle case where user attempts to insert row at end of table

    if (row) {
      rowDepth = row.DATA_DEPTH;
    } // parent encountered


    if (rowDepth < depth) {
      return i;
    }
  }
}

function _hide(ele) {
  ele.style.display = 'none';
}

function _show(ele) {
  ele.style.display = '';
}

function _toggleTreeView(options, tableElement) {
  var cnf = {
    collapseIcon: options.tree.rows.collapseIcon || '▾',
    expandIcon: options.tree.rows.expandIcon || '▸'
  }; // get currently clicked element in table

  var target = tableElement.target; // eslint-disable-line prefer-destructuring
  // get parent table row

  var parent = target.parentNode.parentNode; // get data depth value

  var depth = parent.getAttribute('data-depth'); // only attempt to filter elements if a data depth is detected

  if (depth && depth >= 0) {
    // get all siblings until the next sibling with the same depth is
    // reached
    var children = _getChildren(parent, depth); // Remove already collapsed nodes from children so that we don't
    // make them visible.
    // (Confused? Remove this code and close Item 2, close Item 1
    // then open Item 1 again, then you will understand)
    // get all children with expand


    var expandnodes = children.filter(function cb(item) {
      return item.classList.contains('treeator-tree--expand');
    });
    var childrenCopy = children; // loop through all collapsed rows

    expandnodes.map(function cb(subnode) {
      // eslint-disable-line array-callback-return
      // get all children of expand items
      var subnodeDepth = subnode.getAttribute('data-depth');

      var subnodeChildren = _getChildren(subnode, subnodeDepth); // remove expand items from display list


      childrenCopy = childrenCopy.filter(function cb(child) {
        for (var i = 0; i < subnodeChildren.length; i++) {
          if (subnodeChildren[i] === child) {
            return false;
          }
        }

        return true;
      });
    }); // Change icon and hide/show children

    if (target.innerHTML === cnf.collapseIcon) {
      parent.classList.remove('treeator-tree--collapse');
      parent.classList.add('treeator-tree--expand');
      target.innerHTML = cnf.expandIcon; // hide all children

      children.map(function cb(e) {
        return _hide(e);
      });
    } else if (target.innerHTML === cnf.expandIcon) {
      // prevents adding chevrons to rows with no children
      parent.classList.remove('treeator-tree--expand');
      parent.classList.add('treeator-tree--collapse');
      target.innerHTML = cnf.collapseIcon; // show on specific children

      childrenCopy.map(function cb(e) {
        return _show(e);
      });
    }
  }
}

function _addTreeToDom(treeElement, divId, tableDivId) {
  // remove old tree
  var oldTree = document.getElementById(tableDivId);

  if (oldTree) {
    oldTree.parentNode.removeChild(oldTree);
  } // add new filtered tree


  var parent = document.getElementById(divId);
  parent.appendChild(treeElement); // set currentTree in state

  currentTree = treeElement;
}

function _displayTree(treeRoot, divId, searchDivId, options) {
  var div = document.getElementById(divId);
  var input = document.getElementById(searchDivId); // add filtered tree if applicable

  if (input && input.value) {
    searchTable(searchDivId, 'treeator-tree', divId, options); // eslint-disable-line no-use-before-define
  } else {
    // add tree to DOM
    div.appendChild(treeRoot);
  }
}

function _addHeaders(options, treeRoot) {
  var columnNames = options.tree.columns.sourceNames;
  var newColumnNames = options.tree.columns.newNames;
  var widths = options.tree.columns.widths;
  var display = options.tree.columns.displayNames || false; // add tree view header

  var treeHeader = _addElement(treeRoot, 'thead'); // add headers to header element


  for (var i = 0; i < columnNames.length; i++) {
    // add header
    var th = _addElement(treeHeader, 'th'); // calculate values


    var header = _toTitleCase(newColumnNames[i]);

    var width = void 0;

    if (widths) {
      width = "".concat(widths[i], "px");
    } // apply header styles


    th.width = width; // apply header values

    if (display) {
      th.innerHTML = header;
    }
  }
}

function _fileSystemIconLookup() {
  return {
    file: '&#128459;',
    folder: '&#128447;'
  };
}

function _iconLookup(rowTypeIcons) {
  var lookup = {};

  if (rowTypeIcons === 'filesystem') {
    lookup = _fileSystemIconLookup();
  }

  return lookup;
}

function _addRowIcons(row, tableCell, rowTypeIcons) {
  var icon = _addElement(tableCell, 'span');

  var lookup = _iconLookup(rowTypeIcons);

  icon.innerHTML = lookup[row.ICON_TYPE] || '';
  icon.style.padding = '0px 5px 0px 5px';
  icon.style.color = 'rgba(95,99,104,1)';
}

function _addCells(options, row, columns, tableRow, expand) {
  var cnf = {
    expandIcon: options.tree.rows.expandIcon || '▸',
    rowTypeIcons: options.tree.rows.rowTypeIcons || '',
    renderer: options.tree.cells.renderer || _cellRenderer
  };

  for (var n = 0; n < columns.length; n++) {
    var tableCell = _addElement(tableRow, 'td'); // add indent or chevron into cell


    if (n === 0) {
      var tableCellSpan = _addElement(tableCell, 'span');

      tableCellSpan.style.height = '18px';
      tableCellSpan.style.width = '18px';
      tableCellSpan.style.display = 'inline-block';

      if (expand === 'treeator-tree--expand') {
        tableCellSpan.style.cursor = 'pointer';
        tableCellSpan.style.textAlign = 'center';
        tableCellSpan.innerHTML = cnf.expandIcon;
      } // set tablecell indent


      tableCellSpan.style.paddingLeft = "".concat(row.DATA_DEPTH * 15, "px"); // add row type icons

      _addRowIcons(row, tableCell, cnf.rowTypeIcons); // add toggle function to tree elements


      tableCell.onclick = function cb(e) {
        _toggleTreeView(options, e);
      };
    } // determine cell alignments


    var alignments = options.tree.columns.alignment;

    var cellValue = _handleUndefined(row[columns[n]], ''); // add cell content


    tableCell.innerHTML = tableCell.innerHTML + cellValue;
    tableCell.style.textAlign = alignments[n];
    tableCell.style.whiteSpace = 'nowrap';
    tableCell.style.overflow = 'hidden'; // apply cell renderer

    var render = cnf.renderer();

    _applyRender(tableCell, render);
  }
}

function _addRowEvents(tr, row, pos, options) {
  var cnf = {
    onClick: options.tree.rows.onClick || onClickDefault,
    onDblClick: options.tree.rows.onDblClick || onDblClickDefault,
    onHover: options.tree.rows.onHover || onHoverDefault,
    onHoverOut: options.tree.rows.onHoverOut || function cb() {}
  };

  tr.onclick = function onclick() {
    return cnf.onClick(tr, row, pos);
  };

  tr.ondblclick = function ondblclick() {
    return cnf.onDblClick(tr, row, pos);
  };

  tr.onmouseover = function onmouseover() {
    return cnf.onHover(tr, row, pos);
  };

  tr.onmouseout = function onmouseout() {
    return cnf.onHoverOut(tr, row, pos);
  };
}

function _insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function _addRow(options, tree, row, i, data) {
  var cnf = {
    renderer: options.tree.rows.renderer || _rowRenderer
  };
  var expand = '';
  var display = 'none';
  var colourCode = ''; // confirm if row element has children

  if (i < data.length - 1) {
    if (row.DATA_DEPTH < data[i + 1].DATA_DEPTH) {
      expand = 'treeator-tree--expand';
    }
  } // confirm if row should be displayed
  // case 1 - initial construction of tree view


  if (row.DATA_DEPTH === 0) {
    display = ''; // case 2 - tree already constructed - check parent display status
  } else if (currentTree && i !== 0) {
    // get parent of current element
    var parentRowIndex = _getParentIndex(i, data, row.DATA_DEPTH); // check display status of parent


    if (tree.rows[parentRowIndex].className !== 'treeator-tree--expand') {
      display = '';
    }
  } // confirm if row should be coloured


  if (row.COLOUR_CODE) {
    colourCode = "rgba(".concat(row.COLOUR_CODE, ")");
  } // create table row


  var tableRow = document.createElement('tr'); // apply styling to row

  tableRow.setAttribute('data-depth', row.DATA_DEPTH);
  tableRow.style.display = display;
  tableRow.style.backgroundColor = colourCode;
  var render = cnf.renderer();

  _applyRender(tableRow, render); // must occur after the renderer to prevent the class name being overwritten


  tableRow.className = expand; // apply row functionality

  _addRowEvents(tableRow, row, i, options); // add cells to row


  _addCells(options, row, options.tree.columns.sourceNames, tableRow, expand); // append table row to tree body


  var rows = tree.rows;
  var treeBody = tree.tBodies[0]; // get row at desired insert position

  var insertRow = rows.item(i - 1); // case 1 - new table being constructed

  if (!insertRow) {
    // prepend puts element at first position in children array
    treeBody.prepend(tableRow); // case 2 - table already exists
  } else {
    // insert new row at specified location
    _insertAfter(tableRow, insertRow); // insertRow.parentNode.insertAfter(tableRow, insertRow);

  }
}

function _addRows(options, tree) {
  var data = options.tree.data; // add rows to table

  for (var i = 0; i < data.length; i++) {
    var row = data[i];

    _addRow(options, tree, row, i, data);
  }
}
/**
 * createTreeView - generate a view of a tree datastructure based on config
 * options passed
 */


function _createTreeView(options, frag) {
  // delete dynamic tree element if it already exists
  _deleteElement('treeator-tree'); // create new dynamic tree element
  // cellspacing 0 to support IE6 and IE7 - Removes unwanted whitespace between
  // table cells


  var treeRoot = _addElement(frag, 'table');

  treeRoot.id = 'treeator-tree';
  treeRoot.cellSpacing = '0';
  treeRoot.style.tableLayout = 'fixed'; // add headers to tree

  _addHeaders(options, treeRoot); // add table body


  _addElement(treeRoot, 'tbody'); // add table rows


  _addRows(options, treeRoot); // copy tree root to global variable


  inMemTree = treeRoot.cloneNode(true); // apply styling to tree view container

  var cnf = {
    renderer: options.tree.renderer || _containerRenderer
  };
  var container = document.getElementById(options.tree.div);
  var render = cnf.renderer();

  _applyRender(container, render);

  return treeRoot;
}
/* ============================== Public Methods ============================ */


function searchTable(searchDivId, tableDivId, divId, options) {
  // Declare variables
  var input = document.getElementById(searchDivId);
  var filter = input.value.toUpperCase(); // create copy of tree to filter and reload into dom

  var table = inMemTree.cloneNode(true);
  var tr = table.getElementsByTagName('tr');
  var parents = [];
  var previousDepth = -1; // Only search through table if a input value is provided

  if (filter) {
    // Loop through all table rows, and hide those who don't match the search query
    for (var i = 0; i < tr.length; i++) {
      // track parent elements of current row
      var depth = tr[i].getAttribute('data-depth');
      parents = _getParentsToDisplay(parents, depth, previousDepth, tr[i]); // get all table cells

      var td = tr[i].getElementsByTagName('td'); // loop through all table cells

      var found = false;

      for (var n = 0; n < td.length; n++) {
        var text = td[n].innerText || td[n].textContent;

        if (text.toUpperCase().indexOf(filter) > -1) {
          found = true;

          _addHighlight(td[n], filter);
        }
      } // set display of table row


      if (found) {
        tr[i].style.display = ''; // fix chevron status to allow drilling down

        tr[i].classList.remove('treeator-tree--collapse');
        tr[i].classList.add('treeator-tree--expand'); // display parent elements

        _displayParents(parents);
      } else {
        tr[i].style.display = 'none';
      } // re-add double click to newly cloned tree


      _addRowEvents(tr[i], options.tree.data[i], i, options);

      previousDepth = depth;
    }
  } else {
    // No input value therefore dont attempt to filter
    // add row events and objects to table
    for (var _i = 0; _i < tr.length; _i++) {
      _addRowEvents(tr[_i], options.tree.data[_i], _i, options);
    }
  } // add toggle function to tree elements


  table.onclick = function toggle(e) {
    _toggleTreeView(options, e);
  }; // replace existing tree view with filtered tree view


  _addTreeToDom(table, divId, tableDivId);
}

function _addRowToDataModel(data, row) {
  var position = row.position;
  var rowData = row.data;
  data.splice(position, 0, rowData);
}

function _getChildrenLength(data, index) {
  var childCount = 0;
  var indexDepth = data[index].DATA_DEPTH; // loop through data from from index child to end of data set

  for (var i = index + 1; i < data.length; i++) {
    var rowDepth = data[i].DATA_DEPTH; // confirm if row is a child

    if (rowDepth > indexDepth) {
      childCount++;
    } else {
      // exit for loop
      break;
    }
  }

  return childCount;
}

function _removeRowFromDataModel(data, row) {
  var position = row.position;

  var length = _getChildrenLength(data, position);

  data.splice(position, length + 1);
}

function _removeRow(tableElement, data, row) {
  var position = row.position;

  var length = _getChildrenLength(data, position); // remove elements and children from dom


  for (var i = 0; i < length + 1; i++) {
    // need to delete from bottom to top to ensure refrernce remain correct
    tableElement.deleteRow(position + length - i);
  }
} // records = [{
//   position: position in tree to insert
//   data: row of data to insert at position
// }]


function appendTreeRecords(records) {
  // loop through all records
  for (var i = 0; i < records.length; i++) {
    var record = records[i]; // append elements to in memory dom

    _addRow(globalOptions, inMemTree, record.data, record.position, globalOptions.tree.data); // append elements to displayed dom


    _addRow(globalOptions, currentTree, record.data, record.position, globalOptions.tree.data); // append records to in memory dom model


    _addRowToDataModel(globalOptions.tree.data, record);
  }
} // records are expected in top to bottom order
// records = [{
//   position: position in tree to remove
// }]


function removeTreeRecords(records) {
  // loop through all records
  for (var i = records.length - 1; i > -1; i--) {
    var record = records[i]; // remove elements from in memory dom

    _removeRow(inMemTree, globalOptions.tree.data, record); // remove elements from displayed dom


    _removeRow(currentTree, globalOptions.tree.data, record); // remove records from in memory dom model


    _removeRowFromDataModel(globalOptions.tree.data, record);
  }
}

function _updateChildrenProperties(data, index, childUpdates) {
  var indexDepth = data[index].DATA_DEPTH;
  var start = parseInt(index); // loop through data from from index child to end of data set

  for (var i = start + 1; i < data.length; i++) {
    var row = data[i];
    var rowDepth = row.DATA_DEPTH; // confirm if row is a child

    if (rowDepth > indexDepth) {
      // loop through all updates for each child
      for (var n = 0; n < childUpdates.length; n++) {
        // get current update
        var update = childUpdates[n];
        var property = update.property;
        var findStartsWithString = update.findStartsWithString;
        var replaceString = update.replaceString;

        if (row[property].startsWith(findStartsWithString)) {
          // update directory
          row[property] = row[property].replace(findStartsWithString, replaceString);
        }
      }
    } else {
      // exit for loop
      break;
    }
  }
}

function _updateRowToDataModel(data, row) {
  var rowUpdates = row.updates;
  var position = row.position;
  var childUpdates = row.childUpdates; // update record in tree

  if (rowUpdates) {
    for (var i = 0; i < rowUpdates.length; i++) {
      var property = rowUpdates[i].property;
      var value = rowUpdates[i].value;
      data[position][property] = value;
    }
  } // update record children in tree


  if (childUpdates) {
    _updateChildrenProperties(data, position, childUpdates);
  }
}

function _setRowDefaultDisplay(check, tr, position) {
  if (check === true) {
    var data = globalOptions.tree.data[position];

    if (data.DATA_DEPTH !== 0) {
      tr.style.display = 'none';
    }
  }
}

function _updateRow(tableElement, row, check) {
  var updates = row.htmlUpdates;

  if (updates) {
    var position = row.position;
    var tr = tableElement.rows[position]; // update default display status of row

    _setRowDefaultDisplay(check, tr, position);

    for (var i = 0; i < updates.length; i++) {
      var update = updates[i];
      var column = update.column;
      var value = update.value;
      var childNodes = tr.cells[column].childNodes; // last node always contains text value

      var lastNode = childNodes[childNodes.length - 1];
      lastNode.data = value;
    }
  }
} // records = [{
//   position: position of item to update,
//   updates: [{property: "propertyName", value: "value"}, ...],
//   childUpdates: [{property: "FILE_PATH", findStartsWithString: "old_dir",
//                 replaceString: "new_dir"}],
//   htmlUpdates: [{property: "propertyName", value: "value"}, ...]
// }]


function updateTreeRecords(records) {
  // loop through all records
  for (var i = 0; i < records.length; i++) {
    var record = records[i]; // append elements to in memory dom

    _updateRow(inMemTree, record, true); // append elements to displayed dom


    _updateRow(currentTree, record, false); // append records to in memory dom model


    _updateRowToDataModel(globalOptions.tree.data, record);
  }
}

function findLastChild(parentPos, data) {
  if (!data) {
    data = globalOptions.tree.data;
  }

  var parent = data[parentPos];
  var parentDepth = parent.DATA_DEPTH;
  var startPos = parentPos + 1;
  var childCount = 0;

  for (var i = startPos; i < data.length; i++) {
    var row = data[i];
    var rowDepth = row.DATA_DEPTH;

    if (parentDepth < rowDepth) {
      // case 1 - child record
      childCount++;
    } else if (rowDepth <= parentDepth) {
      // case 2 - sibling or parent encountered - end of children
      if (childCount !== 0) {
        return i - 1;
      } else {
        // handle case that parent has no children
        return null;
      }
    }
  } // case 3 - end of dataset


  return data.length - 1;
}

function getChildren(parentPos, data) {
  if (!data) {
    data = globalOptions.tree.data;
  }

  var parent = data[parentPos];
  var parentDepth = parent.DATA_DEPTH;
  var children = [];

  for (var i = parentPos + 1; i < data.length; i++) {
    var row = data[i];
    var rowDepth = row.DATA_DEPTH; // case 1 - child found

    if (rowDepth === parentDepth + 1) {
      children.push(data[i]); // case 2 - no more children to be found
    } else if (rowDepth <= parentDepth) {
      break;
    }
  }

  return children;
}

function init(options) {
  // create in-memory fragment to store tree DOM elements - limits DOM to one repaint
  var frag = document.createDocumentFragment(); // add tree container element

  var tree = _createTreeView(options, frag); // save tree to memory


  currentTree = tree; // save options to memory

  globalOptions = options; // display to user

  _displayTree(tree, options.tree.div, options.search.div, options);
}
/* =========================== Export Public APIs =========================== */


module.exports = {
  init: init,
  searchTable: searchTable,
  appendTreeRecords: appendTreeRecords,
  onHoverDefault: onHoverDefault,
  onClickDefault: onClickDefault,
  onDblClickDefault: onDblClickDefault,
  removeTreeRecords: removeTreeRecords,
  updateTreeRecords: updateTreeRecords,
  findLastChild: findLastChild,
  getChildren: getChildren
};

/***/ })
/******/ ]);
//# sourceMappingURL=treeator.js.map
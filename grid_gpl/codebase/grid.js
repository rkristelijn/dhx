/*
@license

dhtmlxGrid v.6.0.3 GPL

This software is covered by GPL license.
To use it in non-GPL project, you need obtain Commercial or Enterprise license
Please contact sales@dhtmlx.com. Usage without proper license is prohibited.
(c) Dinamenta, UAB.

*/
if (window.dhx){ window.dhx_legacy = dhx; delete window.dhx; }(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dhx"] = factory();
	else
		root["dhx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom = __webpack_require__(26);
exports.el = dom.defineElement;
exports.sv = dom.defineSvgElement;
exports.view = dom.defineView;
exports.create = dom.createView;
exports.inject = dom.injectView;
function disableHelp() {
    dom.DEVMODE.mutations = false;
    dom.DEVMODE.warnings = false;
    dom.DEVMODE.verbose = false;
    dom.DEVMODE.UNKEYED_INPUT = false;
}
exports.disableHelp = disableHelp;
function resizer(handler) {
    var resize = window.ResizeObserver;
    var activeHandler = function (node) {
        var height = node.el.offsetHeight;
        var width = node.el.offsetWidth;
        handler(width, height);
    };
    if (resize) {
        return exports.el("div.dhx-resize-observer", {
            _hooks: {
                didInsert: function (node) {
                    new resize(function () { return activeHandler(node); }).observe(node.el);
                }
            }
        });
    }
    return exports.el("iframe.dhx-resize-observer", {
        _hooks: {
            didInsert: function (node) {
                node.el.contentWindow.onresize = function () { return activeHandler(node); };
                activeHandler(node);
            }
        }
    });
}
exports.resizer = resizer;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(2);
var counter = (new Date()).valueOf();
function uid() {
    return "u" + (counter++);
}
exports.uid = uid;
function extend(target, source, deep) {
    if (deep === void 0) { deep = true; }
    if (source) {
        for (var key in source) {
            var sobj = source[key];
            var tobj = target[key];
            if (deep && typeof tobj === "object" && !(tobj instanceof Date) && !(tobj instanceof Array)) {
                extend(tobj, sobj);
            }
            else {
                target[key] = sobj;
            }
        }
    }
    return target;
}
exports.extend = extend;
function copy(source, withoutInner) {
    var result = {};
    for (var key in source) {
        if (!withoutInner || key[0] !== "$") {
            result[key] = source[key];
        }
    }
    return result;
}
exports.copy = copy;
function naturalSort(arr) {
    return arr.sort(function (a, b) {
        var nn = typeof a === "string" ? a.localeCompare(b) : a - b;
        return nn;
    });
}
exports.naturalSort = naturalSort;
function findIndex(arr, predicate) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function isEqualString(from, to) {
    if (from.length > to.length) {
        return false;
    }
    for (var i = 0; i < from.length; i++) {
        if (from[i].toLowerCase() !== to[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
exports.isEqualString = isEqualString;
function singleOuterClick(fn) {
    var click = function (e) {
        if (fn(e)) {
            document.removeEventListener("click", click);
        }
    };
    document.addEventListener("click", click);
}
exports.singleOuterClick = singleOuterClick;
function detectWidgetClick(widgetId, cb) {
    var click = function (e) { return cb(html_1.locate(e, "dhx_widget_id") === widgetId); };
    document.addEventListener("click", click);
    return function () { return document.removeEventListener("click", click); };
}
exports.detectWidgetClick = detectWidgetClick;
function unwrapBox(box) {
    if (Array.isArray(box)) {
        return box[0];
    }
    return box;
}
exports.unwrapBox = unwrapBox;
function wrapBox(unboxed) {
    if (Array.isArray(unboxed)) {
        return unboxed;
    }
    return [unboxed];
}
exports.wrapBox = wrapBox;
function isDefined(some) {
    return some !== null && some !== undefined;
}
exports.isDefined = isDefined;
function range(from, to) {
    if (from > to) {
        return [];
    }
    var result = [];
    while (from <= to) {
        result.push(from++);
    }
    return result;
}
exports.range = range;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(23);
function toNode(node) {
    if (typeof node === "string") {
        node = (document.getElementById(node) || document.querySelector(node));
    }
    return node || document.body;
}
exports.toNode = toNode;
function eventHandler(prepare, hash) {
    var keys = Object.keys(hash);
    return function (ev) {
        var data = prepare(ev);
        var node = ev.target;
        while (node) {
            var cssstring = node.getAttribute ? (node.getAttribute("class") || "") : "";
            if (cssstring.length) {
                var css = cssstring.split(" ");
                for (var j = 0; j < keys.length; j++) {
                    if (css.indexOf(keys[j]) > -1) {
                        return hash[keys[j]](ev, data);
                    }
                }
            }
            node = node.parentNode;
        }
        return true;
    };
}
exports.eventHandler = eventHandler;
function locate(target, attr) {
    if (attr === void 0) { attr = "dhx_id"; }
    var node = locateNode(target, attr);
    return node ? node.getAttribute(attr) : "";
}
exports.locate = locate;
function locateNode(target, attr) {
    if (attr === void 0) { attr = "dhx_id"; }
    if (target instanceof Event) {
        target = target.target;
    }
    while (target) {
        if (target.getAttribute && target.getAttribute(attr)) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNode = locateNode;
function getBox(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var scrollLeft = window.pageXOffset || body.scrollLeft;
    var top = box.top + scrollTop;
    var left = box.left + scrollLeft;
    var right = body.offsetWidth - box.right;
    var bottom = body.offsetHeight - box.bottom;
    var width = box.right - box.left;
    var height = box.bottom - box.top;
    return { top: top, left: left, right: right, bottom: bottom, width: width, height: height };
}
exports.getBox = getBox;
var scrollWidth = -1;
function getScrollbarWidth() {
    if (scrollWidth > -1) {
        return scrollWidth;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
function fitPosition(node, config) {
    return calculatePosition(getRealPosition(node), config);
}
exports.fitPosition = fitPosition;
function isIE() {
    var ua = window.navigator.userAgent;
    return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
}
exports.isIE = isIE;
function getRealPosition(node) {
    var rects = node.getBoundingClientRect();
    return {
        left: rects.left + window.pageXOffset,
        right: rects.right + window.pageXOffset,
        top: rects.top + window.pageYOffset,
        bottom: rects.bottom + window.pageYOffset
    };
}
exports.getRealPosition = getRealPosition;
var Position;
(function (Position) {
    Position["left"] = "left";
    Position["right"] = "right";
    Position["bottom"] = "bottom";
    Position["top"] = "top";
})(Position = exports.Position || (exports.Position = {}));
function calculatePosition(pos, config) {
    var _a = config.mode === Position.bottom || config.mode === Position.top
        ? placeBottomOrTop(pos, config)
        : placeRightOrLeft(pos, config), left = _a.left, top = _a.top;
    return {
        left: Math.round(left) + "px",
        top: Math.round(top) + "px",
        minWidth: Math.round(config.width) + "px",
        position: "absolute"
    };
}
exports.calculatePosition = calculatePosition;
function getWindowBorders() {
    return {
        rightBorder: window.pageXOffset + window.innerWidth,
        bottomBorder: window.pageYOffset + window.innerHeight
    };
}
function horizontalCentering(pos, width, rightBorder) {
    var nodeWidth = pos.right - pos.left;
    var diff = (width - nodeWidth) / 2;
    var left = pos.left - diff;
    var right = pos.right + diff;
    if (left >= 0 && right <= rightBorder) {
        return left;
    }
    if (left < 0) {
        return 0;
    }
    return rightBorder - width;
}
function verticalCentering(pos, height, bottomBorder) {
    var nodeHeight = pos.bottom - pos.top;
    var diff = (height - nodeHeight) / 2;
    var top = pos.top - diff;
    var bottom = pos.bottom + diff;
    if (top >= 0 && bottom <= bottomBorder) {
        return top;
    }
    if (top < 0) {
        return 0;
    }
    return bottomBorder - height;
}
function placeBottomOrTop(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var bottomDiff = bottomBorder - pos.bottom - config.height;
    var topDiff = pos.top - config.height;
    if (config.mode === Position.bottom) {
        if (bottomDiff >= 0) {
            top = pos.bottom;
        }
        else if (topDiff >= 0) {
            top = topDiff;
        }
    }
    else {
        if (topDiff >= 0) {
            top = topDiff;
        }
        else if (bottomDiff >= 0) {
            top = pos.bottom;
        }
    }
    if (bottomDiff < 0 && topDiff < 0) {
        if (config.auto) {
            return placeRightOrLeft(pos, __assign({}, config, { mode: Position.right, auto: false }));
        }
        top = bottomDiff > topDiff ? pos.bottom : topDiff;
    }
    if (config.centering) {
        left = horizontalCentering(pos, config.width, rightBorder);
    }
    else {
        var leftDiff = rightBorder - pos.left - config.width;
        var rightDiff = pos.right - config.width;
        if (leftDiff >= 0) {
            left = pos.left;
        }
        else if (rightDiff >= 0) {
            left = rightDiff;
        }
        else {
            left = rightDiff > leftDiff ? pos.left : rightDiff;
        }
    }
    return { left: left, top: top };
}
function placeRightOrLeft(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var rightDiff = rightBorder - pos.right - config.width;
    var leftDiff = pos.left - config.width;
    if (config.mode === Position.right) {
        if (rightDiff >= 0) {
            left = pos.right;
        }
        else if (leftDiff >= 0) {
            left = leftDiff;
        }
    }
    else {
        if (leftDiff >= 0) {
            left = leftDiff;
        }
        else if (rightDiff >= 0) {
            left = pos.right;
        }
    }
    if (leftDiff < 0 && rightDiff < 0) {
        if (config.auto) {
            return placeBottomOrTop(pos, __assign({}, config, { mode: Position.bottom, auto: false }));
        }
        left = leftDiff > rightDiff ? leftDiff : pos.right;
    }
    if (config.centering) {
        top = verticalCentering(pos, config.height, rightBorder);
    }
    else {
        var bottomDiff = pos.bottom - config.height;
        var topDiff = bottomBorder - pos.top - config.height;
        if (topDiff >= 0) {
            top = pos.top;
        }
        else if (bottomDiff > 0) {
            top = bottomDiff;
        }
        else {
            top = bottomDiff > topDiff ? bottomDiff : pos.top;
        }
    }
    return { left: left, top: top };
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataproxy_1 = __webpack_require__(7);
var drivers_1 = __webpack_require__(13);
function isEqualObj(a, b) {
    for (var key in a) {
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
exports.isEqualObj = isEqualObj;
function naturalCompare(a, b) {
    var ax = [];
    var bx = [];
    a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]); });
    b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]); });
    while (ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if (nn) {
            return nn;
        }
    }
    return ax.length - bx.length;
}
exports.naturalCompare = naturalCompare;
function findByConf(item, conf) {
    if (typeof conf === "function") {
        if (conf.call(this, item)) {
            return item;
        }
    }
    else if (conf.by && conf.match) {
        if (item[conf.by] === conf.match) {
            return item;
        }
    }
}
exports.findByConf = findByConf;
function isDebug() {
    var dhx = window.dhx;
    if (typeof dhx !== "undefined") {
        return typeof (dhx.debug) !== "undefined" && dhx.debug;
    }
    // return typeof DHX_DEBUG_MODE !== "undefined" && DHX_DEBUG_MODE;
}
exports.isDebug = isDebug;
function dhxWarning(msg) {
    // tslint:disable-next-line:no-console
    console.warn(msg);
}
exports.dhxWarning = dhxWarning;
function dhxError(msg) {
    throw new Error(msg);
}
exports.dhxError = dhxError;
function toProxy(proxy) {
    var type = typeof proxy;
    if (type === "string") {
        return new dataproxy_1.DataProxy(proxy);
    }
    else if (type === "object") {
        return proxy;
    }
}
exports.toProxy = toProxy;
function toDataDriver(driver) {
    if (typeof driver === "string") {
        var dhx = window.dhx;
        var drivers = (dhx && dhx.dataDrivers) || drivers_1.dataDrivers;
        if (drivers[driver]) {
            return new drivers[driver]();
        }
        else {
            // tslint:disable-next-line:no-console
            console.warn("Incorrect data driver type:", driver);
            // tslint:disable-next-line:no-console
            console.warn("Available types:", JSON.stringify(Object.keys(drivers)));
        }
    }
    else if (typeof driver === "object") {
        return driver;
    }
}
exports.toDataDriver = toDataDriver;
function copyWithoutInner(obj, forbidden) {
    var result = {};
    for (var key in obj) {
        if (key[0] !== "$" && (!forbidden || !forbidden[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.copyWithoutInner = copyWithoutInner;
function isTreeCollection(obj) {
    return Boolean(obj.getRoot);
}
exports.isTreeCollection = isTreeCollection;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TreeFilterType;
(function (TreeFilterType) {
    TreeFilterType["all"] = "all";
    TreeFilterType["level"] = "level";
    TreeFilterType["leafs"] = "leafs";
})(TreeFilterType = exports.TreeFilterType || (exports.TreeFilterType = {}));
var DropPosition;
(function (DropPosition) {
    DropPosition["top"] = "top";
    DropPosition["bot"] = "bot";
    DropPosition["in"] = "in";
})(DropPosition = exports.DropPosition || (exports.DropPosition = {}));
var DataEvents;
(function (DataEvents) {
    DataEvents["afterAdd"] = "afteradd";
    DataEvents["beforeAdd"] = "beforeadd";
    DataEvents["removeAll"] = "removeall";
    DataEvents["beforeRemove"] = "beforeremove";
    DataEvents["afterRemove"] = "afterremove";
    DataEvents["change"] = "change";
    DataEvents["load"] = "load";
})(DataEvents = exports.DataEvents || (exports.DataEvents = {}));
var DragEvents;
(function (DragEvents) {
    DragEvents["beforeDrag"] = "beforedrag";
    DragEvents["beforeDrop"] = "beforeDrop";
    DragEvents["dragStart"] = "dragstart";
    DragEvents["dragEnd"] = "dragend";
    DragEvents["canDrop"] = "candrop";
    DragEvents["cancelDrop"] = "canceldrop";
    DragEvents["dropComplete"] = "dropcomplete";
    DragEvents["dragOut"] = "dragOut";
    DragEvents["dragIn"] = "dragIn"; // fire on source
})(DragEvents = exports.DragEvents || (exports.DragEvents = {}));
var DragMode;
(function (DragMode) {
    DragMode["target"] = "target";
    DragMode["both"] = "both";
    DragMode["source"] = "source";
})(DragMode = exports.DragMode || (exports.DragMode = {}));
var DropBehaviour;
(function (DropBehaviour) {
    DropBehaviour["child"] = "child";
    DropBehaviour["sibling"] = "sibling";
    DropBehaviour["complex"] = "complex";
})(DropBehaviour = exports.DropBehaviour || (exports.DropBehaviour = {}));
var DataDriver;
(function (DataDriver) {
    DataDriver["json"] = "json";
    DataDriver["csv"] = "csv";
    DataDriver["xml"] = "xml";
})(DataDriver = exports.DataDriver || (exports.DataDriver = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function rgbToHex(color) {
    if (color.substr(0, 1) === "#") {
        return color;
    }
    var digits = /(.*?)rgb[a]?\((\d+), *(\d+), *(\d+),* *([\d]*)\)/.exec(color);
    var red = parseInt(digits[2], 10).toString(16);
    var green = parseInt(digits[3], 10).toString(16);
    var blue = parseInt(digits[4], 10).toString(16);
    return "#" + red + green + blue;
}
exports.rgbToHex = rgbToHex;
function transpose(arr, transform) {
    var columns = [];
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        for (var cellInd = 0; cellInd < row.length; cellInd++) {
            columns[cellInd] = columns[cellInd] || [];
            var cell = transform ? transform(row[cellInd]) : row[cellInd];
            columns[cellInd].push(cell);
        }
    }
    return columns;
}
exports.transpose = transpose;
function getStrWidth(str, font) {
    if (font === void 0) { font = "14px Arial"; }
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = font;
    return Math.round(ctx.measureText(str).width);
}
exports.getStrWidth = getStrWidth;
function insert(node, newone) {
    if (typeof newone === "string") {
        node.insertAdjacentHTML("beforeend", newone);
        return node.lastChild;
    }
    else {
        node.appendChild(newone);
        return newone;
    }
}
function getStyleByClass(cssClass, container, targetClass, def) {
    var cont = container.querySelector("." + targetClass);
    var testDiv = insert(cont, "<div class=\"" + cssClass + "\"></div>");
    var styles = window.getComputedStyle(testDiv);
    var result = {
        color: styles.color === "rgb(0, 0, 0)" ? def.color : rgbToHex(styles.color),
        background: styles.backgroundColor === "rgba(0, 0, 0, 0)" ? def.background : rgbToHex(styles.backgroundColor),
        fontSize: parseFloat(styles.fontSize)
    };
    cont.removeChild(testDiv);
    // [dirty]
    if (result.color === def.color
        && result.background === def.background
        && result.fontSize === def.fontSize) {
        return null;
    }
    return result;
}
exports.getStyleByClass = getStyleByClass;
function removeHTMLTags(str) {
    if (typeof str !== "string" && typeof str !== "number") {
        return "";
    }
    return ("" + ((str === undefined || str === null) ? "" : str)).replace(/<[^>]*>/g, "").replace(/[\"]/g, "&quot;").trim();
}
exports.removeHTMLTags = removeHTMLTags;
function isCssSupport(property, value) {
    try {
        return CSS.supports(property, value);
    }
    catch (err) {
        var el = document.createElement("div");
        el.style[property] = value;
        return el.style[property] === value;
    }
}
exports.isCssSupport = isCssSupport;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridEvents;
(function (GridEvents) {
    GridEvents["scroll"] = "scroll";
    GridEvents["sort"] = "sort";
    GridEvents["expand"] = "expand";
    GridEvents["headerInput"] = "headerInput";
    GridEvents["cellClick"] = "cellClick";
    GridEvents["cellRightClick"] = "cellRightClick";
    GridEvents["cellMouseOver"] = "cellMouseOver";
    GridEvents["cellMouseDown"] = "cellMouseDown";
    GridEvents["cellDblClick"] = "cellDblClick";
    GridEvents["headerCellClick"] = "headerCellClick";
    GridEvents["footerCellClick"] = "footerCellClick";
    GridEvents["headerCellMouseOver"] = "headerCellMouseOver";
    GridEvents["footerCellMouseOver"] = "footerCellMouseOver";
    GridEvents["headerCellMouseDown"] = "headerCellMouseDown";
    GridEvents["footerCellMouseDown"] = "footerCellMouseDown";
    GridEvents["headerCellDblClick"] = "headerCellDblClick";
    GridEvents["footerCellDblClick"] = "footerCellDblClick";
    GridEvents["headerCellRightClick"] = "headerCellRightClick";
    GridEvents["footerCellRightClick"] = "footerCellRightClick";
})(GridEvents = exports.GridEvents || (exports.GridEvents = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var DataProxy = /** @class */ (function () {
    function DataProxy(url) {
        this.url = url;
    }
    DataProxy.prototype.load = function () {
        return this._ajax(this.url);
    };
    DataProxy.prototype.save = function (data, mode) {
        var modes = {
            insert: "POST",
            delete: "DELETE",
            update: "POST"
        };
        return this._ajax(this.url, data, modes[mode] || "POST");
    };
    DataProxy.prototype._ajax = function (url, data, method) {
        if (method === void 0) { method = "GET"; }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response || xhr.responseText);
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.open(method, url);
            xhr.setRequestHeader("Content-Type", "application/json");
            switch (method) {
                case "POST":
                case "DELETE":
                case "PUT":
                    xhr.send(JSON.stringify(data));
                    break;
                case "GET":
                    xhr.send();
                    break;
                default:
                    xhr.send();
                    break;
            }
        });
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventSystem = /** @class */ (function () {
    function EventSystem(context) {
        this.events = {};
        this.context = context || this;
    }
    EventSystem.prototype.on = function (name, callback, context) {
        var event = name.toLowerCase();
        this.events[event] = this.events[event] || [];
        this.events[event].push({ callback: callback, context: context || this.context });
    };
    EventSystem.prototype.detach = function (name, context) {
        var event = name.toLowerCase();
        var eStack = this.events[event];
        if (context && eStack && eStack.length) {
            for (var i = eStack.length - 1; i >= 0; i--) {
                if (eStack[i].context === context) {
                    eStack.splice(i, 1);
                }
            }
        }
        else {
            this.events[event] = [];
        }
    };
    EventSystem.prototype.fire = function (name, args) {
        if (typeof args === "undefined") {
            args = [];
        }
        var event = name.toLowerCase();
        if (this.events[event]) {
            var res = this.events[event].map(function (e) { return e.callback.apply(e.context, args); });
            return res.indexOf(false) < 0;
        }
        return true;
    };
    EventSystem.prototype.clear = function () {
        this.events = {};
    };
    return EventSystem;
}());
exports.EventSystem = EventSystem;
function EventsMixin(obj) {
    obj = obj || {};
    var eventSystem = new EventSystem(obj);
    obj.detachEvent = eventSystem.detach.bind(eventSystem);
    obj.attachEvent = eventSystem.on.bind(eventSystem);
    obj.callEvent = eventSystem.fire.bind(eventSystem);
}
exports.EventsMixin = EventsMixin;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(11));
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(7));
__export(__webpack_require__(3));
__export(__webpack_require__(15));
__export(__webpack_require__(14));
__export(__webpack_require__(38));
__export(__webpack_require__(13));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(8);
var loader_1 = __webpack_require__(28);
var sort_1 = __webpack_require__(34);
var dataproxy_1 = __webpack_require__(7);
var helpers_1 = __webpack_require__(3);
var types_1 = __webpack_require__(4);
var core_1 = __webpack_require__(1);
var DataCollection = /** @class */ (function () {
    function DataCollection(config, events) {
        this.config = config || {};
        this._order = [];
        this._pull = {};
        this._changes = { order: [] };
        this._initOrder = null;
        this._sort = new sort_1.Sort();
        this._loader = new loader_1.Loader(this, this._changes);
        this.events = events || new events_1.EventSystem(this);
    }
    DataCollection.prototype.add = function (obj, index) {
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [obj])) {
            return;
        }
        var id = this._addCore(obj, index);
        this._onChange("add", obj.id, obj);
        this.events.fire(types_1.DataEvents.afterAdd, [obj]);
        return id;
    };
    DataCollection.prototype.remove = function (id) {
        var obj = this._pull[id];
        if (obj) {
            if (!this.events.fire(types_1.DataEvents.beforeRemove, [obj])) {
                return;
            }
            this._removeCore(obj.id);
            this._onChange("remove", id, obj);
        }
        this.events.fire(types_1.DataEvents.afterRemove, [obj]);
    };
    DataCollection.prototype.removeAll = function () {
        this._removeAll();
        this.events.fire(types_1.DataEvents.removeAll);
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.exists = function (id) {
        return !!this._pull[id];
    };
    DataCollection.prototype.getNearId = function (id) {
        var item = this._pull[id];
        if (!item) {
            return this._order[0].id || "";
        }
    };
    DataCollection.prototype.getItem = function (id) {
        return this._pull[id];
    };
    DataCollection.prototype.update = function (id, obj, silent) {
        var item = this.getItem(id);
        if (item) {
            if (helpers_1.isEqualObj(obj, item)) {
                return;
            }
            if (obj.id && id !== obj.id) {
                helpers_1.dhxWarning("this method doesn't allow change id");
                if (helpers_1.isDebug()) {
                    // tslint:disable-next-line:no-debugger
                    debugger;
                }
            }
            else {
                core_1.extend(this._pull[id], obj, false);
                if (this.config.update) {
                    this.config.update(this._pull[id]);
                }
                if (!silent) {
                    this._onChange("update", id, this._pull[id]);
                }
            }
        }
        else {
            helpers_1.dhxWarning("item not found");
        }
    };
    DataCollection.prototype.getIndex = function (id) {
        var res = core_1.findIndex(this._order, function (item) { return item.id === id; });
        if (this._pull[id] && res >= 0) {
            return res;
        }
        return -1;
    };
    DataCollection.prototype.getId = function (index) {
        if (!this._order[index]) {
            return;
        }
        return this._order[index].id;
    };
    DataCollection.prototype.getLength = function () {
        return this._order.length;
    };
    DataCollection.prototype.filter = function (rule, config) {
        var _this = this;
        config = core_1.extend({
            add: false,
            multiple: true
        }, config);
        if (!config.add) {
            this._order = this._initOrder || this._order;
            this._initOrder = null;
        }
        this._filters = this._filters || {};
        if (!config.multiple || !rule) {
            this._filters = {};
        }
        if (rule) {
            if (typeof rule === "function") {
                var f = "_";
                this._filters[f] = {
                    match: f,
                    compare: rule
                };
            }
            else {
                if (!rule.match) {
                    delete this._filters[rule.by];
                }
                else {
                    rule.compare = rule.compare || (function (val, match) { return val === match; });
                    this._filters[rule.by] = rule;
                }
            }
            var fOrder = this._order.filter(function (item) {
                return Object.keys(_this._filters).every(function (key) {
                    return item[key] ?
                        _this._filters[key].compare(item[key], _this._filters[key].match, item)
                        : _this._filters[key].compare(item);
                });
            });
            if (!this._initOrder) {
                this._initOrder = this._order;
                this._order = fOrder;
            }
        }
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.find = function (conf) {
        for (var key in this._pull) {
            var res = helpers_1.findByConf(this._pull[key], conf);
            if (res) {
                return res;
            }
        }
        return null;
    };
    DataCollection.prototype.findAll = function (conf) {
        var res = [];
        for (var key in this._pull) {
            var item = helpers_1.findByConf(this._pull[key], conf);
            if (item) {
                res.push(item);
            }
        }
        return res;
    };
    DataCollection.prototype.sort = function (by) {
        this._sort.sort(this._order, by);
        if (this._initOrder && this._initOrder.length) {
            this._sort.sort(this._initOrder, by);
        }
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.copy = function (id, index, target, targetId) {
        if (!this.exists(id)) {
            return null;
        }
        var newid = core_1.uid();
        if (target) {
            if (!(target instanceof DataCollection) && targetId) {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index, targetId);
                return;
            }
            if (target.exists(id)) {
                target.add(__assign({}, helpers_1.copyWithoutInner(this.getItem(id)), { id: newid }), index);
                return newid;
            }
            else {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                return id;
            }
        }
        this.add(__assign({}, helpers_1.copyWithoutInner(this.getItem(id)), { id: newid }), index);
        return newid;
    };
    DataCollection.prototype.move = function (id, index, target, targetId) {
        if (target && target !== this && this.exists(id)) {
            var item = core_1.copy(this.getItem(id), true);
            if (target.exists(id)) {
                item.id = core_1.uid();
            }
            if (targetId) {
                item.parent = targetId;
            }
            target.add(item, index);
            // remove data from original collection
            this.remove(id);
            return item.id;
        }
        if (this.getIndex(id) === index) {
            return null;
        }
        // move other elements
        var spliced = this._order.splice(this.getIndex(id), 1)[0];
        if (index === -1) {
            index = this._order.length;
        }
        this._order.splice(index, 0, spliced);
        this.events.fire(types_1.DataEvents.change); // if target not this, it trigger add and remove
        return id;
    };
    DataCollection.prototype.load = function (url, driver) {
        if (typeof url === "string") {
            url = new dataproxy_1.DataProxy(url);
        }
        return this._loader.load(url, driver);
    };
    DataCollection.prototype.parse = function (data, driver) {
        this._removeAll();
        return this._loader.parse(data, driver);
    };
    DataCollection.prototype.$parse = function (data) {
        var apx = this.config.approximate;
        if (apx) {
            data = this._approximate(data, apx.value, apx.maxNum);
        }
        this._parse_data(data);
        this.events.fire(types_1.DataEvents.change);
        this.events.fire(types_1.DataEvents.load);
    };
    DataCollection.prototype.save = function (url) {
        this._loader.save(url);
    };
    // todo: loop through the array and check saved statuses
    DataCollection.prototype.isSaved = function () {
        return !this._changes.order.length; // todo: bad solution, errors and holded elments are missed...
    };
    DataCollection.prototype.map = function (cb) {
        var result = [];
        for (var i = 0; i < this._order.length; i++) {
            result.push(cb.call(this, this._order[i], i));
        }
        return result;
    };
    DataCollection.prototype.mapRange = function (from, to, cb) {
        if (from < 0) {
            from = 0;
        }
        if (to > this._order.length - 1) {
            to = this._order.length - 1;
        }
        var result = [];
        for (var i = from; i <= to; i++) {
            result.push(cb.call(this, this._order[i], i));
        }
        return result;
    };
    DataCollection.prototype.reduce = function (cb, acc) {
        for (var i = 0; i < this._order.length; i++) {
            acc = cb.call(this, acc, this._order[i], i);
        }
        return acc;
    };
    DataCollection.prototype.serialize = function (driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this.map(function (item) {
            var newItem = __assign({}, item);
            Object.keys(newItem).forEach(function (key) {
                if (key[0] === "$") {
                    delete newItem[key];
                }
            });
            return newItem;
        });
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    DataCollection.prototype.getInitialData = function () {
        return this._initOrder;
    };
    DataCollection.prototype._removeAll = function () {
        this._pull = {};
        this._order = [];
        this._changes.order = [];
        this._initOrder = null;
    };
    DataCollection.prototype._addCore = function (obj, index) {
        if (this.config.init) {
            obj = this.config.init(obj);
        }
        obj.id = obj.id ? obj.id.toString() : core_1.uid();
        if (this._pull[obj.id]) {
            helpers_1.dhxError("Item already exist");
        }
        // todo: not ideal solution
        if (this._initOrder && this._initOrder.length) {
            this._addToOrder(this._initOrder, obj, index);
        }
        this._addToOrder(this._order, obj, index);
        return obj.id;
    };
    DataCollection.prototype._removeCore = function (id) {
        if (this.getIndex(id) >= 0) {
            this._order = this._order.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
        if (this._initOrder && this._initOrder.length) {
            this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
        }
    };
    DataCollection.prototype._parse_data = function (data) {
        var index = this._order.length;
        if (this.config.prep) {
            data = this.config.prep(data);
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            obj.id = (obj.id || obj.id === 0) ? obj.id : core_1.uid();
            this._pull[obj.id] = obj;
            this._order[index++] = obj;
        }
    };
    DataCollection.prototype._approximate = function (data, values, maxNum) {
        var len = data.length;
        var vlen = values.length;
        var rlen = Math.floor(len / maxNum);
        var newData = Array(Math.ceil(len / rlen));
        var index = 0;
        for (var i = 0; i < len; i += rlen) {
            var newItem = core_1.copy(data[i]);
            var end = Math.min(len, i + rlen);
            for (var j = 0; j < vlen; j++) {
                var sum = 0;
                for (var z = i; z < end; z++) {
                    sum += data[z][values[j]];
                }
                newItem[values[j]] = sum / (end - i);
            }
            newData[index++] = newItem;
        }
        return newData;
    };
    DataCollection.prototype._onChange = function (status, id, obj) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var item = _a[_i];
            // update pending item if previous state is "saving" or if item not saved yet
            if (item.id === id && !item.saving) {
                // update item
                if (item.error) {
                    item.error = false;
                }
                item = __assign({}, item, { obj: obj, status: status });
                this.events.fire(types_1.DataEvents.change, [id, status, obj]);
                return;
            }
        }
        this._changes.order.push({ id: id, status: status, obj: __assign({}, obj), saving: false });
        this.events.fire(types_1.DataEvents.change, [id, status, obj]);
    };
    DataCollection.prototype._addToOrder = function (array, obj, index) {
        if (index >= 0 && array[index]) {
            this._pull[obj.id] = obj;
            array.splice(index, 0, obj);
        }
        else {
            this._pull[obj.id] = obj;
            array.push(obj);
        }
    };
    return DataCollection;
}());
exports.DataCollection = DataCollection;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function () {
  global = this

  var queueId = 1
  var queue = {}
  var isRunningTask = false

  if (!global.setImmediate)
    global.addEventListener('message', function (e) {
      if (e.source == global){
        if (isRunningTask)
          nextTick(queue[e.data])
        else {
          isRunningTask = true
          try {
            queue[e.data]()
          } catch (e) {}

          delete queue[e.data]
          isRunningTask = false
        }
      }
    })

  function nextTick(fn) {
    if (global.setImmediate) setImmediate(fn)
    // if inside of web worker
    else if (global.importScripts) setTimeout(fn)
    else {
      queueId++
      queue[queueId] = fn
      global.postMessage(queueId, '*')
    }
  }

  Deferred.resolve = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    if (value instanceof Deferred)
      return value

    return new Deferred(function (resolve) {
        resolve(value)
    })
  }

  Deferred.reject = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    return new Deferred(function (resolve, reject) {
        reject(value)
    })
  }

  Deferred.all = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            arr[i] = r
            done()
            return r
          }, done)
      })
    }

    done()

    return d
  }

  Deferred.race = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    if (arr.length == 0)
      return new Deferred()

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            done(null, r)
          }, done)
      })
    }

    done()

    return d
  }

  Deferred._d = 1


  /**
   * @constructor
   */
  function Deferred(resolver) {
    'use strict'
    if (typeof resolver != 'function' && resolver != undefined)
      throw TypeError()

    if (typeof this != 'object' || (this && this.then))
      throw TypeError()

    // states
    // 0: pending
    // 1: resolving
    // 2: rejecting
    // 3: resolved
    // 4: rejected
    var self = this,
      state = 0,
      val = 0,
      next = [],
      fn, er;

    self['promise'] = self

    self['resolve'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 1

        nextTick(fire)
      }
      return self
    }

    self['reject'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 2

        nextTick(fire)

      }
      return self
    }

    self['_d'] = 1

    self['then'] = function (_fn, _er) {
      if (!(this._d == 1))
        throw TypeError()

      var d = new Deferred()

      d.fn = _fn
      d.er = _er
      if (state == 3) {
        d.resolve(val)
      }
      else if (state == 4) {
        d.reject(val)
      }
      else {
        next.push(d)
      }

      return d
    }

    self['catch'] = function (_er) {
      return self['then'](null, _er)
    }

    var finish = function (type) {
      state = type || 4
      next.map(function (p) {
        state == 3 && p.resolve(val) || p.reject(val)
      })
    }

    try {
      if (typeof resolver == 'function')
        resolver(self['resolve'], self['reject'])
    } catch (e) {
      self['reject'](e)
    }

    return self

    // ref : reference to 'then' function
    // cb, ec, cn : successCallback, failureCallback, notThennableCallback
    function thennable (ref, cb, ec, cn) {
      // Promises can be rejected with other promises, which should pass through
      if (state == 2) {
        return cn()
      }
      if ((typeof val == 'object' || typeof val == 'function') && typeof ref == 'function') {
        try {

          // cnt protects against abuse calls from spec checker
          var cnt = 0
          ref.call(val, function (v) {
            if (cnt++) return
            val = v
            cb()
          }, function (v) {
            if (cnt++) return
            val = v
            ec()
          })
        } catch (e) {
          val = e
          ec()
        }
      } else {
        cn()
      }
    };

    function fire() {

      // check if it's a thenable
      var ref;
      try {
        ref = val && val.then
      } catch (e) {
        val = e
        state = 2
        return fire()
      }

      thennable(ref, function () {
        state = 1
        fire()
      }, function () {
        state = 2
        fire()
      }, function () {
        try {
          if (state == 1 && typeof fn == 'function') {
            val = fn(val)
          }

          else if (state == 2 && typeof er == 'function') {
            val = er(val)
            state = 1
          }
        } catch (e) {
          val = e
          return finish()
        }

        if (val == self) {
          val = TypeError()
          finish()
        } else thennable(ref, function () {
            finish(3)
          }, finish, function () {
            finish(state == 1 && 3)
          })

      })
    }


  }

  // Export our library object, either for node.js or as a globally scoped variable
  if (true) {
    module['exports'] = Deferred
  } else {}
})()

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9), __webpack_require__(29).setImmediate))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver_1 = __webpack_require__(14);
var CsvDriver_1 = __webpack_require__(15);
var XMLDriver_1 = __webpack_require__(32);
exports.dataDrivers = {
    json: JsonDriver_1.JsonDriver,
    csv: CsvDriver_1.CsvDriver
};
exports.dataDriversPro = __assign({}, exports.dataDrivers, { xml: XMLDriver_1.XMLDriver });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver = /** @class */ (function () {
    function JsonDriver() {
    }
    JsonDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    JsonDriver.prototype.serialize = function (data) {
        return data;
    };
    JsonDriver.prototype.getFields = function (row) {
        return row;
    };
    JsonDriver.prototype.getRows = function (data) {
        return typeof data === "string" ? JSON.parse(data) : data;
    };
    return JsonDriver;
}());
exports.JsonDriver = JsonDriver;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvDriver = /** @class */ (function () {
    function CsvDriver(config) {
        if (config === void 0) { config = {}; }
        var initConfig = {
            skipHeader: 0,
            nameByHeader: false,
            row: "\n",
            column: ",",
        };
        this.config = __assign({}, initConfig, config);
        if (this.config.nameByHeader) {
            this.config.skipHeader = 1;
        }
    }
    CsvDriver.prototype.getFields = function (row, headers) {
        var parts = row.trim().split(this.config.column);
        var obj = {};
        for (var i = 0; i < parts.length; i++) {
            obj[headers ? headers[i] : i + 1] = parts[i];
        }
        return obj;
    };
    CsvDriver.prototype.getRows = function (data) {
        return data.trim().split(this.config.row);
    };
    CsvDriver.prototype.toJsonArray = function (data) {
        var _this = this;
        var rows = this.getRows(data);
        var names = this.config.names;
        if (this.config.skipHeader) {
            var top_1 = rows.splice(0, this.config.skipHeader);
            if (this.config.nameByHeader) {
                names = top_1[0].trim().split(this.config.column);
            }
        }
        return rows.map(function (row) { return _this.getFields(row, names); });
    };
    CsvDriver.prototype.serialize = function (data) {
        var header = data[0] ? Object.keys(data[0]).filter(function (key) { return key[0] !== "$"; }).join(",") : "";
        return header + this._serialize(data);
    };
    CsvDriver.prototype._serialize = function (data) {
        var _this = this;
        return data.reduce(function (csv, row) {
            var cells = Object.keys(row).reduce(function (total, key, i) {
                if (key[0] === "$" || key === "items") {
                    return total;
                }
                return "" + total + row[key] + (i === row.length - 1 ? "" : ",");
            }, "");
            if (row.items) {
                return csv + "\n" + cells + _this._serialize(row.items);
            }
            return csv + "\n" + cells;
        }, "");
    };
    return CsvDriver;
}());
exports.CsvDriver = CsvDriver;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function normalizeArray(obj, name) {
    if (!obj[name]) {
        return;
    }
    if (typeof obj[name] === "string") {
        obj[name] = [{
                text: "" + obj[name]
            }];
    }
    else {
        obj[name] = obj[name].map(function (el) {
            if (typeof el === "string") {
                el = { text: el };
            }
            return el;
        });
    }
}
function normalizeColumns(columns) {
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var col = columns_1[_i];
        col.$cellCss = col.$cellCss || {};
        normalizeArray(col, "header");
        normalizeArray(col, "footer");
        col.width = col.width || 100;
    }
}
exports.normalizeColumns = normalizeColumns;
function countColumns(config, columns) {
    var headerRowsCount = 0;
    var footerRowsCount = 0;
    var totalWidth = 0;
    var colspans = false;
    var rowsHeadersCount = 0;
    var footer = false;
    columns.map(function (col) {
        headerRowsCount = Math.max(headerRowsCount, col.header.length);
        totalWidth += col.width;
        if (col.footer) {
            footerRowsCount = Math.max(footerRowsCount, col.footer.length);
            if (!footer) {
                footer = true;
            }
        }
        if (!colspans) {
            for (var _i = 0, _a = col.header; _i < _a.length; _i++) {
                var head = _a[_i];
                if (head.colspan) {
                    colspans = true;
                    return;
                }
            }
        }
    });
    // fill missing cells
    columns.map(function (col) {
        if (col.header.length < headerRowsCount) {
            for (var i = 0; i < headerRowsCount; i++) {
                col.header[i] = col.header[i] || { text: "" };
            }
        }
        if (footer) {
            col.footer = col.footer || [];
        }
        if (col.footer && col.footer.length < footerRowsCount) {
            for (var i = 0; i < footerRowsCount; i++) {
                col.footer[i] = col.footer[i] || { text: "" };
            }
        }
        col.header.map(function (head) {
            head.css = head.css || "";
            if (!head.text && !/dhx_cell-empty/.test(head.css)) {
                head.css += " dhx_cell-empty";
            }
        });
        // find header columns indexes
        if (col.header[0].text === "") {
            rowsHeadersCount++;
        }
    });
    config.$totalWidth = totalWidth;
    config.$headerLevel = headerRowsCount;
    config.$footerLevel = footerRowsCount;
    config.$colspans = colspans;
    config.$footer = footer;
    return rowsHeadersCount;
}
exports.countColumns = countColumns;
function calculatePositions(width, height, scroll, conf) {
    var avrColWidth = conf.$totalWidth / conf.columns.length;
    var colPerPage = Math.round(width / avrColWidth);
    var rowPerPage = Math.round(height / conf.rowHeight);
    var reserve = 1;
    var y = Math.round(scroll.top / conf.rowHeight) || 0;
    var yStart = y - reserve >= 0 ? y - reserve : 0;
    var yEnd = y + rowPerPage + reserve;
    var x = 0;
    var scrollLeft = scroll.left;
    for (var i = 0; i < conf.columns.length; i++) {
        var col = conf.columns[i];
        scrollLeft = scrollLeft - col.width;
        if (scrollLeft + (avrColWidth / 2) > 0) {
            x++;
        }
        else {
            break;
        }
    }
    var xStart = x - reserve >= 0 ? x - reserve : 0;
    var xEnd = x + colPerPage + reserve;
    return {
        xStart: xStart,
        xEnd: xEnd,
        yStart: yStart,
        yEnd: yEnd
    };
}
exports.calculatePositions = calculatePositions;
function getUnique(arr, name) {
    return arr
        .filter(function (item, index, array) {
        return index === array.reduce(function (acc, t, i) { return (acc = t[name] === item[name] ? i : acc); }, -1);
    })
        .map(function (item) {
        if (!isNaN(item[name])) {
            item[name] = parseFloat(item[name]);
        }
        return item;
    })
        .sort(function (a, b) { return a[name] > b[name] ? 1 : -1; });
}
exports.getUnique = getUnique;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(18);
var main_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
function handleMouse(row, col, conf, type, e) {
    conf.events.fire(type, [row, col, e]);
}
function getHandlers(row, column, conf) {
    return {
        onclick: [handleMouse, row, column, conf, types_1.GridEvents.cellClick],
        onmouseover: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseOver],
        onmousedown: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseDown],
        ondblclick: [handleMouse, row, column, conf, types_1.GridEvents.cellDblClick],
        oncontextmenu: [handleMouse, row, column, conf, types_1.GridEvents.cellRightClick]
    };
}
function getTreeCell(content, row, col, conf) {
    return dom_1.el(".dhx_grid-cell", __assign({ class: "dhx_tree-cell " + (col.$cellCss[row.id] || "") + " " + (row.$items ? "dhx_grid-expand-cell" : ""), style: {
            width: col.width,
            lineHeight: conf.rowHeight + "px",
            paddingLeft: 24 * row.$level
        }, dhx_id: row.id }, getHandlers(row, col, conf)), [
        row.$items ? dom_1.el(".dhx_grid-expand-cell-icon", {
            class: row.$opened ? "dxi dxi-chevron-up" : "dxi dxi-chevron-down",
            dhx_id: row.id,
        }) : null,
        dom_1.el(".dhx_tree-cell", {
            title: main_1.removeHTMLTags(row[col.id]),
            style: {
                width: col.width - row.$level * 10,
                height: "100%",
                textAlign: "left"
            }
        }, [content])
    ]);
}
function getCells(conf) {
    if (!conf.data || !conf.columns) {
        return [];
    }
    var pos = conf.$positions;
    var data = conf.data ? conf.data.slice(pos.yStart, pos.yEnd) : [];
    var columns = conf.columns.slice(pos.xStart, pos.xEnd);
    return data.map(function (row) {
        var rowCss = "";
        if (conf.rowCss) {
            rowCss = conf.rowCss(row);
        }
        if (row.$css) {
            rowCss += row.$css;
        }
        return dom_1.el(".dhx_grid-row", {
            "style": { height: conf.rowHeight },
            "dhx_grid-row": row.id,
            "class": rowCss
        }, columns.map(function (col) {
            var t = function (text, _row, _col) { return (text || text === 0) ? text : ""; };
            var template = col.template || t;
            var content = template(row[col.id], row, col);
            // ability to use domvm node as template result
            content = typeof content === "string" ? dom_1.el("div.dhx_cell-content", { ".innerHTML": content }) : content;
            if (conf.type === "tree" && conf.firstColId === col.id) {
                return getTreeCell(content, row, col, conf);
            }
            return dom_1.el(".dhx_grid-cell", __assign({ class: ((col.$cellCss[row.id] || "") + " dhx_" + col.type + "-cell").replace(/\s+/g, " "), style: {
                    width: col.width,
                    lineHeight: conf.rowHeight + "px"
                } }, getHandlers(row, col, conf), { title: main_1.removeHTMLTags(row[col.id]) }), [content]);
        }));
    });
}
exports.getCells = getCells;
function getSpans(conf) {
    var spanCells = [];
    var columns = conf.columns;
    if (!columns.length) {
        return null;
    }
    if (!conf.spans) {
        return null;
    }
    var spans = conf.spans.sort(function (a, b) {
        return (typeof a.row === "string" && typeof b.row === "string") ?
            a.row.localeCompare(b.row)
            : a.row - b.row;
    });
    var cellHeight = conf.rowHeight;
    var _loop_1 = function (i) {
        var row = spans[i].row;
        var col = spans[i].column;
        var spanHeight = spans[i].rowspan;
        var spanWidth = spans[i].colspan;
        var spanCss = spans[i].css;
        // [todo]
        if (spanHeight === 1) {
            return "continue";
        }
        var colIndex = core_1.findIndex(columns, function (item) { return "" + item.id === "" + col; });
        var rowIndex = core_1.findIndex(conf.data, function (item) { return "" + item.id === "" + row; });
        if (colIndex < 0 || rowIndex < 0) {
            return "continue";
        }
        var currCol = columns[colIndex];
        var currRow = conf.data[rowIndex];
        var content = spans[i].text ?
            spans[i].text
            : currRow[col] === undefined ? "" : currRow[col];
        var tooltipText = content;
        var t = function (text, _row, _col) { return (text || text === 0) ? text : ""; };
        var template = currCol.template || t;
        content = template(content, currRow, currCol);
        content = typeof content === "string" ? dom_1.el("div.dhx_span-cell-content", { ".innerHTML": content }) : content;
        var top_1 = conf.rowHeight * rowIndex;
        var left = 0;
        for (var s = colIndex - 1; s >= 0; s--) {
            left += columns[s].width;
        }
        var css = currCol.header[0].text ? "dhx_span-cell" : "dhx_span-cell dhx_span-cell--title";
        if (spanCss) {
            css += " " + spanCss;
        }
        if (rowIndex === 0) {
            css += " dhx_span-first-row";
        }
        // [dirty]
        if (colIndex === 0) {
            css += " dhx_span-first-col";
        }
        var rowspanWithLastCol = colIndex === columns.length - 1;
        var colspanWithLastCol = colIndex + spanWidth === columns.length;
        if (rowspanWithLastCol || colspanWithLastCol) {
            css += " dhx_span-last-col";
        }
        if (!spanWidth) {
            css += " dhx_span-" + (currCol.type || "string") + "-cell";
        }
        else {
            css += " dhx_span-string-cell";
        }
        var width = spanWidth > 1 ? cells_1.getWidth(conf.columns, spanWidth, colIndex) : currCol.width;
        spanCells.push(dom_1.el("div", {
            class: css,
            style: {
                width: width,
                height: (spanHeight || 1) * cellHeight,
                top: top_1,
                left: left,
                lineHeight: conf.rowHeight + "px"
            },
            title: main_1.removeHTMLTags(tooltipText),
        }, [content]));
    };
    for (var i = 0; i < spans.length; i++) {
        _loop_1(i);
    }
    return spanCells;
}
exports.getSpans = getSpans;
function getShifts(conf) {
    var columnsLeft = conf.columns.slice(0, conf.$positions.xStart);
    return {
        x: columnsLeft.reduce(function (sum, col) { return sum += col.width; }, 0),
        y: conf.$positions.yStart * conf.rowHeight
    };
}
exports.getShifts = getShifts;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// [todo]
function getWidth(columns, colspan, index) {
    return columns.reduce(function (w, c, i) {
        w += (i >= index && i < index + colspan) ? c.width : 0;
        return w;
    }, 0);
}
exports.getWidth = getWidth;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(18);
var main_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var content_1 = __webpack_require__(20);
function handleMouse(col, config, type, e) {
    config.events.fire(type, [col, e]);
}
function getHandlers(column, rowName, config) {
    return {
        onclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellClick"]],
        onmouseover: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseOver"]],
        onmousedown: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseDown"]],
        ondblclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellDblClick"]],
        oncontextmenu: [handleMouse, column, config, types_1.GridEvents[rowName + "CellRightClick"]]
    };
}
function buildRows(columns, name) {
    var header = columns.map(function (col) { return col[name] || [{}]; });
    return main_1.transpose(header);
}
function getCustomContentCell(cell, column, config, rowName, css) {
    if (css === void 0) { css = ""; }
    var rowHeight = config[name + "RowHeight"] || 40;
    var type = column.type ? "dhx_" + column.type + "-cell" : "dhx_string_cell";
    return dom_1.el(".dhx_grid-" + rowName + "-cell.dhx_grid-custom-content-cell." + type, __assign({ class: css, style: {
            width: column.width,
            lineHeight: rowHeight + 1 + "px"
        } }, getHandlers(column, rowName, config)), [
        content_1.content[cell.content].toHtml(column, config)
    ]);
}
function getRows(config, rowsConfig) {
    if (!config.data || !config.columns) {
        return [];
    }
    var rowName = rowsConfig.name;
    var columns = config.currentColumns;
    var rowHeight = config[rowName + "RowHeight"] || 40;
    var rows = buildRows(columns, rowName);
    return rows.map(function (row) { return dom_1.el(".dhx_" + rowName + "-row", { style: { height: rowHeight } }, row.map(function (cell, i) {
        var css = cell.css || "";
        var column = columns[i];
        var sortIconCss = "dxi dxi-sort-variant dhx_grid-sort-icon";
        if (config.sortBy && "" + column.id === config.sortBy && !cell.content) {
            sortIconCss += " dhx_grid-sort-icon--" + (config.sortDir || "asc");
            css += " dhx_grid-" + rowName + "-cell--sorted ";
        }
        var sortIconVisible = cell.text && config.headerSort && rowName !== "footer";
        // [todo]
        if (sortIconVisible) {
            css += " dhx_grid-header-cell--sortable";
        }
        var isFirstCol = i === 0 ? "dhx_first-column-cell" : "";
        var isLastCol = i === columns.length - 1 ? "dhx_last-column-cell" : "";
        // [dirty] make better align detection in tree grid
        // if (config.type === "tree" && isFirstCol) {
        // 	column.type = "string";
        // }
        if (!cell.content) {
            css += " dhx_grid-header-cell--" + (column.type === "number" ? "align_right" : "align_left") + " ";
        }
        css += isFirstCol + " " + isLastCol;
        if (cell.content) {
            return getCustomContentCell(cell, column, config, rowName, css);
        }
        return dom_1.el(".dhx_grid-" + rowName + "-cell", __assign({ class: css.trim(), dhx_id: column.id, _key: i, style: {
                width: column.width,
                lineHeight: rowHeight + 1 + "px"
            } }, getHandlers(column, rowName, config), { title: main_1.removeHTMLTags(cell.text) }), [
            dom_1.el("div", { ".innerHTML": cell.text }),
            sortIconVisible && dom_1.el("div", { class: sortIconCss }, cell.text)
        ]);
    })); });
}
exports.getRows = getRows;
function getSpans(conf, rowsConfig) {
    var cols = conf.columns;
    var rows = main_1.transpose(cols.map(function (col) { return col[rowsConfig.name] || []; }));
    var height = conf[rowsConfig.name + "RowHeight"] || 40;
    var leftShift = 0;
    return rows.map(function (row, i) {
        leftShift = 0;
        return dom_1.el(".dhx_span-row", { style: { top: height * i + "px", height: height } }, row.map(function (cell, cellIdx) {
            leftShift += cols[cellIdx].width;
            var isFirstCol = cellIdx === 0 ? "dhx_first-column-cell" : "";
            var isLastCol = (cellIdx === cols.length - 1)
                || ((cell.colspan || 0) + (cellIdx - 1) >= cols.length - 1) ? "dhx_last-column-cell" : "";
            return cell.colspan ?
                dom_1.el(".dhx_span-cell", {
                    "style": {
                        width: cells_1.getWidth(conf.columns, cell.colspan, cellIdx),
                        height: height,
                        left: leftShift - cols[cellIdx].width,
                        top: height * i,
                        lineHeight: height + "px"
                    },
                    "class": (isFirstCol + " " + isLastCol).trim(),
                    "title": main_1.removeHTMLTags(cell.text),
                    ".innerHTML": cell.text
                })
                : null;
        }).filter(function (cell) { return cell ? true : false; }));
    });
}
exports.getSpans = getSpans;
function getFixedRows(config, rowsConfig) {
    var _a;
    var rows = getRows(config, rowsConfig);
    var spans = getSpans(config, rowsConfig);
    var fixedCols = null;
    if (rowsConfig.name === "footer" && !rowsConfig.sticky) {
        fixedCols = config.splitAt >= 0 && getRows(__assign({}, config, { currentColumns: config.columns.slice(0, config.splitAt), $positions: __assign({}, config.$positions, { xStart: 0, xEnd: config.splitAt }) }), rowsConfig);
    }
    var styles = (_a = {
            position: "sticky"
        },
        _a[rowsConfig.position] = 0,
        _a);
    var left;
    if (!rowsConfig.sticky) {
        styles.left = -config.scroll.left;
        left = -config.scroll.left;
        styles.position = "relative";
    }
    var BORDERS = 2;
    return dom_1.el(".dhx_" + rowsConfig.name + "-wrapper", {
        class: rowsConfig.sticky ? "" : "dhx_compatible-" + rowsConfig.name,
        style: __assign({}, styles, { left: rowsConfig.sticky ? left : 0, height: config[rowsConfig.name + "Height"], width: rowsConfig.sticky ? config.$totalWidth : rowsConfig.wrapper.width - BORDERS })
    }, [
        dom_1.el(".dhx_grid-" + rowsConfig.name, {
            style: {
                height: config[rowsConfig.name + "Height"],
                left: left,
                paddingLeft: rowsConfig.shifts.x,
                width: config.$totalWidth,
            }
        }, [
            dom_1.el(".dhx_" + rowsConfig.name + "-rows", rows.slice()),
            dom_1.el(".dhx_" + rowsConfig.name + "-spans", {
                style: {
                    marginLeft: -rowsConfig.shifts.x
                }
            }, spans),
            fixedCols && dom_1.el(".dhx_" + rowsConfig.name + "-fixed-cols", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: config.scroll.left + "px",
                    height: "100%"
                }
            }, fixedCols)
        ]),
        dom_1.el("div", { style: { width: config.$totalWidth } })
    ]);
}
exports.getFixedRows = getFixedRows;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(6);
function onInput(eventSystem, colId, filter, filterObj, e) {
    filterObj.value[colId] = e.target.value;
    eventSystem.fire(types_1.GridEvents.headerInput, [e.target.value, colId, filter]);
}
function applyMathMethod(column, config, method, validate) {
    var id = column.id;
    var columnData = validate ? validate(id, config.data) : config.data.reduce(function (items, item) {
        if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
            items.push(parseFloat(item[id]));
        }
        return items;
    }, []);
    // [todo] move to treegrid
    var roots = columnData;
    if (config.type === "tree") {
        roots = config.data.reduce(function (total, item) {
            if (item.$level === 0) {
                if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
                    total.push((parseFloat(item[id]) || 0));
                }
                else {
                    var value_1 = 0;
                    config.datacollection.eachChild(item.id, function (cell) {
                        if (!config.datacollection.haveItems(cell.id)) {
                            value_1 += parseFloat(cell[id]);
                        }
                    });
                    total.push(value_1);
                }
            }
            return total;
        }, []);
    }
    return method(columnData, roots);
}
exports.content = {
    inputFilter: {
        toHtml: function (column, config) {
            return dom_1.el("label.dhx_grid-filter__label.dxi.dxi-magnify", [
                dom_1.el("input", {
                    type: "text",
                    class: "dhx_input dhx_grid-filter",
                    oninput: [onInput, config.events, column.id, "inputFilter", this],
                    _key: column.id,
                    value: this.value[column.id] || ""
                })
            ]);
        },
        match: function (value, match) { return new RegExp("" + match, "i").test(value); },
        value: {}
    },
    selectFilter: {
        toHtml: function (column, config) {
            return dom_1.el("label.dhx_grid-filter__label.dxi.dxi-menu-down", [
                dom_1.el("select.dxi.dxi-menu-down", {
                    type: "text",
                    class: "dhx_input dhx_grid-filter dhx_grid-filter--select",
                    onchange: [onInput, config.events, column.id, "selectFilter", this],
                    _key: column.id,
                    value: this.value[column.id] || ""
                }, [
                    dom_1.el("option", { value: "" }, "")
                ].concat(column.$uniqueData.map(function (col) { return col[column.id] && dom_1.el("option", { value: col[column.id] }, col[column.id]); })))
            ]);
        },
        match: function (value, match) { return value === match; },
        value: {}
    },
    sum: {
        calculate: function (_col, roots) { return roots.reduce(function (sum, c) { return sum += parseFloat(c) || 0; }, 0).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    avg: {
        calculate: function (_col, roots) { return (roots.reduce(function (sum, c) { return sum += c; }, 0) / _col.length).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    min: {
        calculate: function (col) { return Math.min.apply(Math, col).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    max: {
        calculate: function (col) { return Math.max.apply(Math, col).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    count: {
        calculate: function (_col, roots) {
            // [todo]
            return roots.reduce(function (count, c) { return count += c; }, 0);
        },
        validate: function (colId, data) {
            return data.reduce(function (items, item) {
                if (item[colId] !== undefined && item[colId] !== "") {
                    if (isNaN(item)) {
                        items.push(1);
                    }
                    else {
                        items.push(item);
                    }
                }
                return items;
            }, []);
        },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate, this.validate); }
    }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CssManager_1 = __webpack_require__(22);
exports.cssManager = CssManager_1.cssManager;
__webpack_require__(24);
var Grid_1 = __webpack_require__(25);
exports.Grid = Grid_1.Grid;
var ts_data_1 = __webpack_require__(10);
exports.DataCollection = ts_data_1.DataCollection;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var CssManager = /** @class */ (function () {
    function CssManager() {
        this._classes = {};
        var styles = document.createElement("style");
        styles.id = "dhx_generated_styles";
        this._styleCont = document.head.appendChild(styles);
    }
    CssManager.prototype.update = function () {
        // move style element to the bottom of head
        document.head.appendChild(this._styleCont);
        this._styleCont.innerHTML = this._generateCss();
    };
    CssManager.prototype.remove = function (className) {
        delete this._classes[className];
        this.update();
    };
    CssManager.prototype.add = function (cssList, customId, silent) {
        if (silent === void 0) { silent = false; }
        var cssString = this._toCssString(cssList);
        var id = this._findSameClassId(cssString);
        if (id && customId && customId !== id) {
            this._classes[customId] = this._classes[id];
            return customId;
        }
        if (id) {
            return id;
        }
        return this._addNewClass(cssString, customId, silent);
    };
    CssManager.prototype.get = function (className) {
        if (this._classes[className]) {
            var props = {};
            var css = this._classes[className].split(";");
            for (var _i = 0, css_1 = css; _i < css_1.length; _i++) {
                var item = css_1[_i];
                if (item) {
                    var prop = item.split(":");
                    props[prop[0]] = prop[1];
                }
            }
            return props;
        }
        return null;
    };
    CssManager.prototype._findSameClassId = function (cssString) {
        for (var key in this._classes) {
            if (cssString === this._classes[key]) {
                return key;
            }
        }
        return null;
    };
    CssManager.prototype._addNewClass = function (cssString, customId, silent) {
        var id = customId || "dhx_generated_class_" + core_1.uid();
        this._classes[id] = cssString;
        if (!silent) {
            this.update();
        }
        return id;
    };
    CssManager.prototype._toCssString = function (cssList) {
        var cssString = "";
        for (var key in cssList) {
            var prop = cssList[key];
            var name_1 = key.replace(/[A-Z]{1}/g, function (letter) { return "-" + letter.toLowerCase(); });
            cssString += name_1 + ":" + prop + ";";
        }
        return cssString;
    };
    CssManager.prototype._generateCss = function () {
        var result = "";
        for (var key in this._classes) {
            var cssProps = this._classes[key];
            result += "." + key + "{" + cssProps + "}\n";
        }
        return result;
    };
    return CssManager;
}());
exports.CssManager = CssManager;
exports.cssManager = new CssManager();


/***/ }),
/* 23 */
/***/ (function(module, exports) {

if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector ||
        proto.mozMatchesSelector || proto.msMatchesSelector ||
        proto.oMatchesSelector || proto.webkitMatchesSelector;
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(8);
var html_1 = __webpack_require__(2);
var view_1 = __webpack_require__(27);
var ts_data_1 = __webpack_require__(10);
var Exporter_1 = __webpack_require__(40);
var data_1 = __webpack_require__(16);
var main_1 = __webpack_require__(5);
var Selection_1 = __webpack_require__(41);
var types_1 = __webpack_require__(6);
var render_1 = __webpack_require__(42);
var core_1 = __webpack_require__(1);
var content_1 = __webpack_require__(20);
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this.config = core_1.extend({
            rowHeight: 40,
            headerRowHeight: 40,
            footerRowHeight: 40,
            headerSort: true,
            columns: [],
            data: []
        }, config);
        _this.content = content_1.content;
        _this._scroll = {
            top: 0,
            left: 0
        };
        var htmlEvents = {
            onclick: html_1.eventHandler(function (ev) { return html_1.locate(ev); }, {
                "dhx_grid-header-cell": function (_ev, item) {
                    if (_this.config.headerSort) {
                        _this.events.fire(types_1.GridEvents.sort, [item]);
                    }
                },
                "dhx_grid-expand-cell": function (_ev, item) { return _this.events.fire(types_1.GridEvents.expand, [item]); }
            }),
            onscroll: function (e) {
                _this.events.fire(types_1.GridEvents.scroll, [{
                        y: e.target.scrollTop,
                        x: e.target.scrollLeft
                    }]);
            }
        };
        _this._init();
        if (_this.config.columns) {
            _this._parseColumns();
        }
        if ((_this.config.data && _this.config.data instanceof Array && _this.config.data.length) && _this.config.columns) {
            _this.data.parse(_this.config.data);
        }
        if (_this.config.selection) {
            _this.selection = new Selection_1.Selection(_this);
        }
        var view = dom_1.create({
            render: function (vm, obj) {
                return render_1.render(vm, obj, _this._currentData, htmlEvents, _this.selection);
            }
        }, _this);
        _this.mount(container, view);
        return _this;
    }
    Grid.prototype.destructor = function () {
        this.unmount();
        this.events.events = {};
        this.events.context = null;
        this._currentData = this.data = this.config =
            this._scroll = this.content = null;
    };
    Grid.prototype.setColumns = function (columns) {
        this.config.columns = columns;
        this._parseColumns();
    };
    Grid.prototype.addRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css || "";
        if (!styles.match(new RegExp(css, "g"))) {
            item.$css = styles + (" " + css);
            // [todo]
            var index = core_1.findIndex(this._currentData, function (row) { return row.id === item.id; });
            if (index >= 0) {
                this._currentData[index].$css = item.$css;
            }
            this.paint();
        }
    };
    Grid.prototype.removeRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css ? item.$css.replace(css, "") : "";
        item.$css = styles;
    };
    Grid.prototype.addCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                column.$cellCss[row] += column.$cellCss[row].match(new RegExp(css, "g")) ? "" : " " + css;
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = css + " ";
            }
            this.paint();
        }
    };
    Grid.prototype.removeCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                column.$cellCss[row] = column.$cellCss[row].replace(css, "");
                this.paint();
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = "";
            }
        }
    };
    Grid.prototype.getScrollState = function () {
        return {
            x: this._scroll.left,
            y: this._scroll.top
        };
    };
    Grid.prototype.scroll = function (x, y) {
        var gridBody = this.getRootView().refs.grid_body.el;
        gridBody.scrollLeft = typeof x === "number" ? x : gridBody.scrollLeft;
        gridBody.scrollTop = typeof y === "number" ? y : gridBody.scrollTop;
    };
    Grid.prototype.scrollTo = function (row, col) {
        var colInd = core_1.findIndex(this.config.columns, function (obj) { return obj.id === col; });
        var fixedColsWidth = this.config.splitAt ?
            this.config.columns.slice(0, this.config.splitAt).reduce(function (total, c) { return total += c.width; }, 0)
            : 0;
        var x = this.config.columns.slice(0, colInd).reduce(function (total, c) { return total += c.width; }, 0) - fixedColsWidth;
        var y = this.data.getIndex(row) * this.config.rowHeight;
        var scrollState = this.getScrollState();
        var gridRight = this.config.width + scrollState.x;
        var gridBottom = this.config.height + scrollState.y - (this.config.headerRowHeight * this.config.$headerLevel);
        var cellTop = y - scrollState.y - this.config.rowHeight;
        var cellLeft = x - scrollState.x - this.config.columns[colInd].width;
        var cellBottom = y + (this.config.rowHeight * 2) + 17 - gridBottom;
        var cellRight = x + (this.config.columns[colInd].width * 2) + 17 - gridRight;
        var scrollTop = (cellTop > 0 && cellBottom < 0) ? 0 : cellTop < 0 ? cellTop : cellBottom;
        var scrollLeft = (cellLeft > 0 && cellRight < 0) ? 0 : cellLeft < 0 ? cellLeft : cellRight;
        this.scroll(scrollLeft + scrollState.x, scrollTop + scrollState.y);
    };
    Grid.prototype.adjustColumnWidth = function (id) {
        var index = core_1.findIndex(this.config.columns, function (с) { return с.id === id; });
        var col = this.config.columns[index];
        this.data.map(function (row) {
            if (typeof row[col.id] === "string" || typeof row[col.id] === "number") {
                col.maxWidth = col.maxWidth || col.width;
                col.maxWidth = Math.max(main_1.getStrWidth(main_1.removeHTMLTags(row[col.id])) + 20, col.maxWidth);
            }
        });
        this.config.$totalWidth = this.config.columns.reduce(function (t, column) {
            column.width = column.maxWidth || column.width;
            return t += column.width;
        }, 0);
        this.paint();
    };
    Grid.prototype.getCellRect = function (row, col) {
        var colInd = core_1.findIndex(this.config.columns, function (obj) { return obj.id === col; });
        var rowInd = this._getRowIndex(row);
        var x = this.config.columns.slice(0, colInd).reduce(function (total, c) { return total += c.width; }, 0);
        var y = rowInd * this.config.rowHeight;
        return { x: x, y: y, height: this.config.rowHeight, width: this.config.columns[colInd].width };
    };
    Grid.prototype.getColumn = function (colId) {
        var ind = core_1.findIndex(this.config.columns, function (col) { return col.id === colId; });
        if (ind >= 0) {
            return this.config.columns[ind];
        }
    };
    Grid.prototype.addSpan = function (spanObj) {
        this.config.spans = this.config.spans || [];
        var index = core_1.findIndex(this.config.spans, function (span) {
            return "" + span.row === "" + spanObj.row && "" + span.column === "" + spanObj.column;
        });
        if (index >= 0) {
            this.config.spans[index] = spanObj;
            return;
        }
        this.config.spans.push(spanObj);
    };
    Grid.prototype.getSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) {
                return "" + span.row === "" + row && "" + span.column === "" + col;
            });
            return this.config.spans[index];
        }
    };
    Grid.prototype.removeSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) {
                return "" + span.row === "" + row && "" + span.column === "" + col;
            });
            this.config.spans.splice(index, 1);
        }
    };
    Grid.prototype._parseColumns = function () {
        var columns = this.config.columns;
        data_1.normalizeColumns(columns);
        data_1.countColumns(this.config, columns);
    };
    Grid.prototype._parseData = function () {
        var firstItem = this.data.getId(0);
        if (firstItem) {
            if (this.config.columns.length) {
                this._checkColumns();
            }
            this._currentData = this.data.serialize() || [];
        }
        this._checkFilters();
        this._checkMarks();
        this._render();
    };
    Grid.prototype._checkColumns = function () {
        this._detectColsTypes();
    };
    Grid.prototype._createCollection = function (prep) {
        this.data = new ts_data_1.DataCollection({
            prep: prep
        }, this.events);
    };
    Grid.prototype._getRowIndex = function (rowId) {
        return this.data.getIndex(rowId);
    };
    Grid.prototype._setEventHandlers = function () {
        var _this = this;
        this.events.on(types_1.GridEvents.sort, function (id) {
            if (id) {
                _this._sort(id);
            }
        });
        this.events.on(types_1.GridEvents.headerInput, function (val, colId, filter) {
            _this.data.filter({
                by: colId,
                match: val,
                compare: _this.content[filter].match
            }, {
                multiple: true
            });
        });
        this.events.on(types_1.GridEvents.scroll, function (scrollState) {
            _this._scroll = { top: scrollState.y, left: scrollState.x };
            _this.paint();
        });
    };
    Grid.prototype._sort = function (by, dir) {
        if (!dir) {
            if (this._sortBy === by) {
                this._sortDir = this._sortDir === "asc" ? "desc" : "asc";
            }
            else {
                this._sortDir = "desc";
            }
        }
        else {
            this._sortDir = dir;
        }
        this._sortBy = by;
        this.data.sort({
            by: by,
            dir: this._sortDir,
            as: function (el) { return el ? "" + el : ""; }
        });
    };
    Grid.prototype._getColumn = function (id) {
        for (var _i = 0, _a = this.config.columns; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.id === id) {
                return col;
            }
        }
    };
    Grid.prototype._init = function () {
        var _this = this;
        this.events = new events_1.EventSystem(this);
        this._attachDataCollection();
        this.data.events.on(ts_data_1.DataEvents.load, function () {
            _this._parseData();
            // [todo] need to check autoWidth after data load
            _this.data.events.fire(ts_data_1.DataEvents.change);
        });
        this.data.events.on(ts_data_1.DataEvents.change, function () {
            _this._currentData = _this.data.map(function (el) { return el; }) || [];
            _this._detectColsTypes();
            _this._checkMarks();
            // set auto width to all columns
            if (_this.config.columnsAutoWidth) {
                if (typeof _this.config.columnsAutoWidth === "number") {
                    _this._setAutoWidth(_this.config.columnsAutoWidth);
                }
                else {
                    _this._setAutoWidth();
                }
            }
            _this._render();
        });
        this.export = new Exporter_1.Exporter(this);
        this._setEventHandlers();
    };
    Grid.prototype._attachDataCollection = function () {
        var _this = this;
        var prep = function (data) {
            if (data.spans) {
                _this.config.spans = data.spans;
                data = data.data;
            }
            return data;
        };
        if (this.config.data instanceof ts_data_1.DataCollection) {
            this.data = this.config.data;
            this.config.data = [];
            this._parseData();
            return;
        }
        this._createCollection(prep);
    };
    Grid.prototype._setMarks = function (col, func) {
        var colCells = this.data.map(function (row) { return ({ id: row.id, data: row[col.id], row: row }); });
        var colCellsData = this.data.map(function (row) { return row[col.id]; });
        var _loop_1 = function (cell) {
            var css = func(cell.data, colCellsData, cell.row, col);
            if (css) {
                col.$cellCss = col.$cellCss || {};
                var cellCss_1 = (col.$cellCss[cell.id] || "").split(" ");
                css.split(" ").map(function (item) {
                    if (cellCss_1.indexOf(item) === -1) {
                        cellCss_1.push(item);
                    }
                });
                col.$cellCss[cell.id] = cellCss_1.join(" ");
            }
        };
        for (var _i = 0, colCells_1 = colCells; _i < colCells_1.length; _i++) {
            var cell = colCells_1[_i];
            _loop_1(cell);
        }
    };
    Grid.prototype._checkMarks = function () {
        var _this = this;
        this.config.columns.map(function (col) {
            var mark = col.mark;
            if (mark) {
                if (typeof mark === "function") {
                    _this._setMarks(col, mark);
                }
                else {
                    _this._setMarks(col, function (el, c) {
                        var data = c.filter(function (item) { return item !== null && item !== undefined && item !== ""; });
                        var min = Math.min.apply(Math, data);
                        var max = Math.max.apply(Math, data);
                        if (mark.max && max === parseFloat(el)) {
                            return mark.max;
                        }
                        if (mark.min && min === parseFloat(el)) {
                            return mark.min;
                        }
                        return false;
                    });
                }
            }
        });
    };
    // [todo] use adjustColumnWidth
    Grid.prototype._setAutoWidth = function (colsCount) {
        var _this = this;
        this.data.map(function (row) {
            _this.config.columns.map(function (col, i) {
                if (colsCount && colsCount <= i) {
                    return col;
                }
                if (typeof row[col.id] === "string" || typeof row[col.id] === "number") {
                    col.maxWidth = col.maxWidth || col.width;
                    var paddings = 20;
                    // [todo] move to treegrid
                    if (_this.config.type === "tree" && i === 0) {
                        paddings = _this.data.getMaxLevel() * 24 + 20;
                    }
                    col.maxWidth = Math.max(main_1.getStrWidth(main_1.removeHTMLTags(row[col.id])) + paddings, col.maxWidth);
                }
            });
        });
        this.config.$totalWidth = this.config.columns.reduce(function (t, col) {
            col.width = col.maxWidth || col.width;
            return t += col.width;
        }, 0);
    };
    // [todo] make more smart type detection
    Grid.prototype._detectColsTypes = function () {
        var firstRow = this.data.getItem(this.data.getId(0));
        if (!firstRow) {
            return;
        }
        this.config.columns = this.config.columns.map(function (col) {
            if (col.type) {
                return col;
            }
            var firstCell = firstRow ? firstRow[col.id] : "";
            var v = parseFloat(firstCell);
            var val = isNaN(v) ? firstCell : v;
            col.type = typeof val;
            return col;
        });
    };
    Grid.prototype._checkFilters = function () {
        var data = this._currentData;
        this.config.columns.map(function (col) {
            col.header.map(function (cell) {
                if (cell.content) {
                    col.$uniqueData = data_1.getUnique(data, col.id);
                }
            });
        });
    };
    Grid.prototype._render = function () {
        this.paint();
    };
    return Grid;
}(view_1.View));
exports.Grid = Grid;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Copyright (c) 2017, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* domvm.js (DOM ViewModel)
* A thin, fast, dependency-free vdom view layer
* @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// NOTE: if adding a new *VNode* type, make it < COMMENT and renumber rest.
// There are some places that test <= COMMENT to assert if node is a VNode

// VNode types
var ELEMENT	= 1;
var TEXT		= 2;
var COMMENT	= 3;

// placeholder types
var VVIEW		= 4;
var VMODEL		= 5;

var ENV_DOM = typeof window !== "undefined";
var win = ENV_DOM ? window : {};
var rAF = win.requestAnimationFrame;

var emptyObj = {};

function noop() {}

var isArr = Array.isArray;

function isSet(val) {
	return val != null;
}

function isPlainObj(val) {
	return val != null && val.constructor === Object;		//  && typeof val === "object"
}

function insertArr(targ, arr, pos, rem) {
	targ.splice.apply(targ, [pos, rem].concat(arr));
}

function isVal(val) {
	var t = typeof val;
	return t === "string" || t === "number";
}

function isFunc(val) {
	return typeof val === "function";
}

function isProm(val) {
	return typeof val === "object" && isFunc(val.then);
}



function assignObj(targ) {
	var args = arguments;

	for (var i = 1; i < args.length; i++)
		{ for (var k in args[i])
			{ targ[k] = args[i][k]; } }

	return targ;
}

// export const defProp = Object.defineProperty;

function deepSet(targ, path, val) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			{ targ[seg] = val; }
		else
			{ targ[seg] = targ = targ[seg] || {}; }
	}
}

/*
export function deepUnset(targ, path) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			targ[seg] = val;
		else
			targ[seg] = targ = targ[seg] || {};
	}
}
*/

function sliceArgs(args, offs) {
	var arr = [];
	for (var i = offs; i < args.length; i++)
		{ arr.push(args[i]); }
	return arr;
}

function cmpObj(a, b) {
	for (var i in a)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

function cmpArr(a, b) {
	var alen = a.length;

	if (b.length !== alen)
		{ return false; }

	for (var i = 0; i < alen; i++)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

// https://github.com/darsain/raft
// rAF throttler, aggregates multiple repeated redraw calls within single animframe
function raft(fn) {
	if (!rAF)
		{ return fn; }

	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function() {
		ctx = this;
		args = arguments;
		if (!id) { id = rAF(call); }
	};
}

function curry(fn, args, ctx) {
	return function() {
		return fn.apply(ctx, args);
	};
}

/*
export function prop(val, cb, ctx, args) {
	return function(newVal, execCb) {
		if (newVal !== undefined && newVal !== val) {
			val = newVal;
			execCb !== false && isFunc(cb) && cb.apply(ctx, args);
		}

		return val;
	};
}
*/

/*
// adapted from https://github.com/Olical/binary-search
export function binaryKeySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
}
*/

// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
// impl borrowed from https://github.com/ivijs/ivi
function longestIncreasingSubsequence(a) {
	var p = a.slice();
	var result = [];
	result.push(0);
	var u;
	var v;

	for (var i = 0, il = a.length; i < il; ++i) {
		var j = result[result.length - 1];
		if (a[j] < a[i]) {
			p[i] = j;
			result.push(i);
			continue;
		}

		u = 0;
		v = result.length - 1;

		while (u < v) {
			var c = ((u + v) / 2) | 0;
			if (a[result[c]] < a[i]) {
				u = c + 1;
			} else {
				v = c;
			}
		}

		if (a[i] < a[result[u]]) {
			if (u > 0) {
				p[i] = result[u - 1];
			}
			result[u] = i;
		}
	}

	u = result.length;
	v = result[u - 1];

	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}

	return result;
}

// based on https://github.com/Olical/binary-search
function binaryFindLarger(item, list) {
	var min = 0;
	var max = list.length - 1;
	var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

	return (min == list.length) ? null : min;

//	return -1;
}

function isEvProp(name) {
	return name[0] === "o" && name[1] === "n";
}

function isSplProp(name) {
	return name[0] === "_";
}

function isStyleProp(name) {
	return name === "style";
}

function repaint(node) {
	node && node.el && node.el.offsetHeight;
}

function isHydrated(vm) {
	return vm.node != null && vm.node.el != null;
}

// tests interactive props where real val should be compared
function isDynProp(tag, attr) {
//	switch (tag) {
//		case "input":
//		case "textarea":
//		case "select":
//		case "option":
			switch (attr) {
				case "value":
				case "checked":
				case "selected":
//				case "selectedIndex":
					return true;
			}
//	}

	return false;
}

function getVm(n) {
	n = n || emptyObj;
	while (n.vm == null && n.parent)
		{ n = n.parent; }
	return n.vm;
}

function VNode() {}

var VNodeProto = VNode.prototype = {
	constructor: VNode,

	type:	null,

	vm:		null,

	// all this stuff can just live in attrs (as defined) just have getters here for it
	key:	null,
	ref:	null,
	data:	null,
	hooks:	null,
	ns:		null,

	el:		null,

	tag:	null,
	attrs:	null,
	body:	null,

	flags:	0,

	_class:	null,
	_diff:	null,

	// pending removal on promise resolution
	_dead:	false,
	// part of longest increasing subsequence?
	_lis:	false,

	idx:	null,
	parent:	null,

	/*
	// break out into optional fluent module
	key:	function(val) { this.key	= val; return this; },
	ref:	function(val) { this.ref	= val; return this; },		// deep refs
	data:	function(val) { this.data	= val; return this; },
	hooks:	function(val) { this.hooks	= val; return this; },		// h("div").hooks()
	html:	function(val) { this.html	= true; return this.body(val); },

	body:	function(val) { this.body	= val; return this; },
	*/
};

function defineText(body) {
	var node = new VNode;
	node.type = TEXT;
	node.body = body;
	return node;
}

// creates a one-shot self-ending stream that redraws target vm
// TODO: if it's already registered by any parent vm, then ignore to avoid simultaneous parent & child refresh

var tagCache = {};

var RE_ATTRS = /\[(\w+)(?:=(\w+))?\]/g;

function cssTag(raw) {
	{
		var cached = tagCache[raw];

		if (cached == null) {
			var tag, id, cls, attr;

			tagCache[raw] = cached = {
				tag:	(tag	= raw.match( /^[-\w]+/))		?	tag[0]						: "div",
				id:		(id		= raw.match( /#([-\w]+)/))		? 	id[1]						: null,
				class:	(cls	= raw.match(/\.([-\w.]+)/))		?	cls[1].replace(/\./g, " ")	: null,
				attrs:	null,
			};

			while (attr = RE_ATTRS.exec(raw)) {
				if (cached.attrs == null)
					{ cached.attrs = {}; }
				cached.attrs[attr[1]] = attr[2] || "";
			}
		}

		return cached;
	}
}

// (de)optimization flags

// forces slow bottom-up removeChild to fire deep willRemove/willUnmount hooks,
var DEEP_REMOVE = 1;
// prevents inserting/removing/reordering of children
var FIXED_BODY = 2;
// enables fast keyed lookup of children via binary search, expects homogeneous keyed body
var KEYED_LIST = 4;
// indicates an vnode match/diff/recycler function for body
var LAZY_LIST = 8;

function initElementNode(tag, attrs, body, flags) {
	var node = new VNode;

	node.type = ELEMENT;

	if (isSet(flags))
		{ node.flags = flags; }

	node.attrs = attrs;

	var parsed = cssTag(tag);

	node.tag = parsed.tag;

	// meh, weak assertion, will fail for id=0, etc.
	if (parsed.id || parsed.class || parsed.attrs) {
		var p = node.attrs || {};

		if (parsed.id && !isSet(p.id))
			{ p.id = parsed.id; }

		if (parsed.class) {
			node._class = parsed.class;		// static class
			p.class = parsed.class + (isSet(p.class) ? (" " + p.class) : "");
		}
		if (parsed.attrs) {
			for (var key in parsed.attrs)
				{ if (!isSet(p[key]))
					{ p[key] = parsed.attrs[key]; } }
		}

//		if (node.attrs !== p)
			node.attrs = p;
	}

	var mergedAttrs = node.attrs;

	if (isSet(mergedAttrs)) {
		if (isSet(mergedAttrs._key))
			{ node.key = mergedAttrs._key; }

		if (isSet(mergedAttrs._ref))
			{ node.ref = mergedAttrs._ref; }

		if (isSet(mergedAttrs._hooks))
			{ node.hooks = mergedAttrs._hooks; }

		if (isSet(mergedAttrs._data))
			{ node.data = mergedAttrs._data; }

		if (isSet(mergedAttrs._flags))
			{ node.flags = mergedAttrs._flags; }

		if (!isSet(node.key)) {
			if (isSet(node.ref))
				{ node.key = node.ref; }
			else if (isSet(mergedAttrs.id))
				{ node.key = mergedAttrs.id; }
			else if (isSet(mergedAttrs.name))
				{ node.key = mergedAttrs.name + (mergedAttrs.type === "radio" || mergedAttrs.type === "checkbox" ? mergedAttrs.value : ""); }
		}
	}

	if (body != null)
		{ node.body = body; }

	return node;
}

function setRef(vm, name, node) {
	var path = ["refs"].concat(name.split("."));
	deepSet(vm, path, node);
}

function setDeepRemove(node) {
	while (node = node.parent)
		{ node.flags |= DEEP_REMOVE; }
}

// vnew, vold
function preProc(vnew, parent, idx, ownVm) {
	if (vnew.type === VMODEL || vnew.type === VVIEW)
		{ return; }

	vnew.parent = parent;
	vnew.idx = idx;
	vnew.vm = ownVm;

	if (vnew.ref != null)
		{ setRef(getVm(vnew), vnew.ref, vnew); }

	var nh = vnew.hooks,
		vh = ownVm && ownVm.hooks;

	if (nh && (nh.willRemove || nh.didRemove) ||
		vh && (vh.willUnmount || vh.didUnmount))
		{ setDeepRemove(vnew); }

	if (isArr(vnew.body))
		{ preProcBody(vnew); }
	else {}
}

function preProcBody(vnew) {
	var body = vnew.body;

	for (var i = 0; i < body.length; i++) {
		var node2 = body[i];

		// remove false/null/undefined
		if (node2 === false || node2 == null)
			{ body.splice(i--, 1); }
		// flatten arrays
		else if (isArr(node2)) {
			insertArr(body, node2, i--, 1);
		}
		else {
			if (node2.type == null)
				{ body[i] = node2 = defineText(""+node2); }

			if (node2.type === TEXT) {
				// remove empty text nodes
				if (node2.body == null || node2.body === "")
					{ body.splice(i--, 1); }
				// merge with previous text node
				else if (i > 0 && body[i-1].type === TEXT) {
					body[i-1].body += node2.body;
					body.splice(i--, 1);
				}
				else
					{ preProc(node2, vnew, i, null); }
			}
			else
				{ preProc(node2, vnew, i, null); }
		}
	}
}

var unitlessProps = {
	animationIterationCount: true,
	boxFlex: true,
	boxFlexGroup: true,
	boxOrdinalGroup: true,
	columnCount: true,
	flex: true,
	flexGrow: true,
	flexPositive: true,
	flexShrink: true,
	flexNegative: true,
	flexOrder: true,
	gridRow: true,
	gridColumn: true,
	order: true,
	lineClamp: true,

	borderImageOutset: true,
	borderImageSlice: true,
	borderImageWidth: true,
	fontWeight: true,
	lineHeight: true,
	opacity: true,
	orphans: true,
	tabSize: true,
	widows: true,
	zIndex: true,
	zoom: true,

	fillOpacity: true,
	floodOpacity: true,
	stopOpacity: true,
	strokeDasharray: true,
	strokeDashoffset: true,
	strokeMiterlimit: true,
	strokeOpacity: true,
	strokeWidth: true
};

function autoPx(name, val) {
	{
		// typeof val === 'number' is faster but fails for numeric strings
		return !isNaN(val) && !unitlessProps[name] ? (val + "px") : val;
	}
}

// assumes if styles exist both are objects or both are strings
function patchStyle(n, o) {
	var ns =     (n.attrs || emptyObj).style;
	var os = o ? (o.attrs || emptyObj).style : null;

	// replace or remove in full
	if (ns == null || isVal(ns))
		{ n.el.style.cssText = ns; }
	else {
		for (var nn in ns) {
			var nv = ns[nn];

			if (os == null || nv != null && nv !== os[nn])
				{ n.el.style[nn] = autoPx(nn, nv); }
		}

		// clean old
		if (os) {
			for (var on in os) {
				if (ns[on] == null)
					{ n.el.style[on] = ""; }
			}
		}
	}
}

var didQueue = [];

function fireHook(hooks, name, o, n, immediate) {
	if (hooks != null) {
		var fn = o.hooks[name];

		if (fn) {
			if (name[0] === "d" && name[1] === "i" && name[2] === "d") {	// did*
				//	console.log(name + " should queue till repaint", o, n);
				immediate ? repaint(o.parent) && fn(o, n) : didQueue.push([fn, o, n]);
			}
			else {		// will*
				//	console.log(name + " may delay by promise", o, n);
				return fn(o, n);		// or pass  done() resolver
			}
		}
	}
}

function drainDidHooks(vm) {
	if (didQueue.length) {
		repaint(vm.node);

		var item;
		while (item = didQueue.shift())
			{ item[0](item[1], item[2]); }
	}
}

var doc = ENV_DOM ? document : null;

function closestVNode(el) {
	while (el._node == null)
		{ el = el.parentNode; }
	return el._node;
}

function createElement(tag, ns) {
	if (ns != null)
		{ return doc.createElementNS(ns, tag); }
	return doc.createElement(tag);
}

function createTextNode(body) {
	return doc.createTextNode(body);
}

function createComment(body) {
	return doc.createComment(body);
}

// ? removes if !recycled
function nextSib(sib) {
	return sib.nextSibling;
}

// ? removes if !recycled
function prevSib(sib) {
	return sib.previousSibling;
}

// TODO: this should collect all deep proms from all hooks and return Promise.all()
function deepNotifyRemove(node) {
	var vm = node.vm;

	var wuRes = vm != null && fireHook(vm.hooks, "willUnmount", vm, vm.data);

	var wrRes = fireHook(node.hooks, "willRemove", node);

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
		for (var i = 0; i < node.body.length; i++)
			{ deepNotifyRemove(node.body[i]); }
	}

	return wuRes || wrRes;
}

function _removeChild(parEl, el, immediate) {
	var node = el._node, vm = node.vm;

	if (isArr(node.body)) {
		if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE) {
			for (var i = 0; i < node.body.length; i++)
				{ _removeChild(el, node.body[i].el); }
		}
		else
			{ deepUnref(node); }
	}

	delete el._node;

	parEl.removeChild(el);

	fireHook(node.hooks, "didRemove", node, null, immediate);

	if (vm != null) {
		fireHook(vm.hooks, "didUnmount", vm, vm.data, immediate);
		vm.node = null;
	}
}

// todo: should delay parent unmount() by returning res prom?
function removeChild(parEl, el) {
	var node = el._node;

	// already marked for removal
	if (node._dead) { return; }

	var res = deepNotifyRemove(node);

	if (res != null && isProm(res)) {
		node._dead = true;
		res.then(curry(_removeChild, [parEl, el, true]));
	}
	else
		{ _removeChild(parEl, el); }
}

function deepUnref(node) {
	var obody = node.body;

	for (var i = 0; i < obody.length; i++) {
		var o2 = obody[i];
		delete o2.el._node;

		if (o2.vm != null)
			{ o2.vm.node = null; }

		if (isArr(o2.body))
			{ deepUnref(o2); }
	}
}

function clearChildren(parent) {
	var parEl = parent.el;

	if ((parent.flags & DEEP_REMOVE) === 0) {
		isArr(parent.body) && deepUnref(parent);
		parEl.textContent = null;
	}
	else {
		var el = parEl.firstChild;

		do {
			var next = nextSib(el);
			removeChild(parEl, el);
		} while (el = next);
	}
}

// todo: hooks
function insertBefore(parEl, el, refEl) {
	var node = el._node, inDom = el.parentNode != null;

	// el === refEl is asserted as a no-op insert called to fire hooks
	var vm = (el === refEl || !inDom) ? node.vm : null;

	if (vm != null)
		{ fireHook(vm.hooks, "willMount", vm, vm.data); }

	fireHook(node.hooks, inDom ? "willReinsert" : "willInsert", node);
	parEl.insertBefore(el, refEl);
	fireHook(node.hooks, inDom ? "didReinsert" : "didInsert", node);

	if (vm != null)
		{ fireHook(vm.hooks, "didMount", vm, vm.data); }
}

function insertAfter(parEl, el, refEl) {
	insertBefore(parEl, el, refEl ? nextSib(refEl) : null);
}

var onemit = {};

function emitCfg(cfg) {
	assignObj(onemit, cfg);
}

function emit(evName) {
	var targ = this,
		src = targ;

	var args = sliceArgs(arguments, 1).concat(src, src.data);

	do {
		var evs = targ.onemit;
		var fn = evs ? evs[evName] : null;

		if (fn) {
			fn.apply(targ, args);
			break;
		}
	} while (targ = targ.parent());

	if (onemit[evName])
		{ onemit[evName].apply(targ, args); }
}

var onevent = noop;

function config(newCfg) {
	onevent = newCfg.onevent || onevent;

	{
		if (newCfg.onemit)
			{ emitCfg(newCfg.onemit); }
	}

	
}

function bindEv(el, type, fn) {
	el[type] = fn;
}

function exec(fn, args, e, node, vm) {
	var out = fn.apply(vm, args.concat([e, node, vm, vm.data]));

	// should these respect out === false?
	vm.onevent(e, node, vm, vm.data, args);
	onevent.call(null, e, node, vm, vm.data, args);

	if (out === false) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function handle(e) {
	var node = closestVNode(e.target);
	var vm = getVm(node);

	var evDef = e.currentTarget._node.attrs["on" + e.type], fn, args;

	if (isArr(evDef)) {
		fn = evDef[0];
		args = evDef.slice(1);
		exec(fn, args, e, node, vm);
	}
	else {
		for (var sel in evDef) {
			if (e.target.matches(sel)) {
				var evDef2 = evDef[sel];

				if (isArr(evDef2)) {
					fn = evDef2[0];
					args = evDef2.slice(1);
				}
				else {
					fn = evDef2;
					args = [];
				}

				exec(fn, args, e, node, vm);
			}
		}
	}
}

function patchEvent(node, name, nval, oval) {
	if (nval === oval)
		{ return; }

	var el = node.el;

	if (nval == null || isFunc(nval))
		{ bindEv(el, name, nval); }
	else if (oval == null)
		{ bindEv(el, name, handle); }
}

function remAttr(node, name, asProp) {
	if (name[0] === ".") {
		name = name.substr(1);
		asProp = true;
	}

	if (asProp)
		{ node.el[name] = ""; }
	else
		{ node.el.removeAttribute(name); }
}

// setAttr
// diff, ".", "on*", bool vals, skip _*, value/checked/selected selectedIndex
function setAttr(node, name, val, asProp, initial) {
	var el = node.el;

	if (val == null)
		{ !initial && remAttr(node, name, false); }		// will also removeAttr of style: null
	else if (node.ns != null)
		{ el.setAttribute(name, val); }
	else if (name === "class")
		{ el.className = val; }
	else if (name === "id" || typeof val === "boolean" || asProp)
		{ el[name] = val; }
	else if (name[0] === ".")
		{ el[name.substr(1)] = val; }
	else
		{ el.setAttribute(name, val); }
}

function patchAttrs(vnode, donor, initial) {
	var nattrs = vnode.attrs || emptyObj;
	var oattrs = donor.attrs || emptyObj;

	if (nattrs === oattrs) {
		
	}
	else {
		for (var key in nattrs) {
			var nval = nattrs[key];
			var isDyn = isDynProp(vnode.tag, key);
			var oval = isDyn ? vnode.el[key] : oattrs[key];

			if (nval === oval) {}
			else if (isStyleProp(key))
				{ patchStyle(vnode, donor); }
			else if (isSplProp(key)) {}
			else if (isEvProp(key))
				{ patchEvent(vnode, key, nval, oval); }
			else
				{ setAttr(vnode, key, nval, isDyn, initial); }
		}

		// TODO: bench style.cssText = "" vs removeAttribute("style")
		for (var key in oattrs) {
			!(key in nattrs) &&
			!isSplProp(key) &&
			remAttr(vnode, key, isDynProp(vnode.tag, key) || isEvProp(key));
		}
	}
}

function createView(view, data, key, opts) {
	if (view.type === VVIEW) {
		data	= view.data;
		key		= view.key;
		opts	= view.opts;
		view	= view.view;
	}

	return new ViewModel(view, data, key, opts);
}

//import { XML_NS, XLINK_NS } from './defineSvgElement';
function hydrateBody(vnode) {
	for (var i = 0; i < vnode.body.length; i++) {
		var vnode2 = vnode.body[i];
		var type2 = vnode2.type;

		// ELEMENT,TEXT,COMMENT
		if (type2 <= COMMENT)
			{ insertBefore(vnode.el, hydrate(vnode2)); }		// vnode.el.appendChild(hydrate(vnode2))
		else if (type2 === VVIEW) {
			var vm = createView(vnode2.view, vnode2.data, vnode2.key, vnode2.opts)._redraw(vnode, i, false);		// todo: handle new data updates
			type2 = vm.node.type;
			insertBefore(vnode.el, hydrate(vm.node));
		}
		else if (type2 === VMODEL) {
			var vm = vnode2.vm;
			vm._redraw(vnode, i);					// , false
			type2 = vm.node.type;
			insertBefore(vnode.el, vm.node.el);		// , hydrate(vm.node)
		}
	}
}

//  TODO: DRY this out. reusing normal patch here negatively affects V8's JIT
function hydrate(vnode, withEl) {
	if (vnode.el == null) {
		if (vnode.type === ELEMENT) {
			vnode.el = withEl || createElement(vnode.tag, vnode.ns);

		//	if (vnode.tag === "svg")
		//		vnode.el.setAttributeNS(XML_NS, 'xmlns:xlink', XLINK_NS);

			if (vnode.attrs != null)
				{ patchAttrs(vnode, emptyObj, true); }

			if ((vnode.flags & LAZY_LIST) === LAZY_LIST)	// vnode.body instanceof LazyList
				{ vnode.body.body(vnode); }

			if (isArr(vnode.body))
				{ hydrateBody(vnode); }
			else if (vnode.body != null && vnode.body !== "")
				{ vnode.el.textContent = vnode.body; }
		}
		else if (vnode.type === TEXT)
			{ vnode.el = withEl || createTextNode(vnode.body); }
		else if (vnode.type === COMMENT)
			{ vnode.el = withEl || createComment(vnode.body); }
	}

	vnode.el._node = vnode;

	return vnode.el;
}

// prevent GCC from inlining some large funcs (which negatively affects Chrome's JIT)
//window.syncChildren = syncChildren;
window.lisMove = lisMove;

function nextNode(node, body) {
	return body[node.idx + 1];
}

function prevNode(node, body) {
	return body[node.idx - 1];
}

function parentNode(node) {
	return node.parent;
}

var BREAK = 1;
var BREAK_ALL = 2;

function syncDir(advSib, advNode, insert, sibName, nodeName, invSibName, invNodeName, invInsert) {
	return function(node, parEl, body, state, convTest, lis) {
		var sibNode, tmpSib;

		if (state[sibName] != null) {
			// skip dom elements not created by domvm
			if ((sibNode = state[sibName]._node) == null) {
				state[sibName] = advSib(state[sibName]);
				return;
			}

			if (parentNode(sibNode) !== node) {
				tmpSib = advSib(state[sibName]);
				sibNode.vm != null ? sibNode.vm.unmount(true) : removeChild(parEl, state[sibName]);
				state[sibName] = tmpSib;
				return;
			}
		}

		if (state[nodeName] == convTest)
			{ return BREAK_ALL; }
		else if (state[nodeName].el == null) {
			insert(parEl, hydrate(state[nodeName]), state[sibName]);	// should lis be updated here?
			state[nodeName] = advNode(state[nodeName], body);		// also need to advance sib?
		}
		else if (state[nodeName].el === state[sibName]) {
			state[nodeName] = advNode(state[nodeName], body);
			state[sibName] = advSib(state[sibName]);
		}
		// head->tail or tail->head
		else if (!lis && sibNode === state[invNodeName]) {
			tmpSib = state[sibName];
			state[sibName] = advSib(tmpSib);
			invInsert(parEl, tmpSib, state[invSibName]);
			state[invSibName] = tmpSib;
		}
		else {
			if (lis && state[sibName] != null)
				{ return lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state); }

			return BREAK;
		}
	};
}

function lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state) {
	if (sibNode._lis) {
		insert(parEl, state[nodeName].el, state[sibName]);
		state[nodeName] = advNode(state[nodeName], body);
	}
	else {
		// find closest tomb
		var t = binaryFindLarger(sibNode.idx, state.tombs);
		sibNode._lis = true;
		var tmpSib = advSib(state[sibName]);
		insert(parEl, state[sibName], t != null ? body[state.tombs[t]].el : t);

		if (t == null)
			{ state.tombs.push(sibNode.idx); }
		else
			{ state.tombs.splice(t, 0, sibNode.idx); }

		state[sibName] = tmpSib;
	}
}

var syncLft = syncDir(nextSib, nextNode, insertBefore, "lftSib", "lftNode", "rgtSib", "rgtNode", insertAfter);
var syncRgt = syncDir(prevSib, prevNode, insertAfter, "rgtSib", "rgtNode", "lftSib", "lftNode", insertBefore);

function syncChildren(node, donor) {
	var obody	= donor.body,
		parEl	= node.el,
		body	= node.body,
		state = {
			lftNode:	body[0],
			rgtNode:	body[body.length - 1],
			lftSib:		((obody)[0] || emptyObj).el,
			rgtSib:		(obody[obody.length - 1] || emptyObj).el,
		};

	converge:
	while (1) {
//		from_left:
		while (1) {
			var l = syncLft(node, parEl, body, state, null, false);
			if (l === BREAK) { break; }
			if (l === BREAK_ALL) { break converge; }
		}

//		from_right:
		while (1) {
			var r = syncRgt(node, parEl, body, state, state.lftNode, false);
			if (r === BREAK) { break; }
			if (r === BREAK_ALL) { break converge; }
		}

		sortDOM(node, parEl, body, state);
		break;
	}
}

// TODO: also use the state.rgtSib and state.rgtNode bounds, plus reduce LIS range
function sortDOM(node, parEl, body, state) {
	var kids = Array.prototype.slice.call(parEl.childNodes);
	var domIdxs = [];

	for (var k = 0; k < kids.length; k++) {
		var n = kids[k]._node;

		if (n.parent === node)
			{ domIdxs.push(n.idx); }
	}

	// list of non-movable vnode indices (already in correct order in old dom)
	var tombs = longestIncreasingSubsequence(domIdxs).map(function (i) { return domIdxs[i]; });

	for (var i = 0; i < tombs.length; i++)
		{ body[tombs[i]]._lis = true; }

	state.tombs = tombs;

	while (1) {
		var r = syncLft(node, parEl, body, state, null, true);
		if (r === BREAK_ALL) { break; }
	}
}

function alreadyAdopted(vnode) {
	return vnode.el._node.parent !== vnode.parent;
}

function takeSeqIndex(n, obody, fromIdx) {
	return obody[fromIdx];
}

function findSeqThorough(n, obody, fromIdx) {		// pre-tested isView?
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.vm != null) {
			// match by key & viewFn || vm
			if (n.type === VVIEW && o.vm.view === n.view && o.vm.key === n.key || n.type === VMODEL && o.vm === n.vm)
				{ return o; }
		}
		else if (!alreadyAdopted(o) && n.tag === o.tag && n.type === o.type && n.key === o.key && (n.flags & ~DEEP_REMOVE) === (o.flags & ~DEEP_REMOVE))
			{ return o; }
	}

	return null;
}

function findHashKeyed(n, obody, fromIdx) {
	return obody[obody._keys[n.key]];
}

/*
// list must be a sorted list of vnodes by key
function findBinKeyed(n, list) {
	var idx = binaryKeySearch(list, n.key);
	return idx > -1 ? list[idx] : null;
}
*/

// have it handle initial hydrate? !donor?
// types (and tags if ELEM) are assumed the same, and donor exists
function patch(vnode, donor) {
	fireHook(donor.hooks, "willRecycle", donor, vnode);

	var el = vnode.el = donor.el;

	var obody = donor.body;
	var nbody = vnode.body;

	el._node = vnode;

	// "" => ""
	if (vnode.type === TEXT && nbody !== obody) {
		el.nodeValue = nbody;
		return;
	}

	if (vnode.attrs != null || donor.attrs != null)
		{ patchAttrs(vnode, donor, false); }

	// patch events

	var oldIsArr = isArr(obody);
	var newIsArr = isArr(nbody);
	var lazyList = (vnode.flags & LAZY_LIST) === LAZY_LIST;

//	var nonEqNewBody = nbody != null && nbody !== obody;

	if (oldIsArr) {
		// [] => []
		if (newIsArr || lazyList)
			{ patchChildren(vnode, donor); }
		// [] => "" | null
		else if (nbody !== obody) {
			if (nbody != null)
				{ el.textContent = nbody; }
			else
				{ clearChildren(donor); }
		}
	}
	else {
		// "" | null => []
		if (newIsArr) {
			clearChildren(donor);
			hydrateBody(vnode);
		}
		// "" | null => "" | null
		else if (nbody !== obody) {
			if (el.firstChild)
				{ el.firstChild.nodeValue = nbody; }
			else
				{ el.textContent = nbody; }
		}
	}

	fireHook(donor.hooks, "didRecycle", donor, vnode);
}

// larger qtys of KEYED_LIST children will use binary search
//const SEQ_FAILS_MAX = 100;

// TODO: modify vtree matcher to work similar to dom reconciler for keyed from left -> from right -> head/tail -> binary
// fall back to binary if after failing nri - nli > SEQ_FAILS_MAX
// while-advance non-keyed fromIdx
// [] => []
function patchChildren(vnode, donor) {
	var nbody		= vnode.body,
		nlen		= nbody.length,
		obody		= donor.body,
		olen		= obody.length,
		isLazy		= (vnode.flags & LAZY_LIST) === LAZY_LIST,
		isFixed		= (vnode.flags & FIXED_BODY) === FIXED_BODY,
		isKeyed		= (vnode.flags & KEYED_LIST) === KEYED_LIST,
		domSync		= !isFixed && vnode.type === ELEMENT,
		doFind		= true,
		find		= (
			isKeyed ? findHashKeyed :				// keyed lists/lazyLists
			isFixed || isLazy ? takeSeqIndex :		// unkeyed lazyLists and FIXED_BODY
			findSeqThorough							// more complex stuff
		);

	if (isKeyed) {
		var keys = {};
		for (var i = 0; i < obody.length; i++)
			{ keys[obody[i].key] = i; }
		obody._keys = keys;
	}

	if (domSync && nlen === 0) {
		clearChildren(donor);
		if (isLazy)
			{ vnode.body = []; }	// nbody.tpl(all);
		return;
	}

	var donor2,
		node2,
		foundIdx,
		patched = 0,
		everNonseq = false,
		fromIdx = 0;		// first unrecycled node (search head)

	if (isLazy) {
		var fnode2 = {key: null};
		var nbodyNew = Array(nlen);
	}

	for (var i = 0; i < nlen; i++) {
		if (isLazy) {
			var remake = false;
			var diffRes = null;

			if (doFind) {
				if (isKeyed)
					{ fnode2.key = nbody.key(i); }

				donor2 = find(fnode2, obody, fromIdx);
			}

			if (donor2 != null) {
                foundIdx = donor2.idx;
				diffRes = nbody.diff(i, donor2);

				// diff returns same, so cheaply adopt vnode without patching
				if (diffRes === true) {
					node2 = donor2;
					node2.parent = vnode;
					node2.idx = i;
					node2._lis = false;
				}
				// diff returns new diffVals, so generate new vnode & patch
				else
					{ remake = true; }
			}
			else
				{ remake = true; }

			if (remake) {
				node2 = nbody.tpl(i);			// what if this is a VVIEW, VMODEL, injected element?
				preProc(node2, vnode, i);

				node2._diff = diffRes != null ? diffRes : nbody.diff(i);

				if (donor2 != null)
					{ patch(node2, donor2); }
			}
			else {
				// TODO: flag tmp FIXED_BODY on unchanged nodes?

				// domSync = true;		if any idx changes or new nodes added/removed
			}

			nbodyNew[i] = node2;
		}
		else {
			var node2 = nbody[i];
			var type2 = node2.type;

			// ELEMENT,TEXT,COMMENT
			if (type2 <= COMMENT) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {
					patch(node2, donor2);
					foundIdx = donor2.idx;
				}
			}
			else if (type2 === VVIEW) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {		// update/moveTo
					foundIdx = donor2.idx;
					var vm = donor2.vm._update(node2.data, vnode, i);		// withDOM
				}
				else
					{ var vm = createView(node2.view, node2.data, node2.key, node2.opts)._redraw(vnode, i, false); }	// createView, no dom (will be handled by sync below)

				type2 = vm.node.type;
			}
			else if (type2 === VMODEL) {
				// if the injected vm has never been rendered, this vm._update() serves as the
				// initial vtree creator, but must avoid hydrating (creating .el) because syncChildren()
				// which is responsible for mounting below (and optionally hydrating), tests .el presence
				// to determine if hydration & mounting are needed
				var withDOM = isHydrated(node2.vm);

				var vm = node2.vm._update(node2.data, vnode, i, withDOM);
				type2 = vm.node.type;
			}
		}

		// found donor & during a sequential search ...at search head
		if (!isKeyed && donor2 != null) {
			if (foundIdx === fromIdx) {
				// advance head
				fromIdx++;
				// if all old vnodes adopted and more exist, stop searching
				if (fromIdx === olen && nlen > olen) {
					// short-circuit find, allow loop just create/init rest
					donor2 = null;
					doFind = false;
				}
			}
			else
				{ everNonseq = true; }

			if (olen > 100 && everNonseq && ++patched % 10 === 0)
				{ while (fromIdx < olen && alreadyAdopted(obody[fromIdx]))
					{ fromIdx++; } }
		}
	}

	// replace List w/ new body
	if (isLazy)
		{ vnode.body = nbodyNew; }

	domSync && syncChildren(vnode, donor);
}

// view + key serve as the vm's unique identity
function ViewModel(view, data, key, opts) {
	var vm = this;

	vm.view = view;
	vm.data = data;
	vm.key = key;

	if (opts) {
		vm.opts = opts;
		vm.config(opts);
	}

	var out = isPlainObj(view) ? view : view.call(vm, vm, data, key, opts);

	if (isFunc(out))
		{ vm.render = out; }
	else {
		vm.render = out.render;
		vm.config(out);
	}

	// these must be wrapped here since they're debounced per view
	vm._redrawAsync = raft(function (_) { return vm.redraw(true); });
	vm._updateAsync = raft(function (newData) { return vm.update(newData, true); });

	vm.init && vm.init.call(vm, vm, vm.data, vm.key, opts);
}

var ViewModelProto = ViewModel.prototype = {
	constructor: ViewModel,

	_diff:	null,	// diff cache

	init:	null,
	view:	null,
	key:	null,
	data:	null,
	state:	null,
	api:	null,
	opts:	null,
	node:	null,
	hooks:	null,
	onevent: noop,
	refs:	null,
	render:	null,

	mount: mount,
	unmount: unmount,
	config: function(opts) {
		var t = this;

		if (opts.init)
			{ t.init = opts.init; }
		if (opts.diff)
			{ t.diff = opts.diff; }
		if (opts.onevent)
			{ t.onevent = opts.onevent; }

		// maybe invert assignment order?
		if (opts.hooks)
			{ t.hooks = assignObj(t.hooks || {}, opts.hooks); }

		{
			if (opts.onemit)
				{ t.onemit = assignObj(t.onemit || {}, opts.onemit); }
		}
	},
	parent: function() {
		return getVm(this.node.parent);
	},
	root: function() {
		var p = this.node;

		while (p.parent)
			{ p = p.parent; }

		return p.vm;
	},
	redraw: function(sync) {
		var vm = this;
		sync ? vm._redraw(null, null, isHydrated(vm)) : vm._redrawAsync();
		return vm;
	},
	update: function(newData, sync) {
		var vm = this;
		sync ? vm._update(newData, null, null, isHydrated(vm)) : vm._updateAsync(newData);
		return vm;
	},

	_update: updateSync,
	_redraw: redrawSync,
	_redrawAsync: null,
	_updateAsync: null,
};

function mount(el, isRoot) {
	var vm = this;

	if (isRoot) {
		clearChildren({el: el, flags: 0});

		vm._redraw(null, null, false);

		// if placeholder node doesnt match root tag
		if (el.nodeName.toLowerCase() !== vm.node.tag) {
			hydrate(vm.node);
			insertBefore(el.parentNode, vm.node.el, el);
			el.parentNode.removeChild(el);
		}
		else
			{ insertBefore(el.parentNode, hydrate(vm.node, el), el); }
	}
	else {
		vm._redraw(null, null);

		if (el)
			{ insertBefore(el, vm.node.el); }
	}

	if (el)
		{ drainDidHooks(vm); }

	return vm;
}

// asSub means this was called from a sub-routine, so don't drain did* hook queue
function unmount(asSub) {
	var vm = this;

	var node = vm.node;
	var parEl = node.el.parentNode;

	// edge bug: this could also be willRemove promise-delayed; should .then() or something to make sure hooks fire in order
	removeChild(parEl, node.el);

	if (!asSub)
		{ drainDidHooks(vm); }
}

function reParent(vm, vold, newParent, newIdx) {
	if (newParent != null) {
		newParent.body[newIdx] = vold;
		vold.idx = newIdx;
		vold.parent = newParent;
		vold._lis = false;
	}
	return vm;
}

function redrawSync(newParent, newIdx, withDOM) {
	var isRedrawRoot = newParent == null;
	var vm = this;
	var isMounted = vm.node && vm.node.el && vm.node.el.parentNode;

	var vold = vm.node, oldDiff, newDiff;

	if (vm.diff != null) {
		oldDiff = vm._diff;
		vm._diff = newDiff = vm.diff(vm, vm.data);

		if (vold != null) {
			var cmpFn = isArr(oldDiff) ? cmpArr : cmpObj;
			var isSame = oldDiff === newDiff || cmpFn(oldDiff, newDiff);

			if (isSame)
				{ return reParent(vm, vold, newParent, newIdx); }
		}
	}

	isMounted && fireHook(vm.hooks, "willRedraw", vm, vm.data);

	var vnew = vm.render.call(vm, vm, vm.data, oldDiff, newDiff);

	if (vnew === vold)
		{ return reParent(vm, vold, newParent, newIdx); }

	// todo: test result of willRedraw hooks before clearing refs
	vm.refs = null;

	// always assign vm key to root vnode (this is a de-opt)
	if (vm.key != null && vnew.key !== vm.key)
		{ vnew.key = vm.key; }

	vm.node = vnew;

	if (newParent) {
		preProc(vnew, newParent, newIdx, vm);
		newParent.body[newIdx] = vnew;
	}
	else if (vold && vold.parent) {
		preProc(vnew, vold.parent, vold.idx, vm);
		vold.parent.body[vold.idx] = vnew;
	}
	else
		{ preProc(vnew, null, null, vm); }

	if (withDOM !== false) {
		if (vold) {
			// root node replacement
			if (vold.tag !== vnew.tag || vold.key !== vnew.key) {
				// hack to prevent the replacement from triggering mount/unmount
				vold.vm = vnew.vm = null;

				var parEl = vold.el.parentNode;
				var refEl = nextSib(vold.el);
				removeChild(parEl, vold.el);
				insertBefore(parEl, hydrate(vnew), refEl);

				// another hack that allows any higher-level syncChildren to set
				// reconciliation bounds using a live node
				vold.el = vnew.el;

				// restore
				vnew.vm = vm;
			}
			else
				{ patch(vnew, vold); }
		}
		else
			{ hydrate(vnew); }
	}

	isMounted && fireHook(vm.hooks, "didRedraw", vm, vm.data);

	if (isRedrawRoot && isMounted)
		{ drainDidHooks(vm); }

	return vm;
}

// this also doubles as moveTo
// TODO? @withRedraw (prevent redraw from firing)
function updateSync(newData, newParent, newIdx, withDOM) {
	var vm = this;

	if (newData != null) {
		if (vm.data !== newData) {
			fireHook(vm.hooks, "willUpdate", vm, newData);
			vm.data = newData;

			
		}
	}

	return vm._redraw(newParent, newIdx, withDOM);
}

function defineElement(tag, arg1, arg2, flags) {
	var attrs, body;

	if (arg2 == null) {
		if (isPlainObj(arg1))
			{ attrs = arg1; }
		else
			{ body = arg1; }
	}
	else {
		attrs = arg1;
		body = arg2;
	}

	return initElementNode(tag, attrs, body, flags);
}

//export const XML_NS = "http://www.w3.org/2000/xmlns/";
var SVG_NS = "http://www.w3.org/2000/svg";

function defineSvgElement(tag, arg1, arg2, flags) {
	var n = defineElement(tag, arg1, arg2, flags);
	n.ns = SVG_NS;
	return n;
}

function defineComment(body) {
	var node = new VNode;
	node.type = COMMENT;
	node.body = body;
	return node;
}

// placeholder for declared views
function VView(view, data, key, opts) {
	this.view = view;
	this.data = data;
	this.key = key;
	this.opts = opts;
}

VView.prototype = {
	constructor: VView,

	type: VVIEW,
	view: null,
	data: null,
	key: null,
	opts: null,
};

function defineView(view, data, key, opts) {
	return new VView(view, data, key, opts);
}

// placeholder for injected ViewModels
function VModel(vm) {
	this.vm = vm;
}

VModel.prototype = {
	constructor: VModel,

	type: VMODEL,
	vm: null,
};

function injectView(vm) {
//	if (vm.node == null)
//		vm._redraw(null, null, false);

//	return vm.node;

	return new VModel(vm);
}

function injectElement(el) {
	var node = new VNode;
	node.type = ELEMENT;
	node.el = node.key = el;
	return node;
}

function lazyList(items, cfg) {
	var len = items.length;

	var self = {
		items: items,
		length: len,
		// defaults to returning item identity (or position?)
		key: function(i) {
			return cfg.key(items[i], i);
		},
		// default returns 0?
		diff: function(i, donor) {
			var newVals = cfg.diff(items[i], i);
			if (donor == null)
				{ return newVals; }
			var oldVals = donor._diff;
			var same = newVals === oldVals || isArr(oldVals) ? cmpArr(newVals, oldVals) : cmpObj(newVals, oldVals);
			return same || newVals;
		},
		tpl: function(i) {
			return cfg.tpl(items[i], i);
		},
		map: function(tpl) {
			cfg.tpl = tpl;
			return self;
		},
		body: function(vnode) {
			var nbody = Array(len);

			for (var i = 0; i < len; i++) {
				var vnode2 = self.tpl(i);

			//	if ((vnode.flags & KEYED_LIST) === KEYED_LIST && self. != null)
			//		vnode2.key = getKey(item);

				vnode2._diff = self.diff(i);			// holds oldVals for cmp

				nbody[i] = vnode2;

				// run preproc pass (should this be just preProc in above loop?) bench
				preProc(vnode2, vnode, i);
			}

			// replace List with generated body
			vnode.body = nbody;
		}
	};

	return self;
}

var nano = {
	config: config,

	ViewModel: ViewModel,
	VNode: VNode,

	createView: createView,

	defineElement: defineElement,
	defineSvgElement: defineSvgElement,
	defineText: defineText,
	defineComment: defineComment,
	defineView: defineView,

	injectView: injectView,
	injectElement: injectElement,

	lazyList: lazyList,

	FIXED_BODY: FIXED_BODY,
	DEEP_REMOVE: DEEP_REMOVE,
	KEYED_LIST: KEYED_LIST,
	LAZY_LIST: LAZY_LIST,
};

function protoPatch(n, doRepaint) {
	patch$1(this, n, doRepaint);
}

// newNode can be either {class: style: } or full new VNode
// will/didPatch hooks?
function patch$1(o, n, doRepaint) {
	if (n.type != null) {
		// no full patching of view roots, just use redraw!
		if (o.vm != null)
			{ return; }

		preProc(n, o.parent, o.idx, null);
		o.parent.body[o.idx] = n;
		patch(n, o);
		doRepaint && repaint(n);
		drainDidHooks(getVm(n));
	}
	else {
		// TODO: re-establish refs

		// shallow-clone target
		var donor = Object.create(o);
		// fixate orig attrs
		donor.attrs = assignObj({}, o.attrs);
		// assign new attrs into live targ node
		var oattrs = assignObj(o.attrs, n);
		// prepend any fixed shorthand class
		if (o._class != null) {
			var aclass = oattrs.class;
			oattrs.class = aclass != null && aclass !== "" ? o._class + " " + aclass : o._class;
		}

		patchAttrs(o, donor);

		doRepaint && repaint(o);
	}
}

VNodeProto.patch = protoPatch;

function nextSubVms(n, accum) {
	var body = n.body;

	if (isArr(body)) {
		for (var i = 0; i < body.length; i++) {
			var n2 = body[i];

			if (n2.vm != null)
				{ accum.push(n2.vm); }
			else
				{ nextSubVms(n2, accum); }
		}
	}

	return accum;
}

function defineElementSpread(tag) {
	var args = arguments;
	var len = args.length;
	var body, attrs;

	if (len > 1) {
		var bodyIdx = 1;

		if (isPlainObj(args[1])) {
			attrs = args[1];
			bodyIdx = 2;
		}

		if (len === bodyIdx + 1 && (isVal(args[bodyIdx]) || isArr(args[bodyIdx]) || attrs && (attrs._flags & LAZY_LIST) === LAZY_LIST))
			{ body = args[bodyIdx]; }
		else
			{ body = sliceArgs(args, bodyIdx); }
	}

	return initElementNode(tag, attrs, body);
}

function defineSvgElementSpread() {
	var n = defineElementSpread.apply(null, arguments);
	n.ns = SVG_NS;
	return n;
}

ViewModelProto.emit = emit;
ViewModelProto.onemit = null;

ViewModelProto.body = function() {
	return nextSubVms(this.node, []);
};

nano.defineElementSpread = defineElementSpread;
nano.defineSvgElementSpread = defineSvgElementSpread;

return nano;

})));
//# sourceMappingURL=domvm.micro.js.map


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(2);
var View = /** @class */ (function () {
    function View(_container, config) {
        this._uid = core_1.uid();
        this.config = config || {};
    }
    View.prototype.mount = function (container, vnode) {
        if (vnode) {
            this._view = vnode;
        }
        if (container && this._view && this._view.mount) {
            // init view inside of HTML container
            this._container = html_1.toNode(container);
            if (this._container.tagName) {
                this._view.mount(this._container);
            }
            else if (this._container.attach) {
                this._container.attach(this);
            }
        }
    };
    View.prototype.unmount = function () {
        var rootView = this.getRootView();
        if (rootView && rootView.node) {
            rootView.unmount();
            this._view = null;
        }
    };
    View.prototype.getRootView = function () {
        return this._view;
    };
    View.prototype.getRootNode = function () {
        return this._view && this._view.node && this._view.node.el;
    };
    View.prototype.paint = function () {
        if (this._view && ( // was mounted
        this._view.node || // already rendered node
            this._container)) { // not rendered, but has container
            this._doNotRepaint = false;
            this._view.redraw();
        }
    };
    return View;
}());
exports.View = View;
function toViewLike(view) {
    return {
        getRootView: function () { return view; },
        paint: function () { return view.node && view.redraw(); },
        mount: function (container) { return view.mount(container); }
    };
}
exports.toViewLike = toViewLike;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(3);
var Loader = /** @class */ (function () {
    function Loader(parent, changes) {
        this._parent = parent;
        this._changes = changes; // todo: [dirty] mutation
    }
    Loader.prototype.load = function (url, driver) {
        var _this = this;
        return this._parent.loadData = url.load().then(function (data) {
            _this._parent.removeAll();
            _this.parse(data, driver);
        });
    };
    Loader.prototype.parse = function (data, driver) {
        if (driver === void 0) { driver = "json"; }
        driver = helpers_1.toDataDriver(driver);
        data = driver.toJsonArray(data);
        this._parent.$parse(data);
    };
    Loader.prototype.save = function (url) {
        var _this = this;
        var _loop_1 = function (el) {
            if (el.saving || el.pending) {
                helpers_1.dhxWarning("item is saving");
            }
            else {
                var prevEl_1 = this_1._findPrevState(el.id);
                if (prevEl_1 && prevEl_1.saving) {
                    var pending = new Promise(function (res, rej) {
                        prevEl_1.promise.then(function () {
                            el.pending = false;
                            res(_this._setPromise(el, url));
                        }).catch(function (err) {
                            _this._removeFromOrder(prevEl_1);
                            _this._setPromise(el, url);
                            helpers_1.dhxWarning(err);
                            rej(err);
                        });
                    });
                    this_1._addToChain(pending);
                    el.pending = true;
                }
                else {
                    this_1._setPromise(el, url);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            _loop_1(el);
        }
        this._parent.saveData.then(function () {
            _this._saving = false;
        });
    };
    Loader.prototype._setPromise = function (el, url) {
        var _this = this;
        el.promise = url.save(el.obj, el.status);
        el.promise.then(function () {
            _this._removeFromOrder(el);
        }).catch(function (err) {
            el.saving = false;
            el.error = true;
            helpers_1.dhxError(err);
        });
        el.saving = true;
        this._saving = true;
        this._addToChain(el.promise);
        return el.promise;
    };
    Loader.prototype._addToChain = function (promise) {
        // tslint:disable-next-line:prefer-conditional-expression
        if (this._parent.saveData && this._saving) {
            this._parent.saveData = this._parent.saveData.then(function () { return promise; });
        }
        else {
            this._parent.saveData = promise;
        }
    };
    Loader.prototype._findPrevState = function (id) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id === id) {
                return el;
            }
        }
        return null;
    };
    Loader.prototype._removeFromOrder = function (el) {
        this._changes.order = this._changes.order.filter(function (item) { return !helpers_1.isEqualObj(item, el); });
    };
    return Loader;
}());
exports.Loader = Loader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(30);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9), __webpack_require__(31)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml_1 = __webpack_require__(33);
var ARRAY_NAME = "items";
var ITEM_NAME = "item";
var XMLDriver = /** @class */ (function () {
    function XMLDriver() {
    }
    XMLDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    XMLDriver.prototype.serialize = function (data) {
        return xml_1.jsonToXML(data);
    };
    XMLDriver.prototype.getFields = function (row) {
        return row;
    };
    XMLDriver.prototype.getRows = function (data) {
        if (typeof data === "string") {
            data = this._fromString(data);
        }
        var childNodes = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes;
        if (!childNodes || !childNodes.length) {
            return null;
        }
        return this._getRows(childNodes);
    };
    XMLDriver.prototype._getRows = function (nodes) {
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].tagName === ITEM_NAME) {
                result.push(this._nodeToJS(nodes[i]));
            }
        }
        return result;
    };
    XMLDriver.prototype._fromString = function (data) {
        return (new DOMParser()).parseFromString(data, "text/xml");
    };
    XMLDriver.prototype._nodeToJS = function (node) {
        var result = {};
        if (this._haveAttrs(node)) {
            var attrs = node.attributes;
            for (var i = 0; i < attrs.length; i++) {
                var _a = attrs[i], name_1 = _a.name, value = _a.value;
                result[name_1] = this._toType(value);
            }
        }
        if (node.nodeType === 3) {
            result.value = result.value || this._toType(node.textContent);
            return result;
        }
        var childNodes = node.childNodes;
        if (childNodes) {
            for (var i = 0; i < childNodes.length; i++) {
                var subNode = childNodes[i];
                var tag = subNode.tagName;
                if (!tag) {
                    continue;
                }
                if (tag === ARRAY_NAME && subNode.childNodes) {
                    result[tag] = this._getRows(subNode.childNodes);
                }
                else {
                    if (this._haveAttrs(subNode)) {
                        result[tag] = this._nodeToJS(subNode);
                    }
                    else {
                        result[tag] = this._toType(subNode.textContent);
                    }
                }
            }
        }
        return result;
    };
    XMLDriver.prototype._toType = function (val) {
        if (val === "false" || val === "true") {
            return val === "true";
        }
        if (!isNaN(val)) {
            return Number(val);
        }
        return val;
    };
    XMLDriver.prototype._haveAttrs = function (node) {
        return node.attributes && node.attributes.length;
    };
    return XMLDriver;
}());
exports.XMLDriver = XMLDriver;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var INDENT_STEP = 4;
function jsonToXML(data, root) {
    if (root === void 0) { root = "root"; }
    var result = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<" + root + ">";
    for (var i = 0; i < data.length; i++) {
        result += "\n" + itemToXML(data[i]);
    }
    return result + ("\n</" + root + ">");
}
exports.jsonToXML = jsonToXML;
function ws(count) {
    return " ".repeat(count);
}
function itemToXML(item, indent) {
    if (indent === void 0) { indent = INDENT_STEP; }
    var result = ws(indent) + "<item>\n";
    for (var key in item) {
        if (Array.isArray(item[key])) {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">\n");
            result += item[key].map(function (subItem) { return itemToXML(subItem, indent + INDENT_STEP * 2); }).join("\n") + "\n";
            result += ws(indent + INDENT_STEP) + ("</" + key + ">\n");
        }
        else {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">" + item[key] + "</" + key + ">\n");
        }
    }
    result += ws(indent) + "</item>";
    return result;
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(3);
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function (array, by) {
        var _this = this;
        if (by.rule && typeof by.rule === "function") {
            this._sort(array, by);
        }
        else if (by.by) {
            by.rule = function (a, b) {
                var aa = _this._checkVal(by.as, a[by.by]);
                var bb = _this._checkVal(by.as, b[by.by]);
                return helpers_1.naturalCompare(aa.toString(), bb.toString()); // didnt work with numbers
            };
            this._sort(array, by);
        }
    };
    Sort.prototype._checkVal = function (method, val) {
        return method ? method.call(this, val) : val;
    };
    Sort.prototype._sort = function (arr, conf) {
        var _this = this;
        var dir = {
            asc: 1,
            desc: -1
        };
        return arr.sort(function (a, b) {
            return conf.rule.call(_this, a, b) * (dir[conf.dir] || dir.asc);
        });
    };
    return Sort;
}());
exports.Sort = Sort;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var datacollection_1 = __webpack_require__(11);
var dataproxy_1 = __webpack_require__(7);
var helpers_1 = __webpack_require__(3);
var types_1 = __webpack_require__(4);
function addToOrder(store, obj, parent, index) {
    if (index !== undefined && index !== -1 && store[parent] && store[parent][index]) {
        store[parent].splice(index, 0, obj);
    }
    else {
        if (!store[parent]) {
            store[parent] = [];
        }
        store[parent].push(obj);
    }
}
var TreeCollection = /** @class */ (function (_super) {
    __extends(TreeCollection, _super);
    function TreeCollection(config, events) {
        var _a;
        var _this = _super.call(this, config, events) || this;
        var root = _this._root = "_ROOT_" + core_1.uid();
        _this._childs = (_a = {}, _a[root] = [], _a);
        _this._initChilds = null;
        return _this;
    }
    TreeCollection.prototype.add = function (obj, index, parent) {
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        if (typeof obj !== "object") {
            obj = {
                value: obj
            };
        }
        obj.parent = obj.parent ? obj.parent.toString() : parent;
        var id = _super.prototype.add.call(this, obj, index);
        if (Array.isArray(obj.items)) {
            for (var _i = 0, _a = obj.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item, -1, obj.id);
            }
        }
        return id;
    };
    TreeCollection.prototype.getRoot = function () {
        return this._root;
    };
    TreeCollection.prototype.getParent = function (id, asObj) {
        if (asObj === void 0) { asObj = false; }
        if (!this._pull[id]) {
            return null;
        }
        var parent = this._pull[id].parent;
        return asObj ? this._pull[parent] : parent;
    };
    TreeCollection.prototype.getItems = function (id) {
        if (this._childs && this._childs[id]) {
            return this._childs[id];
        }
        return [];
    };
    TreeCollection.prototype.getLength = function (id) {
        if (id === void 0) { id = this._root; }
        if (!this._childs[id]) {
            return null;
        }
        return this._childs[id].length;
    };
    TreeCollection.prototype.removeAll = function (id) {
        var _a;
        if (id) {
            var childs = this._childs[id].slice();
            for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                var child = childs_1[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype.removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype.getIndex = function (id) {
        var parent = this.getParent(id);
        if (!parent || !this._childs[parent]) {
            return -1;
        }
        return core_1.findIndex(this._childs[parent], function (item) { return item.id === id; });
    };
    TreeCollection.prototype.sort = function (conf) {
        var childs = this._childs;
        for (var key in childs) {
            this._sort.sort(childs[key], conf);
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.map = function (cb, parent, direct) {
        if (parent === void 0) { parent = this._root; }
        if (direct === void 0) { direct = true; }
        var result = [];
        if (!this.haveItems(parent)) {
            return result;
        }
        for (var i = 0; i < this._childs[parent].length; i++) {
            result.push(cb.call(this, this._childs[parent][i], i));
            if (direct) {
                var childResult = this.map(cb, this._childs[parent][i].id, direct);
                result = result.concat(childResult);
            }
        }
        return result;
    };
    TreeCollection.prototype.filter = function (rule, config) {
        if (config === void 0) { config = {}; }
        if (!rule) {
            this.restoreOrder();
            return;
        }
        if (!this._initChilds) {
            this._initChilds = this._childs;
        }
        config.type = config.type || types_1.TreeFilterType.leafs;
        var newChilds = {};
        this._recursiveFilter(rule, config, this._root, 0, newChilds);
        this._childs = newChilds;
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.restoreOrder = function () {
        if (this._initChilds) {
            this._childs = this._initChilds;
            this._initChilds = null;
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.copy = function (id, index, target, targetId) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        var currentChilds = this._childs[id];
        if (target === this && !this.canCopy(id, targetId)) {
            return null;
        }
        var itemCopy = helpers_1.copyWithoutInner(this.getItem(id), { items: true });
        if (target.exists(id)) {
            itemCopy.id = core_1.uid();
        }
        if (!helpers_1.isTreeCollection(target)) {
            target.add(itemCopy, index);
            return;
        }
        if (this.exists(id)) {
            itemCopy.parent = targetId;
            target.add(itemCopy, index);
            id = itemCopy.id;
        }
        if (currentChilds) {
            for (var _i = 0, currentChilds_1 = currentChilds; _i < currentChilds_1.length; _i++) {
                var child = currentChilds_1[_i];
                var childId = child.id;
                var childIndex = this.getIndex(childId);
                this.copy(childId, childIndex, target, id);
            }
        }
        return id;
    };
    TreeCollection.prototype.move = function (id, index, target, targetId) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        if (target !== this) {
            if (!helpers_1.isTreeCollection(target)) { // move to datacollection
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                this.remove(id);
                return;
            }
            var returnId = this.copy(id, index, target, targetId);
            this.remove(id);
            return returnId;
        }
        // move inside
        if (!this.canCopy(id, targetId)) {
            return null;
        }
        var parent = this.getParent(id);
        var parentIndex = this.getIndex(id);
        // get item from parent array and move to target array
        var spliced = this._childs[parent].splice(parentIndex, 1)[0];
        spliced.parent = targetId; // need for next moving, ... not best solution, may be full method for get item
        if (!this._childs[parent].length) {
            delete this._childs[parent];
        }
        if (!this.haveItems(targetId)) {
            this._childs[targetId] = [];
        }
        if (index === -1) {
            index = this._childs[targetId].push(spliced);
        }
        else {
            this._childs[targetId].splice(index, 0, spliced);
        }
        this.events.fire(types_1.DataEvents.change);
        return id;
    };
    TreeCollection.prototype.eachChild = function (id, cb, direct, checkItem) {
        if (direct === void 0) { direct = true; }
        if (checkItem === void 0) { checkItem = function () { return true; }; }
        if (!this.haveItems(id)) {
            return;
        }
        for (var i = 0; i < this._childs[id].length; i++) {
            cb.call(this, this._childs[id][i], i);
            if (direct && checkItem(this._childs[id][i])) {
                this.eachChild(this._childs[id][i].id, cb, direct, checkItem);
            }
        }
    };
    TreeCollection.prototype.getNearId = function (id) {
        return id; // for selection
    };
    TreeCollection.prototype.loadItems = function (id, driver) {
        var _this = this;
        if (driver === void 0) { driver = "json"; }
        var url = this.config.autoload + "?id=" + id;
        var proxy = new dataproxy_1.DataProxy(url);
        proxy.load().then(function (data) {
            driver = helpers_1.toDataDriver(driver);
            data = driver.toJsonArray(data);
            _this._parse_data(data, id);
            _this.events.fire(types_1.DataEvents.change);
        });
    };
    TreeCollection.prototype.refreshItems = function (id, driver) {
        if (driver === void 0) { driver = "json"; }
        this.removeAll(id);
        this.loadItems(id, driver);
    };
    TreeCollection.prototype.eachParent = function (id, cb, self) {
        if (self === void 0) { self = false; }
        var item = this.getItem(id);
        if (!item) {
            return;
        }
        if (self) {
            cb.call(this, item);
        }
        if (item.parent === this._root) {
            return;
        }
        var parent = this.getItem(item.parent);
        cb.call(this, parent);
        this.eachParent(item.parent, cb);
    };
    TreeCollection.prototype.haveItems = function (id) {
        return id in this._childs;
    };
    TreeCollection.prototype.canCopy = function (id, target) {
        if (id === target) {
            return false;
        }
        var canCopy = true;
        this.eachParent(target, function (item) { return item.id === id ? canCopy = false : null; }); // locate return string
        return canCopy;
    };
    TreeCollection.prototype.serialize = function (driver, checkItem) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this._serialize(this._root, checkItem);
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    TreeCollection.prototype.getId = function (index, parent) {
        if (parent === void 0) { parent = this._root; }
        if (!this._childs[parent] || !this._childs[parent][index]) {
            return;
        }
        return this._childs[parent][index].id;
    };
    TreeCollection.prototype._removeAll = function (id) {
        var _a;
        if (id) {
            var childs = this._childs[id].slice();
            for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
                var child = childs_2[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype._removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype._removeCore = function (id) {
        if (this._pull[id]) {
            var parent_1 = this.getParent(id);
            this._childs[parent_1] = this._childs[parent_1].filter(function (item) { return item.id !== id; });
            if (parent_1 !== this._root && !this._childs[parent_1].length) {
                delete this._childs[parent_1];
            }
            if (this._initChilds && this._initChilds[parent_1]) {
                this._initChilds[parent_1] = this._initChilds[parent_1].filter(function (item) { return item.id !== id; });
                if (parent_1 !== this._root && !this._initChilds[parent_1].length) {
                    delete this._initChilds[parent_1];
                }
            }
            this._fastDeleteChilds(this._childs, id);
            if (this._initChilds) {
                this._fastDeleteChilds(this._initChilds, id);
            }
        }
    };
    TreeCollection.prototype._addToOrder = function (_order, obj, index) {
        var childs = this._childs;
        var initChilds = this._initChilds;
        var parent = obj.parent;
        this._pull[obj.id] = obj;
        addToOrder(childs, obj, parent, index);
        if (initChilds) {
            addToOrder(initChilds, obj, parent, index);
        }
    };
    TreeCollection.prototype._parse_data = function (data, parent) {
        if (parent === void 0) { parent = this._root; }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            if (typeof obj !== "object") {
                obj = {
                    value: obj
                };
            }
            obj.id = obj.id ? obj.id.toString() : core_1.uid();
            obj.parent = obj.parent ? obj.parent.toString() : parent;
            this._pull[obj.id] = obj;
            if (!this._childs[obj.parent]) {
                this._childs[obj.parent] = [];
            }
            this._childs[obj.parent].push(obj);
            if (obj.items && obj.items instanceof Object) {
                this._parse_data(obj.items, obj.id);
            }
        }
    };
    TreeCollection.prototype._fastDeleteChilds = function (target, id) {
        if (this._pull[id]) {
            delete this._pull[id];
        }
        if (!target[id]) {
            return;
        }
        for (var i = 0; i < target[id].length; i++) {
            this._fastDeleteChilds(target, target[id][i].id);
        }
        delete target[id];
    };
    TreeCollection.prototype._recursiveFilter = function (rule, config, current, level, newChilds) {
        var _this = this;
        var childs = this._childs[current];
        if (!childs) {
            return;
        }
        var condition = function (item) {
            switch (config.type) {
                case types_1.TreeFilterType.all: {
                    return true;
                }
                case types_1.TreeFilterType.level: {
                    return level === config.level;
                }
                case types_1.TreeFilterType.leafs: {
                    return !_this.haveItems(item.id);
                }
            }
        };
        if (typeof rule === "function") {
            var customRule = function (item) { return !condition(item) || rule(item); };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
        }
        else if (rule.by && rule.match) {
            var customRule = function (item) { return !condition(item) || item[rule.by].toString().toLowerCase().indexOf(rule.match.toString().toLowerCase()) !== -1; };
            newChilds[current] = childs.filter(customRule);
        }
        for (var _i = 0, childs_3 = childs; _i < childs_3.length; _i++) {
            var child = childs_3[_i];
            this._recursiveFilter(rule, config, child.id, level + 1, newChilds);
        }
    };
    TreeCollection.prototype._serialize = function (parent, fn) {
        var _this = this;
        if (parent === void 0) { parent = this._root; }
        return this.map(function (item) {
            var itemCopy = {};
            for (var key in item) {
                if (key === "parent" || key === "items") {
                    continue;
                }
                itemCopy[key] = item[key];
            }
            if (fn) {
                itemCopy = fn(itemCopy);
            }
            if (_this.haveItems(item.id)) {
                itemCopy.items = _this._serialize(item.id, fn);
            }
            return itemCopy;
        }, parent, false);
    };
    return TreeCollection;
}(datacollection_1.DataCollection));
exports.TreeCollection = TreeCollection;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(2);
var CollectionStore_1 = __webpack_require__(37);
var types_1 = __webpack_require__(4);
var helpers_1 = __webpack_require__(3);
function getPosition(e) {
    var y = e.clientY;
    var element = html_1.locateNode(e);
    if (!element) {
        return null;
    }
    var treeLine = element.childNodes[0];
    var _a = treeLine.getBoundingClientRect(), top = _a.top, height = _a.height;
    return (y - top) / height;
}
function dragEventContent(element) {
    var rect = element.getBoundingClientRect();
    var ghost = document.createElement("div");
    var clone = element.cloneNode(true);
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    ghost.appendChild(clone);
    ghost.className = "dhx_drag-ghost";
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    return ghost;
}
var DragManager = /** @class */ (function () {
    function DragManager() {
        var _this = this;
        this._transferData = {};
        this._canMove = true;
        this._onMouseMove = function (e) {
            if (!_this._transferData.id) {
                return;
            }
            var pageX = e.pageX, pageY = e.pageY;
            if (!_this._transferData.ghost) {
                if (Math.abs(_this._transferData.x - pageX) < 3 && Math.abs(_this._transferData.y - pageY) < 3) {
                    return;
                }
                else {
                    var ghost = _this._onDragStart(_this._transferData.id, _this._transferData.targetId);
                    if (!ghost) {
                        _this._endDrop();
                        return;
                    }
                    else {
                        _this._transferData.ghost = ghost;
                        document.body.appendChild(_this._transferData.ghost);
                    }
                }
            }
            _this._moveGhost(pageX, pageY);
            _this._onDrag(e);
        };
        this._onMouseUp = function () {
            if (!_this._transferData.x) {
                return;
            }
            if (_this._transferData.ghost) {
                _this._removeGhost();
                _this._onDrop();
            }
            else {
                _this._endDrop();
            }
            document.removeEventListener("mousemove", _this._onMouseMove);
            document.removeEventListener("mouseup", _this._onMouseUp);
        };
    }
    DragManager.prototype.setItem = function (id, item) {
        CollectionStore_1.collectionStore.setItem(id, item);
    };
    DragManager.prototype.onMouseDown = function (e) {
        if (e.which !== 1) {
            return;
        }
        e.preventDefault();
        document.addEventListener("mousemove", this._onMouseMove);
        document.addEventListener("mouseup", this._onMouseUp);
        var item = html_1.locateNode(e, "dhx_id");
        var id = item && item.getAttribute("dhx_id");
        var targetId = html_1.locate(e, "dhx_widget_id");
        if (id && targetId) {
            var _a = html_1.getBox(item), left = _a.left, top_1 = _a.top;
            this._transferData.initXOffset = e.pageX - left;
            this._transferData.initYOffset = e.pageY - top_1;
            this._transferData.x = e.pageX;
            this._transferData.y = e.pageY;
            this._transferData.targetId = targetId;
            this._transferData.id = id;
            this._transferData.item = item;
        }
    };
    DragManager.prototype._moveGhost = function (x, y) {
        if (this._transferData.ghost) {
            this._transferData.ghost.style.left = x - this._transferData.initXOffset + "px";
            this._transferData.ghost.style.top = y - this._transferData.initYOffset + "px";
        }
    };
    DragManager.prototype._removeGhost = function () {
        document.body.removeChild(this._transferData.ghost);
    };
    DragManager.prototype._onDrop = function () {
        if (!this._canMove) {
            this._endDrop();
            return;
        }
        var target = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        var config = target && target.config;
        if (!target || config.dragMode === types_1.DragMode.source) {
            this._endDrop();
            return;
        }
        if (target.events.fire(types_1.DragEvents.beforeDrop, [this._lastId, this._transferData.target])) {
            var to = {
                id: this._lastId,
                target: target
            };
            var from = {
                id: this._transferData.id,
                target: this._transferData.target
            };
            this._move(from, to);
            to.target.events.fire(types_1.DragEvents.dropComplete, [to.id, this._transferData.dropPosition]);
        }
        this._endDrop();
    };
    DragManager.prototype._onDragStart = function (id, targetId) {
        var target = CollectionStore_1.collectionStore.getItem(targetId);
        var config = target.config;
        if (config.dragMode === types_1.DragMode.target) {
            return null;
        }
        var item = target.data.getItem(id);
        var ghost = dragEventContent(this._transferData.item);
        var ans = target.events.fire(types_1.DragEvents.beforeDrag, [item, ghost]);
        if (!ans || !id) {
            return null;
        }
        target.events.fire(types_1.DragEvents.dragStart, [id]);
        this._toggleTextSelection(true);
        this._transferData.target = target;
        this._transferData.dragConfig = config;
        return ghost;
    };
    DragManager.prototype._onDrag = function (e) {
        var clientX = e.clientX, clientY = e.clientY;
        var element = document.elementFromPoint(clientX, clientY);
        var collectionId = html_1.locate(element, "dhx_widget_id");
        if (!collectionId) {
            if (this._canMove) {
                this._cancelCanDrop();
            }
            return;
        }
        var target = CollectionStore_1.collectionStore.getItem(collectionId);
        var id = html_1.locate(element, "dhx_id");
        if (!id) {
            this._cancelCanDrop();
            this._lastCollectionId = collectionId;
            this._lastId = null;
            this._canDrop();
            return;
        }
        if (target.config.dropBehaviour === types_1.DropBehaviour.complex) {
            var pos = getPosition(e);
            if (pos <= 0.25) {
                this._transferData.dropPosition = types_1.DropPosition.top;
            }
            else if (pos >= 0.75) {
                this._transferData.dropPosition = types_1.DropPosition.bot;
            }
            else {
                this._transferData.dropPosition = types_1.DropPosition.in;
            }
        }
        else if (this._lastId === id && this._lastCollectionId === collectionId) {
            return;
        }
        var from = {
            id: this._transferData.id,
            target: this._transferData.target
        };
        if (target.config.dragMode === "source") {
            return;
        }
        from.target.events.fire(types_1.DragEvents.dragOut, [id, target]);
        if (collectionId !== this._transferData.targetId || !helpers_1.isTreeCollection(from.target.data) ||
            (helpers_1.isTreeCollection(from.target.data) && from.target.data.canCopy(from.id, id))) {
            this._cancelCanDrop(); // clear last
            this._lastId = id;
            this._lastCollectionId = collectionId;
            var canMove = from.target.events.fire(types_1.DragEvents.dragIn, [id, this._transferData.dropPosition, CollectionStore_1.collectionStore.getItem(collectionId)]);
            if (canMove) {
                this._canDrop();
            }
        }
        else {
            this._cancelCanDrop();
        }
    };
    DragManager.prototype._move = function (from, to) {
        var fromData = from.target.data;
        var toData = to.target.data;
        var index = 0;
        var targetId = to.id;
        var behaviour = helpers_1.isTreeCollection(toData) ? to.target.config.dropBehaviour : undefined;
        switch (behaviour) {
            case types_1.DropBehaviour.child:
                break;
            case types_1.DropBehaviour.sibling:
                targetId = toData.getParent(targetId);
                index = toData.getIndex(to.id) + 1;
                break;
            case types_1.DropBehaviour.complex:
                var dropPosition = this._transferData.dropPosition;
                if (dropPosition === types_1.DropPosition.top) {
                    targetId = toData.getParent(targetId);
                    index = toData.getIndex(to.id);
                }
                else if (dropPosition === types_1.DropPosition.bot) {
                    targetId = toData.getParent(targetId);
                    index = toData.getIndex(to.id) + 1;
                }
                break;
            default:
                // list move
                if (!to.id) {
                    index = -1;
                }
                else if (from.target === to.target && toData.getIndex(from.id) < toData.getIndex(to.id)) {
                    index = toData.getIndex(to.id) - 1;
                }
                else {
                    index = toData.getIndex(to.id);
                }
        }
        if (this._transferData.dragConfig.dragCopy) {
            fromData.copy(from.id, index, toData, targetId);
        }
        else {
            fromData.move(from.id, index, toData, targetId); // typescript bug??
        }
    };
    DragManager.prototype._endDrop = function () {
        this._toggleTextSelection(false);
        if (this._transferData.target) {
            this._transferData.target.events.fire(types_1.DragEvents.dragEnd, [this._transferData.id]);
        }
        this._cancelCanDrop();
        this._canMove = true;
        this._transferData = {};
        this._lastId = null;
        this._lastCollectionId = null;
    };
    DragManager.prototype._cancelCanDrop = function () {
        this._canMove = false;
        var collection = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        if (collection && this._lastId) {
            collection.events.fire(types_1.DragEvents.cancelDrop, [this._lastId]);
        }
        this._lastCollectionId = null;
        this._lastId = null;
    };
    DragManager.prototype._canDrop = function () {
        this._canMove = true;
        var target = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        if (target && this._lastId) {
            target.events.fire(types_1.DragEvents.canDrop, [this._lastId, this._transferData.dropPosition]);
        }
    };
    DragManager.prototype._toggleTextSelection = function (add) {
        if (add) {
            document.body.classList.add("dhx_no-select");
        }
        else {
            document.body.classList.remove("dhx_no-select");
        }
    };
    return DragManager;
}());
var dhx = window.dhxHelpers = window.dhxHelpers || {};
dhx.dragManager = dhx.dragManager || new DragManager();
exports.dragManager = dhx.dragManager;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollectionStore = /** @class */ (function () {
    function CollectionStore() {
        this._store = {};
    }
    CollectionStore.prototype.setItem = function (id, target) {
        this._store[id] = target;
    };
    CollectionStore.prototype.getItem = function (id) {
        if (!this._store[id]) {
            return null;
        }
        return this._store[id];
    };
    return CollectionStore;
}());
var dhx = window.dhxHelpers = window.dhxHelpers || {};
dhx.collectionStore = dhx.collectionStore || new CollectionStore();
exports.collectionStore = dhx.collectionStore;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(8);
var types_1 = __webpack_require__(39);
var types_2 = __webpack_require__(4);
var Selection = /** @class */ (function () {
    function Selection(_config, data, events) {
        var _this = this;
        this.events = events || (new events_1.EventSystem(this));
        this._data = data;
        this._data.events.on(types_2.DataEvents.removeAll, function () {
            _this._selected = null;
        });
        this._data.events.on(types_2.DataEvents.change, function () {
            if (_this._selected) {
                var near = _this._data.getNearId(_this._selected);
                if (near !== _this._selected) {
                    _this._selected = null;
                    if (near) {
                        _this.add(near);
                    }
                }
            }
        });
    }
    Selection.prototype.getId = function () {
        return this._selected;
    };
    Selection.prototype.getItem = function () {
        if (this._selected) {
            return this._data.getItem(this._selected);
        }
        return null;
    };
    Selection.prototype.remove = function (id) {
        id = id || this._selected;
        if (!id) {
            return true;
        }
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._data.update(id, { $selected: false });
            this._selected = null;
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            return true;
        }
        return false;
    };
    Selection.prototype.add = function (id) {
        if (this._selected === id) {
            return;
        }
        this.remove();
        if (this.events.fire(types_1.SelectionEvents.beforeSelect, [id])) {
            this._selected = id;
            this._data.update(id, { $selected: true });
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
        }
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectionEvents;
(function (SelectionEvents) {
    SelectionEvents["beforeUnSelect"] = "beforeunselect";
    SelectionEvents["afterUnSelect"] = "afterunselect";
    SelectionEvents["beforeSelect"] = "beforeselect";
    SelectionEvents["afterSelect"] = "afterselect";
})(SelectionEvents = exports.SelectionEvents || (exports.SelectionEvents = {}));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __webpack_require__(5);
var Exporter = /** @class */ (function () {
    function Exporter(_view) {
        this._view = _view;
    }
    Exporter.prototype.xlsx = function (config) {
        return this._export(config);
    };
    Exporter.prototype._export = function (config) {
        if (config === void 0) { config = {}; }
        var configCols = this._view.config.columns;
        var rowsIndexMap = {};
        var headers = main_1.transpose(this._view.config.columns.map(function (col) {
            return col.header.map(function (level) { return level.text || " "; });
        }));
        var columns = [];
        var uniqStyles = {
            default: {
                color: "#000000",
                background: "#FFFFFF",
                fontSize: 14
            }
        };
        var cells = [];
        var columnsIndexMap = {};
        var data = this._view.data.serialize().map(function (row, i) {
            rowsIndexMap[row.id] = i;
            var rowData = configCols.map(function (col, k) {
                columnsIndexMap[col.id] = k;
                return main_1.removeHTMLTags(row[col.id]);
            });
            return rowData;
        });
        for (var _i = 0, configCols_1 = configCols; _i < configCols_1.length; _i++) {
            var col = configCols_1[_i];
            columns.push({ width: col.width });
            for (var key in col.$cellCss) {
                var colStyle = col.$cellCss[key];
                var colStyleHash = colStyle
                    .split("")
                    .reduce(function (h, letter) {
                    // tslint:disable-next-line:no-bitwise
                    var hh = ((h << 5) - h) + letter.charCodeAt(0);
                    return Math.abs(hh & hh);
                }, 0).toString();
                if (!uniqStyles[colStyleHash]) {
                    var cont = document.body;
                    var css = main_1.getStyleByClass(colStyle, cont, "dhx_grid-row", uniqStyles.default);
                    if (css) {
                        uniqStyles[colStyleHash] = css;
                    }
                }
                if (uniqStyles[colStyleHash]) {
                    cells.push([rowsIndexMap[key], col.id, colStyleHash]);
                }
            }
        }
        var exportData = {
            name: (config.name || "data"),
            columns: columns,
            header: headers,
            data: data,
            styles: {
                cells: cells,
                css: uniqStyles
            }
        };
        if (config.url) {
            var form_1 = document.createElement("form");
            form_1.setAttribute("target", "_blank");
            form_1.setAttribute("action", config.url);
            form_1.setAttribute("method", "POST");
            form_1.style.visibility = "hidden";
            var input = document.createElement("textarea");
            input.setAttribute("name", "data");
            input.value = JSON.stringify(exportData);
            form_1.appendChild(input);
            document.body.appendChild(form_1);
            form_1.submit();
            setTimeout(function () {
                form_1.parentNode.removeChild(form_1);
            }, 100);
        }
        return exportData;
    };
    return Exporter;
}());
exports.Exporter = Exporter;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(6);
var Selection = /** @class */ (function () {
    function Selection(grid) {
        this._grid = grid;
        this._init();
    }
    Selection.prototype.setCell = function (row, col) {
        row = row.id ? row : this._grid.data.getItem(row);
        if (!col) {
            col = this._grid.config.columns[0];
        }
        col = col.id ? col : this._grid.getColumn(col);
        this._selectedCell = { row: row, column: col };
        this._grid.paint();
    };
    Selection.prototype.getCell = function () {
        return this._selectedCell;
    };
    Selection.prototype.toHTML = function () {
        if (!this._selectedCell.row || !this._selectedCell.column) {
            return;
        }
        var fixedCols = this._grid.config.splitAt ?
            this._grid.config.columns.slice(0, this._grid.config.splitAt) : [];
        var fixedColsIds = fixedCols.map(function (col) { return col.id; });
        var fixedCell;
        var cellRect = this._grid.getCellRect(this._selectedCell.row.id, this._selectedCell.column.id);
        if (fixedColsIds.indexOf(this._selectedCell.column.id) !== -1) {
            var scrollState = this._grid.getScrollState();
            fixedCell = dom_1.el(".dhx_grid-selected-cell", {
                style: {
                    width: cellRect.width,
                    height: cellRect.height,
                    top: cellRect.y,
                    left: cellRect.x + scrollState.x,
                    position: "absolute",
                    zIndex: 10
                }
            });
        }
        var totalWidth = this._grid.config.$totalWidth;
        return dom_1.el(".dhx_grid-selection", {}, [
            dom_1.el(".dhx_grid-selected-row", {
                style: {
                    width: totalWidth,
                    height: cellRect.height,
                    top: cellRect.y,
                    left: 0,
                    position: "absolute"
                }
            })
        ]);
    };
    Selection.prototype._init = function () {
        var _this = this;
        this._selectedCell = {
            row: this._grid.data.getItem(this._grid.data.getId(0)),
            column: this._grid.config.columns[0]
        };
        this._grid.events.on(types_1.GridEvents.cellClick, function (row, col) {
            _this._selectedCell = { row: row, column: col };
            _this._grid.paint();
        });
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var data_1 = __webpack_require__(16);
var main_1 = __webpack_require__(5);
var Cells_1 = __webpack_require__(17);
var FixedCols_1 = __webpack_require__(43);
var FixedRows_1 = __webpack_require__(19);
var BORDERS = 2;
function getRenderConfig(obj, data, wrapperSizes) {
    var config = obj.config;
    var positions = data_1.calculatePositions(wrapperSizes.width, wrapperSizes.height, obj._scroll, config);
    return __assign({}, config, { data: data, scroll: obj._scroll, $positions: positions, headerHeight: config.$headerLevel * config.headerRowHeight, footerHeight: config.$footerLevel * config.footerRowHeight, firstColId: config.columns[0].id, events: obj.events, currentColumns: config.columns.slice(positions.xStart, positions.xEnd), sortBy: obj._sortBy, sortDir: obj._sortDir });
}
function render(vm, obj, data, htmlEvents, selection) {
    if (!obj._container) {
        obj.config.width = 1;
        obj.config.height = 1;
    }
    // if grid placed inside another component, it will fit to its container
    if (vm && vm.node && vm.node.parent && vm.node.parent.el) {
        var parentNode = vm.node.parent.el;
        obj.config.width = parentNode.clientWidth || 1;
        obj.config.height = parentNode.clientHeight || 1;
    }
    var config = obj.config;
    if (!data || !obj.data || !config.columns.length) {
        return dom_1.el(".dhx_grid");
    }
    config.$totalHeight = data.length * config.rowHeight;
    var wrapperSizes = {
        width: config.width ? config.width : obj._container.clientWidth,
        height: config.height ? config.height : obj._container.clientHeight
    };
    if (config.fitToContainer) {
        var scrollbarY = config.$totalHeight > wrapperSizes.height ? html_1.getScrollbarWidth() : 0;
        config.$totalWidth = wrapperSizes.width - BORDERS - scrollbarY;
        var total = config.columns.reduce(function (width, col) { return width + col.width; }, 0);
        var per_1 = config.$totalWidth / total;
        config.columns.map(function (col) {
            col.width = per_1 * col.width;
        });
    }
    config.width = wrapperSizes.width;
    config.height = wrapperSizes.height;
    var renderConfig = getRenderConfig(obj, data, wrapperSizes);
    renderConfig.selection = selection;
    renderConfig.datacollection = obj.data;
    var shifts = Cells_1.getShifts(renderConfig);
    var isSticky = main_1.isCssSupport("position", "sticky");
    var gridBodyHeight = getContentHeight(renderConfig, isSticky, wrapperSizes);
    var layoutState = {
        wrapper: wrapperSizes,
        sticky: isSticky,
        shifts: shifts,
        gridBodyHeight: gridBodyHeight
    };
    var header = FixedRows_1.getFixedRows(renderConfig, __assign({}, layoutState, { name: "header", position: "top" }));
    var footer = renderConfig.$footer ? FixedRows_1.getFixedRows(renderConfig, __assign({}, layoutState, { name: "footer", position: "bottom" })) : null;
    var lessByWidth = renderConfig.$totalWidth + BORDERS < wrapperSizes.width ? "dhx_grid-less-width" : "";
    var lessByHeight = renderConfig.$totalHeight + BORDERS < wrapperSizes.height ? "dhx_grid-less-height" : "";
    return dom_1.el(".dhx_grid.dhx_widget", {
        class: renderConfig.css
    }, [
        dom_1.resizer(function () { return obj.paint(); }),
        dom_1.el(".dhx_grid-content", {
            style: __assign({}, wrapperSizes),
            onclick: htmlEvents.onclick,
            class: (lessByWidth + " " + lessByHeight).trim()
        }, [
            isSticky ? null : header,
            dom_1.el(".dhx_grid-body", {
                style: {
                    height: gridBodyHeight,
                    width: wrapperSizes.width - BORDERS,
                },
                onscroll: htmlEvents.onscroll,
                _ref: "grid_body"
            }, [
                isSticky ? header : null,
                getGridData(renderConfig, shifts),
                isSticky ? footer : null
            ]),
            FixedCols_1.getFixedCols(renderConfig, layoutState),
            isSticky ? null : footer
        ])
    ]);
}
exports.render = render;
function getGridData(renderConfig, shifts) {
    var content = Cells_1.getCells(renderConfig);
    var contentSpans = Cells_1.getSpans(renderConfig);
    var selection = renderConfig.selection ? renderConfig.selection.toHTML() : null;
    selection = typeof selection === "string" ? dom_1.el("div.dhx_selection", { ".innerHTML": selection }) : selection;
    return dom_1.el(".dhx_data-wrap", {
        style: {
            "height": renderConfig.$totalHeight,
            "width": renderConfig.$totalWidth,
            "padding-left": shifts.x,
            "padding-top": shifts.y,
        }
    }, [
        dom_1.el(".dhx_grid_data", content),
        dom_1.el(".dhx_span-spans", contentSpans),
        dom_1.el(".dhx_grid_selection", { _ref: "selection" }, [selection])
    ]);
}
function getContentHeight(renderConfig, isSticky, wrapperSizes) {
    var contentHeight = wrapperSizes.height - BORDERS;
    contentHeight = isSticky ? contentHeight : contentHeight - renderConfig.headerHeight;
    var isFooter = renderConfig.$footer;
    // [dirty] refactoring needed
    var lessByHeight = renderConfig.$totalHeight + BORDERS < wrapperSizes.height;
    if (renderConfig.splitAt && lessByHeight) {
        return renderConfig.$totalHeight + renderConfig.footerHeight + renderConfig.headerHeight + html_1.getScrollbarWidth();
    }
    // [dirty]
    return contentHeight = isFooter ?
        isSticky ? contentHeight : contentHeight - renderConfig.footerHeight
        : contentHeight;
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var Cells_1 = __webpack_require__(17);
var FixedRows_1 = __webpack_require__(19);
function getFixedCols(renderConfig, layout) {
    if (typeof renderConfig.splitAt !== "number") {
        return;
    }
    var scrollBarWidth = renderConfig.$totalWidth <= layout.wrapper.width ? 0 : html_1.getScrollbarWidth();
    var fixedColsHeight = (layout.sticky ?
        layout.gridBodyHeight
        : layout.gridBodyHeight + renderConfig.headerHeight) - scrollBarWidth;
    var columns = renderConfig.columns.slice(0, renderConfig.splitAt);
    renderConfig.fixedColumnsWidth = columns.reduce(function (total, item) { return total += item.width || 100; }, 0);
    var fixedCols = Cells_1.getCells(__assign({}, renderConfig, { columns: columns, $positions: __assign({}, renderConfig.$positions, { xStart: 0, xEnd: renderConfig.splitAt }) }));
    var isSticky = layout.sticky;
    var headerRowsConfig = __assign({}, layout, { name: "header", position: "top" });
    var footerRowsConfig = __assign({}, layout, { name: "footer", position: "bottom" });
    var frozenHeaderCols = renderConfig.splitAt >= 0 && FixedRows_1.getRows(__assign({}, renderConfig, { currentColumns: renderConfig.columns.slice(0, renderConfig.splitAt), $positions: __assign({}, renderConfig.$positions, { xStart: 0, xEnd: renderConfig.splitAt }) }), __assign({}, layout, { name: "header", position: "top" }));
    var frozenFooterCols = renderConfig.splitAt >= 0 && FixedRows_1.getRows(__assign({}, renderConfig, { currentColumns: renderConfig.columns.slice(0, renderConfig.splitAt), $positions: __assign({}, renderConfig.$positions, { xStart: 0, xEnd: renderConfig.splitAt }) }), __assign({}, layout, { name: "footer", position: "bottom" }));
    var frozenHeader = frozenHeaderCols && dom_1.el(".dhx_" + headerRowsConfig.name + "-fixed-cols", {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 999999,
        }
    }, frozenHeaderCols);
    var frozenFooter = isSticky ? (frozenFooterCols && dom_1.el(".dhx_" + footerRowsConfig.name + "-fixed-cols", {
        style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 999999,
        }
    }, frozenFooterCols)) : null;
    return dom_1.el(".dhx_grid-fixed-cols-wrap", {
        style: {
            height: fixedColsHeight,
            paddingTop: renderConfig.headerHeight,
            overflow: "hidden",
            width: renderConfig.fixedColumnsWidth
        }
    }, [
        frozenHeader,
        dom_1.el(".dhx_grid-fixed-cols", {
            style: {
                top: -renderConfig.scroll.top + renderConfig.headerHeight + "px",
                paddingTop: layout.shifts.y,
                height: renderConfig.$totalHeight,
                position: "absolute"
            }
        }, fixedCols),
        renderConfig.$footer && frozenFooter,
        dom_1.el(".dhx_frozen-cols-border")
    ]);
}
exports.getFixedCols = getFixedCols;


/***/ })
/******/ ]);
});if (window.dhx_legacy) { if (window.dhx){ for (var key in dhx) dhx_legacy[key] = dhx[key]; } window.dhx = dhx_legacy; delete window.dhx_legacy; }
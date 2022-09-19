/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n    --main-color: rgb(100, 100, 100);\\n    --main-color-light: rgb(209, 209, 209);\\n    --main-color-lighter: rgb(225, 225, 225);\\n    --highlight-color: teal;\\n    --highlight-color-light: rgb(104, 199, 199);\\n    --generic-shadow: rgba(0,0,0,0.5);\\n}\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n    height: 100vh;\\n}\\n\\n/* Top title bar */\\n\\n.topBar {\\n    width: 100vw;\\n    height: 125px;\\n    background-color: var(--main-color);\\n    position: absolute;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.title {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n}\\n\\n#titleLogo {\\n    width: 75px;\\n    height: 75px;\\n    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(21deg) brightness(102%) contrast(101%);\\n    margin-left: 30px;\\n    margin-bottom: 5px;\\n}\\n\\n#titleText {\\n    color: white;\\n    font-size: 2rem;\\n    margin-left: 15px;\\n}\\n\\n/* Body */\\n\\n.mainContainer {\\n    display: flex;\\n    flex-direction: row;\\n    width: auto;\\n    height: 100vh;\\n}\\n\\n/* Side navigation */\\n\\n.sideNav {\\n    width: 225px;\\n    height: 100%;\\n    background-color: var(--main-color-light);\\n    padding-top: 125px;\\n}\\n\\n.genericTasks, .projectList {\\n    padding: 0 20px;\\n}\\n\\nli {\\n    list-style-type: none;\\n    padding: 8px;\\n    margin: 5px;\\n    border-radius: 8px;\\n    font-weight: bold;\\n}\\n\\nli:hover {\\n    cursor: pointer;\\n    background-color: var(--main-color-lighter);\\n}\\n\\nbody > div.mainContainer > div.sideNav > h3 {\\n    padding: 0 20px;\\n}\\n\\nli > i, h4 > i {\\n    width: 20px;\\n    height: 20px;\\n    position: relative;\\n    float:left;\\n    margin-right: 10px;\\n}\\n\\n.addProject {\\n    padding: 8px;\\n    margin: 5px 25px;\\n    border-radius: 8px;\\n}\\n\\n.addProject:hover {\\n    cursor: pointer;\\n    background-color: var(--main-color-lighter);\\n}\\n\\n/* Content area */\\n\\n.content {\\n    width: 75%;\\n    padding-top: 135px;\\n\\n}  \\n\\n.taskContainer {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    margin: 15px 30px;\\n    padding: 0 15px;\\n    background-color: var(--main-color-lighter);\\n    border: 0 solid white;\\n    border-radius: 5px;\\n    font-size: 0.9rem;\\n}\\n\\n.taskLeftContainer, .taskRightContainer {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n}\\n\\n.highPriority, .midPriority, .lowPriority {\\n    border-left-width: 5px;\\n}\\n\\n.highPriority {\\n    border-left-color: red;\\n}\\n\\n.midPriority{\\n    border-left-color: yellow;\\n}\\n\\n.lowPriority {\\n    border-left-color: green;\\n}\\n\\n.taskLeftContainer > p, .taskRightContainer > p, .taskRightContainer > i {\\n    padding-left: 10px;\\n    margin: 0;\\n}\\n\\n.taskTitle {\\n    margin: 8px;\\n}\\n\\n.taskRightContainer > i:hover {\\n    filter: invert(12%) sepia(82%) saturate(4946%) hue-rotate(6deg) brightness(74%) contrast(119%);\\n}\\n\\n.blurBackground {\\n    position: absolute;\\n    height: 100vh;\\n    width: 100vw;\\n    backdrop-filter: blur(5px);\\n    display:flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.newProjectContainer {\\n    position: absolute;\\n    background-color: var(--main-color-light);\\n    border-radius: 8px;\\n    box-shadow: 0 0 10px var(--generic-shadow);\\n    width: 400px;\\n    height: 300px;\\n    display: flex;\\n    padding: 10px;\\n}\\n\\ntextarea, input {\\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nfunction addProject() {\n    // Create a div that will blur the background and apply it to obscure the page\n    const blurBackground = document.createElement('div')\n    blurBackground.classList.add(\"blurBackground\")\n    const body = document.getElementsByClassName(\"mainContainer\")\n    body[0].append(blurBackground)\n\n    // Create a prompt on top of the blur to make a new overlay\n    const newProjectContainer = document.createElement('div')\n    newProjectContainer.classList.add('newProjectContainer')\n    blurBackground.append(newProjectContainer)\n\n    const newProjectForm = document.createElement('div')\n    // Create a heading for the form\n    const newProjectHeading = document.createElement('h3')\n    newProjectHeading.textContent = 'Create new project'\n    // Create a title input\n    const newProjectTitle = document.createElement('input')\n    newProjectTitle.type = 'text'\n    newProjectTitle.placeholder = 'Project name'\n    newProjectTitle.id = 'newProjectTitle'\n    // Create a description input\n    const newProjectDesc = document.createElement('textarea')\n    newProjectDesc.rows = '4'\n    newProjectDesc.cols = '40'\n    newProjectDesc.placeholder = \"Enter description here...\"\n    newProjectDesc.id = 'newProjectDesc'\n    // Create a due date input\n    const newProjectDueDate = document.createElement('input')\n    newProjectDueDate.type = 'date'\n    newProjectDueDate.id = 'newProjectDueDate'\n        // Create a low priority input\n    const newProjectLowPriority = document.createElement('input')\n    newProjectLowPriority.type = 'radio'\n    newProjectLowPriority.name = 'priority'\n    newProjectLowPriority.value = 'low'\n    newProjectLowPriority.id = 'low'\n    // Create a mid priority input\n    const newProjectMidPriority = document.createElement('input')\n    newProjectMidPriority.type = 'radio'\n    newProjectMidPriority.name = 'priority'\n    newProjectMidPriority.value = 'mid'\n    newProjectMidPriority.id = 'mid'\n    // Create a high priority input\n    const newProjectHighPriority = document.createElement('input')\n    newProjectHighPriority.type = 'radio'\n    newProjectHighPriority.name = 'priority'\n    newProjectHighPriority.value = 'high'\n    newProjectHighPriority.id = 'high'\n\n    const newProjectSubmit = document.createElement('button')\n    newProjectSubmit.type = 'submit'\n    newProjectSubmit.textContent = 'Create project'\n    newProjectSubmit.addEventListener('click', createProject)\n\n    const newProjectCancel = document.createElement('button')\n    newProjectCancel.type = 'submit'\n    newProjectCancel.textContent = 'Cancel'\n    newProjectCancel.addEventListener('click', clearForm)\n\n    newProjectForm.append(newProjectHeading, \n                          newProjectTitle,\n                          newProjectDesc,\n                          newProjectDueDate,\n                          newProjectLowPriority,\n                          newProjectMidPriority,\n                          newProjectHighPriority,\n                          newProjectSubmit,\n                          newProjectCancel\n                          )\n\n    newProjectContainer.append(newProjectForm)\n\n}\n\nfunction clearForm() {\n    const element = document.getElementsByClassName('blurBackground')\n    element[0].remove();\n}\n\nfunction createProject() {\n    let radios = document.getElementsByName('priority')\n    let priority = ''\n    for (let i = 0; i < radios.length; i++) {\n        if (radios[i].value == 'low') {\n            priority = 'low'\n        } else if (radios[i].value == 'mid') {\n            priority = 'mid'\n        } else {\n            priority = 'high'\n        }\n    }\n\n    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementById('newProjectTitle').value, \n            document.getElementById('newProjectDesc').value,\n            document.getElementById('newProjectDueDate').value,\n            priority, \n            'project')\n    \n    clearForm()\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.refresh)()\n}\n\n//# sourceURL=webpack://todolist/./src/addProject.js?");

/***/ }),

/***/ "./src/displayAllTasks.js":
/*!********************************!*\
  !*** ./src/displayAllTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayAllTasks)\n/* harmony export */ });\nfunction displayAllTasks(taskList) {\n    const content = document.getElementsByClassName(\"content\")\n    for (let i = 0; i < taskList.length; i++) {\n        if (taskList[i].type == \"task\") {\n            const taskLeftContainer = document.createElement('div')\n            taskLeftContainer.id = \"taskL\" + (i + 1)\n            taskLeftContainer.classList.add('taskLeftContainer')\n            \n            const taskRightContainer = document.createElement('div')\n            taskRightContainer.id = 'taskR' + (i + 1)\n            taskRightContainer.classList.add('taskRightContainer')\n            \n            const taskContainer = document.createElement('div')\n            taskContainer.classList.add('taskContainer',`${taskList[i].priority}`)\n\n            //taskPriority.classList.add(`${taskList[i].priority}`)\n            const taskTitle = document.createElement('h3')\n            taskTitle.textContent = taskList[i].title\n            taskTitle.classList.add('taskTitle')\n\n            const taskDescription = document.createElement('p')\n            taskDescription.textContent = taskList[i].description\n            taskDescription.classList.add('taskDesc')\n\n            const taskDueDate = document.createElement('p')\n            taskDueDate.textContent = taskList[i].dueDate\n            taskDueDate.classList.add('taskDueDate')\n\n            const taskDelete = document.createElement('i')\n            taskDelete.classList.add('fa-solid', 'fa-delete-left')\n\n            taskLeftContainer.append(taskTitle, taskDescription)\n            taskRightContainer.append(taskDueDate, taskDelete)\n            taskContainer.append(taskLeftContainer, taskRightContainer)\n            content[0].append(taskContainer)\n        }\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/displayAllTasks.js?");

/***/ }),

/***/ "./src/displayProjects.js":
/*!********************************!*\
  !*** ./src/displayProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProjects)\n/* harmony export */ });\nfunction displayProjects(taskList) {\n    const projectList = document.getElementsByClassName('projectList')\n    for (let i = 0; i < taskList.length; i++) {\n        if (taskList[i].type == \"project\") {\n            //Add the projects to the project list DOM\n            const projectTitle = document.createElement('li')\n            projectTitle.classList.add(\"projectTitle\")\n            projectTitle.innerHTML = `<i class=\"fa-solid fa-diagram-project\"></i>${taskList[i].title}`\n            projectList[0].append(projectTitle)\n        }\n    }\n}   \n\n//# sourceURL=webpack://todolist/./src/displayProjects.js?");

/***/ }),

/***/ "./src/getLocalStorage.js":
/*!********************************!*\
  !*** ./src/getLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocalStorage)\n/* harmony export */ });\nfunction getLocalStorage() {\n    const taskList = []\n    for (let i = 1; i <= localStorage.length; i++) {\n        const tempTask = JSON.parse(localStorage.getItem(i))\n        taskList.push(tempTask);\n    }\n    return taskList;\n}1\n\n//# sourceURL=webpack://todolist/./src/getLocalStorage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refresh\": () => (/* binding */ refresh)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _getLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLocalStorage.js */ \"./src/getLocalStorage.js\");\n/* harmony import */ var _displayAllTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayAllTasks.js */ \"./src/displayAllTasks.js\");\n/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayProjects.js */ \"./src/displayProjects.js\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n\n\n\n\n\n\n\n\n// bind the event handler to the add project button\nconst addProjectButton = document.getElementsByClassName(\"addProject\")\naddProjectButton[0].addEventListener('click', _addProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n\n//newTask(\"TestTitle\", \"TestDesc\", \"TestDueDate\", \"lowPriority\", \"project\");\nfunction refresh() {\n    ;(0,_displayAllTasks_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_getLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n}\n\nrefresh()\n// storageAvailable('localStorage')\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ storageAvailable)\n/* harmony export */ });\nfunction storageAvailable(type) {\n    let storage;\n    try {\n        storage = window[type];\n        const x = '__storage_test__';\n        storage.setItem(x, x);\n        storage.removeItem(x);\n        return true;\n    }\n    catch (e) {\n        return e instanceof DOMException && (\n            // everything except Firefox\n            e.code === 22 ||\n            // Firefox\n            e.code === 1014 ||\n            // test name field too, because code might not be present\n            // everything except Firefox\n            e.name === 'QuotaExceededError' ||\n            // Firefox\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n            // acknowledge QuotaExceededError only if there's something already stored\n            (storage && storage.length !== 0);\n    }\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newTask)\n/* harmony export */ });\nfunction newTask(title, description, dueDate, priority, type) {\n    const tempTask = new task(title, description, dueDate, priority, type)\n    localStorage.setItem((localStorage.length +1) , JSON.stringify(tempTask))\n}\n\nfunction task(title, description, dueDate, priority, type) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.priority = priority\n    this.type = type\n}\n\n//# sourceURL=webpack://todolist/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/addProject.js");
/******/ 	
/******/ })()
;
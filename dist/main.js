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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color-shadow: grey;\\n  --section-padding: 8px;\\n  --section-margin: 8px;\\n  --border-radius-default: 0.75rem;\\n  --primary-color: #00ffff;\\n  --primary-color-dark: #008181;\\n  --shade-color: #494949da;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Raleway\\\", sans-serif;\\n}\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  font-size: 100%;\\n}\\n\\nbutton {\\n  background-color: var(--primary-color);\\n  color: white;\\n  border: none;\\n  border-radius: 32px;\\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\\n  text-decoration: none;\\n  font-size: 1.5rem;\\n  transition-duration: 0.2s;\\n  cursor: pointer;\\n}\\n\\nbutton:hover {\\n  background-color: var(--primary-color-dark);\\n}\\n\\nmain {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n}\\n\\n#content-container {\\n  grid-column: 2 / 4;\\n}\\n\\ninput:checked ~ .task-name,\\ninput:checked ~ .task-description {\\n  text-decoration: line-through;\\n}\\n\\nform {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  padding: var(--section-padding);\\n  transform: translate(-50%, -50%);\\n  width: 50%;\\n  background: lightcyan;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.top-right {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadDefaultEventListeners\": () => (/* binding */ loadDefaultEventListeners),\n/* harmony export */   \"loadMainContent\": () => (/* binding */ loadMainContent),\n/* harmony export */   \"loadSideBar\": () => (/* binding */ loadSideBar)\n/* harmony export */ });\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n/* harmony import */ var _todoListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoListItem.js */ \"./src/todoListItem.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\nconst body = document.querySelector('body');\nconst projectList = document.querySelector('#project-list');\nconst contentHeader = document.querySelector('#content-header');\nconst contentDescription = document.querySelector('#content-description');\nconst contentBody = document.querySelector('#content-body');\nconst newProjectBtn = document.querySelector('#newProjectBtn');\nconst newTaskBtn = document.querySelector('#newTaskBtn');\n\nlet currentProject = null;\n\nfunction setCurrentProject(projectName) {\n  currentProject = _projectController_js__WEBPACK_IMPORTED_MODULE_0__.getProject(projectName);\n}\n\nfunction loadSideBar() {\n  clearContent(projectList);\n  loadProjects(_projectController_js__WEBPACK_IMPORTED_MODULE_0__.getProjectNames());\n\n  function loadProjects(projectNames) {\n    projectNames.forEach((projectName) => {\n      const projectElement = document.createElement('li');\n      projectElement.classList.add('project');\n      const projectBtn = document.createElement('button');\n      projectBtn.classList.add('project-name-btn');\n      projectBtn.textContent = projectName;\n      projectBtn.addEventListener('click', () => {\n        setCurrentProject(projectName);\n        loadMainContent(projectName);\n      });\n\n      projectElement.appendChild(projectBtn);\n      projectList.appendChild(projectElement);\n    });\n  }\n}\n\nfunction loadMainContent(projectName = 'General') {\n  clearContent(contentBody);\n  setCurrentProject(projectName);\n  contentHeader.textContent = projectName;\n  contentDescription.textContent = currentProject.getProjectDescription();\n\n  const taskList = document.createElement('ul');\n  taskList.setAttribute('id', 'task-container');\n  loadTasks(currentProject, taskList);\n  contentBody.append(taskList);\n\n  function loadTasks(project, parentUl) {\n    const toDoArray = project.getToDoItems();\n    toDoArray.forEach((task) => {\n      const taskElement = document.createElement('li');\n      const checkBox = createCheckBox(project, task);\n      const taskName = document.createElement('h3');\n      taskName.textContent = task.getTitle();\n      taskName.classList.add('task-name');\n      const taskDescription = document.createElement('p');\n      taskDescription.classList.add('task-description');\n      taskDescription.textContent = task.getDescription();\n      const taskDueDate = document.createElement('p');\n      taskDueDate.textContent = task.getDueDate();\n      const editTaskBtn = document.createElement('button');\n      editTaskBtn.textContent = 'Edit';\n      const deleteTaskBtn = document.createElement('button');\n      deleteTaskBtn.textContent = 'Delete';\n\n      checkBox.addEventListener('change', (event) => {\n        task.toggleComplete();\n      });\n\n      editTaskBtn.addEventListener('click', (event) => {\n        loadTaskPopup(task);\n      });\n\n      deleteTaskBtn.addEventListener('click', (event) => {\n        console.log(project.getProjectTitle());\n        // Access the project array and remove the item that matches the current task\n        _projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[\n          _projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectIndex(project.getProjectTitle())\n        ].removeToDoItem(task.getTitle());\n        // projectController\n        //   .getProject(project.getProjectTitle())\n        //   .removeToDoItem(task.getTitle());\n\n        loadMainContent(projectName);\n      });\n\n      taskElement.append(\n        checkBox,\n        taskName,\n        taskDescription,\n        taskDueDate,\n        editTaskBtn,\n        deleteTaskBtn\n      );\n\n      parentUl.appendChild(taskElement);\n    });\n\n    function createCheckBox(inputProject, inputTask) {\n      const newCheckBox = document.createElement('input');\n      newCheckBox.setAttribute('type', 'checkbox');\n      newCheckBox.setAttribute(\n        'id',\n        `checkBox-${inputProject.getToDoIndex(inputTask.getTitle())}`\n      );\n      newCheckBox.setAttribute(\n        'name',\n        `checkBox-${inputProject.getToDoIndex(inputTask.getTitle())}`\n      );\n      newCheckBox.checked = inputTask.isComplete();\n      return newCheckBox;\n    }\n  }\n}\n\nfunction loadProjectPopup(project) {\n  newProjectBtn.setAttribute('disabled', true);\n\n  const projectPopup = document.createElement('div');\n  const projectForm = document.createElement('form');\n  projectForm.setAttribute('id', 'project-form');\n\n  const nameInput = document.createElement('input');\n  setInputValues(\n    nameInput,\n    'text',\n    'project-name',\n    'project-name',\n    'Project Name',\n    true\n  );\n  const nameLabel = createLabel('Project Name', nameInput);\n\n  const descriptionInput = document.createElement('textarea');\n  setInputValues(\n    descriptionInput,\n    'text',\n    'descriptionInput',\n    'descriptionInput',\n    'Project Description',\n    false\n  );\n  const descriptionLabel = createLabel('Project Description', descriptionInput);\n\n  const submitProjectBtn = createSubmitBtn();\n\n  projectForm.onsubmit = (event) => {\n    console.log(`Form submitted`);\n    event.preventDefault();\n    const newProject = _project_js__WEBPACK_IMPORTED_MODULE_2__.project(\n      nameInput.value,\n      descriptionInput.value\n    );\n\n    if (project === undefined) {\n      console.warn('No project given');\n      _projectController_js__WEBPACK_IMPORTED_MODULE_0__.addProject(newProject);\n    } else {\n      _projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[\n        _projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectIndex(currentProject)\n      ] = newProject;\n    }\n\n    loadSideBar();\n    closePopup(projectPopup);\n  };\n  const closeProjectFormBtn = createCloseFormBtn(projectPopup);\n\n  projectForm.append(\n    nameLabel,\n    nameInput,\n    descriptionLabel,\n    descriptionInput,\n    submitProjectBtn,\n    closeProjectFormBtn\n  );\n  projectPopup.append(projectForm);\n  body.append(projectPopup);\n}\n\nfunction loadTaskPopup(task) {\n  newTaskBtn.setAttribute('disabled', true);\n\n  const taskPopup = document.createElement('div');\n  const taskForm = document.createElement('form');\n  taskForm.setAttribute('id', 'task-form');\n\n  // Task name input\n  const nameInput = document.createElement('input');\n  setInputValues(nameInput, 'text', 'task', 'task-name', 'Task Name', true);\n  const nameLabel = createLabel('Task Name', nameInput);\n\n  // Task description input - TO ADD\n\n  // Date Input\n  const dateInput = document.createElement('input');\n  setInputValues(dateInput, 'date', 'due-date', 'due-date');\n  const dateLabel = createLabel('Due Date', 'due-date');\n\n  // Priority Input - TO ADD\n\n  // if an input task was given (edit button clicked)\n  if (task !== undefined) {\n    nameInput.value = task.getTitle();\n    dateInput.value = task.getDueDate();\n  }\n\n  const submitTaskBtn = createSubmitBtn();\n\n  taskForm.onsubmit = (event) => {\n    event.preventDefault();\n    // create to-do item\n    const newToDoItem = _todoListItem_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(\n      nameInput.value,\n      'placeholder description',\n      dateInput.value,\n      'placeholder priority',\n      false\n    );\n    if (task === undefined) {\n      // add the task to the current project\n      currentProject.addToDoItem(newToDoItem);\n    } else {\n      // update the task in the current project\n      // OTHER TASK DATA TO ADD\n      task.setTitle(nameInput.value);\n      task.setDueDate(dateInput.value);\n    }\n    console.log(currentProject.getProjectTitle);\n    loadMainContent(currentProject.getProjectTitle());\n    closePopup(taskPopup);\n  };\n\n  const closeTaskFormBtn = createCloseFormBtn(taskPopup);\n\n  taskForm.append(\n    nameLabel,\n    nameInput,\n    dateLabel,\n    dateInput,\n    submitTaskBtn,\n    closeTaskFormBtn\n  );\n\n  taskPopup.append(taskForm);\n\n  body.append(taskPopup);\n}\n\nfunction setInputValues(input, type, name, id, placeholder, required = false) {\n  input.setAttribute('type', type);\n  input.setAttribute('name', name);\n  input.setAttribute('id', id);\n  input.setAttribute('placeholder', placeholder);\n  input.required = required;\n}\n\nfunction createLabel(text, inputName) {\n  const label = document.createElement('label');\n  label.textContent = text;\n  label.htmlFor = inputName;\n  return label;\n}\n\nfunction createSubmitBtn() {\n  const submitBtn = document.createElement('button');\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.setAttribute('value', 'Submit');\n  submitBtn.textContent = 'Submit';\n  return submitBtn;\n}\n\nfunction createCloseFormBtn(parentPopup) {\n  const closePopupBtn = document.createElement('button');\n  closePopupBtn.setAttribute('type', 'button');\n  closePopupBtn.setAttribute('value', 'X');\n  closePopupBtn.textContent = 'X';\n  closePopupBtn.classList.add('top-right');\n  closePopupBtn.addEventListener('click', () => {\n    closePopup(parentPopup);\n  });\n  return closePopupBtn;\n}\n\nfunction closePopup(popup, btn) {\n  popup.remove();\n  // btn.disabled = false;\n  enableAllButtons();\n}\n\nfunction enableAllButtons() {\n  document.querySelectorAll('button').forEach((button) => {\n    button.disabled = false;\n  });\n}\n\nfunction clearContent(div) {\n  while (div.firstChild) {\n    div.removeChild(div.firstChild);\n  }\n}\n\nfunction loadDefaultEventListeners() {\n  newTaskBtn.addEventListener('click', (event) => {\n    loadTaskPopup();\n  });\n\n  newProjectBtn.addEventListener('click', (event) => {\n    loadProjectPopup();\n  });\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todoListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoListItem.js */ \"./src/todoListItem.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\n\n\n\n\n\n// const toDoItem1 = toDoItemModule.createToDoItem(\n//   'buy food',\n//   'eggs and milk',\n//   '2/1/23',\n//   'high'\n// );\n\nconst toDoItem1 = _todoListItem_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(\n  'buy groceries',\n  'eggs and milk',\n  '2023-01-31',\n  'high',\n  true\n);\n\nconst toDoItem2 = _todoListItem_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(\n  'clean kitchen',\n  'microwave and oven',\n  '2023-01-31',\n  'normal',\n  false\n);\n\nconst toDoItem3 = _todoListItem_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(\n  'feed dog',\n  'bone',\n  '2024-01-31',\n  'high',\n  false\n);\n\n// To do item tests\n//\n// console.log(toDoItem1);\n// console.log(toDoItem1.getTitle());\n// toDoItem1.setTitle('eat cookie');\n// console.log(toDoItem1.getTitle());\n// console.log(toDoItem1.getComplete());\n// toDoItem1.toggleComplete();\n// if (toDoItem1.getComplete()) {\n//   console.log('complete');\n// } else {\n//   console.log('incomplete');\n// }\n\n// Project tests\n//\nconst project1 = _project_js__WEBPACK_IMPORTED_MODULE_2__.project();\nconsole.log(project1.getProjectTitle());\nproject1.setProjectTitle('weekend');\nconsole.log(project1.getProjectTitle());\nconsole.log(`num projects: ${project1.numTasks()}`);\nproject1.addToDoItem(toDoItem1);\nproject1.addToDoItem(toDoItem2);\nproject1.addToDoItem(toDoItem3);\nconsole.log(`num projects: ${project1.numTasks()}`);\n// console.log(`1st project: ${project1.getToDoItems()[0].getTitle()}`);\n// console.log(`2nd project: ${project1.getToDoItems()[1].getTitle()}`);\n\n// project1.removeToDoItem('b');\n// console.log(`num projects: ${project1.numProjects()}`);\n// console.log(`1st project: ${project1.getToDoItems()[0].getTitle()}`);\n// console.log(`2nd project: ${project1.getToDoItems()[1].getTitle()}`);\n\n// Project Controller tests\n//\n// const project1 = projectModule.project();\nconst project2 = _project_js__WEBPACK_IMPORTED_MODULE_2__.project(\n  'Home projects',\n  'Description of project #2',\n  []\n);\n_projectController_js__WEBPACK_IMPORTED_MODULE_3__.addProject(project1);\n_projectController_js__WEBPACK_IMPORTED_MODULE_3__.addProject(project2);\n// console.log(projectController.getProjectArray()[0].getProjectTitle());\n// console.table(projectController.getProjectNames());\n\n_displayController__WEBPACK_IMPORTED_MODULE_4__.loadSideBar();\n_displayController__WEBPACK_IMPORTED_MODULE_4__.loadMainContent(project1.getProjectTitle());\n_displayController__WEBPACK_IMPORTED_MODULE_4__.loadDefaultEventListeners();\n// displayController.loadTaskPopup();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n// import * as toDoItemModule from './todoListItem.js';\n\nconst project = (\n  projectTitle = 'Project',\n  projectDescription = 'Project Description',\n  toDoArray = []\n) => {\n  const getProjectTitle = () => projectTitle;\n  const getProjectDescription = () => projectDescription;\n  const getToDoItems = () => toDoArray;\n\n  const setProjectTitle = (title) => (projectTitle = title);\n  const setProjectDescription = (description) =>\n    (projectDescription = description);\n  const setToDoArray = (array) => (toDoArray = array);\n\n  const addToDoItem = (toDoItem) => toDoArray.push(toDoItem);\n  const removeToDoItem = (itemName) =>\n    toDoArray.splice(getToDoIndex(itemName), 1);\n\n  function getToDoIndex(name) {\n    for (let i = 0; i < numTasks(); i += 1) {\n      if (toDoArray[i].getTitle() === name) {\n        return i;\n      }\n    }\n    return -1;\n  }\n\n  const numTasks = () => toDoArray.length;\n\n  return {\n    getProjectTitle,\n    getProjectDescription,\n    getToDoItems,\n    setProjectTitle,\n    setProjectDescription,\n    setToDoArray,\n    addToDoItem,\n    removeToDoItem,\n    getToDoIndex,\n    numTasks,\n  };\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"getProject\": () => (/* binding */ getProject),\n/* harmony export */   \"getProjectArray\": () => (/* binding */ getProjectArray),\n/* harmony export */   \"getProjectNames\": () => (/* binding */ getProjectNames),\n/* harmony export */   \"projectArray\": () => (/* binding */ projectArray),\n/* harmony export */   \"projectIndex\": () => (/* binding */ projectIndex)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst projectArray = [];\n\nfunction getProjectArray() {\n  return projectArray;\n}\n\nfunction getProjectNames() {\n  // Output array of strings that are the names of each project\n  return projectArray.map((project) => project.getProjectTitle());\n}\n\nfunction getProject(projectTitle) {\n  return projectArray.find(\n    (project) => project.getProjectTitle() === projectTitle\n  );\n}\n\nfunction addProject(project) {\n  projectArray.push(project);\n}\n\nfunction deleteProject(projectName) {\n  projectArray.splice(projectIndex(projectName), 1);\n}\n\nfunction projectIndex(projectName) {\n  return projectArray.findIndex(\n    (project) => project.getProjectTitle() === projectName\n  );\n}\n\n// function getToDoIndex(name) {\n//   for (let i = 0; i < projectArray.length; i += 1) {\n//     if (projectArray[i].getProjectTitle() === name) {\n//       return i;\n//     }\n//   }\n//   return -1;\n// }\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projectController.js?");

/***/ }),

/***/ "./src/todoListItem.js":
/*!*****************************!*\
  !*** ./src/todoListItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoItem\": () => (/* binding */ toDoItem)\n/* harmony export */ });\n// const title = '';\n// const description = '';\n// const dueDate = '';\n// const priority = '';\n\n// function createToDoItem(title, description, dueDate, priority) {\n//   setTitle(title);\n//   setDescription(description);\n//   setDueDate(dueDate);\n//   setPriority(priority);\n// }\n\n// export { createToDoItem };\n\nconst toDoItem = (\n  title,\n  description,\n  dueDate,\n  priority,\n  complete = false\n) => {\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getDueDate = () => dueDate;\n  const getPriority = () => priority;\n  const isComplete = () => complete;\n\n  const setTitle = (value) => (title = value);\n  const setDescription = (value) => (description = value);\n  const setDueDate = (value) => (dueDate = value);\n  const setPriority = (value) => (priority = value);\n  // const setComplete = (value) => (complete = value);\n  const toggleComplete = () => (complete = !complete);\n\n  return {\n    getTitle,\n    getDescription,\n    getDueDate,\n    getPriority,\n    isComplete,\n    setTitle,\n    setDescription,\n    setDueDate,\n    setPriority,\n    toggleComplete,\n  };\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/todoListItem.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
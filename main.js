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

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMainContent\": () => (/* binding */ loadMainContent),\n/* harmony export */   \"loadSideBar\": () => (/* binding */ loadSideBar)\n/* harmony export */ });\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n\n\nconst projectList = document.querySelector('#project-list');\nconst contentHeader = document.querySelector('#content-header');\nconst contentDescription = document.querySelector('#content-description');\nconst contentBody = document.querySelector('#content-body');\n\nfunction loadSideBar() {\n  loadProjects(_projectController_js__WEBPACK_IMPORTED_MODULE_0__.getProjectNames());\n\n  function loadProjects(projectNames) {\n    projectNames.forEach((projectName) => {\n      const projectElement = document.createElement('li');\n      projectElement.classList.add('project');\n      projectElement.textContent = projectName;\n      projectList.appendChild(projectElement);\n    });\n  }\n}\n\nfunction loadMainContent(projectName = 'General') {\n  clearContent(contentBody);\n  const currentProject = _projectController_js__WEBPACK_IMPORTED_MODULE_0__.getProject(projectName);\n  contentHeader.textContent = projectName;\n  contentDescription.textContent = currentProject.getProjectDescription();\n\n  const taskList = document.createElement('ul');\n  taskList.setAttribute('id', 'task-container');\n  loadTasks(currentProject, taskList);\n  contentBody.append(taskList);\n\n  function loadTasks(project, parentUl) {\n    const toDoArray = project.getToDoItems();\n    toDoArray.forEach((task) => {\n      const taskElement = document.createElement('li');\n      const checkBox = document.createElement('input');\n      checkBox.setAttribute('type', 'checkbox');\n      const taskName = document.createElement('h3');\n      taskName.textContent = task.getTitle();\n      const taskDescription = document.createElement('p');\n      taskDescription.textContent = task.getDescription();\n      const taskDueDate = document.createElement('p');\n      taskDueDate.textContent = task.getDueDate();\n      const editTaskBtn = document.createElement('button');\n      editTaskBtn.textContent = 'Edit';\n      const deleteTaskBtn = document.createElement('button');\n      deleteTaskBtn.textContent = 'Delete';\n\n      checkBox.addEventListener('change', (event) => {\n        // Need to test\n        task.toggleComplete();\n        loadMainContent(projectName);\n      });\n\n      //   editTaskBtn.addEventListener('click', loadTaskEdit(task));\n      //   function loadTaskEdit(taskToLoad) {}\n\n      deleteTaskBtn.addEventListener('click', (event) => {\n        console.log(project.getProjectTitle());\n        // Access the project array and remove the item that matches the current task\n        _projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[\n          _projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectIndex(project.getProjectTitle())\n        ].removeToDoItem(task.getTitle());\n        // projectController\n        //   .getProject(project.getProjectTitle())\n        //   .removeToDoItem(task.getTitle());\n\n        loadMainContent(projectName);\n      });\n\n      taskElement.append(\n        checkBox,\n        taskName,\n        taskDescription,\n        taskDueDate,\n        editTaskBtn,\n        deleteTaskBtn\n      );\n\n      parentUl.appendChild(taskElement);\n    });\n  }\n}\n\nfunction clearContent(div) {\n  while (div.firstChild) {\n    div.removeChild(div.firstChild);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListItem.js */ \"./src/todoListItem.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n// console.log('Hello world');\n\n\n\n\n\n// const toDoItem1 = toDoItemModule.createToDoItem(\n//   'buy food',\n//   'eggs and milk',\n//   '2/1/23',\n//   'high'\n// );\n\nconst toDoItem1 = _todoListItem_js__WEBPACK_IMPORTED_MODULE_0__.toDoItem(\n  'b',\n  'eggs and milk',\n  '2/1/23',\n  'high',\n  true\n);\n\nconst toDoItem2 = _todoListItem_js__WEBPACK_IMPORTED_MODULE_0__.toDoItem(\n  'clean kitchen',\n  'microwave and oven',\n  '5/3/23',\n  'normal',\n  false\n);\n\nconst toDoItem3 = _todoListItem_js__WEBPACK_IMPORTED_MODULE_0__.toDoItem(\n  'feed dog',\n  'bone',\n  '3/3/23',\n  'high',\n  false\n);\n\n// To do item tests\n//\n// console.log(toDoItem1);\n// console.log(toDoItem1.getTitle());\n// toDoItem1.setTitle('eat cookie');\n// console.log(toDoItem1.getTitle());\n// console.log(toDoItem1.getComplete());\n// toDoItem1.toggleComplete();\n// if (toDoItem1.getComplete()) {\n//   console.log('complete');\n// } else {\n//   console.log('incomplete');\n// }\n\n// Project tests\n//\nconst project1 = _project_js__WEBPACK_IMPORTED_MODULE_1__.project();\nconsole.log(project1.getProjectTitle());\nproject1.setProjectTitle('weekend');\nconsole.log(project1.getProjectTitle());\nconsole.log(`num projects: ${project1.numTasks()}`);\nproject1.addToDoItem(toDoItem1);\nproject1.addToDoItem(toDoItem2);\nproject1.addToDoItem(toDoItem3);\nconsole.log(`num projects: ${project1.numTasks()}`);\n// console.log(`1st project: ${project1.getToDoItems()[0].getTitle()}`);\n// console.log(`2nd project: ${project1.getToDoItems()[1].getTitle()}`);\n\n// project1.removeToDoItem('b');\n// console.log(`num projects: ${project1.numProjects()}`);\n// console.log(`1st project: ${project1.getToDoItems()[0].getTitle()}`);\n// console.log(`2nd project: ${project1.getToDoItems()[1].getTitle()}`);\n\n// Project Controller tests\n//\n// const project1 = projectModule.project();\nconst project2 = _project_js__WEBPACK_IMPORTED_MODULE_1__.project(\n  'Home projects',\n  'Description of project #2',\n  []\n);\n_projectController_js__WEBPACK_IMPORTED_MODULE_2__.addProject(project1);\n_projectController_js__WEBPACK_IMPORTED_MODULE_2__.addProject(project2);\n// console.log(projectController.getProjectArray()[0].getProjectTitle());\n// console.table(projectController.getProjectNames());\n\n_displayController__WEBPACK_IMPORTED_MODULE_3__.loadSideBar();\n_displayController__WEBPACK_IMPORTED_MODULE_3__.loadMainContent(project1.getProjectTitle());\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n// import * as toDoItemModule from './todoListItem.js';\n\nconst project = (\n  projectTitle = 'Project',\n  projectDescription = 'Project Description',\n  toDoArray = []\n) => {\n  const getProjectTitle = () => projectTitle;\n  const getProjectDescription = () => projectDescription;\n  const getToDoItems = () => toDoArray;\n\n  const setProjectTitle = (title) => (projectTitle = title);\n  const setProjectDescription = (description) =>\n    (projectDescription = description);\n  const setToDoArray = (array) => (toDoArray = array);\n\n  const addToDoItem = (toDoItem) => toDoArray.push(toDoItem);\n  const removeToDoItem = (itemName) =>\n    toDoArray.splice(getToDoIndex(itemName), 1);\n\n  function getToDoIndex(name) {\n    for (let i = 0; i < numTasks(); i += 1) {\n      if (toDoArray[i].getTitle() === name) {\n        return i;\n      }\n    }\n    return -1;\n  }\n\n  const numTasks = () => toDoArray.length;\n\n  return {\n    getProjectTitle,\n    getProjectDescription,\n    getToDoItems,\n    setProjectTitle,\n    setProjectDescription,\n    setToDoArray,\n    addToDoItem,\n    removeToDoItem,\n    numTasks,\n  };\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoItem\": () => (/* binding */ toDoItem)\n/* harmony export */ });\n// const title = '';\n// const description = '';\n// const dueDate = '';\n// const priority = '';\n\n// function createToDoItem(title, description, dueDate, priority) {\n//   setTitle(title);\n//   setDescription(description);\n//   setDueDate(dueDate);\n//   setPriority(priority);\n// }\n\n// export { createToDoItem };\n\nconst toDoItem = (\n  title,\n  description,\n  dueDate,\n  priority,\n  complete = false\n) => {\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getDueDate = () => dueDate;\n  const getPriority = () => priority;\n  const getComplete = () => complete;\n\n  const setTitle = (value) => (title = value);\n  const setDescription = (value) => (description = value);\n  const setDueDate = (value) => (dueDate = value);\n  const setPriority = (value) => (priority = value);\n  // const setComplete = (value) => (complete = value);\n  const toggleComplete = () => (complete = !complete);\n\n  return {\n    getTitle,\n    getDescription,\n    getDueDate,\n    getPriority,\n    getComplete,\n    setTitle,\n    setDescription,\n    setDueDate,\n    setPriority,\n    toggleComplete,\n  };\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/todoListItem.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
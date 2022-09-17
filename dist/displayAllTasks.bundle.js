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

/***/ "./src/displayAllTasks.js":
/*!********************************!*\
  !*** ./src/displayAllTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayAllTasks)\n/* harmony export */ });\nfunction displayAllTasks(taskList) {\n    const content = document.getElementsByClassName(\"content\")\n    for (let i = 0; i < taskList.length; i++) {\n        const taskLeftContainer = document.createElement('div')\n        taskLeftContainer.id = \"taskL\" + (i + 1)\n        taskLeftContainer.classList.add('taskLeftContainer')\n        \n        const taskRightContainer = document.createElement('div')\n        taskRightContainer.id = 'taskR' + (i + 1)\n        taskRightContainer.classList.add('taskRightContainer')\n        \n        const taskContainer = document.createElement('div')\n        taskContainer.classList.add('taskContainer',`${taskList[i].priority}`)\n\n        //taskPriority.classList.add(`${taskList[i].priority}`)\n        const taskTitle = document.createElement('h3')\n        taskTitle.textContent = taskList[i].title\n        taskTitle.classList.add('taskTitle')\n\n        const taskDescription = document.createElement('p')\n        taskDescription.textContent = taskList[i].description\n        taskDescription.classList.add('taskDesc')\n\n        const taskDueDate = document.createElement('p')\n        taskDueDate.textContent = taskList[i].dueDate\n        taskDueDate.classList.add('taskDueDate')\n\n        const taskDelete = document.createElement('i')\n        taskDelete.classList.add('fa-solid', 'fa-delete-left')\n\n        taskLeftContainer.append(taskTitle, taskDescription)\n        taskRightContainer.append(taskDueDate, taskDelete)\n        taskContainer.append(taskLeftContainer, taskRightContainer)\n        content[0].append(taskContainer)\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/displayAllTasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/displayAllTasks.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
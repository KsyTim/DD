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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabsSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabsSlider */ \"./src/modules/tabsSlider.js\");\n\n\n\n(0,_modules_tabsSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://food-sense/./src/index.js?");

/***/ }),

/***/ "./src/modules/tabsSlider.js":
/*!***********************************!*\
  !*** ./src/modules/tabsSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabsSlider = function tabsSlider() {\n  var slides = document.querySelectorAll('.tabs-content-item');\n  var slidesPaginationTabs = document.querySelectorAll('.tabs-pagination-item');\n\n  var handler = function handler() {\n    document.addEventListener('click', function (e) {\n      var target = e.target;\n\n      var toggleElems = function toggleElems(elems, classAdd, item) {\n        elems.forEach(function (elem) {\n          if (elem.classList.contains(classAdd)) {\n            elem.classList.remove(classAdd);\n          }\n        });\n        item.classList.add(classAdd);\n      };\n\n      var slide = function slide(item) {\n        slides.forEach(function (elem) {\n          e.preventDefault();\n          toggleElems(slidesPaginationTabs, 'tabs-pagination-item__active', item);\n\n          if (item.getAttribute('href').substring(1) === elem.getAttribute('id')) {\n            toggleElems(slides, 'tabs-content-item__active', elem);\n          }\n        });\n      };\n\n      if (target.matches('.tabs-pagination-item')) {\n        slide(target);\n      } else if (target.closest('a') && /#tab-\\d*/i.test(target.closest('a').getAttribute('href'))) {\n        slide(target.closest('a'));\n      }\n    });\n  };\n\n  handler();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsSlider);\n\n//# sourceURL=webpack://food-sense/./src/modules/tabsSlider.js?");

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
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabsSlider = function tabsSlider() {\n  // all slides\n  var slides = document.querySelectorAll('.tabs-content-item'); // all slides tabs\n\n  var slidesPaginationTabs = document.querySelectorAll('.tabs-pagination-item'); // slider dots container\n\n  var dotsContainer = document.querySelector('.tabs-dots'); // display dots in slides per page amount\n\n  var displayDots = function displayDots() {\n    for (var i = 0; i < slides.length; i++) {\n      dotsContainer.insertAdjacentHTML('beforeend', '<li class=\"tabs-dots-item\"></li>');\n      var activeDot = document.querySelectorAll('.tabs-dots-item');\n\n      if (slides[i].classList.contains('tabs-content-item__active')) {\n        activeDot[i].classList.add('tabs-dots-item__active');\n      }\n    }\n  };\n\n  displayDots(); // all slider dots\n\n  var dotsAll = document.querySelectorAll('.tabs-dots-item');\n  var currentSlide = 0;\n  var interval; // add active class to next slide\n\n  var doSlide = function doSlide(elem, index, className) {\n    elem[index].classList.add(className);\n  }; // remove active class over all elements\n\n\n  var removeClass = function removeClass(elems, classAdd) {\n    elems.forEach(function (elem) {\n      if (elem.classList.contains(classAdd)) {\n        elem.classList.remove(classAdd);\n      }\n    });\n  }; // go to next slide (left/right)\n\n\n  var slide = function slide(direction) {\n    // determinate current slide index\n    slides.forEach(function (slide, index) {\n      if (slide.classList.contains('tabs-content-item__active')) {\n        currentSlide = index;\n      }\n    }); // remove active class over all slider elements\n\n    removeClass(slides, 'tabs-content-item__active');\n    removeClass(dotsAll, 'tabs-dots-item__active');\n    removeClass(slidesPaginationTabs, 'tabs-pagination-item__active'); // slides arrow begin/end condition on scroll\n\n    if (direction === 'left') {\n      // if current slide's first then back to last slide\n      if (currentSlide === 0) {\n        currentSlide = 3; // else go to previous slide\n      } else {\n        currentSlide--;\n      }\n    } else if (direction === 'right') {\n      // if current slide's last then go to first slide\n      if (currentSlide === 3) {\n        currentSlide = 0; // else go to next slide\n      } else {\n        currentSlide++;\n      }\n    } // add active class over all next slides rely on current slide obtained index \n\n\n    doSlide(slides, currentSlide, 'tabs-content-item__active');\n    doSlide(slidesPaginationTabs, currentSlide, 'tabs-pagination-item__active');\n    doSlide(dotsAll, currentSlide, 'tabs-dots-item__active');\n  }; // click event\n\n\n  var clickEvent = function clickEvent() {\n    document.addEventListener('click', function (e) {\n      var target = e.target; // remove active class on over all elements and then add active to required\n\n      var toggleElems = function toggleElems(elems, classAdd, item) {\n        removeClass(elems, classAdd);\n        item.classList.add(classAdd);\n      }; // click tabs container elements\n\n\n      var doTab = function doTab(item) {\n        var small = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n        slides.forEach(function (elem) {\n          e.preventDefault();\n          toggleElems(slidesPaginationTabs, 'tabs-pagination-item__active', item); // if tab element link anchor(without #) equal slides content container item id then open this slide\n\n          if (item.getAttribute('href') && item.getAttribute('href').substring(1) === elem.getAttribute('id')) {\n            toggleElems(slides, 'tabs-content-item__active', elem);\n          }\n        }); // if screen less then 480px display dots with current slide active dot\n\n        if (small) {\n          dotsAll.forEach(function (dot, index) {\n            if (dot.classList.contains('tabs-dots-item__active')) {\n              toggleElems(slides, 'tabs-content-item__active', slides[index]);\n            }\n          });\n        }\n      }; // if click on tab then open slide\n\n\n      if (target.matches('.tabs-pagination-item')) {\n        doTab(target); // if click on tab title or subtitle then open slide\n      } else if (target.closest('a') && /#tab-\\d*/i.test(target.closest('a').getAttribute('href'))) {\n        doTab(target.closest('a')); // if click on dot then open slide\n      } else if (target.matches('.tabs-dots-item')) {\n        toggleElems(dotsAll, 'tabs-dots-item__active', target);\n        doTab(target, true); // if click on slider arrows\n      } else if (target.matches('.tabs-arrows-item')) {\n        // if click on left arrow then scroll to previous slide\n        if (target.classList.contains('tabs-arrows-item__left')) {\n          slide('left'); // if click on right arrow then scoll to next slide\n        } else if (target.classList.contains('tabs-arrows-item__right')) {\n          slide('right');\n        }\n      }\n    });\n  };\n\n  clickEvent(); // slider autoplay\n\n  var autoPlaySlide = function autoPlaySlide() {\n    slide('right');\n  }; // set interval on slider autoplay\n\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  }; // stop slider autoplay\n\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  }; // mouse event\n\n\n  var mouseEvent = function mouseEvent(event) {\n    document.addEventListener(event, function (e) {\n      var target = e.target; // if move cursor over tab/tab title/tab subtitle/slider dot/slider arrow\n\n      if (target.matches('.tabs-pagination-item') || target.matches('.tabs-name') || target.matches('.tabs-info') || target.matches('.tabs-dots-item') || target.matches('.tabs-arrows-item')) {\n        if (event === 'mouseover') {\n          // then stop slider autoplay\n          stopSlide(); // else move cursor out these elements then start slider autoplay again\n        } else if (event === 'mouseout') {\n          startSlide();\n        }\n      }\n    });\n  };\n\n  mouseEvent('mouseover');\n  mouseEvent('mouseout');\n  startSlide(); // keyboard events\n\n  var keyboardEvent = function keyboardEvent(direction) {\n    var buttonKey = \"Arrow\".concat(direction[0].toLocaleUpperCase()).concat(direction.substring(1)); // while press button => stop slider autoplay and go to next/previous slide\n\n    document.addEventListener('keydown', function (e) {\n      if (e.key === buttonKey) {\n        stopSlide();\n        slide(direction);\n      }\n    }); // while remove button press => start slider autoplay again \n\n    document.addEventListener('keyup', function (e) {\n      if (e.key === buttonKey) {\n        startSlide();\n      }\n    });\n  };\n\n  keyboardEvent('right');\n  keyboardEvent('left');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsSlider);\n\n//# sourceURL=webpack://food-sense/./src/modules/tabsSlider.js?");

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
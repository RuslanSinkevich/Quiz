/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kviz/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sliders_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.js */ \"./src/js/select.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_select_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n// Вычисляем длину input в зависимости от их количества, \r\n// в данном случе если меньше 3 то длина 100%\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  const quizFormBody = document.getElementsByClassName(\"quiz-form__body\");\r\n  for (let i = 0; i < quizFormBody.length; i++) {\r\n    const quizFormRadioLabel = quizFormBody[i].children;\r\n    if (quizFormBody[i].children.length <= 3) {\r\n      for (let r = 0; r < quizFormRadioLabel.length; r++) {\r\n        quizFormRadioLabel[r].style.width = \"100vh\";\r\n      }\r\n    }\r\n  }\r\n});\r\n\r\n\r\n\r\n  \r\n\r\n\n\n//# sourceURL=webpack://kviz/./src/js/index.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ (() => {

eval("const nameSelect = \"quiz\";\r\nconst EL = document.querySelector(\".\" + nameSelect + \"-select\");\r\n\r\nconst EL_TOGGLE = EL.querySelector(\".\" + nameSelect + \"-select__toggle\");\r\nconst EL_TOGGLE_ALL_EL = EL_TOGGLE.querySelectorAll(\"*\");\r\nconst EL_TOGGLE_SELECTED_OPTION = EL_TOGGLE.querySelector(\".\" + nameSelect + \"-select__toggle-selected\");\r\n\r\nconst EL_OPTIONS = EL.querySelector(\".\" + nameSelect + \"-select__options\");\r\nconst EL_OPTION = EL_OPTIONS.querySelectorAll(\".\" + nameSelect + \"-select__option\");\r\n\r\n\r\nconst EL_DROPDOWN = EL.querySelector(\".\" + nameSelect + \"-select__dropdown\");\r\nlet selectOptionValue = \"\";\r\nlet selectOptionIndex = 0;\r\n\r\n// Показ скрытие списка\r\nfunction showHide() {\r\n  EL_DROPDOWN.style.display === \"block\"\r\n    ? (EL_DROPDOWN.style.display = \"none\")\r\n    : (EL_DROPDOWN.style.display = \"block\");\r\n}\r\n\r\n// Добавляет событие открытия на все дочерние элементы внутри toggle\r\n// Добавляем атрибут select__toggle_children ко всем дочерним элементам\r\nEL_TOGGLE.addEventListener(\"click\", showHide);\r\nEL_TOGGLE_ALL_EL.forEach(function (event) {\r\n  event.addEventListener(\"click\", showHide);\r\n  event.setAttribute(\"select__toggle_children\", \"1\");\r\n});\r\n\r\n// Скрывает список с опциями\r\n// Не скрывает список, если кликаем по дочерним элементам\r\n// selectToggle проверяет есть ли у EL_TOGGLE дочерние элементы\r\ndocument.addEventListener(\"click\", function (event) {\r\n  const selectToggle = event.target.getAttribute(\"select__toggle_children\");\r\n  if (event.target != EL_TOGGLE && 1 != selectToggle) {\r\n    EL_DROPDOWN.style.display = \"none\";\r\n  }\r\n});\r\n\r\n// Выбор элементов из списка \r\nEL_OPTIONS.addEventListener(\"click\", function (event) {\r\n  // Удалить класс у всех li элементов внутри EL_OPTIONS\r\n  EL_OPTION.forEach(function (option, index) {\r\n    option.classList.remove(nameSelect + \"-select__option-selected\");\r\n    option.setAttribute(\"data-index\", index);\r\n  });\r\n\r\n  // Добавить класс elect__option_selected к выбранному элементу\r\n  event.target.classList.add(nameSelect + \"-select__option-selected\");\r\n  selectOptionValue = event.target.getAttribute(\"data-value\");\r\n  selectOptionIndex = event.target.getAttribute(\"data-index\");\r\n\r\n  // Поднимаем в верх выбранный элемент списка\r\n  EL_OPTIONS.insertBefore(event.target, EL_OPTIONS.firstChild);\r\n\r\n  // Добавить в  выбранный элемент списка текст.\r\n  EL_TOGGLE_SELECTED_OPTION.innerHTML = event.target.innerHTML;\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://kviz/./src/js/select.js?");

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/***/ (() => {

eval("// ----- слайдер ------\r\nconst slider = document.querySelector(\".form-quiz\");\r\nconst sliderPagination = document.querySelectorAll(\".quiz-form__paganation\");\r\nconst sliderContainer = slider.querySelector(\".quiz-form__sliders\");\r\nconst slides = slider.querySelectorAll(\".quiz-form__slide\");\r\nconst btnAllBlock = slider.querySelector(\".quiz-form__footer\");\r\nconst btnBack = slider.querySelector(\".quiz-form__btn-back\");\r\nconst btnForward = slider.querySelector(\".quiz-form__btn-forward\");\r\npagination(slides.length, 0);\r\nlet slideIndex = 0;\r\n\r\nfunction setSlide(index) {\r\n  sliderContainer.style.transform = `translateX(${getTranslateXValue(\r\n    slides.length,\r\n    index\r\n  )}%)`;\r\n  pagination(slides.length, index);\r\n\r\n  // убираем кнопки в последнем слайде\r\n  if (index === slides.length - 1) {\r\n    btnAllBlock.style.display = \"none\";\r\n  } else {\r\n    btnAllBlock.style.display = \"flex\";\r\n  }\r\n\r\n  // убираем кнопу назад в начальном слайде\r\n  if (index === 0 || index === slides.length - 1) btnBack.style.display = \"none\";\r\n  else btnBack.style.display = \"flex\";\r\n}\r\n\r\nfunction prevSlide() {\r\n  if (slideIndex > 0) {\r\n    slideIndex--;\r\n    setSlide(slideIndex);\r\n  }\r\n}\r\n\r\nfunction pagination(slidesLength, currentSlide) {\r\n  sliderPagination[currentSlide].innerHTML = `Шаг ${\r\n    currentSlide + 1\r\n  }/${slidesLength}`;\r\n}\r\n\r\nfunction nextSlide() {\r\n  if (slideIndex < slides.length - 1) {\r\n    slideIndex++;\r\n    setSlide(slideIndex);\r\n  }\r\n}\r\n\r\nbtnBack.addEventListener(\"click\", prevSlide);\r\nbtnForward.addEventListener(\"click\", nextSlide);\r\n\r\n// вычисляем смешение слайдов относительно их количества\r\nfunction getTranslateXValue(numItems, currentIndex) {\r\n  const percentAllElement = 100 / numItems; //\r\n  const percentOneElement = percentAllElement * currentIndex;\r\n  let translateX = -percentOneElement;\r\n  return translateX;\r\n}\r\n\n\n//# sourceURL=webpack://kviz/./src/js/sliders.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
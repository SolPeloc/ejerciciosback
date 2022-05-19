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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const saludo = __webpack_require__(/*! ./mensaje1 */ \"./src/mensaje1.js\")\r\nconst mensaje = __webpack_require__(/*! ./mensaje2 */ \"./src/mensaje2.js\")\r\nconst nombre = \"sol\"\r\n\r\n\r\nconsole.log(saludo(nombre))\r\nconsole.log(mensaje)\r\n\n\n//# sourceURL=webpack://ejercicio/./src/index.js?");

/***/ }),

/***/ "./src/mensaje1.js":
/*!*************************!*\
  !*** ./src/mensaje1.js ***!
  \*************************/
/***/ ((module) => {

eval("const saludo = (nombre)=>{\r\n    return \"hola \" + nombre\r\n}\r\n\r\nmodule.exports = saludo //exporto esta funcion para usar en el index.js\n\n//# sourceURL=webpack://ejercicio/./src/mensaje1.js?");

/***/ }),

/***/ "./src/mensaje2.js":
/*!*************************!*\
  !*** ./src/mensaje2.js ***!
  \*************************/
/***/ ((module) => {

eval("let mensaje = \"hola soy mensaje\"\r\n\r\nmodule.exports = mensaje //export\n\n//# sourceURL=webpack://ejercicio/./src/mensaje2.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
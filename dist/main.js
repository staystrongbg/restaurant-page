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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\n  {\n    name: 'palacinke',\n    img:\n      'https://delimanors.azureedge.net/media/recipe/image/cache/580x436/p/a/palacinke-cokoladne-recept-img.jpg',\n    heading: 'palacinke',\n    price: '$22.90',\n    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam\n              consequatur accusamus delectus temporibus deleniti. Explicabo quis\n              atque`,\n  },\n  {\n    name: 'sendvici',\n    img:\n      'https://www.kuvarancije.com/images/stories/razno/2015/muffuletta/mufuleta-11.jpg',\n    heading: 'sendvici',\n    price: '$25.90',\n    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam\n              consequatur accusamus delectus temporibus deleniti. Explicabo quis\n              atque`,\n  },\n  {\n    name: 'kuvana jela',\n    img:\n      'https://www.didykitchen.com/wp-content/uploads/2018/08/krompir-paprikas-srednja.jpg',\n    heading: 'kuvana jela',\n    price: '$45.90',\n    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam\n              consequatur accusamus delectus temporibus deleniti. Explicabo quis\n              atque`,\n  },\n  {\n    name: 'rostilj',\n    img: 'http://krov.rs/wp-content/uploads/2018/08/rostilj-uvodna-800x445.jpg',\n    heading: 'rostilj',\n    price: '$15.90',\n    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam\n              consequatur accusamus delectus temporibus deleniti. Explicabo quis\n              atque`,\n  },\n  {\n    name: 'saldoledi',\n    img:\n      'https://www.instore.rs/gallery/thumb/-9/page/1/marker/16966/photo/14484.jpeg',\n    heading: 'sladoledi',\n    price: '$5.90',\n    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam\n              consequatur accusamus delectus temporibus deleniti. Explicabo quis\n              atque`,\n  },\n  {\n    name: 'kolaci',\n    img: 'https://www.susic.rs/wp-content/uploads/2018/02/2mobO.jpg',\n    heading: 'kolaci',\n    price: '$12.90',\n    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam\n              consequatur accusamus delectus temporibus deleniti. Explicabo quis\n              atque`,\n  },\n];\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n// import css from '../style.css';\n(0,_load__WEBPACK_IMPORTED_MODULE_0__.loaded)();\nconst menu = document.querySelector('.menu');\nconst links = document.querySelector('.links');\nconst category = ['home', 'menu', 'contact'];\n// const content = document.getElementById('content');\nconst header = document.querySelector('.header');\nheader.innerHTML = `<h1>Restaurant</h1>`;\nlinks.innerHTML = category\n  .map((a) => {\n    return /*html*/ `<li class=\"link\">${a}</li>`;\n  })\n  .join('');\n\nconst link = document.querySelectorAll('.link');\n// console.log(link);\nlink.forEach((a) => a.addEventListener('click', showContent));\n\nfunction foodMenu() {\n  menu.style = '';\n  menu.classList.remove('bcg-img');\n  menu.innerHTML = _data__WEBPACK_IMPORTED_MODULE_1__.data.map(({ name, desc, img, price, heading }) => {\n      console.log(img);\n      return /*html*/ `<article class=\"item\">\n              <img class='item-img' src='${img}'\n                alt=${name}\n              />\n              <div class=\"item-info\">\n                <div class=\"item-header\">\n                  <h3 class=\"heading\">${heading}</h3>\n                  <h3 class=\"price\">${price}</h3>\n                </div>\n                <p class=\"text\">\n                  ${desc}\n                </p>\n              </div>\n            </article>`;\n    })\n    .join('');\n}\n\nfunction contact() {\n  menu.style.gridTemplateColumns = '1fr';\n  menu.style.maxWidth = '100vw';\n  menu.style.margin = 0;\n  menu.style.padding = 0;\n  menu.classList.remove('bcg-img');\n  // const styles = {\n  //   gridTemplateColumns: '1fr',\n  //   maxWidth: '100vw',\n  //   margin: 0,\n  //   padding: 0,\n  // };\n\n  menu.innerHTML = /*html */ `\n  <div class=\"container\">\n  <form action=\"/action_page.php\">\n    <label for=\"fname\">First Name</label>\n    <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n\n    <label for=\"lname\">Last Name</label>\n    <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n\n    <label for=\"country\">Country</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"australia\">Australia</option>\n      <option value=\"canada\">Canada</option>\n      <option value=\"usa\">USA</option>\n    </select>\n\n    <label for=\"subject\">Subject</label>\n    <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:200px\"></textarea>\n\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</div>`;\n}\n\nfunction showContent(e) {\n  const evt = e.currentTarget;\n  evt.textContent === 'home'\n    ? (0,_load__WEBPACK_IMPORTED_MODULE_0__.loaded)()\n    : evt.textContent === 'menu'\n    ? foodMenu()\n    : contact();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loaded\": () => (/* binding */ loaded)\n/* harmony export */ });\n// window.addEventListener('load', loaded);\nconst content = document.getElementById('content');\nconst div = document.createElement('div');\ncontent.appendChild(div);\ndiv.classList.add('menu');\nconst menu = document.querySelector('.menu');\n\nfunction loaded() {\n  console.log(menu);\n\n  menu.classList.add('bcg-img');\n  menu.style.gridTemplateColumns = '1fr';\n  menu.style.maxWidth = '100vw';\n  menu.style.margin = 0;\n  menu.style.padding = 0;\n  menu.style.height = '100vh';\n  // menu.classList.add('bcg-img');\n  menu.innerHTML = /*html*/ `<h1 class='load-scr-h'>Welcome to our restaurant</h1>\n`;\n}\n\n\n\n// 063 587 016 dr Veselinovic\n\n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

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
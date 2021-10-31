/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _js_js1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/js1 */ \"./js/js1.js\");\n/* harmony import */ var _js_js2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/js2 */ \"./js/js2.js\");\n/* harmony import */ var _js_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/parallax */ \"./js/parallax.js\");\n/* harmony import */ var _js_preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/preloader */ \"./js/preloader.js\");\n/* harmony import */ var _js_preloader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_preloader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/navigation */ \"./js/navigation.js\");\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db.json */ \"./db.json\");\n\n\n\n\n\n\n\nconsole.log('Это файл APP.JS');\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_js_js1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_js_js2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_js_parallax__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_js_navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // preloader();\n}); // load all images\n//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)\n\nvar images = importAll(__webpack_require__(\"./images sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar galery = importAll(__webpack_require__(\"./images/galery sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar reviews = importAll(__webpack_require__(\"./images/reviews sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar popservants = importAll(__webpack_require__(\"./images/pop-servants sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar services = importAll(__webpack_require__(\"./images/services sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar news = importAll(__webpack_require__(\"./images/news sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar map = importAll(__webpack_require__(\"./images/map sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar blog = importAll(__webpack_require__(\"./images/blog sync \\\\.(png|jpe?g|svg|gif)$\"));\n\nfunction importAll(r) {\n  var images = {};\n  r.keys().map(function (item, index) {\n    images[item.replace('./', '')] = r(item);\n  });\n  return images;\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/js1.js":
/*!*******************!*\
  !*** ./js/js1.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction one() {\n  console.log('Это файл 1'); //много другого кода  - весь модуль\n\n  var burger = document.querySelector('.header__burger'),\n      burgerMenu = document.querySelector('.burger__menu');\n  burger.addEventListener('click', function (e) {\n    burgerMenu.classList.toggle('active');\n    burger.classList.toggle('active');\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (one);\n\n//# sourceURL=webpack:///./js/js1.js?");

/***/ }),

/***/ "./js/js2.js":
/*!*******************!*\
  !*** ./js/js2.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction two() {\n  console.log('Это файл 2'); //много другого кода  - весь модуль\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (two);\n\n//# sourceURL=webpack:///./js/js2.js?");

/***/ }),

/***/ "./js/navigation.js":
/*!**************************!*\
  !*** ./js/navigation.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction navigation() {\n  // Navigation\n  document.querySelectorAll('a[href^=\"#\"').forEach(function (link) {\n    link.addEventListener('click', function (e) {\n      e.preventDefault();\n      var href = this.getAttribute('href').substring(1);\n      console.log(href);\n      var scrollTarget = document.getElementById(href);\n      var topOffset = document.querySelector('.header').offsetHeight; // const topOffset = 0; // если не нужен отступ сверху \n\n      var elementPosition = scrollTarget.getBoundingClientRect().top;\n      var offsetPosition = elementPosition - topOffset;\n      window.scrollBy({\n        top: offsetPosition,\n        behavior: 'smooth'\n      });\n    });\n  }); // btn to top\n\n  function btnToTopShow() {\n    if (window.pageYOffset !== 0) {\n      btnTop.forEach(function (elem) {\n        elem.classList.add('active');\n      });\n    } else {\n      btnTop.forEach(function (elem) {\n        elem.classList.remove('active');\n      });\n    }\n  }\n\n  window.addEventListener('scroll', btnToTopShow);\n  var btnTop = document.querySelectorAll('.button__to__top');\n  btnTop.forEach(function (elem) {\n    elem.addEventListener('click', function (e) {\n      e.preventDefault();\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth'\n      });\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n//# sourceURL=webpack:///./js/navigation.js?");

/***/ }),

/***/ "./js/parallax.js":
/*!************************!*\
  !*** ./js/parallax.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction parallax() {\n  function parallaxBg(background, block) {\n    block.addEventListener('mousemove', function (e) {\n      var x = e.clientX / window.innerWidth;\n      var y = e.clientY / window.innerHeight;\n      background.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';\n    });\n  }\n\n  if (document.querySelector('#homepage')) {\n    parallaxBg(document.querySelector('.pop__servants__background'), document.querySelector('.pop__servants__inner'));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parallax);\n\n//# sourceURL=webpack:///./js/parallax.js?");

/***/ }),

/***/ "./js/preloader.js":
/*!*************************!*\
  !*** ./js/preloader.js ***!
  \*************************/
/***/ (function() {

eval("// function preloader() {\n//     document.body.onload = function() {\n//         setTimeout(function() {\n//             let preloader = document.querySelector('.preloader');\n//             if (!preloader.classList.contains('done')) {\n//                 preloader.classList.add('done');\n//             }\n//             document.body.classList.add('scroll');\n//         }, 1000);\n//     };\n// }\n// export default preloader;\n\n//# sourceURL=webpack:///./js/preloader.js?");

/***/ }),

/***/ "./images/blog/avatar-comment.jpg":
/*!****************************************!*\
  !*** ./images/blog/avatar-comment.jpg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/blog/avatar-comment.jpg\");\n\n//# sourceURL=webpack:///./images/blog/avatar-comment.jpg?");

/***/ }),

/***/ "./images/blog/avatar.jpg":
/*!********************************!*\
  !*** ./images/blog/avatar.jpg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/blog/avatar.jpg\");\n\n//# sourceURL=webpack:///./images/blog/avatar.jpg?");

/***/ }),

/***/ "./images/blog/blog-bg.jpg":
/*!*********************************!*\
  !*** ./images/blog/blog-bg.jpg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/blog/blog-bg.jpg\");\n\n//# sourceURL=webpack:///./images/blog/blog-bg.jpg?");

/***/ }),

/***/ "./images/blog/post__image1.jpg":
/*!**************************************!*\
  !*** ./images/blog/post__image1.jpg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/blog/post__image1.jpg\");\n\n//# sourceURL=webpack:///./images/blog/post__image1.jpg?");

/***/ }),

/***/ "./images/blog/post__image2.jpg":
/*!**************************************!*\
  !*** ./images/blog/post__image2.jpg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/blog/post__image2.jpg\");\n\n//# sourceURL=webpack:///./images/blog/post__image2.jpg?");

/***/ }),

/***/ "./images/blog/post__image3.jpg":
/*!**************************************!*\
  !*** ./images/blog/post__image3.jpg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/blog/post__image3.jpg\");\n\n//# sourceURL=webpack:///./images/blog/post__image3.jpg?");

/***/ }),

/***/ "./images/burger-menu-bg.jpg":
/*!***********************************!*\
  !*** ./images/burger-menu-bg.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/burger-menu-bg.jpg\");\n\n//# sourceURL=webpack:///./images/burger-menu-bg.jpg?");

/***/ }),

/***/ "./images/form-bg.jpg":
/*!****************************!*\
  !*** ./images/form-bg.jpg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/form-bg.jpg\");\n\n//# sourceURL=webpack:///./images/form-bg.jpg?");

/***/ }),

/***/ "./images/galery/1.jpg":
/*!*****************************!*\
  !*** ./images/galery/1.jpg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/1.jpg\");\n\n//# sourceURL=webpack:///./images/galery/1.jpg?");

/***/ }),

/***/ "./images/galery/2.jpg":
/*!*****************************!*\
  !*** ./images/galery/2.jpg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/2.jpg\");\n\n//# sourceURL=webpack:///./images/galery/2.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo1.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo1.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo1.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo1.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo10.jpg":
/*!******************************************!*\
  !*** ./images/galery/galery-photo10.jpg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo10.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo10.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo2.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo2.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo2.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo2.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo3.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo3.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo3.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo3.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo4.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo4.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo4.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo4.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo5.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo5.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo5.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo5.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo6.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo6.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo6.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo6.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo7.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo7.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo7.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo7.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo8.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo8.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo8.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo8.jpg?");

/***/ }),

/***/ "./images/galery/galery-photo9.jpg":
/*!*****************************************!*\
  !*** ./images/galery/galery-photo9.jpg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/galery-photo9.jpg\");\n\n//# sourceURL=webpack:///./images/galery/galery-photo9.jpg?");

/***/ }),

/***/ "./images/galery/insta5.jpg":
/*!**********************************!*\
  !*** ./images/galery/insta5.jpg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/galery/insta5.jpg\");\n\n//# sourceURL=webpack:///./images/galery/insta5.jpg?");

/***/ }),

/***/ "./images/intro-bg.jpg":
/*!*****************************!*\
  !*** ./images/intro-bg.jpg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/intro-bg.jpg\");\n\n//# sourceURL=webpack:///./images/intro-bg.jpg?");

/***/ }),

/***/ "./images/logo.jpg":
/*!*************************!*\
  !*** ./images/logo.jpg ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo.jpg\");\n\n//# sourceURL=webpack:///./images/logo.jpg?");

/***/ }),

/***/ "./images/map/entrance.jpg":
/*!*********************************!*\
  !*** ./images/map/entrance.jpg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/map/entrance.jpg\");\n\n//# sourceURL=webpack:///./images/map/entrance.jpg?");

/***/ }),

/***/ "./images/map/loby.jpg":
/*!*****************************!*\
  !*** ./images/map/loby.jpg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/map/loby.jpg\");\n\n//# sourceURL=webpack:///./images/map/loby.jpg?");

/***/ }),

/***/ "./images/map/map-bg.png":
/*!*******************************!*\
  !*** ./images/map/map-bg.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/map/map-bg.png\");\n\n//# sourceURL=webpack:///./images/map/map-bg.png?");

/***/ }),

/***/ "./images/map/valo.jpg":
/*!*****************************!*\
  !*** ./images/map/valo.jpg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/map/valo.jpg\");\n\n//# sourceURL=webpack:///./images/map/valo.jpg?");

/***/ }),

/***/ "./images/news/news-creame.jpg":
/*!*************************************!*\
  !*** ./images/news/news-creame.jpg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/news/news-creame.jpg\");\n\n//# sourceURL=webpack:///./images/news/news-creame.jpg?");

/***/ }),

/***/ "./images/news/news-eyebrow.jpg":
/*!**************************************!*\
  !*** ./images/news/news-eyebrow.jpg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/news/news-eyebrow.jpg\");\n\n//# sourceURL=webpack:///./images/news/news-eyebrow.jpg?");

/***/ }),

/***/ "./images/news/news-shoes.jpg":
/*!************************************!*\
  !*** ./images/news/news-shoes.jpg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/news/news-shoes.jpg\");\n\n//# sourceURL=webpack:///./images/news/news-shoes.jpg?");

/***/ }),

/***/ "./images/pop-servants/pop-servants-background.png":
/*!*********************************************************!*\
  !*** ./images/pop-servants/pop-servants-background.png ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/pop-servants/pop-servants-background.png\");\n\n//# sourceURL=webpack:///./images/pop-servants/pop-servants-background.png?");

/***/ }),

/***/ "./images/pop-servants/pop-servants-manicure-polish.jpg":
/*!**************************************************************!*\
  !*** ./images/pop-servants/pop-servants-manicure-polish.jpg ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/pop-servants/pop-servants-manicure-polish.jpg\");\n\n//# sourceURL=webpack:///./images/pop-servants/pop-servants-manicure-polish.jpg?");

/***/ }),

/***/ "./images/pop-servants/pop-servants-manicure.jpg":
/*!*******************************************************!*\
  !*** ./images/pop-servants/pop-servants-manicure.jpg ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/pop-servants/pop-servants-manicure.jpg\");\n\n//# sourceURL=webpack:///./images/pop-servants/pop-servants-manicure.jpg?");

/***/ }),

/***/ "./images/pop-servants/pop-servants-pedicure.jpg":
/*!*******************************************************!*\
  !*** ./images/pop-servants/pop-servants-pedicure.jpg ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/pop-servants/pop-servants-pedicure.jpg\");\n\n//# sourceURL=webpack:///./images/pop-servants/pop-servants-pedicure.jpg?");

/***/ }),

/***/ "./images/reviews/reviews-bg.jpg":
/*!***************************************!*\
  !*** ./images/reviews/reviews-bg.jpg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/reviews/reviews-bg.jpg\");\n\n//# sourceURL=webpack:///./images/reviews/reviews-bg.jpg?");

/***/ }),

/***/ "./images/reviews/reviews-photo1.jpg":
/*!*******************************************!*\
  !*** ./images/reviews/reviews-photo1.jpg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/reviews/reviews-photo1.jpg\");\n\n//# sourceURL=webpack:///./images/reviews/reviews-photo1.jpg?");

/***/ }),

/***/ "./images/reviews/reviews-photo2.jpg":
/*!*******************************************!*\
  !*** ./images/reviews/reviews-photo2.jpg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/reviews/reviews-photo2.jpg\");\n\n//# sourceURL=webpack:///./images/reviews/reviews-photo2.jpg?");

/***/ }),

/***/ "./images/reviews/reviews-photo3.jpg":
/*!*******************************************!*\
  !*** ./images/reviews/reviews-photo3.jpg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/reviews/reviews-photo3.jpg\");\n\n//# sourceURL=webpack:///./images/reviews/reviews-photo3.jpg?");

/***/ }),

/***/ "./images/services/price1.jpg":
/*!************************************!*\
  !*** ./images/services/price1.jpg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/services/price1.jpg\");\n\n//# sourceURL=webpack:///./images/services/price1.jpg?");

/***/ }),

/***/ "./images/services/services-background.png":
/*!*************************************************!*\
  !*** ./images/services/services-background.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/services/services-background.png\");\n\n//# sourceURL=webpack:///./images/services/services-background.png?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./images/blog sync \\.(png|jpe?g|svg|gif)$":
/*!***************************************************************!*\
  !*** ./images/blog/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./avatar-comment.jpg\": \"./images/blog/avatar-comment.jpg\",\n\t\"./avatar.jpg\": \"./images/blog/avatar.jpg\",\n\t\"./blog-bg.jpg\": \"./images/blog/blog-bg.jpg\",\n\t\"./post__image1.jpg\": \"./images/blog/post__image1.jpg\",\n\t\"./post__image2.jpg\": \"./images/blog/post__image2.jpg\",\n\t\"./post__image3.jpg\": \"./images/blog/post__image3.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/blog sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/blog/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images/galery sync \\.(png|jpe?g|svg|gif)$":
/*!*****************************************************************!*\
  !*** ./images/galery/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./1.jpg\": \"./images/galery/1.jpg\",\n\t\"./2.jpg\": \"./images/galery/2.jpg\",\n\t\"./galery-photo1.jpg\": \"./images/galery/galery-photo1.jpg\",\n\t\"./galery-photo10.jpg\": \"./images/galery/galery-photo10.jpg\",\n\t\"./galery-photo2.jpg\": \"./images/galery/galery-photo2.jpg\",\n\t\"./galery-photo3.jpg\": \"./images/galery/galery-photo3.jpg\",\n\t\"./galery-photo4.jpg\": \"./images/galery/galery-photo4.jpg\",\n\t\"./galery-photo5.jpg\": \"./images/galery/galery-photo5.jpg\",\n\t\"./galery-photo6.jpg\": \"./images/galery/galery-photo6.jpg\",\n\t\"./galery-photo7.jpg\": \"./images/galery/galery-photo7.jpg\",\n\t\"./galery-photo8.jpg\": \"./images/galery/galery-photo8.jpg\",\n\t\"./galery-photo9.jpg\": \"./images/galery/galery-photo9.jpg\",\n\t\"./insta5.jpg\": \"./images/galery/insta5.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/galery sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/galery/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images/map sync \\.(png|jpe?g|svg|gif)$":
/*!**************************************************************!*\
  !*** ./images/map/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./entrance.jpg\": \"./images/map/entrance.jpg\",\n\t\"./loby.jpg\": \"./images/map/loby.jpg\",\n\t\"./map-bg.png\": \"./images/map/map-bg.png\",\n\t\"./valo.jpg\": \"./images/map/valo.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/map sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/map/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images/news sync \\.(png|jpe?g|svg|gif)$":
/*!***************************************************************!*\
  !*** ./images/news/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./news-creame.jpg\": \"./images/news/news-creame.jpg\",\n\t\"./news-eyebrow.jpg\": \"./images/news/news-eyebrow.jpg\",\n\t\"./news-shoes.jpg\": \"./images/news/news-shoes.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/news sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/news/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images/pop-servants sync \\.(png|jpe?g|svg|gif)$":
/*!***********************************************************************!*\
  !*** ./images/pop-servants/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./pop-servants-background.png\": \"./images/pop-servants/pop-servants-background.png\",\n\t\"./pop-servants-manicure-polish.jpg\": \"./images/pop-servants/pop-servants-manicure-polish.jpg\",\n\t\"./pop-servants-manicure.jpg\": \"./images/pop-servants/pop-servants-manicure.jpg\",\n\t\"./pop-servants-pedicure.jpg\": \"./images/pop-servants/pop-servants-pedicure.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/pop-servants sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/pop-servants/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images/reviews sync \\.(png|jpe?g|svg|gif)$":
/*!******************************************************************!*\
  !*** ./images/reviews/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./reviews-bg.jpg\": \"./images/reviews/reviews-bg.jpg\",\n\t\"./reviews-photo1.jpg\": \"./images/reviews/reviews-photo1.jpg\",\n\t\"./reviews-photo2.jpg\": \"./images/reviews/reviews-photo2.jpg\",\n\t\"./reviews-photo3.jpg\": \"./images/reviews/reviews-photo3.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/reviews sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/reviews/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images/services sync \\.(png|jpe?g|svg|gif)$":
/*!*******************************************************************!*\
  !*** ./images/services/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./price1.jpg\": \"./images/services/price1.jpg\",\n\t\"./services-background.png\": \"./images/services/services-background.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/services sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/services/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images sync \\.(png|jpe?g|svg|gif)$":
/*!**********************************************************!*\
  !*** ./images/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./burger-menu-bg.jpg\": \"./images/burger-menu-bg.jpg\",\n\t\"./form-bg.jpg\": \"./images/form-bg.jpg\",\n\t\"./intro-bg.jpg\": \"./images/intro-bg.jpg\",\n\t\"./logo.jpg\": \"./images/logo.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"menu\":[{\"img\":\"img/tabs/vegy.jpg\",\"title\":\"vegy\"}]}');\n\n//# sourceURL=webpack:///./db.json?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
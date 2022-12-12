/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header/Header */ "./js/components/Header/Header.jsx");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./js/pages/Home/index.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer/Footer */ "./js/components/Footer/Footer.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/dist/index.js");





var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./js/components/AnimatedTextLine/AnimatedTextLine.jsx":
/*!*************************************************************!*\
  !*** ./js/components/AnimatedTextLine/AnimatedTextLine.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Title */ "./js/components/Title.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "../node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);




var AnimatedTextLine = function AnimatedTextLine() {
  var isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
    query: "(max-width: 991px)"
  });
  var isUltraWide = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
    query: "(min-width: 1920px)"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animated-textline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    className: "animated-textline__line",
    animate: {
      translateX: ['-100%', '0%']
    },
    transition: {
      duration: isUltraWide ? 7 : 9,
      ease: 'linear',
      repeat: Infinity
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title_transparent"
  }, "UI/UX Web & Mobile App Graphic Design Motion Development\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    className: "animated-textline__line",
    animate: {
      translateX: ['-100%', '0%']
    },
    transition: {
      duration: isUltraWide ? 7 : 9,
      ease: 'linear',
      repeat: Infinity
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title_transparent"
  }, "UI/UX Web & Mobile App Graphic Design Motion Development\xA0"))), isUltraWide && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    className: "animated-textline__line",
    animate: {
      translateX: ['-100%', '0%']
    },
    transition: {
      duration: 7,
      ease: 'linear',
      repeat: Infinity
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title_transparent"
  }, "UI/UX Web & Mobile App Graphic Design Motion Development\xA0"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedTextLine);

/***/ }),

/***/ "./js/components/ArrowBtn.jsx":
/*!************************************!*\
  !*** ./js/components/ArrowBtn.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/dist/index.js");


var ArrowBtn = function ArrowBtn(_ref) {
  var _onClick = _ref.onClick,
    type = _ref.type,
    to = _ref.to,
    children = _ref.children;
  if (type === 'link') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "link-arrow",
      to: to
    }, children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "link-arrow",
    onClick: function onClick() {
      return _onClick;
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowBtn);

/***/ }),

/***/ "./js/components/Footer/Footer.jsx":
/*!*****************************************!*\
  !*** ./js/components/Footer/Footer.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "footer"
  }, "Footer");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./js/components/Header/Header.jsx":
/*!*****************************************!*\
  !*** ./js/components/Header/Header.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./js/components/Header/Menu.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _assets_images_icons_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/icons/logo.svg */ "./assets/images/icons/logo.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Header = function Header() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpened = _useState2[0],
    setMenuOpened = _useState2[1];
  var htmlElement = document.documentElement;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Lock body scroll when menu is opened
    if (menuOpened && htmlElement) {
      window.scrollTo(0, 0);
      htmlElement.classList.add('is-locked');
    } else {
      htmlElement.classList.remove('is-locked');
    }
  }, [menuOpened]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "header ".concat(menuOpened ? 'header_active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "logo header-logo",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    width: "38",
    height: "38",
    src: _assets_images_icons_logo_svg__WEBPACK_IMPORTED_MODULE_2__,
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "menu-btn ".concat(menuOpened ? 'menu-btn_opened' : ''),
    onClick: function onClick() {
      return setMenuOpened(function (prev) {
        return !prev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-btn-sticks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-btn__text"
  }, "Menu"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    opened: menuOpened
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./js/components/Header/Menu.jsx":
/*!***************************************!*\
  !*** ./js/components/Header/Menu.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _data_publicRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/publicRoutes */ "./js/data/publicRoutes.js");
/* harmony import */ var _data_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/contact */ "./js/data/contact.js");
/* harmony import */ var _AnimatedTextLine_AnimatedTextLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AnimatedTextLine/AnimatedTextLine */ "./js/components/AnimatedTextLine/AnimatedTextLine.jsx");
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scrollbars-2 */ "../node_modules/react-custom-scrollbars-2/lib/index.js");







var menuLinks = [{
  name: 'About',
  route: _data_publicRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].about
}, {
  name: 'Cases',
  route: _data_publicRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].cases
}, {
  name: 'Services',
  route: _data_publicRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].services
}, {
  name: 'Process',
  route: _data_publicRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].process
}, {
  name: 'Contact',
  route: _data_publicRoutes__WEBPACK_IMPORTED_MODULE_1__["default"].contact
}];
var Menu = function Menu(_ref) {
  var opened = _ref.opened;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, null, opened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    className: "menu",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_4__.Scrollbars, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav menu-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu-list"
  }, menuLinks.map(function (link) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "menu-list__item",
      key: link.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      to: link.route,
      className: "title title_size-s link"
    }, link.name));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-contacts__link-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:".concat(_data_contact__WEBPACK_IMPORTED_MODULE_2__["default"].email),
    className: "title title_size-xs link"
  }, _data_contact__WEBPACK_IMPORTED_MODULE_2__["default"].email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-contacts__link-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "tel:".concat(_data_contact__WEBPACK_IMPORTED_MODULE_2__["default"].tel),
    className: "title title_size-xs link"
  }, _data_contact__WEBPACK_IMPORTED_MODULE_2__["default"].tel))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-textline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AnimatedTextLine_AnimatedTextLine__WEBPACK_IMPORTED_MODULE_3__["default"], null))))) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./js/components/TextBlock.jsx":
/*!*************************************!*\
  !*** ./js/components/TextBlock.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TextBlock = function TextBlock(_ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'white' : _ref$color,
    className = _ref.className,
    size = _ref.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(className ? className : '', " text-block ").concat(color === 'blue' ? "text_blue" : '', " ").concat(size && "text_size-".concat(size))
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBlock);

/***/ }),

/***/ "./js/components/Title.jsx":
/*!*********************************!*\
  !*** ./js/components/Title.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Title = function Title(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'l' : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'white' : _ref$color,
    children = _ref.children;
  switch (size) {
    case 'xl':
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
          className: "title title_size-".concat(size, " ").concat(color === "blue" && "text_blue")
        }, children);
      }
    case 'l':
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
          className: "title title_size-".concat(size, " ").concat(color === "blue" && "text_blue")
        }, children);
      }
    case 's':
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
          className: "title title_size-".concat(size, " ").concat(color === "blue" && "text_blue")
        }, children);
      }
    case 'sm':
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
          className: "title title_size-".concat(size, " ").concat(color === "blue" && "text_blue")
        }, children);
      }
    case 'xs':
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
          className: "title title_size-".concat(size, " ").concat(color === "blue" && "text_blue")
        }, children);
      }
    default:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
          className: "title title_size-".concat(size, " ").concat(color === "blue" && "text_blue")
        }, children);
      }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./js/data/contact.js":
/*!****************************!*\
  !*** ./js/data/contact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CONTACT = {
  email: 'info@uxmindpro.com',
  tel: '+00 000 000 000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONTACT);

/***/ }),

/***/ "./js/data/publicRoutes.js":
/*!*********************************!*\
  !*** ./js/data/publicRoutes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PUBLIC_ROUTES = {
  about: '/about',
  cases: '/cases',
  services: '/services',
  process: '/process',
  contact: '/contact'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PUBLIC_ROUTES);

/***/ }),

/***/ "./js/functions/functions.js":
/*!***********************************!*\
  !*** ./js/functions/functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoords": () => (/* binding */ getCoords),
/* harmony export */   "getViewportCoords": () => (/* binding */ getViewportCoords)
/* harmony export */ });
// Here are stored all functions that can be reused
function getCoords(el) {
  var box = el.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
function getViewportCoords(el) {
  var box = el.getBoundingClientRect();
  return {
    top: box.top,
    right: box.right,
    bottom: box.bottom,
    left: box.left
  };
}

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./js/App.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.html */ "./index.html");





var rootElement = document.getElementById('root');
react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(rootElement).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./js/pages/Home/Experience/Experience.jsx":
/*!*************************************************!*\
  !*** ./js/pages/Home/Experience/Experience.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../functions/functions */ "./js/functions/functions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Experience = function Experience() {
  var experienceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 0, 0]),
    _useState2 = _slicedToArray(_useState, 2),
    offsetY = _useState2[0],
    setOffsetY = _useState2[1];
  var _useScroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)(),
    scrollY = _useScroll.scrollY;

  // Animation values for the Experience block
  var topSizes = [0, 600, 850];
  var heightSizes = [560, 1000, 0];
  var scale = [1, 1, 0];
  var minHeight = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, offsetY, heightSizes);
  var topPosition = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, offsetY, topSizes);
  var scaleY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, offsetY, scale);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (experienceRef) {
      var _getCoords = (0,_functions_functions__WEBPACK_IMPORTED_MODULE_1__.getCoords)(experienceRef.current),
        top = _getCoords.top;
      var topValue = top - Math.max(0, Math.max.apply(Math, topSizes));
      setOffsetY([topValue, topValue + 600, topValue + 1000]);
    }
  }, [experienceRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "experience",
    ref: experienceRef,
    style: {
      height: minHeight,
      marginTop: topPosition,
      scale: scaleY
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "experience-wrapper text_blue text_size-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "UX Mind Creative Agency's team with\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "7+\xA0years of experience"), " in\xA0UX/UI web\xA0&\xA0mobile design, NFT projects and SAAs. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We create style."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

/***/ }),

/***/ "./js/pages/Home/Hero/AnimatedTitle/AnimatedTitle.jsx":
/*!************************************************************!*\
  !*** ./js/pages/Home/Hero/AnimatedTitle/AnimatedTitle.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Title */ "./js/components/Title.jsx");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "../node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/es/render/dom/motion.mjs");




var AnimatedTitle = function AnimatedTitle() {
  var isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
    query: "(max-width: 991px)"
  });
  var isUltraWide = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
    query: "(min-width: 1920px)"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-title__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "xl"
  }, "UX Mind")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    className: "hero-title_animated",
    animate: {
      translateX: ['0', '-100%']
    },
    transition: {
      duration: isMobile ? 5 : isUltraWide ? 7 : 9,
      ease: 'linear',
      repeat: Infinity
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title_transparent"
  }, "UX Mind UX Mind\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    className: "hero-title_animated hero-title_animated-last",
    animate: {
      translateX: ['100%', '0%']
    },
    transition: {
      duration: isMobile ? 5 : isUltraWide ? 7 : 9,
      ease: 'linear',
      repeat: Infinity
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title_transparent"
  }, "UX Mind UX Mind\xA0"))), (isMobile || isUltraWide) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    className: "hero-title_animated",
    animate: {
      translateX: ['200%', '100%']
    },
    transition: {
      duration: isMobile ? 5 : isUltraWide ? 7 : 9,
      ease: 'linear',
      repeat: Infinity
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title_transparent"
  }, "UX Mind UX Mind\xA0"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedTitle);

/***/ }),

/***/ "./js/pages/Home/Hero/Hero.jsx":
/*!*************************************!*\
  !*** ./js/pages/Home/Hero/Hero.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnimatedTitle_AnimatedTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedTitle/AnimatedTitle */ "./js/pages/Home/Hero/AnimatedTitle/AnimatedTitle.jsx");
/* harmony import */ var _components_TextBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/TextBlock */ "./js/components/TextBlock.jsx");
/* harmony import */ var _components_AnimatedTextLine_AnimatedTextLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/AnimatedTextLine/AnimatedTextLine */ "./js/components/AnimatedTextLine/AnimatedTextLine.jsx");




var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AnimatedTitle_AnimatedTitle__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TextBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We build engaging user experience for early-stage startups by connecting the dots between users\u2019 needs and the client\u2019s business model.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AnimatedTextLine_AnimatedTextLine__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./js/pages/Home/Projects/Projects.jsx":
/*!*********************************************!*\
  !*** ./js/pages/Home/Projects/Projects.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArrowBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ArrowBtn */ "./js/components/ArrowBtn.jsx");
/* harmony import */ var _data_publicRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/publicRoutes */ "./js/data/publicRoutes.js");
/* harmony import */ var _assets_images_project1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/project1.png */ "./assets/images/project1.png");
/* harmony import */ var _assets_images_project1_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/images/project1@2x.png */ "./assets/images/project1@2x.png");
/* harmony import */ var _assets_images_project2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/images/project2.png */ "./assets/images/project2.png");
/* harmony import */ var _assets_images_project2_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/images/project2@2x.png */ "./assets/images/project2@2x.png");
/* harmony import */ var _assets_images_project3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/images/project3.png */ "./assets/images/project3.png");
/* harmony import */ var _assets_images_project3_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/images/project3@2x.png */ "./assets/images/project3@2x.png");









var Projects = function Projects() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "latest-projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "title title_size-l"
  }, "Our latest ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title_transparent"
  }, "projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects-header__count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "title title_size-xs"
  }, "150+ projects"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects-slider__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects-slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects-slider__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "chapter text_size-s"
  }, "Ecommerce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "title title_size-sm"
  }, "Headphone Store"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects-slider__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_project1_png__WEBPACK_IMPORTED_MODULE_3__,
    srcSet: "".concat(_assets_images_project1_png__WEBPACK_IMPORTED_MODULE_3__, " 1x, ").concat(_assets_images_project1_2x_png__WEBPACK_IMPORTED_MODULE_4__, " 2x"),
    alt: "project"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "latest-projects__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ArrowBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "link",
    to: "/projects"
  }, "See more projects")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./js/pages/Home/index.jsx":
/*!*********************************!*\
  !*** ./js/pages/Home/index.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero/Hero */ "./js/pages/Home/Hero/Hero.jsx");
/* harmony import */ var _Experience_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Experience/Experience */ "./js/pages/Home/Experience/Experience.jsx");
/* harmony import */ var _Projects_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects/Projects */ "./js/pages/Home/Projects/Projects.jsx");




var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Experience_Experience__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Projects_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\t<title>Webpack HTML</title>\n</head>\n\n<body>\n\t<div id=\"root\"></div>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1670849935650
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/c65f1100f4b6695581e2.ico";

/***/ }),

/***/ "./assets/images/icons/logo.svg":
/*!**************************************!*\
  !*** ./assets/images/icons/logo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/6ca6d928d097a145d0ff.svg";

/***/ }),

/***/ "./assets/images/project1.png":
/*!************************************!*\
  !*** ./assets/images/project1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/7cdc79c22e0b493b464a.png";

/***/ }),

/***/ "./assets/images/project1@2x.png":
/*!***************************************!*\
  !*** ./assets/images/project1@2x.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/f6f9b28955bf97917f7a.png";

/***/ }),

/***/ "./assets/images/project2.png":
/*!************************************!*\
  !*** ./assets/images/project2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/b491dc3e89cedf8cf072.png";

/***/ }),

/***/ "./assets/images/project2@2x.png":
/*!***************************************!*\
  !*** ./assets/images/project2@2x.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/32f8df75e25efc23b272.png";

/***/ }),

/***/ "./assets/images/project3.png":
/*!************************************!*\
  !*** ./assets/images/project3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ca2ef09f61bdd16c592f.png";

/***/ }),

/***/ "./assets/images/project3@2x.png":
/*!***************************************!*\
  !*** ./assets/images/project3@2x.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ff9f688736389764d344.png";

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3edbe27980a2b0e2fdf2")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_mini-css-extract-plugin_-f07039"], () => (__webpack_require__("../node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_mini-css-extract-plugin_-f07039"], () => (__webpack_require__("../node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_mini-css-extract-plugin_-f07039"], () => (__webpack_require__("./js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRXpoQkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9BbmltYXRlZFRleHRMaW5lL0FuaW1hdGVkVGV4dExpbmUuanN4Iiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvQXJyb3dCdG4uanN4Iiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL0hlYWRlci9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL1RleHRCbG9jay5qc3giLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9jb250YWN0LmpzIiwid2VicGFjazovLy8uL2pzL2RhdGEvcHVibGljUm91dGVzLmpzIiwid2VicGFjazovLy8uL2pzL2Z1bmN0aW9ucy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvSG9tZS9FeHBlcmllbmNlL0V4cGVyaWVuY2UuanN4Iiwid2VicGFjazovLy8uL2pzL3BhZ2VzL0hvbWUvSGVyby9BbmltYXRlZFRpdGxlL0FuaW1hdGVkVGl0bGUuanN4Iiwid2VicGFjazovLy8uL2pzL3BhZ2VzL0hvbWUvSGVyby9IZXJvLmpzeCIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9Ib21lL1Byb2plY3RzL1Byb2plY3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9Ib21lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LlN0cmljdE1vZGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuXHRcdFx0XHQ8QnJvd3NlclJvdXRlcj5cblx0XHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdFx0PFJvdXRlcz5cblx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuXHRcdFx0XHRcdDwvUm91dGVzPlxuXHRcdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PC9Ccm93c2VyUm91dGVyPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9SZWFjdC5TdHJpY3RNb2RlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcblxuY29uc3QgQW5pbWF0ZWRUZXh0TGluZSA9ICgpID0+IHtcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHtcblx0XHRxdWVyeTogYChtYXgtd2lkdGg6IDk5MXB4KWBcblx0fSk7XG5cblx0Y29uc3QgaXNVbHRyYVdpZGUgPSB1c2VNZWRpYVF1ZXJ5KHtcblx0XHRxdWVyeTogYChtaW4td2lkdGg6IDE5MjBweClgXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZC10ZXh0bGluZVwiPlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYW5pbWF0ZWQtdGV4dGxpbmVfX2xpbmVcIlxuXHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0dHJhbnNsYXRlWDogWyctMTAwJScsICcwJSddXG5cdFx0XHRcdH19XG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHRkdXJhdGlvbjogaXNVbHRyYVdpZGUgPyA3IDogOSxcblx0XHRcdFx0XHRlYXNlOiAnbGluZWFyJyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5XG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxUaXRsZSBzaXplPVwic1wiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlX3RyYW5zcGFyZW50XCI+XG5cdFx0XHRcdFx0XHRVSS9VWCBXZWIgJiBNb2JpbGUgQXBwIEdyYXBoaWMgRGVzaWduIE1vdGlvbiBEZXZlbG9wbWVudCZuYnNwO1xuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9UaXRsZT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFuaW1hdGVkLXRleHRsaW5lX19saW5lXCJcblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHRyYW5zbGF0ZVg6IFsnLTEwMCUnLCAnMCUnXVxuXHRcdFx0XHR9fVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0ZHVyYXRpb246IGlzVWx0cmFXaWRlID8gNyA6IDksXG5cdFx0XHRcdFx0ZWFzZTogJ2xpbmVhcicsXG5cdFx0XHRcdFx0cmVwZWF0OiBJbmZpbml0eVxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGl0bGUgc2l6ZT1cInNcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZV90cmFuc3BhcmVudFwiPlxuXHRcdFx0XHRcdFx0VUkvVVggV2ViICYgTW9iaWxlIEFwcCBHcmFwaGljIERlc2lnbiBNb3Rpb24gRGV2ZWxvcG1lbnQmbmJzcDtcblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvVGl0bGU+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHR7aXNVbHRyYVdpZGUgJiYgKFxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFuaW1hdGVkLXRleHRsaW5lX19saW5lXCJcblx0XHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGVYOiBbJy0xMDAlJywgJzAlJ11cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiA3LFxuXHRcdFx0XHRcdFx0ZWFzZTogJ2xpbmVhcicsXG5cdFx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUaXRsZSBzaXplPVwic1wiPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVfdHJhbnNwYXJlbnRcIj5cblx0XHRcdFx0XHRcdFx0VUkvVVggV2ViICYgTW9iaWxlIEFwcCBHcmFwaGljIERlc2lnbiBNb3Rpb24gRGV2ZWxvcG1lbnQmbmJzcDtcblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L1RpdGxlPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0TGluZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IEFycm93QnRuID0gKHsgb25DbGljaywgdHlwZSwgdG8sIGNoaWxkcmVuIH0pID0+IHtcblx0aWYgKHR5cGUgPT09ICdsaW5rJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayBjbGFzc05hbWU9XCJsaW5rLWFycm93XCIgdG89e3RvfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImxpbmstYXJyb3dcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFycm93QnRuO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXHRyZXR1cm4gPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5Gb290ZXI8L2Zvb3Rlcj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28uc3ZnJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXHRjb25zdCBbbWVudU9wZW5lZCwgc2V0TWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBMb2NrIGJvZHkgc2Nyb2xsIHdoZW4gbWVudSBpcyBvcGVuZWRcblx0XHRpZiAobWVudU9wZW5lZCAmJiBodG1sRWxlbWVudCkge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdFx0aHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtbG9ja2VkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvY2tlZCcpO1xuXHRcdH1cblx0fSwgW21lbnVPcGVuZWRdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17YGhlYWRlciAke21lbnVPcGVuZWQgPyAnaGVhZGVyX2FjdGl2ZScgOiAnJ31gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJsb2dvIGhlYWRlci1sb2dvXCIgdG89XCIvXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCIzOFwiIGhlaWdodD1cIjM4XCIgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YG1lbnUtYnRuICR7bWVudU9wZW5lZCA/ICdtZW51LWJ0bl9vcGVuZWQnIDogJyd9YH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TWVudU9wZW5lZCgocHJldikgPT4gIXByZXYpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtYnRuLXN0aWNrc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtZW51LWJ0bl9fdGV4dFwiPk1lbnU8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxNZW51IG9wZW5lZD17bWVudU9wZW5lZH0gLz5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFBVQkxJQ19ST1VURVMgZnJvbSAnLi4vLi4vZGF0YS9wdWJsaWNSb3V0ZXMnO1xuaW1wb3J0IENPTlRBQ1QgZnJvbSAnLi4vLi4vZGF0YS9jb250YWN0JztcbmltcG9ydCBBbmltYXRlZFRleHRMaW5lIGZyb20gJy4uL0FuaW1hdGVkVGV4dExpbmUvQW5pbWF0ZWRUZXh0TGluZSc7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMtMic7XG5cbmNvbnN0IG1lbnVMaW5rcyA9IFtcblx0eyBuYW1lOiAnQWJvdXQnLCByb3V0ZTogUFVCTElDX1JPVVRFUy5hYm91dCB9LFxuXHR7IG5hbWU6ICdDYXNlcycsIHJvdXRlOiBQVUJMSUNfUk9VVEVTLmNhc2VzIH0sXG5cdHsgbmFtZTogJ1NlcnZpY2VzJywgcm91dGU6IFBVQkxJQ19ST1VURVMuc2VydmljZXMgfSxcblx0eyBuYW1lOiAnUHJvY2VzcycsIHJvdXRlOiBQVUJMSUNfUk9VVEVTLnByb2Nlc3MgfSxcblx0eyBuYW1lOiAnQ29udGFjdCcsIHJvdXRlOiBQVUJMSUNfUk9VVEVTLmNvbnRhY3QgfVxuXTtcblxuY29uc3QgTWVudSA9ICh7IG9wZW5lZCB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtvcGVuZWQgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWVudVwiXG5cdFx0XHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG5cdFx0XHRcdFx0YW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG5cdFx0XHRcdFx0ZXhpdD17eyBvcGFjaXR5OiAwIH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8U2Nyb2xsYmFycz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2IG1lbnUtbmF2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bWVudUxpbmtzLm1hcCgobGluaykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtbGlzdF9faXRlbVwiIGtleT17bGluay5uYW1lfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG89e2xpbmsucm91dGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXMgbGlua1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2xpbmsubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFjdHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhY3RzX19saW5rLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YG1haWx0bzoke0NPTlRBQ1QuZW1haWx9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUteHMgbGlua1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e0NPTlRBQ1QuZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhY3RzX19saW5rLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YHRlbDoke0NPTlRBQ1QudGVsfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXhzIGxpbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtDT05UQUNULnRlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGV4dGxpbmVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8QW5pbWF0ZWRUZXh0TGluZSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvU2Nyb2xsYmFycz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IG51bGx9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGV4dEJsb2NrID0gKHsgY2hpbGRyZW4sIGNvbG9yID0gJ3doaXRlJywgY2xhc3NOYW1lLCBzaXplIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2Ake2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfSB0ZXh0LWJsb2NrICR7XG5cdFx0XHRcdGNvbG9yID09PSAnYmx1ZScgPyBgdGV4dF9ibHVlYCA6ICcnXG5cdFx0XHR9ICR7c2l6ZSAmJiBgdGV4dF9zaXplLSR7c2l6ZX1gfWB9XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEJsb2NrO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGl0bGUgPSAoeyBzaXplID0gJ2wnLCBjb2xvciA9ICd3aGl0ZScsIGNoaWxkcmVuIH0pID0+IHtcblx0c3dpdGNoIChzaXplKSB7XG5cdFx0Y2FzZSAneGwnOiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXtgdGl0bGUgdGl0bGVfc2l6ZS0ke3NpemV9ICR7Y29sb3IgPT09IGBibHVlYCAmJiBgdGV4dF9ibHVlYH1gfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRjYXNlICdsJzoge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT17YHRpdGxlIHRpdGxlX3NpemUtJHtzaXplfSAke2NvbG9yID09PSBgYmx1ZWAgJiYgYHRleHRfYmx1ZWB9YH0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y2FzZSAncyc6IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9e2B0aXRsZSB0aXRsZV9zaXplLSR7c2l6ZX0gJHtjb2xvciA9PT0gYGJsdWVgICYmIGB0ZXh0X2JsdWVgfWB9PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9oMz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGNhc2UgJ3NtJzoge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGg0IGNsYXNzTmFtZT17YHRpdGxlIHRpdGxlX3NpemUtJHtzaXplfSAke2NvbG9yID09PSBgYmx1ZWAgJiYgYHRleHRfYmx1ZWB9YH0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y2FzZSAneHMnOiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPXtgdGl0bGUgdGl0bGVfc2l6ZS0ke3NpemV9ICR7Y29sb3IgPT09IGBibHVlYCAmJiBgdGV4dF9ibHVlYH1gfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvaDU+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtgdGl0bGUgdGl0bGVfc2l6ZS0ke3NpemV9ICR7Y29sb3IgPT09IGBibHVlYCAmJiBgdGV4dF9ibHVlYH1gfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCJjb25zdCBDT05UQUNUID0ge1xuXHRlbWFpbDogJ2luZm9AdXhtaW5kcHJvLmNvbScsXG5cdHRlbDogJyswMCAwMDAgMDAwIDAwMCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENPTlRBQ1Q7XG4iLCJjb25zdCBQVUJMSUNfUk9VVEVTID0ge1xuXHRhYm91dDogJy9hYm91dCcsXG5cdGNhc2VzOiAnL2Nhc2VzJyxcblx0c2VydmljZXM6ICcvc2VydmljZXMnLFxuXHRwcm9jZXNzOiAnL3Byb2Nlc3MnLFxuXHRjb250YWN0OiAnL2NvbnRhY3QnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQVUJMSUNfUk9VVEVTO1xuIiwiLy8gSGVyZSBhcmUgc3RvcmVkIGFsbCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgcmV1c2VkXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29vcmRzKGVsKSB7XG5cdGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdHJldHVybiB7XG5cdFx0dG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuXHRcdHJpZ2h0OiBib3gucmlnaHQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG5cdFx0Ym90dG9tOiBib3guYm90dG9tICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuXHRcdGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydENvb3JkcyhlbCkge1xuXHRjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRyZXR1cm4ge1xuXHRcdHRvcDogYm94LnRvcCxcblx0XHRyaWdodDogYm94LnJpZ2h0LFxuXHRcdGJvdHRvbTogYm94LmJvdHRvbSxcblx0XHRsZWZ0OiBib3gubGVmdFxuXHR9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0ICcuLi9pbmRleC5odG1sJztcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00uY3JlYXRlUm9vdChyb290RWxlbWVudCkucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zZm9ybSwgbW90aW9uLCB1c2VTY3JvbGwgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IGdldFZpZXdwb3J0Q29vcmRzLCBnZXRDb29yZHMgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJztcblxuY29uc3QgRXhwZXJpZW5jZSA9ICgpID0+IHtcblx0Y29uc3QgZXhwZXJpZW5jZVJlZiA9IHVzZVJlZihudWxsKTtcblx0Y29uc3QgW29mZnNldFksIHNldE9mZnNldFldID0gdXNlU3RhdGUoWzAsIDAsIDBdKTtcblxuXHRjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVNjcm9sbCgpO1xuXG5cdC8vIEFuaW1hdGlvbiB2YWx1ZXMgZm9yIHRoZSBFeHBlcmllbmNlIGJsb2NrXG5cdGNvbnN0IHRvcFNpemVzID0gWzAsIDYwMCwgODUwXTtcblx0Y29uc3QgaGVpZ2h0U2l6ZXMgPSBbNTYwLCAxMDAwLCAwXTtcblx0Y29uc3Qgc2NhbGUgPSBbMSwgMSwgMF07XG5cblx0Y29uc3QgbWluSGVpZ2h0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIG9mZnNldFksIGhlaWdodFNpemVzKTtcblx0Y29uc3QgdG9wUG9zaXRpb24gPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgb2Zmc2V0WSwgdG9wU2l6ZXMpO1xuXHRjb25zdCBzY2FsZVkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgb2Zmc2V0WSwgc2NhbGUpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGV4cGVyaWVuY2VSZWYpIHtcblx0XHRcdGNvbnN0IHsgdG9wIH0gPSBnZXRDb29yZHMoZXhwZXJpZW5jZVJlZi5jdXJyZW50KTtcblxuXHRcdFx0Y29uc3QgdG9wVmFsdWUgPSB0b3AgLSBNYXRoLm1heCgwLCBNYXRoLm1heCguLi50b3BTaXplcykpO1xuXG5cdFx0XHRzZXRPZmZzZXRZKFt0b3BWYWx1ZSwgdG9wVmFsdWUgKyA2MDAsIHRvcFZhbHVlICsgMTAwMF0pO1xuXHRcdH1cblx0fSwgW2V4cGVyaWVuY2VSZWZdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJleHBlcmllbmNlXCJcblx0XHRcdHJlZj17ZXhwZXJpZW5jZVJlZn1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGhlaWdodDogbWluSGVpZ2h0LFxuXHRcdFx0XHRtYXJnaW5Ub3A6IHRvcFBvc2l0aW9uLFxuXHRcdFx0XHRzY2FsZTogc2NhbGVZXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZS13cmFwcGVyIHRleHRfYmx1ZSB0ZXh0X3NpemUteGxcIj5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFVYIE1pbmQgQ3JlYXRpdmUgQWdlbmN5J3MgdGVhbSB3aXRoJm5ic3A7XG5cdFx0XHRcdFx0XHQ8c3Ryb25nPjcrJm5ic3A7eWVhcnMgb2YgZXhwZXJpZW5jZTwvc3Ryb25nPiBpbiZuYnNwO1VYL1VJXG5cdFx0XHRcdFx0XHR3ZWImbmJzcDsmJm5ic3A7bW9iaWxlIGRlc2lnbiwgTkZUIHByb2plY3RzIGFuZCBTQUFzLiA8YnIgLz5cblx0XHRcdFx0XHRcdFdlIGNyZWF0ZSBzdHlsZS5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9UaXRsZSc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgQW5pbWF0ZWRUaXRsZSA9ICgpID0+IHtcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHtcblx0XHRxdWVyeTogYChtYXgtd2lkdGg6IDk5MXB4KWBcblx0fSk7XG5cblx0Y29uc3QgaXNVbHRyYVdpZGUgPSB1c2VNZWRpYVF1ZXJ5KHtcblx0XHRxdWVyeTogYChtaW4td2lkdGg6IDE5MjBweClgXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoZXJvLXRpdGxlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdGl0bGVfX3dyYXBwZXJcIj5cblx0XHRcdFx0PFRpdGxlIHNpemU9XCJ4bFwiPlVYIE1pbmQ8L1RpdGxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJoZXJvLXRpdGxlX2FuaW1hdGVkXCJcblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHRyYW5zbGF0ZVg6IFsnMCcsICctMTAwJSddXG5cdFx0XHRcdH19XG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHRkdXJhdGlvbjogaXNNb2JpbGUgPyA1IDogaXNVbHRyYVdpZGUgPyA3IDogOSxcblx0XHRcdFx0XHRlYXNlOiAnbGluZWFyJyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5XG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxUaXRsZSBzaXplPVwieGxcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZV90cmFuc3BhcmVudFwiPlVYIE1pbmQgVVggTWluZCZuYnNwOzwvc3Bhbj5cblx0XHRcdFx0PC9UaXRsZT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImhlcm8tdGl0bGVfYW5pbWF0ZWQgaGVyby10aXRsZV9hbmltYXRlZC1sYXN0XCJcblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHRyYW5zbGF0ZVg6IFsnMTAwJScsICcwJSddXG5cdFx0XHRcdH19XG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHRkdXJhdGlvbjogaXNNb2JpbGUgPyA1IDogaXNVbHRyYVdpZGUgPyA3IDogOSxcblx0XHRcdFx0XHRlYXNlOiAnbGluZWFyJyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5XG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxUaXRsZSBzaXplPVwieGxcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZV90cmFuc3BhcmVudFwiPlVYIE1pbmQgVVggTWluZCZuYnNwOzwvc3Bhbj5cblx0XHRcdFx0PC9UaXRsZT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdHsoaXNNb2JpbGUgfHwgaXNVbHRyYVdpZGUpICYmIChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJoZXJvLXRpdGxlX2FuaW1hdGVkXCJcblx0XHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGVYOiBbJzIwMCUnLCAnMTAwJSddXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogaXNNb2JpbGUgPyA1IDogaXNVbHRyYVdpZGUgPyA3IDogOSxcblx0XHRcdFx0XHRcdGVhc2U6ICdsaW5lYXInLFxuXHRcdFx0XHRcdFx0cmVwZWF0OiBJbmZpbml0eVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGl0bGUgc2l6ZT1cInhsXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZV90cmFuc3BhcmVudFwiPlVYIE1pbmQgVVggTWluZCZuYnNwOzwvc3Bhbj5cblx0XHRcdFx0XHQ8L1RpdGxlPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUaXRsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0ZWRUaXRsZSBmcm9tICcuL0FuaW1hdGVkVGl0bGUvQW5pbWF0ZWRUaXRsZSc7XG5pbXBvcnQgVGV4dEJsb2NrIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVGV4dEJsb2NrJztcbmltcG9ydCBBbmltYXRlZFRleHRMaW5lIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0TGluZS9BbmltYXRlZFRleHRMaW5lJztcblxuY29uc3QgSGVybyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvXCI+XG5cdFx0XHQ8QW5pbWF0ZWRUaXRsZSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZXJvLXRleHRcIj5cblx0XHRcdFx0XHQ8VGV4dEJsb2NrIHNpemU9XCJzXCI+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0V2UgYnVpbGQgZW5nYWdpbmcgdXNlciBleHBlcmllbmNlIGZvciBlYXJseS1zdGFnZSBzdGFydHVwcyBieSBjb25uZWN0aW5nXG5cdFx0XHRcdFx0XHRcdHRoZSBkb3RzIGJldHdlZW4gdXNlcnPigJkgbmVlZHMgYW5kIHRoZSBjbGllbnTigJlzIGJ1c2luZXNzIG1vZGVsLlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvVGV4dEJsb2NrPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVkVGV4dExpbmUgLz5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcnJvd0J0biBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0Fycm93QnRuJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9wdWJsaWNSb3V0ZXMnO1xuXG5pbXBvcnQgcHJvamVjdDEgZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9qZWN0MS5wbmcnO1xuaW1wb3J0IHByb2plY3QxXzJ4IGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvamVjdDFAMngucG5nJztcbmltcG9ydCBwcm9qZWN0MiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2plY3QyLnBuZyc7XG5pbXBvcnQgcHJvamVjdDJfMnggZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9qZWN0MkAyeC5wbmcnO1xuaW1wb3J0IHByb2plY3QzIGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvamVjdDMucG5nJztcbmltcG9ydCBwcm9qZWN0M18yeCBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2plY3QzQDJ4LnBuZyc7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImxhdGVzdC1wcm9qZWN0c1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcHJvamVjdHMtd3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXByb2plY3RzLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlX3NpemUtbFwiPlxuXHRcdFx0XHRcdFx0XHRPdXIgbGF0ZXN0IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlX3RyYW5zcGFyZW50XCI+cHJvamVjdHM8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcHJvamVjdHMtaGVhZGVyX19jb3VudFwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXhzXCI+MTUwKyBwcm9qZWN0czwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXByb2plY3RzLXNsaWRlcl9fd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcHJvamVjdHMtc2xpZGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXByb2plY3RzLXNsaWRlcl9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hhcHRlciB0ZXh0X3NpemUtc1wiPkVjb21tZXJjZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZV9zaXplLXNtXCI+SGVhZHBob25lIFN0b3JlPC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlIEludGVybmV0IHRlbmQgdG9cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwZWF0IHByZWRlZmluZWQgY2h1bmtzIGFzIG5lY2Vzc2FyeSwgbWFraW5nIHRoaXMgdGhlIGZpcnN0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRydWUgZ2VuZXJhdG9yIG9uIHRoZSBJbnRlcm5ldC5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXByb2plY3RzLXNsaWRlcl9faW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Byb2plY3QxfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtwcm9qZWN0MX0gMXgsICR7cHJvamVjdDFfMnh9IDJ4YH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cInByb2plY3RcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcHJvamVjdHNfX2xpbmtcIj5cblx0XHRcdFx0XHRcdDxBcnJvd0J0biB0eXBlPVwibGlua1wiIHRvPVwiL3Byb2plY3RzXCI+XG5cdFx0XHRcdFx0XHRcdFNlZSBtb3JlIHByb2plY3RzXG5cdFx0XHRcdFx0XHQ8L0Fycm93QnRuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZXJvIGZyb20gJy4vSGVyby9IZXJvJztcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZS9FeHBlcmllbmNlJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL1Byb2plY3RzL1Byb2plY3RzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cblx0XHRcdDxIZXJvIC8+XG5cdFx0XHQ8RXhwZXJpZW5jZSAvPlxuXHRcdFx0PFByb2plY3RzIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZmF2aWNvbi5pY29cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuXFxuPGhlYWQ+XFxuXFx0PG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcblxcdDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCI+XFxuXFx0PG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcblxcdDxsaW5rIHJlbD1cXFwiaWNvblxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPlxcblxcdDx0aXRsZT5XZWJwYWNrIEhUTUw8L3RpdGxlPlxcbjwvaGVhZD5cXG5cXG48Ym9keT5cXG5cXHQ8ZGl2IGlkPVxcXCJyb290XFxcIj48L2Rpdj5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjcwODQ5OTM1NjUwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJhcHAuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZWRiZTI3OTgwYTJiMGUyZmRmMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG4vLyBkYXRhLXdlYnBhY2sgaXMgbm90IHVzZWQgYXMgYnVpbGQgaGFzIG5vIHVuaXF1ZU5hbWVcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsKSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiOyIsImlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbnZhciBjcmVhdGVTdHlsZXNoZWV0ID0gKGNodW5rSWQsIGZ1bGxocmVmLCBvbGRUYWcsIHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0dmFyIG9uTGlua0NvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzLlxuXHRcdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gbnVsbDtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHR2YXIgcmVhbEhyZWYgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmhyZWYgfHwgZnVsbGhyZWY7XG5cdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlYWxIcmVmICsgXCIpXCIpO1xuXHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuXHRcdFx0ZXJyLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRlcnIucmVxdWVzdCA9IHJlYWxIcmVmO1xuXHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG5cdFx0XHRyZWplY3QoZXJyKTtcblx0XHR9XG5cdH1cblx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBvbkxpbmtDb21wbGV0ZTtcblx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cblx0aWYgKG9sZFRhZykge1xuXHRcdG9sZFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rVGFnLCBvbGRUYWcubmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdH1cblx0cmV0dXJuIGxpbmtUYWc7XG59O1xudmFyIGZpbmRTdHlsZXNoZWV0ID0gKGhyZWYsIGZ1bGxocmVmKSA9PiB7XG5cdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiB0YWc7XG5cdH1cblx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG5cdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gdGFnO1xuXHR9XG59O1xudmFyIGxvYWRTdHlsZXNoZWV0ID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHRpZihmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0Y3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgbnVsbCwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbnZhciBvbGRUYWdzID0gW107XG52YXIgbmV3VGFncyA9IFtdO1xudmFyIGFwcGx5SGFuZGxlciA9IChvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7IGRpc3Bvc2U6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb2xkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG9sZFRhZyA9IG9sZFRhZ3NbaV07XG5cdFx0XHRpZihvbGRUYWcucGFyZW50Tm9kZSkgb2xkVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkVGFnKTtcblx0XHR9XG5cdFx0b2xkVGFncy5sZW5ndGggPSAwO1xuXHR9LCBhcHBseTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuZXdUYWdzLmxlbmd0aDsgaSsrKSBuZXdUYWdzW2ldLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRcdG5ld1RhZ3MubGVuZ3RoID0gMDtcblx0fSB9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLm1pbmlDc3MgPSAoY2h1bmtJZHMsIHJlbW92ZWRDaHVua3MsIHJlbW92ZWRNb2R1bGVzLCBwcm9taXNlcywgYXBwbHlIYW5kbGVycywgdXBkYXRlZE1vZHVsZXNMaXN0KSA9PiB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjaHVua0lkcy5mb3JFYWNoKChjaHVua0lkKSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0dmFyIG9sZFRhZyA9IGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKTtcblx0XHRpZighb2xkVGFnKSByZXR1cm47XG5cdFx0cHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR2YXIgdGFnID0gY3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgb2xkVGFnLCAoKSA9PiB7XG5cdFx0XHRcdHRhZy5hcyA9IFwic3R5bGVcIjtcblx0XHRcdFx0dGFnLnJlbCA9IFwicHJlbG9hZFwiO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0b2xkVGFncy5wdXNoKG9sZFRhZyk7XG5cdFx0XHRuZXdUYWdzLnB1c2godGFnKTtcblx0XHR9KSk7XG5cdH0pO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2h0bWwtbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVcmxfanMtbm9kZV9tb2R1bGVzX21pbmktY3NzLWV4dHJhY3QtcGx1Z2luXy1mMDcwMzlcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanM/cHJvdG9jb2w9d3MlM0EmaG9zdG5hbWU9MC4wLjAuMCZwb3J0PTMwMDAmcGF0aG5hbWU9JTJGd3MmbG9nZ2luZz1pbmZvJm92ZXJsYXk9dHJ1ZSZyZWNvbm5lY3Q9MTAmaG90PXRydWUmbGl2ZS1yZWxvYWQ9dHJ1ZVwiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19odG1sLWxvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VXJsX2pzLW5vZGVfbW9kdWxlc19taW5pLWNzcy1leHRyYWN0LXBsdWdpbl8tZjA3MDM5XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9kZXYtc2VydmVyLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfaHRtbC1sb2FkZXJfZGlzdF9ydW50aW1lX2dldFVybF9qcy1ub2RlX21vZHVsZXNfbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5fLWYwNzAzOVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJIb21lIiwiRm9vdGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiQXBwIiwiVGl0bGUiLCJtb3Rpb24iLCJ1c2VNZWRpYVF1ZXJ5IiwiQW5pbWF0ZWRUZXh0TGluZSIsImlzTW9iaWxlIiwicXVlcnkiLCJpc1VsdHJhV2lkZSIsInRyYW5zbGF0ZVgiLCJkdXJhdGlvbiIsImVhc2UiLCJyZXBlYXQiLCJJbmZpbml0eSIsIkxpbmsiLCJBcnJvd0J0biIsIm9uQ2xpY2siLCJ0eXBlIiwidG8iLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVudSIsImxvZ28iLCJtZW51T3BlbmVkIiwic2V0TWVudU9wZW5lZCIsImh0bWxFbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInByZXYiLCJBbmltYXRlUHJlc2VuY2UiLCJQVUJMSUNfUk9VVEVTIiwiQ09OVEFDVCIsIlNjcm9sbGJhcnMiLCJtZW51TGlua3MiLCJuYW1lIiwicm91dGUiLCJhYm91dCIsImNhc2VzIiwic2VydmljZXMiLCJwcm9jZXNzIiwiY29udGFjdCIsIm9wZW5lZCIsIm9wYWNpdHkiLCJtYXAiLCJsaW5rIiwiZW1haWwiLCJ0ZWwiLCJUZXh0QmxvY2siLCJjb2xvciIsImNsYXNzTmFtZSIsInNpemUiLCJnZXRDb29yZHMiLCJlbCIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0IiwicmlnaHQiLCJwYWdlWE9mZnNldCIsImJvdHRvbSIsImxlZnQiLCJnZXRWaWV3cG9ydENvb3JkcyIsIlJlYWN0RE9NIiwicm9vdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJ1c2VSZWYiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTY3JvbGwiLCJFeHBlcmllbmNlIiwiZXhwZXJpZW5jZVJlZiIsIm9mZnNldFkiLCJzZXRPZmZzZXRZIiwic2Nyb2xsWSIsInRvcFNpemVzIiwiaGVpZ2h0U2l6ZXMiLCJzY2FsZSIsIm1pbkhlaWdodCIsInRvcFBvc2l0aW9uIiwic2NhbGVZIiwiY3VycmVudCIsInRvcFZhbHVlIiwiTWF0aCIsIm1heCIsImhlaWdodCIsIm1hcmdpblRvcCIsIkFuaW1hdGVkVGl0bGUiLCJIZXJvIiwicHJvamVjdHMiLCJwcm9qZWN0MSIsInByb2plY3QxXzJ4IiwicHJvamVjdDIiLCJwcm9qZWN0Ml8yeCIsInByb2plY3QzIiwicHJvamVjdDNfMngiLCJQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=
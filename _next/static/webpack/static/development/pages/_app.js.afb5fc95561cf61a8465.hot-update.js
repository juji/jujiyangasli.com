webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var lib_doublePendulum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/doublePendulum */ "./lib/doublePendulum.js");

var _jsxFileName = "/Users/juji/works/juji/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transition: all 500ms;\n  padding: 0px 55px;\n\n  display: flex;\n  align-items: center;\n\n  a{\n    line-height: 89px;\n    margin-right: 13px;\n    display: flex;\n    align-items: center;\n\n    svg{\n      font-size: 21px;\n    }\n  }\n  a.home-link{\n    margin-right: 21px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0 55px;\n  padding-top: ", ";\n  transform: translate3d(0,0,0);\n  transition: all 200ms;\n\n  h1{\n    font-family: \"Source Serif Pro\", serif;\n    font-weight: 400;\n    font-size: ", ";\n    line-height: 1em;\n    margin-top: 13px;\n    transform: translate3d(0,0,0);\n    transition: all 200ms;\n\n    a{\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0px;\n  overflow: hidden;\n  position: relative;\n\n  canvas{\n    position: absolute;\n    bottom:0;\n    right:0;\n    z-index: 0\n  }\n\n  .top-layout{\n    flex: ", ";\n    z-index: 1;\n    overflow: auto;\n    ", "\n  }\n\n  .bottom-layout{\n    flex: 0 0 auto;\n    z-index: 1;\n  }\n\n  .pad{\n    height: ", ";\n    flex: ", ";\n    transition: all 500ms;\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (p) {
  return p.home ? '0 0 auto' : '1 1 auto';
}, function (p) {
  return p.theme.mobile ? "\n      overflow-y: scroll; /* has to be scroll, not auto */\n      -webkit-overflow-scrolling: touch;\n    " : null;
}, function (p) {
  return p.home ? 'auto' : '0vh';
}, function (p) {
  return p.home ? '1 1 auto' : '0 0 auto';
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (p) {
  return p.home ? '55px' : '21px';
}, function (p) {
  return p.home ? '4.236em' : '2.82em';
}, function (p) {
  return p.theme.text;
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (p) {
  return p.fullContent ? '0px' : '0px 55px';
});
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var router = _ref.router,
      children = _ref.children;
  var isHome = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return router.pathname === '/';
  });
  var fullContent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return router.pathname.match(/\/work\/.+/);
  });
  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var pendulum = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (pendulum.current && pendulum.current.stop) pendulum.current.stop();
    if (!isHome) return;
    if (!canvas.current) return;
    pendulum.current = Object(lib_doublePendulum__WEBPACK_IMPORTED_MODULE_6__["default"])(canvas.current, function (uri) {
      console.log(uri);
    });
  }, [isHome]);
  return __jsx(Container, {
    home: isHome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, isHome ? __jsx("canvas", {
    ref: canvas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }) : canvas.current = null, __jsx("div", {
    className: "top-layout .scrollbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, fullContent ? null : __jsx(Logo, {
    home: isHome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "juji };")))), __jsx(Content, {
    fullContent: fullContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, children)), fullContent ? null : __jsx(Nav, {
    className: "bottom-layout",
    home: isHome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, isHome ? null : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("a", {
    className: "home-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__["TiHome"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Work")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/technologies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Technologies")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/contacts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Contacts"))), __jsx("div", {
    className: "pad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }));
}));

/***/ })

})
//# sourceMappingURL=_app.js.afb5fc95561cf61a8465.hot-update.js.map
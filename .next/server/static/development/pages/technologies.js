module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/juji/works/juji/components/Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const blink = styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
0% {
  opacity: 1;
}
50% {
  opacity: 0.5;
}
100% {
  opacity: 0;
}
`;
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  span:first-child{ animation: ${blink} 1s linear infinite; }
  span:nth-child(2){ animation: ${blink} 1s linear infinite; animation-delay: 250ms; }
  span:last-child{ animation: ${blink} 1s linear infinite; animation-delay: 500ms; }
  span{
    margin:0;
    padding: 0 2px;
    color: ${p => p.color || 'white'};
  }
  font-size: ${p => p.fontSize || '1rem'}
  text-align: center;
`;
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(Loader, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "\u25AA"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "\u25AA"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "\u25AA")));

/***/ }),

/***/ "./data/tech.js":
/*!**********************!*\
  !*** ./data/tech.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[{
  id: 'nodejs',
  title: 'NodeJs',
  image: 'https://i.ibb.co/x22jtT8/nodejs.png',
  url: 'https://nodejs.org'
}, {
  id: 'docker',
  title: 'Docker',
  image: 'https://i.ibb.co/fCKK7TW/docker.png',
  url: 'https://www.docker.com/products'
}, {
  id: 'firebase',
  title: 'Firebase',
  image: 'https://i.ibb.co/CWZ17YQ/firebase.png',
  url: 'https://firebase.google.com/?hl=id'
}], [{
  id: 'express',
  title: 'Express.js',
  image: 'https://i.ibb.co/Xjfc8mp/Expressjs.png',
  url: 'https://expressjs.com/'
}, {
  id: 'next',
  title: 'Next.js',
  image: 'https://i.ibb.co/TR3Ny2b/nextjs.png',
  url: 'https://nextjs.org/'
}, {
  id: 'socketio',
  title: 'Socket.io',
  image: 'https://i.ibb.co/rbDRkFN/Socketio.png',
  url: 'https://socket.io/'
}, {
  id: 'adonis',
  title: 'Adonis.js',
  image: 'https://i.ibb.co/5kn1ZSW/adonisjs.png',
  url: 'https://adonisjs.com/'
}], [{
  id: 'react',
  title: 'React.js',
  image: 'https://i.ibb.co/pQQ7BsT/react.png',
  url: 'https://reactjs.org/'
}, {
  id: 'electron',
  title: 'Electron',
  image: 'https://i.ibb.co/3RQ0Bgn/electron.png',
  url: 'https://electronjs.org/'
}, {
  id: 'html5',
  title: 'HTML 5',
  image: 'https://i.ibb.co/ryYK4DC/html5.png',
  url: 'https://en.wikipedia.org/wiki/HTML5'
}, {
  id: 'css3',
  title: 'CSS 3',
  image: 'https://i.ibb.co/tLV5N6n/css3.png',
  url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
}], [{
  id: 'mongo',
  title: 'Mongo DB',
  image: 'https://i.ibb.co/SN5YDgk/mongo.png',
  url: 'https://www.mongodb.com/'
}, {
  id: 'postgres',
  title: 'PostgreSQL',
  image: 'https://i.ibb.co/WfXP1Rh/postgre.png',
  url: 'https://www.postgresql.org/'
}, {
  id: 'mysql',
  title: 'MySQL',
  image: 'https://i.ibb.co/1GF33bn/mysql.png',
  url: 'https://www.mysql.com/'
}, {
  id: 'redis',
  title: 'Redis',
  image: 'https://i.ibb.co/NZX68K0/redis.png',
  url: 'https://redis.io/'
}, {
  id: 'nats',
  title: 'NATS',
  image: 'https://i.ibb.co/xDfYwDP/nats.png',
  url: 'https://nats.io/'
}, {
  id: 'elastic',
  title: 'Elastic Search',
  image: 'https://i.ibb.co/TbSfnmx/elastic.png',
  url: 'https://www.elastic.co/'
}, {
  id: 'rabbit',
  title: 'RabbitMQ',
  image: 'https://i.ibb.co/C0J2P4L/rabbitmq.png',
  url: 'https://www.rabbitmq.com/'
}], [{
  id: 'do',
  title: 'Digital Ocean',
  image: 'https://i.ibb.co/sJDx5wd/digitalocean.png',
  url: 'https://www.digitalocean.com/'
}, {
  id: 'ec2',
  title: 'AWS EC2',
  image: 'https://i.ibb.co/BVJTrjF/ec2.png',
  url: 'https://aws.amazon.com/ec2/'
}, {
  id: 's3',
  title: 'AWS S3',
  image: 'https://i.ibb.co/8c1q9db/s3.png',
  url: 'https://aws.amazon.com/s3/'
}, {
  id: 'beanstalk',
  title: 'AWS Elastic Beanstalk',
  image: 'https://i.ibb.co/THFm0yP/beanstalk.png',
  url: 'https://aws.amazon.com/elasticbeanstalk/'
}], [{
  id: 'stripe',
  title: 'Stripe',
  image: 'https://i.ibb.co/hDY5W9v/stripe.png',
  url: 'https://stripe.com/'
}, {
  id: 'algolia',
  title: 'Algolia',
  image: 'https://i.ibb.co/M9sxhcY/algolia.png',
  url: 'https://www.algolia.com/'
}, {
  id: 'twilio',
  title: 'Twilio',
  image: 'https://i.ibb.co/gz3GdmM/twilio.png',
  url: 'https://www.twilio.com/'
}, {
  id: 'mailgun',
  title: 'Mailgun',
  image: 'https://i.ibb.co/VgMJpd3/mailgun.png',
  url: 'https://www.mailgun.com/'
}, {
  id: 'sendgrid',
  title: 'Sendgrid',
  image: 'https://i.ibb.co/0qpP52c/sendgrid.png',
  url: 'https://sendgrid.com/'
}, {
  id: 'mailchimp',
  title: 'Mailchimp',
  image: 'https://i.ibb.co/98DwTgF/mailchimp.jpg',
  url: 'https://mailchimp.com/'
}], [{
  id: 'github',
  title: 'Github',
  image: 'https://i.ibb.co/mbn1qmj/github.png',
  url: 'https://github.com'
}, {
  id: 'gitlab',
  title: 'Gitlab',
  image: 'https://i.ibb.co/dB8ScyG/gitlab.png',
  url: 'https://gitlab.com'
}, {
  id: 'bitbucket',
  title: 'Bitbucket',
  image: 'https://i.ibb.co/6164H4f/bitbucket.jpg',
  url: 'https://bitbucket.org/'
}]];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./pages/technologies.js":
/*!*******************************!*\
  !*** ./pages/technologies.js ***!
  \*******************************/
/*! exports provided: Container, TechThumb, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechThumb", function() { return TechThumb; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var data_tech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! data/tech */ "./data/tech.js");
/* harmony import */ var data_tech__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(data_tech__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Loader */ "./components/Loader.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/juji/works/juji/pages/technologies.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div`
  .tech-group{
    margin-bottom: 34px;

    &>div{
      display: inline-block;
    }

    @media only screen and (max-width: 584px) {
      &>div{
        display: block;
      }
    }
  }

  .tech-group:last-child{
    margin-bottom: 0px;
  }
`;
const TechThumb = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.a`

  display: inline-block;
  width: 150px;
  height: 150px;
  background-color: #010304;
  background-position: center center;
  background-size: 70% auto;
  background-repeat: no-repeat;
  margin-right: 8px;
  margin-bottom: 8px;

  transition: all 200ms;

  ${props => props.image && styled_components__WEBPACK_IMPORTED_MODULE_7__["css"]`
    background-image: url('${props.image}');
  `}

  &:hover{
    background-size: 80% auto;
  }

  &#nodejs{
    background-size: 50% auto;
  }
  &#nodejs:hover{
    background-size: 60% auto;
  }

  &#docker{
    background-size: 90% auto;
  }
  &#docker:hover{
    background-size: 100% auto;
  }

  &#electron{
    background-size: 100% auto;
    width: 300px;
  }
  &#electron:hover{
    background-size: 110% auto;
  }

  &#html5{
    background-size: 50% auto;
  }
  &#html5:hover{
    background-size: 60% auto;
  }

  &#css3{
    background-size: 50% auto;
  }
  &#css3:hover{
    background-size: 60% auto;
  }

  &#elastic{
    width: 300px
  }

  &#nats{
    width: 300px
  }

  &#do{
    background-size: 80% auto;
  }
  &#do:hover{
    background-size: 90% auto;
  }

  &#beanstalk{
    background-size: 40% auto;
  }
  &#beanstalk:hover{
    background-size: 50% auto;
  }

  &#stripe,&#algolia,&#twilio,&#mailgun,&#sendgrid{
    width: 200px;
  }

  transition: all 500ms;

  @media only screen and (max-width: 584px) {

    transition: all 200ms;
    background-size: auto 80%;
    padding-left: 0px;
    padding-right: 0px;

    &:hover{
      background-size: auto 90%;
    }

    &,&#stripe,&#algolia,&#twilio,&#mailgun,&#sendgrid,&#elastic,&#nats,&#electron{
      width: 100%;
    }

    &#express,&#algolia,&#mailgun,&#sendgrid{
      background-size: auto 30%;
    }

    &#express:hover,&#algolia:hover,&#mailgun:hover,&#sendgrid:hover{
      background-size: auto 40%;
    }

    &#adonis,&#nats,&#elastic{
      background-size: auto 50%;
    }
    &#adonis:hover,&#nats:hover,&#elastic:hover{
      background-size: auto 60%;
    }

    &#nodejs,&#next,&#socketio,&#beanstalk,
    &#mailchimp,&#github,&#bitbucket{
      background-size: auto 60%;
    }

    &#nodejs:hover,&#next:hover,&#socketio:hover,&#beanstalk:hover,
    &#mailchimp:hover,&#github:hover,&#bitbucket:hover{
      background-size: auto 70%;
    }

    &#html5,&#css3{
      background-size: auto 80%;
    }

    &#html5:hover,&#css3:hover{
      background-size: auto 90%;
    }

    &#docker,&#do,&#stripe{
      background-size: auto 90%;
    }

    &#docker:hover,&#do:hover,&#stripe:hover{
      background-size: auto 100%;
    }

  }

`;

const TechGroup = props => {
  const {
    group
  } = props;
  const trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useTrail"])(group.length, {
    from: {
      opacity: 0,
      x: 21
    },
    opacity: 1,
    x: 0
  });
  return trail.map((_ref, index) => {
    let {
      x,
      height
    } = _ref,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["x", "height"]);

    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_6__["animated"].div, {
      key: group[index].id,
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
        transform: x.interpolate(x => `translate3d(${x}px,0px,0px)`)
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: undefined
    }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      title: group[index].title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: undefined
    }, __jsx(TechThumb, {
      className: "tech-thumb",
      id: group[index].id,
      target: "_blank",
      href: group[index].url,
      image: group[index].image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: undefined
    })));
  });
};

const Tech = props => {
  const {
    onStart
  } = props;
  const trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useTrail"])(data_tech__WEBPACK_IMPORTED_MODULE_3___default.a.length, {
    delay: 500,
    onStart
  });
  return trail.map((style, index) => __jsx(react_spring__WEBPACK_IMPORTED_MODULE_6__["animated"].div, {
    key: `techgroup_${index}`,
    className: "tech-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx(TechGroup, {
    group: data_tech__WEBPACK_IMPORTED_MODULE_3___default.a[index],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: loading,
    1: set
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const {
    0: draw,
    1: setDraw
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const onStart = () => {
    set(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setTimeout(() => {
      setDraw(true);
    }, 500);
  }, []);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, __jsx("span", {
    className: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, "Technologies"), "\xA0\xA0", loading ? __jsx(components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }) : null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, "Techs i'm familiar with")))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }), draw ? __jsx(Tech, {
    onStart: onStart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }) : null);
});

/***/ }),

/***/ 9:
/*!*************************************!*\
  !*** multi ./pages/technologies.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/juji/works/juji/pages/technologies.js */"./pages/technologies.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-tippy":
/*!******************************!*\
  !*** external "react-tippy" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tippy");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=technologies.js.map
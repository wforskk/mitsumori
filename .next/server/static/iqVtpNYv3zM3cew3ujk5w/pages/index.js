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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// CONCATENATED MODULE: ./src/components/Radio.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const GreenRadio = Object(styles_["withStyles"])({
  root: {
    color: colors_["green"][200],
    '&$checked': {
      color: colors_["green"][400]
    }
  },
  checked: {}
})(props => __jsx(Radio_default.a, _extends({
  color: "default"
}, props)));
function RadioButtons({
  List
}) {
  const [selectedValue, setSelectedValue] = external_react_default.a.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return __jsx("div", {
    className: "divDivRadio"
  }, List.map(item => __jsx("div", {
    key: item.name,
    className: "divRadio"
  }, __jsx(GreenRadio, {
    checked: selectedValue === item.name,
    onChange: handleChange,
    value: item.name,
    name: "radio-button-demoeee",
    inputProps: {
      'aria-label': 'A'
    },
    className: "radio"
  }), __jsx("span", null, item.name))));
}
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./src/components/Button.tsx
var Button_jsx = external_react_default.a.createElement;



const useStyles = Object(styles_["makeStyles"])(theme => Object(styles_["createStyles"])({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));
function ContainedButtons() {
  const classes = useStyles();
  return Button_jsx("div", {
    className: classes.root
  }, Button_jsx(Button_default.a, {
    variant: "contained",
    color: "primary"
  }, "\u898B\u7A4D\u308A"));
}
// CONCATENATED MODULE: ./src/utils/gender.ts
/** Dummy user data. */
const genderList = [{
  name: '女性',
  value: 'a'
}, {
  name: '男性',
  value: 'b'
}, {
  name: 'どちらでもいい',
  value: 'c'
}];
// CONCATENATED MODULE: ./src/utils/workReq.ts
/** Dummy user data. */
const workReqList = [{
  name: '漫画動画制作依頼',
  value: ''
}, {
  name: '漫画イラスト作成依頼',
  value: ''
}, {
  name: '声優依頼',
  value: ''
}, {
  name: '動画編集依頼',
  value: ''
}];
// CONCATENATED MODULE: ./src/utils/manuscriptFlag.ts
/** Dummy user data. */
const manuscriptFlagList = [{
  name: 'あり',
  value: ''
}, {
  name: 'なし',
  value: ''
}];
// CONCATENATED MODULE: ./src/utils/wordCount.ts
/** Dummy user data. */
const wordCountList = [{
  name: '2000字以下',
  value: ''
}, {
  name: '2000-3000字',
  value: ''
}, {
  name: '3000-4000字',
  value: ''
}, {
  name: '4000字以上',
  value: ''
}];
// CONCATENATED MODULE: ./src/pages/index.tsx
var pages_jsx = external_react_default.a.createElement;








const IndexPage = ({
  genderData,
  workReqData,
  manuscriptFlagData,
  wordCountData
}) => pages_jsx("div", null, pages_jsx("header", {
  className: "header"
}), pages_jsx("div", {
  className: "container"
}, pages_jsx("div", {
  className: "line"
}, pages_jsx("div", {
  className: "title"
}, "\u4F5C\u6210\u4F9D\u983C\u306E\u9805\u76EE"), pages_jsx(RadioButtons, {
  List: workReqData
})), pages_jsx("div", {
  className: "line"
}, pages_jsx("div", {
  className: "title"
}, "\u6F2B\u753B\u52D5\u753B\u5236\u4F5C"), pages_jsx(RadioButtons, {
  List: manuscriptFlagData
})), pages_jsx("div", {
  className: "line"
}, pages_jsx("div", {
  className: "title"
}, "\u6587\u5B57\u6570"), pages_jsx(RadioButtons, {
  List: wordCountData
})), pages_jsx("div", {
  className: "line"
}, pages_jsx("div", {
  className: "title"
}, "\u6027\u5225"), pages_jsx(RadioButtons, {
  List: genderData
}))), pages_jsx(ContainedButtons, null), pages_jsx("footer", {
  className: "footer"
}, pages_jsx("div", null)));

const getStaticProps = async () => {
  const genderData = genderList;
  const workReqData = workReqList;
  const manuscriptFlagData = manuscriptFlagList;
  const wordCountData = wordCountList;
  return {
    props: {
      genderData,
      workReqData,
      manuscriptFlagData,
      wordCountData
    }
  };
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
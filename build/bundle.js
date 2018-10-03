/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculatorFunctions.js":
/*!************************************!*\
  !*** ./src/calculatorFunctions.js ***!
  \************************************/
/*! exports provided: fAdd, fMultiplier, fDoublefier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fAdd\", function() { return fAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fMultiplier\", function() { return fMultiplier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fDoublefier\", function() { return fDoublefier; });\n//module.exports.\nfunction fAdd(array_) {\n  return array_.reduce(function (valorAnterior, valorActual) {\n    return valorAnterior + valorActual;\n  });\n} //module.exports.\n\nfunction fMultiplier(array_) {\n  return array_.reduce(function (valorAnterior, valorActual) {\n    return valorAnterior * valorActual;\n  });\n} //It doubles every single item of the array\n//module.exports.\n\nfunction fDoublefier(array_) {\n  return array_.map(function (valorActual) {\n    return valorActual * 2;\n  });\n}\n\n//# sourceURL=webpack:///./src/calculatorFunctions.js?");

/***/ }),

/***/ "./src/customExceptions.js":
/*!*********************************!*\
  !*** ./src/customExceptions.js ***!
  \*********************************/
/*! exports provided: NoCalculatorFunctionNameError, AccessDeniedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoCalculatorFunctionNameError\", function() { return NoCalculatorFunctionNameError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccessDeniedError\", function() { return AccessDeniedError; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar NoCalculatorFunctionNameError =\n/*#__PURE__*/\nfunction (_Error) {\n  _inherits(NoCalculatorFunctionNameError, _Error);\n\n  function NoCalculatorFunctionNameError() {\n    var _this;\n\n    _classCallCheck(this, NoCalculatorFunctionNameError);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoCalculatorFunctionNameError).call(this, \"No existeix eixa operació\"));\n    _this.name = 'NoCalculatorFunctionName';\n    return _this;\n  }\n\n  return NoCalculatorFunctionNameError;\n}(_wrapNativeSuper(Error));\nvar AccessDeniedError =\n/*#__PURE__*/\nfunction (_Error2) {\n  _inherits(AccessDeniedError, _Error2);\n\n  function AccessDeniedError() {\n    var _this2;\n\n    _classCallCheck(this, AccessDeniedError);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AccessDeniedError).call(this, \"You are not member of a rol that is allowed to execute such function\"));\n    _this2.name = 'AccessDeniedName';\n    return _this2;\n  }\n\n  return AccessDeniedError;\n}(_wrapNativeSuper(Error));\n/*module.exports = {\n  NoCalculatorFunctionNameError : NoCalculatorFunctionNameError,\n  AccessDeniedError : AccessDeniedError\n}*/\n\n//# sourceURL=webpack:///./src/customExceptions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ \"./src/person.js\");\n\nvar people = [new _person__WEBPACK_IMPORTED_MODULE_0__[\"Person\"](\"Paco\", \"ElMaco\", _person__WEBPACK_IMPORTED_MODULE_0__[\"Person\"].getRoles().USER), new _person__WEBPACK_IMPORTED_MODULE_0__[\"Person\"](\"Paca\", \"LaMaca\", _person__WEBPACK_IMPORTED_MODULE_0__[\"Person\"].getRoles().TEACHER), new _person__WEBPACK_IMPORTED_MODULE_0__[\"Person\"](\"Root\", \"Toot\", _person__WEBPACK_IMPORTED_MODULE_0__[\"Person\"].getRoles().ADMIN)];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var sel = document.getElementById('users');\n  people.forEach(function (person) {\n    var opt = document.createElement('option');\n    opt.innerHTML = person.name;\n    opt.value = person.name;\n    sel.appendChild(opt);\n  });\n  document.getElementById(\"add\").addEventListener(\"click\", addInput);\n  document.getElementById(\"execute\").addEventListener(\"click\", calculate);\n});\ndocument.addEventListener(\"change\", function () {\n  document.getElementById('operations').innerHTML = \"\";\n  var user = document.getElementById('users');\n  user = users[users.selectedIndex].value;\n  user = people.filter(function (person) {\n    return person.name === user;\n  });\n  var sel = document.getElementById('operations');\n  user[0].getAllowedFunctions().forEach(function (operation) {\n    var opt = document.createElement('option');\n    opt.innerHTML = operation;\n    opt.value = operation;\n    sel.appendChild(opt);\n  });\n});\n\nfunction addInput() {\n  var adding = document.getElementById(\"inputs\");\n  adding.insertAdjacentHTML('beforeend', '<br /><input type=\"number\" name=\"operand[]\" />');\n}\n\nfunction calculate() {\n  var els = document.getElementsByName(\"operand[]\");\n  var arrayO = [];\n  els.forEach(function (element) {\n    arrayO.push(element.value);\n  });\n  var user = document.getElementById('users');\n  user = users[users.selectedIndex].value;\n  var operation = document.getElementById('operations');\n  operation = operation[operation.selectedIndex].value;\n  user = people.filter(function (person) {\n    return person.name === user;\n  });\n  arrayO = arrayO.map(function (valorACtual) {\n    return parseInt(valorACtual);\n  });\n  document.getElementById('result').value = user[0].calculator(arrayO, operation);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return Person; });\n/* harmony import */ var _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorFunctions */ \"./src/calculatorFunctions.js\");\n/* harmony import */ var _customExceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customExceptions */ \"./src/customExceptions.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//const customExceptions = require('./customExceptions');\n//const calculatorFunctions = require('./calculatorFunctions');\n\n\nvar ROL = {\n  USER: 'regular user',\n  ADMIN: 'root',\n  TEACHER: 'teacher'\n};\nvar operationDictionary = new Map([['ADD', new Map([['name', 'ADD'], ['operator', _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fAdd\"]], ['roles', [ROL.USER, ROL.TEACHER, ROL.ADMIN]]])], ['MULTIPLIER', new Map([['name', 'MULTIPLIER'], ['operator', _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fMultiplier\"]], ['roles', [ROL.TEACHER, ROL.ADMIN]]])], ['DOUBLEFIER', new Map([['name', 'DOUBLEFIER'], ['operator', _calculatorFunctions__WEBPACK_IMPORTED_MODULE_0__[\"fDoublefier\"]], ['roles', [ROL.TEACHER]]])]]);\n/*let operationDictionary={\n    //'ADD':{ operator:calculatorFunctions.fAdd,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},\n    'ADD':{ operator:fAdd,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},\n    //'MULTIPLIER': { operator:calculatorFunctions.fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},\n    'MULTIPLIER': { operator:fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},\n    //'DOUBLEFIER': { operator:calculatorFunctions.fDoublefier,roles:[ROL.TEACHER]}\n    'DOUBLEFIER': { operator:fDoublefier,roles:[ROL.TEACHER]}\n  };*/\n\nvar Person =\n/*#__PURE__*/\nfunction () {\n  function Person(name, surname) {\n    var rol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ROL.USER;\n\n    _classCallCheck(this, Person);\n\n    this.name = name;\n    this.surname = surname;\n    this.rol = rol;\n  }\n\n  _createClass(Person, [{\n    key: \"getAllowedFunctions\",\n    value: function getAllowedFunctions() {\n      var _this = this;\n\n      var allowedFunctions = [];\n      operationDictionary.forEach(function (operation) {\n        if (operation.get('roles').includes(_this.rol)) {\n          allowedFunctions.push(operation.get(\"name\"));\n        }\n      });\n      return allowedFunctions;\n    }\n  }, {\n    key: \"calculator\",\n    value: function calculator() {\n      var operands = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0];\n      var operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ADD';\n\n      try {\n        var chosenOperation = operationDictionary.get(operator);\n        if (!chosenOperation || typeof chosenOperation.get('operator') !== \"function\") throw new _customExceptions__WEBPACK_IMPORTED_MODULE_1__[\"NoCalculatorFunctionNameError\"]();\n        if (!chosenOperation.get('roles').includes(this.rol)) throw new _customExceptions__WEBPACK_IMPORTED_MODULE_1__[\"AccessDeniedError\"](); //if (!chosenOperation.roles.includes(this.rol)) throw new AccessDeniedError(); \n\n        return chosenOperation.get('operator')(operands); //return chosenOperation.operator(operands);   \n      } catch (error) {\n        console.log(error.name + \" \" + error.message);\n        return error.constructor;\n      }\n    }\n  }], [{\n    key: \"getRoles\",\n    value: function getRoles() {\n      return ROL;\n    }\n  }]);\n\n  return Person;\n}(); //module.exports = Person\n\n//# sourceURL=webpack:///./src/person.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/antsel/Escritorio/Pere/calculator/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });
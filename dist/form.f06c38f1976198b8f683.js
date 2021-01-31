/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/form-checkbox-selector.js":
/*!***********************************************!*\
  !*** ./src/scripts/form-checkbox-selector.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// select-checkboxes functional
function selectCheckbox(arr, expanded, checkboxContainer, checkboxes, textTeam, teamNames) {
  window.addEventListener('click', function (e) {
    if (e.target === checkboxContainer || e.target === textTeam) {
      if (!expanded) {
        checkboxes.classList.remove('hide');
        checkboxes.classList.add('showBlock');
        expanded = true;
      } else {
        checkboxes.classList.remove('showBlock');
        checkboxes.classList.add('hide');
        expanded = false;
      }
    } else if (e.target && e.target.classList.contains("che-usr") === false && e.target.classList.contains("lab-che") === false) {
      checkboxes.classList.remove('showBlock');
      checkboxes.classList.add('hide');
      expanded = false;
    } else if (e.target && e.target.classList.contains("che-usr") === true || e.target.classList.contains("lab-che") === true) {
      arr.length = 0;
      teamNames.forEach(function (item) {
        if (item.checked) {
          arr.push(item.value);
        }
      });
      textTeam.innerHTML = arr.length > 0 ? arr.join(' ') : 'Add people';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (selectCheckbox);

/***/ }),

/***/ "./src/scripts/form-erorr.js":
/*!***********************************!*\
  !*** ./src/scripts/form-erorr.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readData": function() { return /* binding */ readData; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValidationError = /*#__PURE__*/function (_Error) {
  _inherits(ValidationError, _Error);

  var _super = _createSuper(ValidationError);

  function ValidationError(message) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _super.call(this, message);
    _this.name = "Failed to create an event.";
    return _this;
  }

  return ValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // Get and check JSON data


function readData(json) {
  var data = JSON.parse(json);
  var keys = Object.keys(localStorage);

  if (data.inpEve === '') {
    throw new ValidationError("Field 'Name of the event' is empty!");
  }

  if (data.inpEve.length > 100) {
    throw new ValidationError("'Name of the event' is too long!");
  }

  if (data.cheUsr.length === 0) {
    throw new ValidationError("Field 'Participants' is empty!");
  }

  if (keys.indexOf(data.idName) !== -1) {
    throw new ValidationError("Time slot is already booked!");
  } else {
    return true;
  }
}



/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_erorr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-erorr */ "./src/scripts/form-erorr.js");
/* harmony import */ var _form_checkbox_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-checkbox-selector */ "./src/scripts/form-checkbox-selector.js");
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/form.scss */ "./src/styles/form.scss");


 //interface selectors

var form = document.querySelector('#form');
var nameEvent = document.querySelector('#inp-eve');
var teamNames = document.querySelectorAll('.che-usr');
var day = document.querySelector('#sel-day');
var time = document.querySelector('#sel-tim');
var back = document.querySelector('#back');
var submit = document.querySelector('#submit'); // checkboxes

var checkboxes = document.getElementById("checkboxes");
var checkboxContainer = document.querySelector('.selectPlace');
var expanded = false;
var textTeam = document.getElementById('text-team');
var users = [];
(0,_form_checkbox_selector__WEBPACK_IMPORTED_MODULE_1__.default)(users, expanded, checkboxContainer, checkboxes, textTeam, teamNames); // custom errors selectors

var textErr = document.getElementById('err-text');
var placeErr = document.querySelector('.err-place');
var closeErr = document.querySelector('.err-close');

function hideElement() {
  placeErr.classList.remove('showOpacity');
  placeErr.classList.add('hideOpacity');
  textErr.innerHTML = '';
}

var timer; //Get data from form. Check and throw errors if something wrong. Send data to localStorage

form.addEventListener('click', function (e) {
  if (e.target && e.target === back) {
    window.location.href = "./calendar.html";
  }

  if (e.target && e.target === closeErr) {
    clearTimeout(timer);
    placeErr.classList.remove('showOpacity');
    placeErr.classList.add('hideOpacity');
    textErr.innerHTML = '';
  }

  if (e.target && e.target === submit) {
    e.preventDefault();
    var dataJson = JSON.stringify({
      'idName': "".concat(day.value).concat(time.value),
      'inpEve': nameEvent.value,
      'cheUsr': [].concat(users),
      'selDay': day.value,
      'selTim': time.value
    });

    try {
      (0,_form_erorr__WEBPACK_IMPORTED_MODULE_0__.readData)(dataJson);
    } catch (err) {
      placeErr.classList.remove('hideOpacity');
      placeErr.classList.add('showOpacity');
      textErr.innerHTML = "".concat(err.name, "   ").concat(err.message);
      timer = setTimeout(hideElement, 5000);
    }

    if ((0,_form_erorr__WEBPACK_IMPORTED_MODULE_0__.readData)(dataJson)) {
      localStorage.setItem("".concat(day.value).concat(time.value), dataJson);
      form.reset();
      window.location.href = "./calendar.html";
    }
  }
});

/***/ }),

/***/ "./src/styles/form.scss":
/*!******************************!*\
  !*** ./src/styles/form.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
/************************************************************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"form": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js"],
/******/ 			["./src/scripts/form.js","vendors-node_modules_babel_polyfill_lib_index_js"]
/******/ 		];
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
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkciklum_test_task"] = self["webpackChunkciklum_test_task"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=form.f06c38f1976198b8f683.js.map
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/calendar.js":
/*!*********************************!*\
  !*** ./src/scripts/calendar.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-calendar */ "./src/scripts/create-calendar.js");
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/calendar.scss */ "./src/styles/calendar.scss");


var table = document.querySelector('.table');
var arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
var arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
(0,_create_calendar__WEBPACK_IMPORTED_MODULE_0__.default)(arrDay, arrTime, table);
var btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', function () {
  window.location.href = "./form.html";
  console.log('add');
});

/***/ }),

/***/ "./src/scripts/create-calendar.js":
/*!****************************************!*\
  !*** ./src/scripts/create-calendar.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Use cycle in cycle for create new table
function createTable(arrDayName, arrTimeName, parentSelector) {
  for (var row = 0; row < arrTimeName.length; row++) {
    var newRow = document.createElement('div');
    newRow.setAttribute('id', "row-".concat(arrTimeName[row]));
    newRow.classList.add('row');

    for (var cont = 0; cont < arrDayName.length; cont++) {
      var newCont = document.createElement('div');

      if (row === 0) {
        newCont.setAttribute('id', "".concat(arrTimeName[row]));
        newCont.classList.add('headline', 'container', 'full');
        var newSpan = document.createElement('span');
        newSpan.classList.add('span-head');
        newSpan.textContent = "".concat(arrDayName[cont]);
        newCont.appendChild(newSpan);
      } else if (cont === 0) {
        newCont.setAttribute('id', "".concat(arrTimeName[row].toLowerCase()));
        newCont.classList.add('headline', 'container', 'full');

        var _newSpan = document.createElement('span');

        _newSpan.classList.add('span-head');

        _newSpan.textContent = "".concat(arrTimeName[row]);
        newCont.appendChild(_newSpan);
      } else {
        newCont.setAttribute('id', "".concat(arrDayName[cont].toLowerCase()).concat(arrTimeName[row]));
        newCont.classList.add('container', 'empty');
      }

      newRow.appendChild(newCont);
    }

    parentSelector.appendChild(newRow);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createTable);

/***/ }),

/***/ "./src/styles/calendar.scss":
/*!**********************************!*\
  !*** ./src/styles/calendar.scss ***!
  \**********************************/
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
/******/ 			"calendar": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js"],
/******/ 			["./src/scripts/calendar.js","vendors-node_modules_babel_polyfill_lib_index_js"]
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
//# sourceMappingURL=calendar.2323212fde237c5de4ea.js.map
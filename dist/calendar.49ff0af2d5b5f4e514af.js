/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/calendar-modal-confirm.js":
/*!***********************************************!*\
  !*** ./src/scripts/calendar-modal-confirm.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": function() { return /* binding */ modal; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; }
/* harmony export */ });
function openModal(modalBackSelector) {
  var modalPanel = document.querySelector(modalBackSelector);
  modalPanel.classList.add('show');
  modalPanel.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalBackSelector) {
  var modalPanel = document.querySelector(modalBackSelector);
  modalPanel.classList.remove('show');
  modalPanel.classList.add('hide');
  document.body.style.overflow = '';
}

function modal(modalBackSelector, btnYesSelector, btnNoSelector, modalWindowSelector, parent) {
  var btnNo = document.querySelector(btnNoSelector);
  var btnYes = document.querySelector(btnYesSelector);

  var remove = function remove() {
    btnYes.removeEventListener('click', replyYes);
    btnNo.removeEventListener('click', replyNo);
  };

  var replyYes = function replyYes() {
    parent.classList.remove('show', 'full');
    parent.classList.add('hide');
    var id = parent.getAttribute('id');
    document.getElementById("".concat(id, "span")).innerHTML = '';
    localStorage.removeItem(id);
    closeModal(modalBackSelector);
    remove();
  };

  var replyNo = function replyNo() {
    closeModal(modalBackSelector);
    remove();
  };

  btnYes.addEventListener('click', replyYes);
  btnNo.addEventListener('click', replyNo);
}



/***/ }),

/***/ "./src/scripts/calendar.js":
/*!*********************************!*\
  !*** ./src/scripts/calendar.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-calendar */ "./src/scripts/create-calendar.js");
/* harmony import */ var _calendar_modal_confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-modal-confirm */ "./src/scripts/calendar-modal-confirm.js");
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/calendar.scss */ "./src/styles/calendar.scss");


 //Create calendar

var table = document.querySelector('.table');
var arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
var arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
(0,_create_calendar__WEBPACK_IMPORTED_MODULE_0__.default)(arrDay, arrTime, table); // Add events to calendar

var crosses = document.querySelectorAll('.cross');
var keys = Object.keys(localStorage);
keys.forEach(function (item) {
  var meetingField = document.getElementById("".concat(item));
  var meetingData = localStorage.getItem(item);
  var objData = JSON.parse(meetingData);
  var idName = objData.idName,
      cheUsr = objData.cheUsr,
      inpEve = objData.inpEve,
      selDay = objData.selDay,
      selTim = objData.selTim;
  var newSpan = document.getElementById("".concat(idName, "span"));
  newSpan.innerHTML = "".concat(inpEve.length > 25 ? inpEve.slice(0, 25) + '...' : inpEve);
  meetingField.classList.remove('hide');
  meetingField.classList.add('show', 'full');
});
crosses.forEach(function (item) {
  if (item.parentNode.classList.contains('full') === true) {
    item.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('cross') === true) {
        (0,_calendar_modal_confirm__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal_bg');
        var parent = e.target.parentNode;
        (0,_calendar_modal_confirm__WEBPACK_IMPORTED_MODULE_1__.modal)('.modal_bg', '.btn_yes', '.btn_no', '.modal_container', parent);
      }
    });
  }
}); //Filter

var btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', function () {
  window.location.href = "./form.html";
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
        newCont.classList.add('headline', 'container');
        var newSpan = document.createElement('span');
        newSpan.classList.add('span-head');
        newSpan.textContent = "".concat(arrDayName[cont]);
        newCont.appendChild(newSpan);
      } else if (cont === 0) {
        newCont.setAttribute('id', "".concat(arrTimeName[row].toLowerCase()));
        newCont.classList.add('headline', 'container');

        var _newSpan = document.createElement('span');

        _newSpan.classList.add('span-head');

        _newSpan.textContent = "".concat(arrTimeName[row]);
        newCont.appendChild(_newSpan);
      } else {
        // newCont.setAttribute('id', `${arrDayName[cont].toLowerCase()}${arrTimeName[row]}`);
        newCont.classList.add('container');
        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', "".concat(arrDayName[cont].toLowerCase()).concat(arrTimeName[row]));
        newDiv.classList.add('meetField', 'hide');

        var _newSpan2 = document.createElement('span');

        _newSpan2.setAttribute('id', "".concat(arrDayName[cont].toLowerCase()).concat(arrTimeName[row], "span"));

        var newCross = document.createElement('span');
        newCross.classList.add('cross');
        newCross.innerHTML = '&#10006';
        newDiv.appendChild(_newSpan2);
        newDiv.appendChild(newCross);
        newCont.appendChild(newDiv);
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
//# sourceMappingURL=calendar.49ff0af2d5b5f4e514af.js.map
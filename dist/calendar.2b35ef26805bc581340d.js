/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/calendar-create-table.js":
/*!**********************************************!*\
  !*** ./src/scripts/calendar-create-table.js ***!
  \**********************************************/
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

        var newInfo = document.createElement('span');
        newInfo.classList.add('info');
        newInfo.innerHTML = '&#128712';
        var newCross = document.createElement('span');
        newCross.classList.add('cross');
        newCross.innerHTML = '&#10006';
        newDiv.appendChild(_newSpan2);
        newDiv.appendChild(newInfo);
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

/***/ "./src/scripts/calendar-filter.js":
/*!****************************************!*\
  !*** ./src/scripts/calendar-filter.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//Filter
function filterByName(unitsSelector, selectNameSelector) {
  var selector = document.querySelector(selectNameSelector);
  selector.addEventListener('change', function () {
    var meetingFields = document.querySelectorAll(unitsSelector);
    console.log(meetingFields.length);
    meetingFields.forEach(function (item) {
      if (selector.value === 'All') {
        item.classList.remove('hide', 'show');
        item.classList.add('show');
        return true;
      }

      item.classList.remove('show', 'hide');
      item.classList.add('hide');

      if (item.classList.contains(selector.value)) {
        item.classList.remove('hide');
        item.classList.add('show');
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (filterByName);

/***/ }),

/***/ "./src/scripts/calendar-modal-windows.js":
/*!***********************************************!*\
  !*** ./src/scripts/calendar-modal-windows.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalConfirm": function() { return /* binding */ modalConfirm; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; },
/* harmony export */   "modalInfo": function() { return /* binding */ modalInfo; }
/* harmony export */ });
var wrapper = document.querySelector('.wrapper');

function openModal(modalBackSelector) {
  var modalPanel = document.querySelector(modalBackSelector);
  modalPanel.classList.add('show');
  modalPanel.classList.remove('hide');
  wrapper.style.overflow = 'hidden';
  wrapper.style.pointerEvents = ' none';
}

function closeModal(modalBackSelector) {
  var modalPanel = document.querySelector(modalBackSelector);
  modalPanel.classList.remove('show');
  modalPanel.classList.add('hide');
  wrapper.style.overflow = '';
  wrapper.style.pointerEvents = '';
}

function modalInfo(modalBackSelector, btnYesSelector) {
  var btnYes = document.querySelector(btnYesSelector);

  var remove = function remove() {
    btnYes.removeEventListener('click', replyYes);
  };

  var replyYes = function replyYes(e) {
    closeModal(modalBackSelector);
    remove();
  };

  btnYes.addEventListener('click', replyYes);
}

function modalConfirm(modalBackSelector, btnYesSelector, btnNoSelector, parent) {
  var btnNo = document.querySelector(btnNoSelector);
  var btnYes = document.querySelector(btnYesSelector);

  var remove = function remove() {
    btnYes.removeEventListener('click', replyYes);
    btnNo.removeEventListener('click', replyNo);
  };

  var replyYes = function replyYes() {
    parent.className = 'meetField hide';
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
/* harmony import */ var _calendar_create_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-create-table */ "./src/scripts/calendar-create-table.js");
/* harmony import */ var _calendar_modal_windows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-modal-windows */ "./src/scripts/calendar-modal-windows.js");
/* harmony import */ var _calendar_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-filter */ "./src/scripts/calendar-filter.js");
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/calendar.scss */ "./src/styles/calendar.scss");



 //Create calendar

var table = document.querySelector('.table');
var arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
var arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
(0,_calendar_create_table__WEBPACK_IMPORTED_MODULE_0__.default)(arrDay, arrTime, table); // Add events to calendar

var crosses = document.querySelectorAll('.cross');
var information = document.querySelectorAll('.info');
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
  var newInfoSpan = document.createElement('span');
  newInfoSpan.setAttribute('id', "".concat(idName, "info"));
  newInfoSpan.classList.add('hide');
  newInfoSpan.innerHTML = "Name of event: ".concat(inpEve, "\n\nParticipants: ").concat(cheUsr.join(' '), "\n\nDay: ").concat(selDay.toUpperCase(), "\n\nTime: ").concat(selTim);
  meetingField.appendChild(newInfoSpan);
  meetingField.classList.remove('hide');
  meetingField.classList.add('show', 'full');
  cheUsr.forEach(function (usrName) {
    return meetingField.classList.add(usrName);
  });
});
crosses.forEach(function (item) {
  if (item.parentNode.classList.contains('full') === true) {
    item.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('cross') === true) {
        (0,_calendar_modal_windows__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal_bg');
        var parent = e.target.parentNode;
        (0,_calendar_modal_windows__WEBPACK_IMPORTED_MODULE_1__.modalConfirm)('.modal_bg', '.btn_yes', '.btn_no', parent);
      }
    });
  }
});
var textInfo = document.querySelector('.modal_text_info');
information.forEach(function (item) {
  if (item.parentNode.classList.contains('full') === true) {
    item.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('info') === true) {
        var id = e.target.parentNode.getAttribute('id');
        var infoSpan = document.getElementById("".concat(id, "info"));
        textInfo.innerHTML = "".concat(infoSpan.textContent);
        (0,_calendar_modal_windows__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal_bg_info');
        (0,_calendar_modal_windows__WEBPACK_IMPORTED_MODULE_1__.modalInfo)('.modal_bg_info', '.btn_yes_info', '.modal_container_info');
      }
    });
  }
});
(0,_calendar_filter__WEBPACK_IMPORTED_MODULE_2__.default)('.full', '#filterName');
var btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', function () {
  window.location.href = "./form.html";
});

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
//# sourceMappingURL=calendar.2b35ef26805bc581340d.js.map
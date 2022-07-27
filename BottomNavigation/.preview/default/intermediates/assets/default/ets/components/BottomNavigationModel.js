/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\Types.ets":
/*!***************************************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\BottomNavigation\src\main\ets\components\Types.ets ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		var commonCachedModule = globalThis["__common_module_cache__"] ? globalThis["__common_module_cache__"][moduleId]: null;
/******/ 		if (commonCachedModule) { return commonCachedModule.exports; }
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
/******/ 		if (globalThis["__common_module_cache__"] && moduleId.indexOf("?name=") < 0 && Object.keys(globalThis["__common_module_cache__"]).indexOf(moduleId) >= 0) {
/******/ 		  globalThis["__common_module_cache__"][moduleId] = module;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************************************************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\BottomNavigation\src\main\ets\components\BottomNavigationModel.ets?entry ***!
  \*************************************************************************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BottomNavigationModel = void 0;
/*
 * Copyright (C) 2022 Application Library Engineering Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
__webpack_require__(/*! ./Types */ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\Types.ets");
class BottomNavigationModel {
    constructor(options, data) {
        //Container Attributes
        this.maxItemCount = 5;
        this.containerBackgroundColor = "#ff47dbbd";
        this.spaceBetweenItems = '20vp';
        this.bottomNavigationHeight = '100vp';
        //Navigation Item Attributes
        this.itemCount = 0;
        this.itemHeight = '90vp';
        this.selectedItem = -1;
        this.rippleEnabled = true;
        this.rippleColor = "#ff6732b3";
        this.labelVisibility = Visibility.Visible;
        //Icon attributes
        this.iconSize = '50vp';
        //Text Label Attributes
        this.labelSize = '15fp';
        this.labelInactiveColor = Color.Grey;
        this.labelActiveColor = Color.Black;
        this.setDefault();
        if (data != null && data != undefined) {
            this.setData(data);
        }
        if (options != null && options != undefined) {
            this.setOptions(options);
        }
    }
    setDefault() {
        this.updateWidth();
    }
    setData(data) {
        this.itemCount = data.length < this.maxItemCount ? data.length : this.maxItemCount;
        this.updateWidth();
    }
    setOptions(options) {
        if (options.callbackFunction != null && options.callbackFunction != undefined) {
            this.callbackFunction = options.callbackFunction;
        }
        if (options.containerBackgroundColor != null && options.containerBackgroundColor != undefined) {
            this.containerBackgroundColor = options.containerBackgroundColor;
        }
        if (options.rippleEnabled != null && options.rippleEnabled != undefined) {
            this.rippleEnabled = options.rippleEnabled;
        }
        if (options.labelVisibility != null && options.labelVisibility != undefined) {
            this.setLabelVisibility(options.labelVisibility);
        }
        if (options.labelInactiveColor != null && options.labelInactiveColor != undefined) {
            this.labelInactiveColor = options.labelInactiveColor;
        }
        if (options.labelActiveColor != null && options.labelActiveColor != undefined) {
            this.labelActiveColor = options.labelActiveColor;
        }
    }
    updateWidth() {
        if (this.itemCount != 0) {
            this.itemWidth = (100 / this.itemCount) + "%";
        }
        else {
            this.itemWidth = '0%';
        }
    }
    setLabelVisibility(state) {
        this.labelVisibility = state ? Visibility.Visible : Visibility.None;
    }
}
exports.BottomNavigationModel = BottomNavigationModel;

})();

/******/ })()
;
//# sourceMappingURL=BottomNavigationModel.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "F:\\DevEcoStudioProjects\\BottomNavigation\\entry\\src\\main\\ets\\MainAbility\\MainAbility.ts?entry":
/*!****************************************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\entry\src\main\ets\MainAbility\MainAbility.ts?entry ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var _ohos_application_Ability_1  = globalThis.requireNapi('application.Ability') || (isSystemplugin('application.Ability', 'ohos') ? globalThis.ohosplugin.application.Ability : isSystemplugin('application.Ability', 'system') ? globalThis.systemplugin.application.Ability : undefined);
class MainAbility extends _ohos_application_Ability_1 {
    onCreate(want, launchParam) {
        console.log("[Demo] MainAbility onCreate");
        globalThis.abilityWant = want;
    }
    onDestroy() {
        console.log("[Demo] MainAbility onDestroy");
    }
    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        console.log("[Demo] MainAbility onWindowStageCreate");
        windowStage.setUIContent(this.context, "pages/index", null);
    }
    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        console.log("[Demo] MainAbility onWindowStageDestroy");
    }
    onForeground() {
        // Ability has brought to foreground
        console.log("[Demo] MainAbility onForeground");
    }
    onBackground() {
        // Ability has back to background
        console.log("[Demo] MainAbility onBackground");
    }
}
globalThis.exports.default = MainAbility;
;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["F:\\DevEcoStudioProjects\\BottomNavigation\\entry\\src\\main\\ets\\MainAbility\\MainAbility.ts?entry"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=MainAbility.js.map
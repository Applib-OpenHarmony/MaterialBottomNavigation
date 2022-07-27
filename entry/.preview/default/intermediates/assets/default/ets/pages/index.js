/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\index.ets":
/*!***************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\BottomNavigation\index.ets ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BottomNavigationData = exports.BottomNavigationOptions = exports.BottomNavigation = void 0;
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
var BottomNavigation_1 = __webpack_require__(/*! ./src/main/ets/components/BottomNavigation */ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\BottomNavigation.ets");
Object.defineProperty(exports, "BottomNavigation", ({ enumerable: true, get: function () { return BottomNavigation_1.BottomNavigation; } }));
var Types_1 = __webpack_require__(/*! ./src/main/ets/components/Types */ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\Types.ets");
Object.defineProperty(exports, "BottomNavigationOptions", ({ enumerable: true, get: function () { return Types_1.BottomNavigationOptions; } }));
Object.defineProperty(exports, "BottomNavigationData", ({ enumerable: true, get: function () { return Types_1.BottomNavigationData; } }));


/***/ }),

/***/ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\BottomNavigation.ets":
/*!**************************************************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\BottomNavigation\src\main\ets\components\BottomNavigation.ets ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BottomNavigation = void 0;
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
const BottomNavigationModel_1 = __webpack_require__(/*! ./BottomNavigationModel */ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\BottomNavigationModel.ets");
__webpack_require__(/*! ./Types */ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\Types.ets");
const Ripple_1 = __webpack_require__(/*! ./Ripple */ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\Ripple.ets");
class BottomNavigation extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__bottomNavigationModel = new ObservedPropertyObject(undefined, this, "bottomNavigationModel");
        this.__updateBadge = new ObservedPropertySimple(1, this, "updateBadge");
        this.__bottomNavigationData = new SynchedPropertyObjectTwoWay(params.bottomNavigationData, this, "bottomNavigationData");
        this.options = undefined;
        this.updateWithValueParams(params);
        this.declareWatch("bottomNavigationData", this.refreshBadge);
    }
    updateWithValueParams(params) {
        if (params.bottomNavigationModel !== undefined) {
            this.bottomNavigationModel = params.bottomNavigationModel;
        }
        if (params.updateBadge !== undefined) {
            this.updateBadge = params.updateBadge;
        }
        if (params.options !== undefined) {
            this.options = params.options;
        }
    }
    aboutToBeDeleted() {
        this.__bottomNavigationModel.aboutToBeDeleted();
        this.__updateBadge.aboutToBeDeleted();
        this.__bottomNavigationData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get bottomNavigationModel() {
        return this.__bottomNavigationModel.get();
    }
    set bottomNavigationModel(newValue) {
        this.__bottomNavigationModel.set(newValue);
    }
    get updateBadge() {
        return this.__updateBadge.get();
    }
    set updateBadge(newValue) {
        this.__updateBadge.set(newValue);
    }
    get bottomNavigationData() {
        return this.__bottomNavigationData.get();
    }
    set bottomNavigationData(newValue) {
        this.__bottomNavigationData.set(newValue);
    }
    aboutToAppear() {
        this.bottomNavigationModel = new BottomNavigationModel_1.BottomNavigationModel(this.options, this.bottomNavigationData);
    }
    refreshBadge() {
        this.updateBadge++;
    }
    render() {
        Row.create();
        Row.debugLine("../../../../BottomNavigation/src/main/ets/components/BottomNavigation.ets(37:5)");
        Row.clip(true);
        Row.width('100%');
        Row.alignItems(VerticalAlign.Center);
        Row.height(this.bottomNavigationModel.bottomNavigationHeight);
        Row.backgroundColor(this.bottomNavigationModel.containerBackgroundColor);
        ForEach.create("2", this, ObservedObject.GetRawObject(this.bottomNavigationData), (value, idx) => {
            If.create();
            if (idx < this.bottomNavigationModel.maxItemCount) {
                If.branchId(0);
                let earlierCreatedChild_1 = this.findChildById("1");
                if (earlierCreatedChild_1 == undefined) {
                    View.create(new NavigationItem("1", this, {
                        bottomNavigationModel: this.__bottomNavigationModel,
                        bottomNavigationData: this.__bottomNavigationData,
                        itemId: idx,
                        updateBadge: this.__updateBadge
                    }));
                }
                else {
                    earlierCreatedChild_1.updateWithValueParams({
                        itemId: idx
                    });
                    View.create(earlierCreatedChild_1);
                }
            }
            If.pop();
        });
        ForEach.pop();
        Row.pop();
    }
}
exports.BottomNavigation = BottomNavigation;
class NavigationItem extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__bottomNavigationModel = new SynchedPropertyObjectTwoWay(params.bottomNavigationModel, this, "bottomNavigationModel");
        this.__bottomNavigationData = new SynchedPropertyObjectTwoWay(params.bottomNavigationData, this, "bottomNavigationData");
        this.itemId = undefined;
        this.__clickCoordinates = new ObservedPropertyObject({ x: 0, y: 0 }, this, "clickCoordinates");
        this.__showRipple = new ObservedPropertySimple(false, this, "showRipple");
        this.__containerSize = new ObservedPropertyObject({}, this, "containerSize");
        this.__border = new ObservedPropertyObject({}, this, "border");
        this.__updateBadge = new SynchedPropertySimpleTwoWay(params.updateBadge, this, "updateBadge");
        this.__badgeRefresh = new ObservedPropertySimple(1, this, "badgeRefresh");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.itemId !== undefined) {
            this.itemId = params.itemId;
        }
        if (params.clickCoordinates !== undefined) {
            this.clickCoordinates = params.clickCoordinates;
        }
        if (params.showRipple !== undefined) {
            this.showRipple = params.showRipple;
        }
        if (params.containerSize !== undefined) {
            this.containerSize = params.containerSize;
        }
        if (params.border !== undefined) {
            this.border = params.border;
        }
        if (params.badgeRefresh !== undefined) {
            this.badgeRefresh = params.badgeRefresh;
        }
    }
    aboutToBeDeleted() {
        this.__bottomNavigationModel.aboutToBeDeleted();
        this.__bottomNavigationData.aboutToBeDeleted();
        this.__clickCoordinates.aboutToBeDeleted();
        this.__showRipple.aboutToBeDeleted();
        this.__containerSize.aboutToBeDeleted();
        this.__border.aboutToBeDeleted();
        this.__updateBadge.aboutToBeDeleted();
        this.__badgeRefresh.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get bottomNavigationModel() {
        return this.__bottomNavigationModel.get();
    }
    set bottomNavigationModel(newValue) {
        this.__bottomNavigationModel.set(newValue);
    }
    get bottomNavigationData() {
        return this.__bottomNavigationData.get();
    }
    set bottomNavigationData(newValue) {
        this.__bottomNavigationData.set(newValue);
    }
    get clickCoordinates() {
        return this.__clickCoordinates.get();
    }
    set clickCoordinates(newValue) {
        this.__clickCoordinates.set(newValue);
    }
    get showRipple() {
        return this.__showRipple.get();
    }
    set showRipple(newValue) {
        this.__showRipple.set(newValue);
    }
    get containerSize() {
        return this.__containerSize.get();
    }
    set containerSize(newValue) {
        this.__containerSize.set(newValue);
    }
    get border() {
        return this.__border.get();
    }
    set border(newValue) {
        this.__border.set(newValue);
    }
    get updateBadge() {
        return this.__updateBadge.get();
    }
    set updateBadge(newValue) {
        this.__updateBadge.set(newValue);
    }
    get badgeRefresh() {
        return this.__badgeRefresh.get();
    }
    set badgeRefresh(newValue) {
        this.__badgeRefresh.set(newValue);
    }
    onClickEvent() {
        var cb = this.bottomNavigationModel.callbackFunction;
        this.bottomNavigationModel.selectedItem = this.itemId;
        if (cb != undefined && cb != null) {
            cb(this.itemId);
        }
        this.badgeRefresh++;
    }
    render() {
        Stack.create();
        Stack.debugLine("../../../../BottomNavigation/src/main/ets/components/BottomNavigation.ets(79:5)");
        Stack.clip(true);
        Stack.height('100%');
        Stack.width(this.bottomNavigationModel.itemWidth);
        Column.create({ space: '5vp' });
        Column.debugLine("../../../../BottomNavigation/src/main/ets/components/BottomNavigation.ets(80:7)");
        Column.width('100%');
        Column.height('100%');
        Column.padding({ top: '10vp' });
        Column.onClick((event) => {
            if (this.bottomNavigationModel.rippleEnabled) {
                this.clickCoordinates = {
                    x: event.x,
                    y: event.y
                };
                this.showRipple = true;
                setTimeout(() => {
                    this.onClickEvent();
                }, 300);
            }
            else {
                this.onClickEvent();
            }
        });
        Column.alignItems(HorizontalAlign.Center);
        Column.create();
        Column.debugLine("../../../../BottomNavigation/src/main/ets/components/BottomNavigation.ets(81:9)");
        Column.alignItems(HorizontalAlign.Center);
        Column.onAreaChange((oldSize, newSize) => {
            this.containerSize.height = newSize.height;
            this.containerSize.width = newSize.width;
        });
        Column.width('100%');
        Column.height('100%');
        If.create();
        if (this.badgeRefresh > 0) {
            If.branchId(0);
            Badge.create({
                value: this.bottomNavigationData[this.itemId].badge ? this.bottomNavigationData[this.itemId].badge + "" : null,
                style: { badgeColor: Color.Red, fontSize: '15fp', color: Color.White, badgeSize: '20fp' }
            });
            Badge.debugLine("../../../../BottomNavigation/src/main/ets/components/BottomNavigation.ets(83:13)");
            Badge.width((this.bottomNavigationModel.iconSize));
            Badge.height(this.bottomNavigationModel.iconSize);
            Badge.enabled(false);
            Image.create(this.bottomNavigationData[this.itemId].icon);
            Image.debugLine("../../../../BottomNavigation/src/main/ets/components/BottomNavigation.ets(87:15)");
            Image.height(this.bottomNavigationModel.iconSize);
            Image.width(this.bottomNavigationModel.iconSize);
            Image.opacity(this.bottomNavigationModel.selectedItem == this.itemId ? 1 : 0.3);
            Badge.pop();
        }
        If.pop();
        Column.pop();
        Text.create(this.bottomNavigationData[this.itemId].label);
        Text.debugLine("../../../../BottomNavigation/src/main/ets/components/BottomNavigation.ets(105:9)");
        Text.fontSize(this.bottomNavigationModel.labelSize);
        Text.width('100%');
        Text.textAlign(TextAlign.Center);
        Text.visibility(this.bottomNavigationModel.labelVisibility);
        Text.margin({ bottom: '2vp', left: '2vp' });
        Text.fontColor(this.itemId == this.bottomNavigationModel.selectedItem ? this.bottomNavigationModel.labelActiveColor : this.bottomNavigationModel.labelInactiveColor);
        Text.pop();
        Column.pop();
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new Ripple_1.rippleUtils("3", this, {
                size: this.__containerSize,
                border: this.__border,
                rippleStartPosition: this.__clickCoordinates,
                showRipple: this.__showRipple,
                unbounded: true,
                color: this.bottomNavigationModel.rippleColor
            }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                unbounded: true,
                color: this.bottomNavigationModel.rippleColor
            });
            View.create(earlierCreatedChild_3);
        }
        Stack.pop();
    }
}


/***/ }),

/***/ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\BottomNavigationModel.ets":
/*!*******************************************************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\BottomNavigation\src\main\ets\components\BottomNavigationModel.ets ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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


/***/ }),

/***/ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\src\\main\\ets\\components\\Ripple.ets":
/*!****************************************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\BottomNavigation\src\main\ets\components\Ripple.ets ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rippleUtils = void 0;
class rippleUtils extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.rippleDuration = 300;
        this.unbounded = true;
        this.color = Color.Red // fill color of the circle
        ;
        this.rippleSize = 10;
        this.opacity = 0.4;
        this.__rippleX = new ObservedPropertySimple(0, this, "rippleX");
        this.__rippleY = new ObservedPropertySimple(0, this, "rippleY");
        this.__rippleScale = new ObservedPropertySimple(0 // current scale of circle
        , this, "rippleScale");
        this.__showRipple = new SynchedPropertySimpleTwoWay(params.showRipple, this, "showRipple");
        this.__rippleStartPosition = new SynchedPropertyObjectTwoWay(params.rippleStartPosition, this, "rippleStartPosition");
        this.__size = new SynchedPropertyObjectTwoWay(params.size, this, "size");
        this.__border = new SynchedPropertyObjectTwoWay(params.border, this, "border");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.rippleDuration !== undefined) {
            this.rippleDuration = params.rippleDuration;
        }
        if (params.unbounded !== undefined) {
            this.unbounded = params.unbounded;
        }
        if (params.color !== undefined) {
            this.color = params.color;
        }
        if (params.rippleSize !== undefined) {
            this.rippleSize = params.rippleSize;
        }
        if (params.opacity !== undefined) {
            this.opacity = params.opacity;
        }
        if (params.rippleX !== undefined) {
            this.rippleX = params.rippleX;
        }
        if (params.rippleY !== undefined) {
            this.rippleY = params.rippleY;
        }
        if (params.rippleScale !== undefined) {
            this.rippleScale = params.rippleScale;
        }
    }
    aboutToBeDeleted() {
        this.__rippleX.aboutToBeDeleted();
        this.__rippleY.aboutToBeDeleted();
        this.__rippleScale.aboutToBeDeleted();
        this.__showRipple.aboutToBeDeleted();
        this.__rippleStartPosition.aboutToBeDeleted();
        this.__size.aboutToBeDeleted();
        this.__border.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get rippleX() {
        return this.__rippleX.get();
    }
    set rippleX(newValue) {
        this.__rippleX.set(newValue);
    }
    get rippleY() {
        return this.__rippleY.get();
    }
    set rippleY(newValue) {
        this.__rippleY.set(newValue);
    }
    get rippleScale() {
        return this.__rippleScale.get();
    }
    set rippleScale(newValue) {
        this.__rippleScale.set(newValue);
    }
    get showRipple() {
        return this.__showRipple.get();
    }
    set showRipple(newValue) {
        this.__showRipple.set(newValue);
    }
    get rippleStartPosition() {
        return this.__rippleStartPosition.get();
    }
    set rippleStartPosition(newValue) {
        this.__rippleStartPosition.set(newValue);
    }
    get size() {
        return this.__size.get();
    }
    set size(newValue) {
        this.__size.set(newValue);
    }
    get border() {
        return this.__border.get();
    }
    set border(newValue) {
        this.__border.set(newValue);
    }
    ripple_animation() {
        // position coordinates for the circle
        this.rippleX = this.rippleStartPosition.x - this.rippleSize / 2;
        this.rippleY = this.rippleStartPosition.y - this.rippleSize / 2;
        Context.animateTo({
            duration: this.rippleDuration,
            curve: Curve.Sharp,
            onFinish: () => {
                this.rippleScale = 0;
                this.showRipple = false;
            }
        }, () => {
            /*
            *max allowed size of the circle according to the container size
             */
            this.rippleScale = Math.ceil(Math.sqrt(Math.pow(this.size.width, 2) + Math.pow(this.size.height, 2)) * 2 / this.rippleSize);
        });
    }
    render() {
        If.create();
        if (this.showRipple) {
            If.branchId(0);
            Flex.create();
            Flex.debugLine("../../../../BottomNavigation/src/main/ets/components/Ripple.ets(65:7)");
            Flex.clip(!this.unbounded);
            Flex.size(ObservedObject.GetRawObject(this.size));
            Flex.position({ x: 0, y: 0 });
            Flex.zIndex(2);
            Flex.border(ObservedObject.GetRawObject(this.border));
            Flex.onAppear(() => {
                this.ripple_animation();
            });
            Circle.create();
            Circle.debugLine("../../../../BottomNavigation/src/main/ets/components/Ripple.ets(66:9)");
            Circle.fill(this.color);
            Circle.width(this.rippleSize);
            Circle.height(this.rippleSize);
            Circle.opacity(this.opacity);
            Circle.position({ x: this.rippleX, y: this.rippleY });
            Circle.scale({
                x: this.rippleScale,
                y: this.rippleScale,
                centerX: this.rippleSize / 2,
                centerY: this.rippleSize / 2
            });
            Flex.pop();
        }
        If.pop();
    }
}
exports.rippleUtils = rippleUtils;


/***/ }),

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
/*!*****************************************************************************************!*\
  !*** F:\DevEcoStudioProjects\BottomNavigation\entry\src\main\ets\pages\index.ets?entry ***!
  \*****************************************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
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
const bottomnavigation_1 = __webpack_require__(/*! @ohos/bottomnavigation */ "F:\\DevEcoStudioProjects\\BottomNavigation\\BottomNavigation\\index.ets");
class Index extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple("Select an option", this, "message");
        this.__bottomNavigationData = new ObservedPropertyObject([
            {
                icon: { "id": 16777221, "type": 20000, params: [] },
                label: "Bookmarks"
            },
            {
                icon: { "id": 16777222, "type": 20000, params: [] },
                label: "Cart",
                badge: 2
            },
            {
                icon: { "id": 16777223, "type": 20000, params: [] },
                label: "Categories"
            },
            {
                icon: { "id": 16777224, "type": 20000, params: [] },
                label: "Favorites"
            },
            {
                icon: { "id": 16777225, "type": 20000, params: [] },
                label: "Home"
            },
        ], this, "bottomNavigationData");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.bottomNavigationData !== undefined) {
            this.bottomNavigationData = params.bottomNavigationData;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__bottomNavigationData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get bottomNavigationData() {
        return this.__bottomNavigationData.get();
    }
    set bottomNavigationData(newValue) {
        this.__bottomNavigationData.set(newValue);
    }
    callBackListener(idx) {
        this.message = this.bottomNavigationData[idx].label;
        if (this.bottomNavigationData[idx].badge) {
            this.bottomNavigationData[idx].badge = (Number(this.bottomNavigationData[idx].badge) + 1) + "";
        }
    }
    render() {
        Stack.create();
        Stack.debugLine("pages/index.ets(55:5)");
        Stack.alignContent(Alignment.Bottom);
        Stack.height('100%');
        Column.create();
        Column.debugLine("pages/index.ets(56:7)");
        Column.width('100%');
        Column.height('100%');
        Text.create(this.message);
        Text.debugLine("pages/index.ets(57:9)");
        Text.fontSize('30fp');
        Text.fontColor(Color.Black);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Column.pop();
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new bottomnavigation_1.BottomNavigation("2", this, {
                bottomNavigationData: this.__bottomNavigationData,
                options: {
                    callbackFunction: this.callBackListener.bind(this),
                    containerBackgroundColor: "#ff47dbbd",
                    rippleEnabled: true,
                    labelVisibility: true,
                    labelInactiveColor: Color.Grey,
                    labelActiveColor: Color.Black
                }
            }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                options: {
                    callbackFunction: this.callBackListener.bind(this),
                    containerBackgroundColor: "#ff47dbbd",
                    rippleEnabled: true,
                    labelVisibility: true,
                    labelInactiveColor: Color.Grey,
                    labelActiveColor: Color.Black
                }
            });
            View.create(earlierCreatedChild_2);
        }
        Stack.pop();
    }
}
loadDocument(new Index("1", undefined, {}));

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
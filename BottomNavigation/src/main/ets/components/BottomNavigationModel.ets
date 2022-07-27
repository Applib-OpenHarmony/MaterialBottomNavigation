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

import { BottomNavigationOptions, BottomNavigationData } from "./Types"

export class BottomNavigationModel {
  //Container Attributes
  maxItemCount: number= 5
  containerBackgroundColor: ResourceColor= "#ff47dbbd"
  spaceBetweenItems: string | number= '20vp'
  bottomNavigationHeight: Length= '100vp'
  callbackFunction: (idx: number) => void
  //Navigation Item Attributes
  itemCount: number= 0
  itemHeight: Length= '90vp'
  itemWidth: Length
  selectedItem: number= -1
  rippleEnabled: boolean= true
  rippleColor: ResourceColor= "#ff6732b3"
  labelVisibility: Visibility= Visibility.Visible
  //Icon attributes
  iconSize: Length= '50vp'
  //Text Label Attributes
  labelSize: Length= '15fp'
  labelInactiveColor: ResourceColor= Color.Grey
  labelActiveColor: ResourceColor= Color.Black
  constructor(options: BottomNavigationOptions, data: BottomNavigationData[]) {
    this.setDefault()
    if (data != null && data != undefined) {
      this.setData(data)
    }
    if (options != null && options != undefined) {
      this.setOptions(options)
    }
  }

  setDefault() {
    this.updateWidth()
  }

  setData(data: BottomNavigationData[]) {
    this.itemCount = data.length < this.maxItemCount ? data.length : this.maxItemCount
    this.updateWidth()
  }

  setOptions(options: BottomNavigationOptions) {
    if (options.callbackFunction != null && options.callbackFunction != undefined) {
      this.callbackFunction = options.callbackFunction
    }

    if (options.containerBackgroundColor != null && options.containerBackgroundColor != undefined) {
      this.containerBackgroundColor = options.containerBackgroundColor
    }
    if (options.rippleEnabled != null && options.rippleEnabled != undefined) {
      this.rippleEnabled = options.rippleEnabled
    }
    if (options.labelVisibility != null && options.labelVisibility != undefined) {
      this.setLabelVisibility(options.labelVisibility)
    }
    if (options.labelInactiveColor != null && options.labelInactiveColor != undefined) {
      this.labelInactiveColor = options.labelInactiveColor
    }
    if (options.labelActiveColor != null && options.labelActiveColor != undefined) {
      this.labelActiveColor = options.labelActiveColor
    }
  }

  updateWidth() {
    if (this.itemCount != 0) {
      this.itemWidth = (100 / this.itemCount) + "%";
    }
    else {
      this.itemWidth = '0%'
    }
  }

  setLabelVisibility(state: boolean) {
    this.labelVisibility = state ? Visibility.Visible : Visibility.None
  }
}

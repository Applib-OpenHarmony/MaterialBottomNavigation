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

import { BottomNavigationModel } from "./BottomNavigationModel"
import { BottomNavigationOptions, BottomNavigationData } from "./Types"
import { rippleUtils } from "./Ripple"

@Component
export struct BottomNavigation {
  @State bottomNavigationModel: BottomNavigationModel= undefined
  @State updateBadge: number= 1
  @Link @Watch("refreshBadge") bottomNavigationData: BottomNavigationData[]
  options: BottomNavigationOptions

  aboutToAppear() {
    this.bottomNavigationModel = new BottomNavigationModel(this.options, this.bottomNavigationData)
  }

  refreshBadge() {
    this.updateBadge++
  }

  build() {
    Row() {
      ForEach(this.bottomNavigationData, (value, idx) => {
        if (idx < this.bottomNavigationModel.maxItemCount) {
          NavigationItem({
            bottomNavigationModel: $bottomNavigationModel,
            bottomNavigationData: $bottomNavigationData,
            itemId: idx,
            updateBadge: $updateBadge
          })
        }
      })
    }
    .clip(true)
    .width('100%')
    .alignItems(VerticalAlign.Center)
    .height(this.bottomNavigationModel.bottomNavigationHeight)
    .backgroundColor(this.bottomNavigationModel.containerBackgroundColor)
  }
}

@Component
struct NavigationItem {
  @Link bottomNavigationModel: BottomNavigationModel
  @Link bottomNavigationData: BottomNavigationData[]
  itemId: number
  @State clickCoordinates: Position= { x: 0, y: 0 }
  @State showRipple: boolean= false
  @State containerSize: SizeOptions= {}
  @State border: BorderOptions= {}
  @Link updateBadge: number
  @State badgeRefresh: number = 1

  onClickEvent() {
    var cb: (idx) => void = this.bottomNavigationModel.callbackFunction
    this.bottomNavigationModel.selectedItem = this.itemId
    if (cb != undefined && cb != null) {
      cb(this.itemId)
    }
    this.badgeRefresh++
  }

  build() {
    Stack() {
      Column({ space: '5vp' }) {
        Column() {
          if (this.badgeRefresh > 0) {
            Badge({
              value: this.bottomNavigationData[this.itemId].badge ? this.bottomNavigationData[this.itemId].badge + "" : null,
              style: { badgeColor: Color.Red, fontSize: '15fp', color: Color.White, badgeSize: '20fp' }
            }) {
              Image(this.bottomNavigationData[this.itemId].icon)
                .height(this.bottomNavigationModel.iconSize)
                .width(this.bottomNavigationModel.iconSize)
                .opacity(this.bottomNavigationModel.selectedItem == this.itemId ? 1 : 0.3)
            }
            .width((this.bottomNavigationModel.iconSize))
            .height(this.bottomNavigationModel.iconSize)
            .enabled(false)
          }
        }
        .alignItems(HorizontalAlign.Center)
        .onAreaChange((oldSize, newSize) => {
          this.containerSize.height = newSize.height
          this.containerSize.width = newSize.width
        })
        .width('100%')
        .height('100%')

        Text(this.bottomNavigationData[this.itemId].label)
          .fontSize(this.bottomNavigationModel.labelSize)
          .width('100%')
          .textAlign(TextAlign.Center)
          .visibility(this.bottomNavigationModel.labelVisibility)
          .margin({ bottom: '2vp', left: '2vp' })
          .fontColor(this.itemId == this.bottomNavigationModel.selectedItem ? this.bottomNavigationModel.labelActiveColor : this.bottomNavigationModel.labelInactiveColor)
      }
      .width('100%')
      .height('100%')
      .padding({ top: '10vp' })
      .onClick((event) => {
        if (this.bottomNavigationModel.rippleEnabled) {
          this.clickCoordinates = {
            x: event.x,
            y: event.y
          }
          this.showRipple = true
          setTimeout(() => {
            this.onClickEvent()
          }, 300)
        } else {
          this.onClickEvent()
        }
      })
      .alignItems(HorizontalAlign.Center)

      rippleUtils({
        size: $containerSize,
        border: $border,
        rippleStartPosition: $clickCoordinates,
        showRipple: $showRipple,
        unbounded: true,
        color: this.bottomNavigationModel.rippleColor
      })
    }
    .clip(true)
    .height('100%')
    .width(this.bottomNavigationModel.itemWidth)
  }
}
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

import { BottomNavigationOptions, BottomNavigation, BottomNavigationData } from "@ohos/bottomnavigation"

@Entry
@Component
struct Index {
  @State message: string= "Select an option"
  @State bottomNavigationData: BottomNavigationData[]= [
    {
      icon: $r("app.media.bookmarks"),
      label: "Bookmarks"
    },
    {
      icon: $r("app.media.cart"),
      label: "Cart",
      badge: 2
    },
    {
      icon: $r("app.media.categories"),
      label: "Categories"
    },
    {
      icon: $r("app.media.favorites"),
      label: "Favorites"
    },
    {
      icon: $r("app.media.home"),
      label: "Home"
    },
  ]

  callBackListener(idx: number) {
    this.message = this.bottomNavigationData[idx].label
    if (this.bottomNavigationData[idx].badge) {
      this.bottomNavigationData[idx].badge = (Number(this.bottomNavigationData[idx].badge) + 1) + ""
    }
  }

  build() {
    Stack() {
      Column() {
        Text(this.message)
          .fontSize('30fp')
          .fontColor(Color.Black)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
      .height('100%')

      BottomNavigation({
        bottomNavigationData: $bottomNavigationData,
        options: {
          callbackFunction: this.callBackListener.bind(this),
          containerBackgroundColor: "#ff47dbbd",
          rippleEnabled: true,
          labelVisibility: true,
          labelInactiveColor: Color.Grey,
          labelActiveColor: Color.Black
        }
      })
    }
    .alignContent(Alignment.Bottom)
    .height('100%')
  }
}
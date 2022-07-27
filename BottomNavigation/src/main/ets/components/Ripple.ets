/*
 * Copyright (C) 2020-21 Application Library Engineering Group
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

@Component
export struct rippleUtils {
  rippleDuration: number = 300
  unbounded: boolean = true
  color: ResourceColor = Color.Red // fill color of the circle

  private rippleSize: number = 10
  private opacity: number = 0.4
  @State private rippleX: number = 0
  @State private rippleY: number = 0
  @State private rippleScale: number = 0 // current scale of circle

  @Link showRipple: boolean // for rendering control

  @Link rippleStartPosition: { // click event coordinates
    x: number,
    y: number
  }
  @Link size: {
    width: number,
    height: number
  } // size of ripple container
  @Link border: BorderOptions // radius of ripple container


  private ripple_animation() {
    // position coordinates for the circle
    this.rippleX = this.rippleStartPosition.x - this.rippleSize / 2
    this.rippleY = this.rippleStartPosition.y - this.rippleSize / 2

    animateTo({
      duration: this.rippleDuration,
      curve: Curve.Sharp,
      onFinish: () => {
        this.rippleScale = 0
        this.showRipple = false
      }
    },
      () => {
        /*
        *max allowed size of the circle according to the container size
         */
        this.rippleScale = Math.ceil(Math.sqrt(Math.pow(this.size.width, 2) + Math.pow(this.size.height, 2)) * 2 / this.rippleSize)
      })
  }

  build() {
    if (this.showRipple) {
      Flex() {
        Circle()
          .fill(this.color)
          .width(this.rippleSize)
          .height(this.rippleSize)
          .opacity(this.opacity)
          .position({ x: this.rippleX, y: this.rippleY })
          .scale({
            x: this.rippleScale,
            y: this.rippleScale,
            centerX: this.rippleSize / 2,
            centerY: this.rippleSize / 2
          })
      }
      .clip(!this.unbounded)
      .size(this.size)
      .position({ x: 0, y: 0 })
      .zIndex(2)
      .border(this.border)
      .onAppear(() => {
        this.ripple_animation()
      })
    }
  }
}
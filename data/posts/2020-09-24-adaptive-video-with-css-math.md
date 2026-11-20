---
title: Adaptive video using built-in CSS mathematical functions

image: //yoksel.github.io/assets/img/articles/adaptive-video-with-css-math/preview.jpg

tags: [css-math]

description: How can I resize a video to fit the height without additional wrappers and JS?

links:
- href: https://drafts.csswg.org/css-sizing-4/#ratios
  text: 'aspect-ratio'
- href: https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/
  text: Designing An Aspect Ratio Unit For CSS
- href: https://stackoverflow.com/questions/6148012/setting-element-width-based-on-height-via-css
  text: Setting Element Width Based on Height Via CSS
- href: https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css
  text: Maintain the aspect ratio of a div with CSS
- href: https://css-tricks.com/fluid-width-video/
  text: Fluid Width Video
- href: https://www.w3.org/TR/css-values-4/#calc-notation
  text: 'Mathematical Expressions: calc(), min(), max(), and clamp()'
- href: https://www.w3.org/TR/css-values-3/#attr-notation
  text: 'Attribute References: attr()'
- href: https://developer.mozilla.org/en-US/docs/Web/CSS/attr
  text: 'attr()'
- href: https://css-tricks.com/when-sass-and-new-css-features-collide/
  text: 'When Sass and New CSS Features Collide'
- href: /size-units/#relative-units
  text: Size units in CSS
- href: /css-math
  text: Mathematical functions in CSS
---

When I asked on Twitter what [typed attribute values](https://www.w3.org/TR/css-values-3/#attr-notation) could be needed for in CSS, Vadim Makeev [suggested](https://twitter.com/pepelsbey/status/1304036385599508480) that it would be very convenient for responsive images.

But I thought that images somehow [can](https://codepen.io/yoksel/pen/wvGNrro) change their height when resized while keeping their proportions, but frames can't do that at all. At the same time, on responsive websites, it's important to be able to adjust any content, including videos, to the width of the window. What can be done about this?<!--more-->

There are [different ways](https://css-tricks.com/fluid-width-video/) to solve this problem: an additional wrapper with padding or options with JS, but there is still no simple, elegant solution using pure CSS. In the W3C drafts, there is the [aspect-ratio](https://drafts.csswg.org/css-sizing-4/#ratios) property for these purposes. You can read more about it in the article [Designing An Aspect Ratio Unit For CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/), but at the moment it is [not supported](https://caniuse.com/mdn-css_properties_aspect-ratio) by any browser ([demo to test](https://codepen.io/yoksel/pen/WNwPEoV)).

While delving into [mathematical functions](/css-math), it occurred to me that `aspect-ratio` could be attempted to be recreated using these functions and custom properties. Chris Coyier [suggested](https://css-tricks.com/fluid-width-video/) using custom properties and `calc()` to calculate padding in the wrapper method:

```html
<div class="videoWrapper" style="--aspect-ratio: 3 / 4;">
  <iframe ...>
```

```css
.videoWrapper {
  ...
  /* falls back to 16/9, but otherwise uses ratio from HTML */
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
}
```

But what if we get the aspect ratio from the width and height and then dynamically calculate the height of the frame itself based on that?

It took me some time to figure out how to write working code. One of the problems was that if you divide values with the same units of measurement by each other, `calc()` returns `0` instead of a ratio. Therefore, to obtain the aspect ratio, you need to use numbers without units of measurement.

After that, everything became simple: in the attributes of the element to be resized, the custom properties specify the dimensions of the element without units of measurement:

```html
<iframe
    width="560" height="315"
    style="--width: 560; --height: 315;"
    class="video"
    ...
></iframe>
```

And a bit of math is added to CSS using these properties:

```css
.video {
  /* Находим соотношение сторон */
  --index: calc(var(--height) / var(--width));
  /* Добавляем пиксели к высоте */
  --height-with-units: calc(var(--height) * 1px);

  /* Запрещаем фрейму растягиваться шире родителя */
  max-width: 100%;

  /* Выбираем минимальное значение из исходной высоты
    и вычисленной на основе ширины вьюпорта  */
  height: min(calc(100vw * var(--index)), var(--height-with-units));
}
```

<div class="resizable resizable--x"><p class="codepen" data-height="550" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="oNxmgYq" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Adaptive video with custom properties &amp;amp; without padding">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/oNxmgYq">
  Adaptive video with custom properties &amp; without padding</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script></div>

Compress the demo to see how it works, or open it in [a separate tab](https://codepen.io/yoksel/pen/oNxmgYq?editors=0100) and try it there.

When the frame reaches the edges of the window and starts to shrink with it, the width of the frame will be equal to the width of the viewport (`100vw`), so it can be used to calculate the height. The height obtained in this way will be less than the original one, and it will be selected in `min()`. When the window is stretched, the height calculated based on the viewport width will become greater than the original frame height. Therefore, the original height will be selected in `min()`, and the frame will not stretch beyond the original height.

The frame width may not always be equal to the window width, and in some cases, it may be necessary to change `100vw` to a different value. For example, in the demo, the width of the video will be `calc(100vw - 2rem)`, but this is not taken into account in the calculations, and I didn't correct it so as not to complicate the understanding of the logic in `min()`.

It should also be noted that when using preprocessors, they will try to calculate `min()` internally, but will not be able to do so due to incompatible units. You can read about the problem in Ana Tudor's article [When Sass and New CSS Features Collide](https://css-tricks.com/when-sass-and-new-css-features-collide/). For SCSS to ignore `min()`, it is enough to capitalize the function name: `Min(...)` (as done in the demo code). In Less, it should be enclosed in quotation marks: `~"min(...)"`.

It would be great not to duplicate the dimensions in custom properties, but to take them from the attributes. However, at the moment, this is not supported [by any browser](https://caniuse.com/mdn-css_types_attr_type-or-unit), although [aspect-ratio](https://drafts.csswg.org/css-sizing-4/#ratios) is supposed to use the dimension values from the width and height attributes.

One day, a bright future will dawn, and we'll have `aspect-ratio` and the smart `attr()` function. But even now, you can calculate the aspect ratios of frames and videos using custom properties and mathematical functions built into CSS. They work in [most modern browsers](https://caniuse.com/css-math-functions). To support older browsers, you'll still have to use the padding or JS method.

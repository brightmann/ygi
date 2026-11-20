---
title: Blend modes and their fallbacks

tags: [blend-modes]

image: //img-fotki.yandex.ru/get/4805/5091629.a1/0_855c2_8fe321a9_M.jpg
description: "Not long ago Firefox 32 enabled support for mix-blend-mode, and Chrome 37 got CSS shapes. Both technologies look very interesting, so I decided to try them in action, and find out how the page will look in browsers where they are not supported."

links:
- href: http://dev.w3.org/fxtf/compositing-1
  text: Compositing and Blending Level 1
- href: http://caniuse.com/#feat=css-backgroundblendmode
  text: background-blend-mode
- href: http://caniuse.com/#feat=css-mixblendmode
  text: mix-blend-mode
- href: http://dev.w3.org/csswg/css-shapes/
  text: CSS Shapes Module Level 1
- href: http://caniuse.com/#feat=css-shapes
  text: CSS Shapes
- href: http://www.w3.org/TR/SVG/filters.html
  text: SVG Filter Effects
- href: http://caniuse.com/#feat=svg-filters
  text: SVG filters
- href: /background-blend-mode/
  text: Background-blend-mode
- href: /css-and-svg-masks
  text: CSS and SVG masks
- href: /svg-in-ie8
  text: Rakes on pure SVG

---
Not long ago <a href="https://developer.mozilla.org/en-US/Firefox/Releases/32">Firefox 32</a> enabled support for <code>mix-blend-mode</code>, and <a href="http://www.chromestatus.com/features/5163890719588352">Chrome 37</a> got <a href="http://dev.w3.org/csswg/css-shapes/">CSS shapes</a> — the ability to control the shape along which text wraps around an element. Both technologies look very interesting, so I decided to try them in action, and find out how the page will look in browsers where they are not supported.

<!--more-->
While this article was being written, Safari updated to version 7.1, and it also gained support for blend modes. Thus, the background layer blend mode already has <a href="http://caniuse.com/#feat=css-backgroundblendmode">quite decent browser support</a>; things are <a href="http://caniuse.com/#feat=css-mixblendmode">somewhat worse</a> with blending page elements on top of each other, but I'm sure it's all ahead of them.
Also, CSS shapes became available in Safari 7.1, albeit with the <code>-webkit-</code> prefix.

Good articles in English have already been published on both topics, for example:

<ul>
  <li><a href="http://alistapart.com/article/css-shapes-101">CSS Shapes 101</a></li>
  <li><a href="http://alistapart.com/blog/post/moving-forward-with-css-shapes">Moving Forward with CSS Shapes</a></li>
  <li><a href="http://www.html5rocks.com/en/tutorials/shapes/getting-started/">Getting Started with CSS Shapes</a></li>
  <li><a href="https://dev.opera.com/articles/getting-to-know-css-blend-modes/">Getting to Know CSS Blend Modes</a></li>
</ul>

For deeper study there are the specifications:
<ul>
  <li><a href="http://dev.w3.org/fxtf/compositing-1/">Compositing and Blending Level 1</a></li>
  <li><a href="http://dev.w3.org/csswg/css-shapes/">CSS Shapes Module Level 1</a></li>
</ul>

Right now I won't examine both technologies in detail (because those are separate big topics), and will only talk about a small experiment and about what can be done for graceful degradation in old browsers.

To start with, I opened a new Chrome and made this:

<p data-height="500" data-theme-id="4974" data-slug-hash="KCibG" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/KCibG/'>KCibG</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<a href="https://codepen.io/yoksel/full/KCibG/">View full size</a>.

The demo uses <code>mix-blend-mode</code> and <code>shape-outside</code>. The blend mode <code>mix-blend-mode: multiply;</code> is set on the whole container with text and images, and each image has its own <code>shape-outside</code>.

It displays fully only in Safari 7.1, which supports both blend modes and CSS shapes, but shapes work with the <code>-webkit-</code> prefix for now.

It will also work in the latest Chrome/Opera with experimental features enabled (they support CSS shapes, but <code>mix-blend-mode</code> is still behind a flag and has to be enabled separately).

To enable in Chrome:
<code>chrome://flags/#enable-experimental-web-platform-features</code>

In Opera:
<code>opera://flags/#enable-experimental-web-platform-features</code>

In Safari and Chrome/Opera with the flags the demo looks like this:

<img src="//img-fotki.yandex.ru/get/4805/5091629.a1/0_855c2_8fe321a9_M.jpg"/>

 To see the shapes not working, it's enough to open the demo in Firefox:

<img src="//img-fotki.yandex.ru/get/6836/5091629.a1/0_855c4_79b5ff4_M.jpg"/>

 and to see the blend modes not working — Internet Explorer:

<img src="//img-fotki.yandex.ru/get/4803/5091629.a1/0_855c3_f9ded859_M.jpg"/>

If you need the shapes to work everywhere, you can use a polyfill: <a href="https://github.com/adobe-webplatform/css-shapes-polyfill">css-shapes-polyfill</a>, but keep in mind that it may put additional load on the browser. At the same time, in browsers without CSS shape support nothing really breaks — the text just wraps around the images along a rectangular contour instead of a curve.

Firefox can be left as is, but something has to be done about IE: the white background of the images and the white in the heading shadows don't look great. The simplest option is to add a white backdrop to the text block:


```css
.l-wrapper {
  ...
  padding: 40px 70px; /* добавляем отступы */
  background: #FFF;  /* добавляем фон */
  ...
}
```

I really wanted to use <code>@supports</code> to remove the padding in browsers with blend mode support, but <code>@supports</code> <a href="http://caniuse.com/#feat=css-featurequeries">doesn't work in Safari</a>.

Then it occurred to me that white margins can be made without creating padding, for example like this:


```css
.l-wrapper {
  ...
  background: #FFF;  /* добавляем фон */
  box-shadow: 0 0 0 60px #FFF /* добавляем поля */
  ...
}
```

Result: <a href="https://codepen.io/yoksel/full/AJKEh/">codepen.io/yoksel/full/AJKEh/</a>

In browsers with blend mode support nothing changed, and in IE a white background appeared:

<img src="//img-fotki.yandex.ru/get/4800/5091629.a1/0_855cb_3998ac74_M.jpg"/>

In advanced browsers there will be no background under the text, because with the <code>multiply</code> blend mode white disappears.

I like the background approach, but right now it turns out the demo may look different in different browsers, and we can try to do better, for example using SVG.

SVG filters have blend modes. There are fewer of them than in CSS, but among them is the <code>multiply</code> we need.

Creating the filter:

```html
<svg class="svg-defs">
  <filter id="multiply" x="0" y="0">
    <!-- задаем картинку фона для фильтра -->
    <feImage id="bgimage" result="bgimage" x="0" y="0" width="300" height="206" xlink:href="//img-fotki.yandex.ru/get/6846/5091629.a1/0_8558d_406830d_M"></feImage>
    <!-- задаем повторение фона -->
    <feTile in="bgimage"></feTile>
    <!-- накладываем картинку, к которой применен фильтр,
    на предыдущий фон с режимом multiply -->
    <feBlend mode="multiply" in2="SourceGraphic"/>
  </filter>
</svg>
```

<i>It would be much more convenient to set the blend mode of the source image onto the underlying page layers, rather than onto an image specified in the filter (here it's <code>feImage</code>). For this, SVG provides the ability to specify <code>BackgroundImage</code> as one of a filter's sources — in essence, it's a screenshot of the screen under the filter's area of effect. <code>BackgroundImage</code> would let us make the filter much shorter:</i>

```html
<svg class="svg-defs">
  <filter id="multiply" x="0" y="0">
    <feBlend mode="multiply" in2="BackgroundImage" in="SourceGraphic"/>
  </filter>
</svg>
```

<i>Unfortunately, at the time of writing <code>BackgroundImage</code> doesn't work in filters.</i>

For filters to work everywhere, the images they apply to also have to be wrapped in SVG. Approximate code:

```html
<svg class="pic pic--dragon" viewBox="0 0 300 161">
  <image xlink:href="//img-fotki.yandex.ru/get/6840/5091629.a1/0_855a9_b872dbe5_M" width="100%" height="100%"
    filter="url(#multiply)"/>
</svg>
```

SVG elements absolutely need dimensions set, which can be done with CSS.

White remained in the heading's shadows. With a fairly uniform background (as in this example) you can replace white with a more suitable shade; with a colorful one that won't work, and you'll have to invent something else.

The result:

<p data-height="500" data-theme-id="4974" data-slug-hash="wavqm" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/wavqm/'>Blend and shapes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

SVG filters for SVG elements work in all modern browsers, in IE starting with version <nobr>10</nobr>. Filters would be a great solution if not for some nuances:

1. Some browsers don't understand SVG at all (IE8 and older, for example). For them, the SVG elements will need raster images set as backgrounds.
2. SVG filters <a href="http://caniuse.com/#feat=svg-filters">don't work in IE9</a>. It will need to be detected somehow so that a white backdrop can be set for it and for older IE versions.
3. When filters are used, the background under the image resizes together with the image. That is, the image is glued to the background with the given blend mode applied, and further manipulations are done with this new composite.
4. With significant resizing of a filtered image, one-pixel stripes may appear between the background "tiles".

An example for problems #3 and #4 (try stretching the browser window):

<p data-height="500" data-theme-id="4974" data-slug-hash="gocDK" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/gocDK/'>Resizing image with SVG-filter</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

On backgrounds with a sharp pattern the mismatch and "smearing" of the background will be very noticeable.

If the source image has white margins, you can try using an SVG mask. For this, a copy of the image is made where the white margins are made transparent or filled black, while the part of the image that should be shown is fully white. The image for the knight looks like this:

<img src="//img-fotki.yandex.ru/get/4509/5091629.a2/0_85a64_94d6d625_M">

The mask code:

```html
<mask id="mask">
  <image xlink:href="//img-fotki.yandex.ru/get/4509/5091629.a2/0_85a64_94d6d625_M" width="203" height="300"/>
</mask>
```

The result of applying it:

<p data-height="500" data-theme-id="4974" data-slug-hash="AblID" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/AblID/'>Resizing image with SVG-filter</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The glued-on background remains only under the knight, the space around the figure is fully transparent, and the page background shows through it. I admit that for some backgrounds the mask approach will do quite well.

The mask-and-filters approach lets you get blend modes in IE10+ and may work if the blend mode you need exists in SVG. True, this approach is notable for rather cumbersome constructs. I would prefer a pure CSS option, but it's possible that the SVG approach will turn out more suitable in some situations.

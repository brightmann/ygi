---
title: SVG styling options

tags: [svg]

image: "//img-fotki.yandex.ru/get/9093/5091629.9d/0_814d9_aa20df1f_L.jpg"
description: "The appearance of SVG elements can be specified both using CSS and using SVG filters, gradients and patterns - they can be assigned to elements directly in the code or also specified via CSS. Styles and scripts can be set inside the SVG file, but if we want the same image to look different in different conditions, styles inside the file are not suitable - we need the vector content to be available for external styles"
links:
- href: "http://tympanus.net/codrops/2013/11/27/svg-icons-ftw/"
  text: SVG icons FTW
- href: "http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters"
  text: SVG filters
- href: "http://www.w3.org/TR/SVG11/filters.html"
  text: Filter Effects
- href: "/svg-fill-and-stroke"
  text: "SVG: fill and stroke"
- href: "/svg-icons"
  text: "SVG icons"
---

The appearance of SVG elements can be specified both using CSS and using SVG filters, gradients and patterns - they can be assigned to elements directly in the code or also specified via CSS.

Styles and scripts can be set inside the SVG file, but if we want the same image to look different in different conditions, styles inside the file are not suitable - we need the vector content to be available for external styles.<!--more-->

Of all the ways to insert SVG, only two are suitable for this: an icon font or inline SVG in HTML (the most convenient way to do this is via <code>use</code>).

What design styles can be used for icon fonts?
You can set the color, add shadows and animation:

<p data-height="250" data-theme-id="4974" data-slug-hash="LnJEK" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/LnJEK/'>LnJEK</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Not so much compared to the capabilities of regular SVG.

For SVG images, you can use SVG gradients and filters such as blurs or shadows. You can also use patterns and images as strokes and fills, and you can also paint individual parts of pictures and thus get multi-colored icons.

When you insert SVG via <code>use</code>, icons become available for page styling, and all of this great functionality can be controlled through external CSS.

Here is an example of icons with patterns as the background:

<p data-height="550" data-theme-id="4974" data-slug-hash="mfdIE" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/mfdIE/'>SVG icons with patterns</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The example is a little wild, but it shows well that any picture can be the background. Patterns are specified in the page code and connected using CSS.

Here is the code for the wooden pattern:

```html
<!-- Нужно задать размеры и Id, по которому будет вызываться паттерн -->
<pattern id="wood" width="400" height="400"
  patternUnits="userSpaceOnUse">
  <!-- Внутрь вставляется картинка для фона -->
  <image xlink:href="//img-fotki.yandex.ru/get/6447/5091629.86/0_74298_17a84446_L.jpg"
  width="400" height="400">
</pattern>
```

You can put anything into a pattern: combinations of shapes, objects with gradients, text... True, there is a suspicion that complex backgrounds can have a bad effect on page performance, but I haven’t done any tests.

Connecting the pattern:

```css
.icons--wood {
  fill: url(#wood);
}
```

To swap the stroke and fill when hovering, you need to add a couple more lines:

```css
.icons--wood {
  fill: url(#wood);
}
.icons--wood .icon:hover {
  fill: none;
  stroke: url(#wood);
}
```

You can also create interesting stroke-based effects:

<p data-height="600" data-theme-id="4974" data-slug-hash="cmslA" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/cmslA/'>SVG Icons with outlines</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The strokes can be dotted, you can use a gradient or a pattern for them.


```css
/* Обычная обводка, по наведению меняет цвет */
.icons--stroke .icon {
  stroke: rgba(0, 0, 0, .5);
  stroke-width: 2;

  &:hover {
    stroke: skyblue;
  }
}

/* Пунктирная обводка, по наведению линия становится непрерывной */
.icons--dasharray .icon {
  stroke: rgba(0, 0, 0, .5);
  stroke-width: 2;
  stroke-dasharray: 10 5;
  fill: rgba(0, 0, 0, .1);

  &:hover {
    stroke-dasharray: 10 0;
  }
}

/* Обводка с градиентом */
.icons--gradient .icon {
  stroke-width: 3;
  stroke: url(#stripes);
}
```

The icons in the last line are given a gradient as an outline that goes into transparency; for some reason it doesn’t work in the latest opera.

You can do interesting things with dotted stroke animation:

<p data-height="320" data-theme-id="4974" data-slug-hash="blKmc" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/blKmc/'>A little magic with stroke-dasharray</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<i>Click Rerun if the demo is frozen.</i>

I'm not sure if this animation is suitable for icons (it won't be very good if the icons move or disappear), but it can be used for illustrations that appear effectively.

Example code:

```css
path {
  fill: none;
  /* В качестве обводки задан градиент */
  stroke: url(#stripes);
  stroke-width: 2;
  /* Исходное состояние обводки — длинные черточки с нулевыми пробелами */
  stroke-dasharray: 550 0;
  animation: dasharray 5s infinite alternate;
}

@keyframes dasharray {
  100% {
  	/* Черточки нулевой длины с длинными пробелами, линиия исчезнет */
    stroke-dasharray: 0 500;
  }
}
```

The following example demonstrates icons with SVG filters:

<p data-height="550" data-theme-id="4974" data-slug-hash="kszeJ" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/kszeJ/'>SVG Icons with filters</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Blur, shadow, repeating path and inner shadow (it's not very visible).

Of course, blur is unlikely to be suitable for icons, but you can come up with various other interesting things with it.

Filters have a drawback: the result of applying filters is a raster image, which is why pictures lose the ability to stretch without loss of quality and look worse on retina screens.

<b>UPD May 19, 2014:</b> Filters look good on retina, provided that they are set to SVG elements and not HTML. I apologize for the inaccuracy.

In the example below, the SVG image is split into multiple paths, making it possible to access them individually. Here it is used to give elements different colors and animation delays. In this case, in the future, the figure (in this case, a group of paths) can be used as a whole - this way you can get not only monochrome icons, but also multi-colored ones. True, when such an object is inserted via <code>use</code>, the animation will stop working in it, but the coloring will remain the same.

<p data-height="400" data-theme-id="4974" data-slug-hash="DixKv" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/DixKv/'>Path, nth-child and stroke-dasharray</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

It is convenient to use <code>currentColor</code> as a fill (or stroke) of SVG elements. This is a keyword indicating the current color of the text, and if you set it as a fill (stroke), the element will be painted along with the surrounding text.

Set the fill:


```css
.icon {
  fill: currentColor;
}
```

If you then set the text color for the parent element


```css
A {
  color: crimson;
}
```

 the figure will be filled with the same color. Very useful for hover links and for pages with multiple themes.

Example:

<p data-height="500" data-theme-id="4974" data-slug-hash="xiLen" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/xiLen/'>SVG and currentColor</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

It’s interesting that not all CSS properties can be used in SVG; a relatively complete list <a href="http://www.w3.org/TR/SVG11/styling.html#SVGStylingProperties">can be found here</a>.
You can use <code>animation</code>, but <code>transition</code> works weird and not in all browsers. Unfortunately, you cannot use CSS gradients. Transformations work.

Also, before using various filters and effects, you should always check how they are supported in different browsers.

From all of the above, the following conclusions can be drawn:

- inline SVG provides the widest possibilities for design;
- fewer features, but an icon font provides a more convenient connection to the page. A significant disadvantage is the problems with supporting embedded fonts in different browsers;
- if SVG graphics are needed only in one style and there is no need to control through external CSS, it is best to use a sprite.

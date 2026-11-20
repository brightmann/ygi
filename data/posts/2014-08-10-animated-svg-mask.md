---
title: Animated SVG masks

tags: [svg, animation, patterns]

image: //img-fotki.yandex.ru/get/6733/5091629.a1/0_84885_3d02703a_orig
description: In the last article, I looked at the weirdness of SVG strokes, as well as the ability to make animated masks. Since transformations in masks do not animate in Firefox (version 31 at the time of writing), I continued experimenting with strokes.

links:
- href: /css-animation/
  text: Css Animation
- href: /css-and-svg-masks/
  text: CSS and SVG masks
- href: /svg-stroke/
  text: SVG stroke oddities
- href: /pages/svg-links/
  text: 'SVG: useful links'
---

In <a href="/svg-stroke">last article</a> I looked at the weirdness of SVG strokes, as well as the possibility of making animated masks.

Since transformations in masks do not animate in Firefox (version 31 at the time of writing), I continued experimenting with strokes. <!--more-->

<div class="post__warning">The post contains a lot of demos with animation, the page may slow down on weak devices.</div>

With strokes you can to some extent imitate transformations in masks, and thus get many different interesting effects.

Example of a simple mask:

<p data-height="400" data-theme-id="4974" data-slug-hash="hatEx" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/hatEx/'>hatEx</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

How is it structured?

SVG:

```html
<mask id="m-lines">
  <line x1="0" y1="0" x2="100%" y2="100%" class="elem-mask"/>
  <line x1="0" y1="100%" x2="100%" y2="0%" class="elem-mask"/>
</mask>
```

There are two lines inside. I didn't use <code>path</code> because it can't be given percentage coordinates.

CSS for lines:

```css
$mask-time: 7s;

.elem-mask {
  stroke: #FFF;
  stroke-width: 0;
  animation: stroke-width $mask-time infinite;
}

@keyframes stroke-width {
  50% {
      stroke-width: 300;
  }
}
```

In the initial state, the lines are not visible because <code>stroke-width: 0</code>. In order for the strokes to serve as the visible area of ​​the mask during the animation, they are given a white color <code>stroke: #FFF</code>. An animation is also set that increases the frame thickness to 300.

If you pull the mask out, it will look like this:

<p data-height="400" data-theme-id="4974" data-slug-hash="CbDFK" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/CbDFK/'>CbDFK</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Only what falls under the white areas is displayed. The lines are enlarged by the stroke and show the content below them.

A mask is applied to a shape using the <code>mask="url(#m-line)"</code> attribute or via CSS: <code>mask: url(#m-line);</code>

Understanding the principle of operation of such a mask, you can make many other options.

Simple unfolding from the center:

<p data-height="400" data-theme-id="4974" data-slug-hash="sktnE" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/sktnE/'>Simple animated mask in SVG</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

And at an angle:

<p data-height="400" data-theme-id="4974" data-slug-hash="IBxJt" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/IBxJt/'>Simple animated mask in SVG</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Using patterns allows you to make patterned masks.

Cells:

<p data-height="400" data-theme-id="4974" data-slug-hash="xAybm" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/xAybm/'>Simple animated mask in SVG</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Diamonds:

<p data-height="400" data-theme-id="4974" data-slug-hash="cHFJw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/cHFJw/'>Simple animated mask in SVG</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Patterns allow you to achieve an interesting result with a minimum of shapes, but you can make it even more interesting if you define several shapes inside a mask and animate them separately.

<p data-height="400" data-theme-id="4974" data-slug-hash="dCFrG" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/dCFrG/'>Simple animated mask in SVG (shutter)</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

In this case, the paths in the mask do not necessarily have to be straight lines:

<p data-height="400" data-theme-id="4974" data-slug-hash="cxkDi" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/cxkDi/'>Simple animated mask in SVG (wavy shutter)</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

And in general, these do not necessarily have to be lines:

<p data-height="400" data-theme-id="4974" data-slug-hash="HvLzE" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/HvLzE/'>Simple animated mask in SVG (wavy shutter)</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Besides the benefits, animated SVG masks have some problems. They are connected not so much with masks, but with animation. First, SVG element animations are not supported in IE. The second problem is performance. As far as I know, SVG element animations are not currently optimized by browsers, so it makes sense to use animated SVG sparingly and carefully.

I have not had to use such masks for practical purposes, but I assume that with their help it will be possible to create spectacular sliders and photo galleries.

Patterns <a href="http://www.colourlovers.com/lover/yoksel">from here</a>.

---
title: SVG stroke oddities

tags: [svg]

image: //img-fotki.yandex.ru/get/6741/5091629.a1/0_84606_4e6f483e_orig
description: Fun adventures of the SVG stroke-width property, as well as a somewhat strange way to make cross-browser animation of masks.

links:
- href: http://www.w3.org/TR/SVG/masking.html
  text: Clipping, Masking and Compositing
- href: http://www.w3.org/TR/SVG/painting.html#StrokeProperties
  text: Stroke Properties
- href: /css-and-svg-masks/
  text: CSS and SVG masks
- href: /svg-shapes/
  text: SVG Shapes and Transformations
---

Experimenting with SVG you can find many strange things. Getting strange things when manipulating with scaling is still somewhat expected, but suddenly the <code>stroke-width</code> property brought surprises.

<!--more-->

<code>stroke-width</code> sets the stroke width for the shape. If in HTML the frame is drawn from the outer edge into the shape and increases its size (which can be corrected using <code>box-sizing</code>), then in SVG the outline behaves differently: firstly, it does not stretch the shape, and secondly, it is drawn both inward and outward relative to the outer edge of the shape.

To see how this works, let's take a couple of simple shapes:

<p data-height="400" data-theme-id="4974" data-slug-hash="rKpFk" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rKpFk/'>rKpFk</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

A circle with a diameter of 60px, a square - 60x60px.

Using CSS, add a frame to the shapes:

```css
stroke: yellowgreen;
stroke-width: 30;
stroke-opacity: .5;
```

The frame is green, 30 pixels thick. To see how it overlaps the shape, the frame is set to semi-transparent (<code>stroke-opacity: .5</code>).

Result:

<p data-height="400" data-theme-id="4974" data-slug-hash="omKIc" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/omKIc/'>omKIc</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Obviously, the frame is drawn from the outer edge of the figure in both directions: both inward and outward.
<!-- The width of the shape with the border is now 90px: 60px original width + the thickness of the border divided by 2 (because half of the border is drawn inward) * 2 (the border is added on both sides). That is, 60 + 30 / 2 * 2. -->

A regular frame behaves quite clearly and predictably, but the fun begins if you specify a frame that is more than twice the width of the figure. The greater the difference, the more interesting the result.
To make it clearly visible, I set the frame to three times the width (60 * 3 = 180):

<p data-height="400" data-theme-id="4974" data-slug-hash="AkaKc" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/AkaKc/'>AkaKc</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The square with the frame is fine, but something strange happens with the circle: if the thickness of the outline is more than two or three times the width of the figure, white fields form between the circle and the frame, and the thickness of the frame decreases.

The greater the difference between the values, the larger the white margins and the thinner the frame (radius 10, stroke thickness 200):

<p data-height="400" data-theme-id="4974" data-slug-hash="FLrqa" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/FLrqa/'>SVG: r=10 + stroke-width=150</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Not at all what I would like to receive.

An even more interesting result is obtained if you add the <code>stroke-dasharray</code> property.

Frame code:

```css
stroke-width: 180;
stroke: yellowgreen;
stroke-opacity: .5;
stroke-dasharray: 5;
```

Result:

<p data-height="400" data-theme-id="4974" data-slug-hash="vDpqg" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/vDpqg/'>vDpqg</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

It looks as if the frame reaches the middle of the figure and continues to be drawn from there.

All this seems to hint to us that the thickness of the frame should not be more than twice the width or diameter of the figure, although you can do the opposite: set very large values ​​and get interesting ray options.

I think it’s rare for anyone to think of giving a stroke an exorbitant width, but I discovered this strange behavior when I wanted to do just that: take a small circle and give it a large border, thereby increasing its size.

Why might this be necessary?

Suppose there is a round mask and a picture under it:

```html
<svg>
  <mask id="mask">
    <circle r="100" cx="100" cy="100"
      class="c-mask-circle"/>
  </mask>

  <g mask="url(#mask)">
    <image
      xlink:href="http://colourlovers.com.s3.amazonaws.com/images/patterns/2693/2693008.png"
      width="100%" height="100%"/>
  </g>
</svg>
```

<p data-height="400" data-theme-id="4974" data-slug-hash="mpvhb" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/mpvhb/'>mpvhb</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

I want to animate the mask so that it expands and contracts proportionally relative to the center of the image. The first thing that comes to mind, of course, is <code>transform</code>. Animation code:

```css
@keyframes scale {
  50% {
    transform: scale(10);
  }
}
```

Connecting animation:

```css
.c-mask-circle {
  fill: white;
  animation: scale 5s infinite;
}
```

<p data-height="400" data-theme-id="4974" data-slug-hash="dKrft" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/dKrft/'>dKrft</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Since the center of the transformation in SVG is in the upper left corner of the rendering area, the shape does not move at all as we would like. We set the transformation center that we need:

```css
transform-origin: 100px 100px;
```

And all together:

```css
.c-mask-circle {
  fill: white;
  transform-origin: 100px 100px;
  animation: scale 5s infinite;
}

@keyframes scale {
  50% {
    transform: scale(10);
  }
}
```

Result:

<p data-height="400" data-theme-id="4974" data-slug-hash="fKqAI" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/fKqAI/'>fKqAI</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

In Chrome, the animation will work as intended, with the mask growing from the center and then decreasing in the opposite direction. It won't work in Firefox at all: Firefox doesn't animate transformations inside masks.

The transformation method doesn't work. What other options are there? In this case, you can try to animate the thickness of the stroke.

Why will this work?

A small lyrical digression: unlike <code>clipPath</code>, which crops a shape along a vector path, ignoring the fills and strokes of the path, all of its graphic contents take part in the operation of the mask.

For example, let's take a circle with a stroke and use it in <code>mask</code> and <code>clipPath</code>:

<p data-height="400" data-theme-id="4974" data-slug-hash="ouLIh" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ouLIh/'>ouLIh</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

For shapes inside <code>clipPath</code>, you could try animating <code>transform</code>, but they don't animate in Firefox either. Thus, we only have masks and stroke manipulations at our disposal. End of lyrical digression.

Using strokes, I try to repeat the behavior of the mask, increasing proportionally relative to the center. For these purposes, I take a mask with a small circle inside:

```html
<mask id="mask">
  <circle r="10" cx="100" cy="100"
    class="c-mask-circle"/>
</mask>
```

I give it a white fill and add a stroke:

```css
.c-mask-circle {
  fill: white;
  stroke: white;
  stroke-width: 1;
}
```

Adding stroke thickness animation:

```css
@keyframes stroke-width {
  50% {
    stroke-width: 170;
  }
}
```

All final code:

```css
.c-mask-circle {
  fill: white;
  stroke: white;
  stroke-width: 1;
  animation: stroke-width 5s infinite;
}

@keyframes stroke-width {
  50% {
    stroke-width: 170;
  }
}
```

Result:

<p data-height="400" data-theme-id="4974" data-slug-hash="oebyE" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/oebyE/'>oebyE</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Unlike the <code>transform</code> method, the stroke animates beautifully in Firefox, and this could be used if not for the stroke thickness limitation described above.

So, on the one hand, setting a thick border for a small element seems like a strange idea, on the other hand, this could be used for practical purposes, so it’s a pity that <code>stroke-width</code> is not rendered as we would like.

What adds some piquancy is the fact that in Firefox, the stroke animation in a mask gives exactly the desired result: the mask grows from the center to the edges without any gaps between the figure and the stroke - the figure turns out to be solid.

Safari behaves even more interestingly: in it the mask figure is solid, but the result of applying the mask to the picture has gaps.

Thus, if you want to get an animated mask, you can combine the <code>transform</code> animation for Chrome (and other webkittens) with the <code>stroke-width</code> animation for Firefox, for example: like this:

<p data-height="420" data-theme-id="4974" data-slug-hash="LBIfx" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/LBIfx/'>Animated mask for Firefox and webkittens</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The method is strange, but it works.

However, both animations will not work in IE, because it does not support animations in SVG at all.

By animating <code>stroke-width</code> in a mask, you can do various other interesting things, but this is a topic for a separate post.

Browser versions at the time of writing: Chrome 36, Firefox 31, Safari 7, Opera 23, IE 11.

Picture with peonies <a href="http://www.colourlovers.com/pattern/2693008/Amethyst_peonies">from here</a>.

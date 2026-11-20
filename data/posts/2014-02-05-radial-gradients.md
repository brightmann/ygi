---
title:  Radial Gradients

tags: [gradients, draw-on-css]

image: //img-fotki.yandex.ru/get/9322/5091629.9b/0_7ee9c_26f15295_L.png
description: Radial gradients work differently than linear gradients. If linear colors are located perpendicular to the line that sets the direction, then in radial colors diverge from a given center, and the gradient can take the shape of a circle or ellipse.

links:
- href: http://www.colorzilla.com/gradient-editor/
  text: Ultimate CSS Gradient Generator
- href: http://leaverou.github.io/css-colors/
  text: leaverou.github.io/css-colors
- href: http://www.webdirections.org/resources/lea-verou-mastering-css3-gradients/
  text: Presentation about gradients by Lea Verou
- href: /tsveta
  text: Colors in Css
- href: /3d-and-gradients/
  text: CSS gradients and 3D
---

Radial gradients are rendered differently than linear ones. If linear colors are located perpendicular to the line that sets the direction, then in radial colors diverge from a given center, and the gradient can take the shape of a circle or ellipse.

Specification: <a href="http://www.w3.org/TR/css3-images/#radial-gradients">w3.org/TR/css3-images/#radial-gradients</a>.<!--more-->

<h2 id="radial-gradient">radial-gradient</h2>

For the simplest gradient, it is enough to set only the colors:

```css
background: radial-gradient(gold, orangered);
```

By default, the center of the gradient is in the center, the gradient has the shape of an ellipse:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/radial-gradients/demo_1.html?output"></iframe>

In addition to colors, you can set the gradient's shape, position, and size. The parameters are combined and behave more complexly than in linear gradients.

<h2 id="shape">Gradient shape</h2>

The shape (the final shape of the gradient) can be a circle or an ellipse. The default is an ellipse, the gradient tends to take up all the free space of the element, stretching out if necessary.

For the gradient to have the shape of a circle, this must be set explicitly using the <code>circle</code> keyword.

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/radial-gradients/demo_2.html?output"></iframe>

If the shape is not specified, but the size is specified, one value specifies the radius of the circle; if there are two values, the gradient takes the shape of an ellipse.
If dimensions are present, explicitly specifying the gradient shape is ignored.

<h2 id="center">Gradient center</h2>

To set the center of the gradient, the same keywords are used as for a linear gradient, but with the <code>at</code> prefix: <code>at top</code>, <code>at right</code>, <code>at bottom</code>, <code>at left</code> and <code>at center</code> - the default value.

They can also be combined to position the gradient on a given side, for example: <code>at right top</code> - in the upper right corner.

Below you can see how the different center positions work:

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/radial-gradients/demo_3.html?output"></iframe>

First square code:

```css
background: radial-gradient(at top left, purple, crimson, orangered, gold);
```

You can also specify the exact position of the gradient, for example <code>at 20% 50%</code> or <code>at 10px 150px</code>.

<h2 id="size">Gradient size</h2>

You can set the dimensions of the final gradient shape. For elliptical gradients, values ​​can be specified as percentages; for circular gradients, they cannot be specified.

If one value is specified, it is considered the radius of the circular gradient.
If two values ​​are specified, the first is considered the horizontal radius of the ellipse, the second is considered the vertical radius.

Below are examples of circular and elliptical gradients. The shape of the figure is determined by the given dimensions:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/radial-gradients/demo_4.html?output"></iframe>

You can also use keywords:

<code>closest-side</code> - the gradient ends at the border of the element closest to the center of the gradient. If it's an ellipse, the gradient touches all the borders of the element.

<code>farthest-side</code> - the gradient ends at the far border of the element. If it's an ellipse, the gradient touches all the borders of the element.

<code>closest-corner</code> - The final shape is stretched so that it passes through the corner of the element closest to the center of the gradient. If the final shape is an ellipse, the gradient is stretched across the entire shape.
With this parameter, the gradient fills the entire shape, partially extending beyond its boundaries.

<code>farthest-corner</code> - similar to <code>closest-corner</code>, only the end shape goes through the corner farthest from the center of the gradient. Default value.

Added a <code>at bottom</code> position to some gradients to make the action of the code easier to see:

<iframe class="live-snippet" style="height: 700px" src="../assets/demo/radial-gradients/demo_5.html?output"></iframe>

<h2 id="repeating-radial-gradient">repeating-radial-gradient</h2>

A radial gradient can also be repeated. Example code:

```css
background: repeating-radial-gradient(circle,
  darkkhaki, darkkhaki .5em,
  transparent .5em, transparent 1.5em);
```

<iframe class="live-snippet" style="height: 320px" src="../assets/demo/radial-gradients/demo_6.html?output"></iframe>

As with a linear gradient, a repeating gradient doesn't render very neatly.

<b>Upd. from 07/03/20:</b>At the moment, repeating gradients will be drawn correctly in most browsers.

By combining several backgrounds with different parameters you can get amazing things:

<p data-height="350" data-theme-id="0" data-slug-hash="lxrhg" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/lxrhg'>Rounds</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="0" data-slug-hash="ijxKy" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ijxKy'>Circles</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

If you use relative units (<code>em</code>, <code>%</code>) rather than absolute units (<code>px</code>) when creating patterns, the size of the resulting patterns can then be easily adjusted by changing only the font size.

If you are interested in the pattern code, I would advise you to try to repeat the pattern without looking at the source code, it is useful :)

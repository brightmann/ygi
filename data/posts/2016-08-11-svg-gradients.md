---
title: SVG gradients

image: https://img-fotki.yandex.ru/get/60436/5091629.a4/0_90849_6897689d_orig
description: 'The usual CSS backgrounds do not work in SVG; there are special designs for fills. For gradients, these are linearGradient and radialGradient elements - linear and radial gradients, respectively.'

tags: [svg, gradients]
---

The usual CSS backgrounds do not work in SVG; there are constructions for fills: for gradients these are the elements <code>linearGradient</code> and <code>radialGradient</code> - linear and radial gradients, respectively.<!--more-->

Specification: <a href="https://www.w3.org/TR/SVG/pservers.html#Gradients">w3.org/TR/SVG/pservers.html#Gradients</a>

CSS gradients are declared directly in the CSS code, and the gradient code itself cannot be reused later. SVG gradients work differently: before use, the gradient must be described using the appropriate tag, and after that it can be reused as many times as desired. And even more: gradients can inherit each other’s properties (this will be discussed below).

The code for the simplest gradient looks like this:

```html
<linearGradient id="linear-gradient">
  <stop offset="0%" stop-color="gold"/>
  <stop offset="100%" stop-color="teal"/>
</linearGradient>
```

A required attribute of any gradient is <code>id</code>.

The gradient does not appear on the page until it is applied to an element. Just like a regular fill or stroke, a gradient is specified using <code>fill</code> or <code>stroke</code> - an element attribute or via CSS.

Apply a gradient to the shape:

```html
<svg>
  <!-- Градиент -->
  <linearGradient id="linear-gradient">
  <stop offset="0%" stop-color="gold"/>
  <stop offset="100%" stop-color="teal"/>
  </linearGradient>

  <!-- Фигура с градиентной заливкой -->
  <rect fill="url(#linear-gradient)"
    width="100%" height="100%"/>
</svg>
```

In action:

<svg style="border: 1px solid #DDD">
<linearGradient id="linear-gradient">
<stop offset="0%" stop-color="gold"/>
<stop offset="100%" stop-color="teal"/>
</linearGradient>
<rect fill="url(#linear-gradient)"
  width="100%" height="100%"/>
</svg>

The gradient can be used both as a fill and as a stroke for shapes and text:

<p data-height="400" data-theme-id="4974" data-slug-hash="NAZgqo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/NAZgqo/">NAZgqo</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h2 id="stops">Color management</h2>

The <code>stop</code> element is used to control the colors of the gradient. Attributes:

<ul>
<li><code>offset</code> - color position</li>
<li><code>stop-color</code> - color</li>
<li><code>stop-opacity</code> - color transparency</li>
</ul>

Sample code:

```html
<stop offset=".25" stop-color="blue" stop-opacity=".5"/>
```

The color position is specified as a percentage or a number from 0 to 1 (50% and .5 will work the same).
The color and position of the color must be indicated.

Interestingly, unlike CSS gradients, the colors of SVG gradients can be animated (in this case, using CSS):

<p data-height="350" data-theme-id="4974" data-slug-hash="bpXVpz" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/bpXVpz/">Animated SVG-gradient</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Linear and radial gradients share several properties, but differ in the way the size and direction of the gradient are specified. Let's take a closer look at them.

<h2 id="linear">Linear gradient</h2>

Set using the <code>linearGradient</code> tag.

The gradient vector is specified using the <code>x1</code>, <code>y1</code>, <code>x2</code> and <code>y2</code> attributes.

<code>x1</code> and <code>y1</code> specify the coordinates of the beginning of the vector, <code>x2</code> and <code>y2</code> - the end coordinates (similar to drawing a line using the <code>line</code> tag).

<p data-height="550" data-theme-id="4974" data-slug-hash="NAamgv" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/NAamgv/">Gradient Coords: x2 & y2</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

If coordinates are not specified, a horizontal gradient is drawn from left to right.

The buttons at the top of the demo switch the <code>gradientUnits</code> property, which is responsible for the coordinate system; more details about it will be described <a href="#gradientUnits">below</a>.

<h2 id="radial">Radial gradient</h2>

Set using the <code>radialGradient</code> tag.

The gradient parameters are set using the same attributes that define the properties of the circle (the <code>circle</code> element): the center of the shape is set by the <code>cx</code> and <code>cy</code> attributes, and the radius by the <code>r</code> attribute:

<p data-height="550" data-theme-id="4974" data-slug-hash="KryqQz" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/KryqQz/">Gradient Coords: r</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

If any of these attributes are not set, they will be set to a default value of <code>50%</code>.

In addition, the radial gradient has a couple of specific properties: <code>fx</code> and <code>fy</code>. They allow you to move only the center of the gradient without affecting the location of the final colors:

<p data-height="550" data-theme-id="4974" data-slug-hash="kXxwqo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/kXxwqo/">Gradient Coords: fx & fy</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

If these attributes are not set, their default values ​​will be <code>cx</code> and <code>cy</code> respectively.

<h2 id="common-props">Common properties of gradients</h2>

<h3 id="gradientUnits">gradientUnits</h3>

This is a very important property; it specifies the coordinate system for the attributes responsible for the direction and size of the gradient (<code>x1</code>, <code>y1</code>, <code>x2</code> and <code>y2</code> for linear gradients and <code>cx</code>, <code>cy</code>, <code>r</code>, <code>fx</code> and <code>fy</code> for radial ones).

Possible values:

<code>objectBoundingBox</code> - coordinates are calculated relative to the object to which the gradient is applied. Default value.
<code>userSpaceOnUse</code> - coordinates are calculated relative to the coordinate system of the entire SVG element.

In addition to the fact that when switching <code>gradientUnits</code> the gradient can change its position due to a change in the coordinate system, this property can also significantly affect the rendering of the gradient for shapes with different widths and heights (for example, an elongated rectangle or ellipse).

When set to <code>userSpaceOnUse</code>, the colors of the linear gradient will always be perpendicular to the main vector, and the radial gradient will be in the shape of a circle. But if the gradient is set to an extruded shape and the <code>gradientUnits</code> value is equal to <code>objectBoundingBox</code>, the gradient tries to fit into the entire shape and is distorted. This is especially noticeable with radial gradients:

<p data-height="550" data-theme-id="4974" data-slug-hash="WxaKdw" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/WxaKdw/">gradientUnits (radialGradient)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

For linear gradients, in this case, the angle of the gradient colors relative to its vector changes:

<p data-height="430" data-theme-id="4974" data-slug-hash="BzBzYG" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/BzBzYG/">gradientUnits</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

So even if the coordinate systems of the shape and the SVG element are the same, different <code>gradientUnits</code> values ​​may cause the gradient to look different.


<h3 id="gradientTransform">gradientTransform</h3>

The attribute allows you to set gradient transformations:

<p data-height="550" data-theme-id="4974" data-slug-hash="bZAvxg" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/bZAvxg/">gradientTransform</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<a href="/svg-shapes/">the same</a> transformations as for regular shapes, for example, the gradient can be rotated or stretched, but there are some pitfalls in gradient transformations.

For gradients, as for all other elements, by default transformations are performed relative to the upper left corner of the document. If you want to override the transformation origin, you need to set <code>transform-origin</code>. It can be set explicitly in the attribute only for <code>rotate</code> (for example, <code>rotate(180, 100, 100)</code>, the last two numbers are it), for other transformations <code>transform-origin</code> will only work if it is specified in CSS along with the transformation. But <code>gradientTransform</code> cannot be specified via CSS, therefore <code>transform-origin</code> cannot be specified this way either. In this case, you can use centering via <code>translate</code> (thanks to <a href="https://twitter.com/AmeliasBrain/status/753284973210271744">@AmeliasBrain</a> for the tip):

```html
translate(x,y) scale(s) translate(-x,-y)
```

In the case of a radial gradient, instead of <code>scale</code> it will be more convenient to control the radius of the gradient.

<h3 id="spreadMethod">spreadMethod</h3>

This attribute controls the behavior of the gradient if the gradient is smaller than the rendering area.

Possible values:

<code>pad</code> - the free space is filled with the outermost colors. Default value.
<code>reflect</code> - the gradient is reflected.
<code>repeat</code> - the gradient is repeated.

<p data-height="620" data-theme-id="4974" data-slug-hash="YWANyJ" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/YWANyJ/">SpreadMethods for SVG Gradients</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<code>spreadMethod</code> does not work in Safari. If you want it to work everywhere, linear repeating and reflected gradients can be simulated using patterns, but repeating radial gradients will still have to be written by hand.

<h3 id="xlink-href">xlink:href</h3>

This attribute allows gradients to borrow colors and properties from each other. If the gradient containing the <code>xlink:href</code> attribute does not have colors specified, they are inherited from the gradient by reference. Also, all properties that are not overridden in the current gradient will be inherited from the given gradient. In this case, radial gradients can inherit the colors and properties of linear ones, and vice versa.

Here is an example of use:

```html
<!-- Исходный линейный градиент -->
<linearGradient id="linear-gradient">
  <stop offset="0%" stop-color="crimson"
      class="stop-1"/>
  <stop offset="49%" stop-color="gold"
      class="stop-2"/>
  <stop offset="50%" stop-color="lemonchiffon"
      class="stop-2"/>
  <stop offset="51%" stop-color="gold"
      class="stop-2"/>
  <stop offset="100%" stop-color="teal"
      class="stop-3"/>
</linearGradient>

<!-- Радиальный градиент, наследующий цвета и свойства линейного -->
<radialGradient id="radial-gradient"
  xlink:href="#linear-gradient">
</radialGradient>
```

Code in action, the radial gradient on the right has inherited the colors of the linear gradient on the left:

<p data-height="550" data-theme-id="4974" data-slug-hash="jAaazW" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/jAaazW/">Gradient properties inheritance</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

In this demo, a transform is applied to the gradient on the left, and it is also inherited by the gradient on the right.

<h2 id="pitfalls">Pitfalls</h2>

The gradient can be used as a fill and stroke, and can be specified either with the <code>fill</code> and <code>stroke</code> attributes, or in CSS. In this case, you can put the gradients into a separate file and connect them from there, this will eliminate the need to insert gradients into the body of the document.

Unfortunately, all the most convenient and interesting methods are not very well supported by browsers. Thus, in CSS, an entry like <code>fill: url(#grad);</code> implies that a gradient with this ID should be searched in the current document. In Chrome, Opera and Safari, this is what happens, but Firefox starts looking for a gradient relative to the location of the style file, and as expected, finds nothing. You can match the link in CSS to the page address, but this will not help if there is more than one page.

An entry like <code>fill: url(svg-with-gradients.svg#gradient);</code> indicates that the gradient should be taken from an external file, and this would be super convenient, but, unfortunately, it only works in Firefox.

Thus, the most reliable way is to set the gradient using element attributes.

<h2 id="demos">Usage examples</h2>

SVG gradients provide interesting design possibilities on their own, but what's even more interesting is how they work in combination with masks. For example, using masks and gradients you can make soap bubbles like this:

<p data-height="550" data-theme-id="4974" data-slug-hash="EyZgLo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/EyZgLo/">SVG Bubbles</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<a href="https://codepen.io/yoksel/full/BzkyBJ">Here is a detailed diagram of a separate bubble.</a>

You can also do all sorts of interesting things by animating gradients. For example, here’s a pattern (the colors are animated using CSS):

<p data-height="500" data-theme-id="4974" data-slug-hash="VjZGGg" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/VjZGGg/">Animated pattern with SVG gradient</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Or shimmering text:

<p data-height="350" data-theme-id="4974" data-slug-hash="RRLXKP" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/RRLXKP/">Text with gradientTransform</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Animation of flowers can be done using CSS, transformations can only be added using JavaScript (I do this using the <a href="https://greensock.com/get-started-js">GSAP</a> library).

---
title: SVG Shapes and Transformations

tags: [svg]

image: //img-fotki.yandex.ru/get/9489/5091629.9d/0_7fc09_5cfb837c_M.png
description: 'Writing SVG is quite easy. The following shapes are used: rect, polygon, circle, ellipse, as well as line, polyline and path.'

customContent: '../assets/img/svg/css-svg-masks.svg'

links:
- href: http://www.w3.org/TR/SVG/shapes.html
  text: Basic Shapes
- href: http://www.w3.org/TR/SVG/coords.html#TransformAttribute
  text: The ‘transform’ attribute
- href: http://caniuse.com/#search=svg
  text: Browsers support for SVG
- href: http://www.adobe.com/ru/products/illustrator.html
  text: Adobe Illustrator
- href: http://www.bohemiancoding.com/sketch/
  text: Sketch
- href: http://www.inkscape.org/en/
  text: Inkscape
---

<a href="/svg">← Home about SVG</a>

Writing SVG by hand is quite easy. We use the following shapes: <code>rect</code>, <code>polygon</code>, <code>circle</code>, <code>ellipse</code>, as well as <code>line</code>, <code>polyline</code> and <code>path</code>.
Set the selected shape, determine its dimensions and coordinates, then add a background and stroke.<!--more-->

It should be noted that it is absolutely not necessary to write code by hand: vector editors can handle this much better, for example, powerful, but paid <a href="http://www.adobe.com/ru/products/illustrator.html">Adobe Illustrator</a>, free, but not so convenient <a href="http://www.inkscape.org/en/">Inkscape</a>, a little paid, but quite nice <a href="http://www.bohemiancoding.com/sketch/">Sketch</a>. But it makes sense to at least try, because it is a) interesting, b) useful: the skills can be useful if you need to draw something simple, correct the code in the absence of a vector editor, or you want to interact with SVG via JavaScript.

Dimensions and coordinates are set differently for different shapes, but the background and stroke are the same for all:

<code>fill</code> - fill. You can set the color in any way. Transparency - <code>none</code> or <code>transparent</code>. The default color is black;

<code>stroke</code> — stroke color;

<code>stroke-width</code> - stroke width, default - 1. Doesn't work without <code>stroke</code>.

More parameters can be found in the specification <a href="http://www.w3.org/TR/SVG/painting.html#StrokeProperties">w3.org/TR/SVG/painting.html#StrokeProperties</a>.

Below you can see examples of simple SVG shapes and the transformations that can be applied to them.

<h2 id="rect">Rect</h2>

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" fill="skyblue" stroke="steelblue" stroke-width="5" /></svg>

```html
<svg width="230" height="140">
  <rect x="5" y="5" width="220" height="130"
    fill="skyblue" stroke="steelblue" stroke-width="5"
  />
</svg>
```

<code>x</code>,<code>y</code> — coordinates of the upper left corner of the figure;
<code>width</code>, <code>height</code> — width and height of the rectangle.

Rounded corners are specified by the <code>rx</code> and <code>ry</code> parameters. If only one of the parameters is specified, the vertical and horizontal rounding will be the same:

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" rx="20" fill="yellowgreen" stroke="green" stroke-width="5" /></svg>

```html
<svg width="230" height="140">
  <rect x="5" y="5" width="220" height="130" rx="20"
    fill="yellowgreen" stroke="green" stroke-width="5"
  />
</svg>
```

If both parameters are specified (and they are different), the fillet radius will be different:

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" rx="10" ry="50" fill="khaki" stroke="darkkhaki" stroke-width="5" /></svg>

```html
<svg width="230" height="140">
  <rect x="5" y="5" width="220" height="130" rx="10" ry="50"
    fill="khaki" stroke="darkkhaki" stroke-width="5"
  />
</svg>
```

<h2 id="polygon">Polygon</h2>

<svg class="svg" width="230" height="140"><polygon points="5,135 115,5 225,135" fill="violet" stroke="purple" stroke-width="5" /></svg>

```html
<svg width="230" height="140">
  <polygon points="5,135 115,5 225,135"
    fill="violet" stroke="purple" stroke-width="5"
  />
</svg>
```

<svg class="svg" width="140" height="130"><polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="turquoise" stroke="lightseagreen" stroke-width="5" /></svg>

```html
<svg width="140" height="130">
  <polygon
    points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41"
    fill="turquoise" stroke="lightseagreen" stroke-width="5"
  />
</svg>
```

<code>points</code> specifies the <code>x,y</code>-coordinates of the vertices of the figure, separated by a space.

<code>polygon</code> closes on itself, the last point need not be specified.

<h2 id="circle">Circle</h2>

<svg class="svg" width="140" height="140"><circle r="65" cx="70" cy="70" fill="orangered" stroke="crimson" stroke-width="5" /></svg>

```html
<svg width="140" height="140">
  <circle r="65" cx="70" cy="70"
    fill="orangered" stroke="crimson" stroke-width="5"
  />
</svg>
```

<code>r</code> — circle radius;
<code>cx</code>, <code>cy</code> - coordinates of the circle center.

<svg class="svg" width="230" height="140"><ellipse rx="110" ry="60" cx="115" cy="70" fill="gold" stroke="orange" stroke-width="5" /></svg>

```html
<svg width="230" height="140">
  <ellipse rx="110" ry="60" cx="115" cy="70"
    fill="gold" stroke="orange" stroke-width="5"
  />
</svg>
```

<code>rx</code>, <code>ry</code> - horizontal and vertical radii of the ellipse;
<code>cx</code>, <code>cy</code> - coordinates of the center of the ellipse.

More complex shapes can be made from a combination of simple ones:

<svg class="svg" width="250" height="210"><g fill="#333"><ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/><ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/><circle r="67" cx="122" cy="125"/></g></svg>

In this case, the shape style can be set once for the entire group, and not separately for each shape:

```html
<svg width="250" height="210" style="border: 1px solid">
  <g fill="#333">
    <ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/>
    <ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/>
    <circle r="67" cx="122" cy="125"/>
  </g>
</svg>
```

You can also draw with simple lines.

<h2 id="line">Line</h2>

<svg class="svg" width="230" height="140"><line x1="220" y1="10" x2="10" y2="130" stroke="violet" stroke-width="5" /></svg>

```html
<svg width="230" height="140">
  <line
    x1="220" y1="10" x2="20" y2="130"
    stroke="violet" stroke-width="5"
  />
</svg>
```

<code>x1</code>, <code>y1</code>, <code>x2</code>, <code>y2</code> - coordinates of the beginning and end of the line.

<h2>Polyline</h2>

<svg class="svg" width="260" height="140"><polyline points="5,135 30,5 55,135 80,5, 105,135 130,5, 155,135 180,5, 205,135 230,5, 255,135" stroke="orangered" fill="none" stroke-width="5" /></svg>

```html
<svg width="260" height="140">
  <polyline
    points="5,135 30,5 55,135 80,5, 105,135 130,5, 155,135 180,5, 205,135 230,5, 255,135"
    fill="none" stroke="orangered" stroke-width="5"
  />
</svg>
```

<code>points</code> specifies the <code>x,y</code>-coordinates of the points, each point separated by a space.

For more complex lines and shapes, there is a <code>path</code> tag, but this topic is worth considering separately.

<h2 id="transform">Transform</h2>

SVG shapes can be modified using the <code>transform</code> property.

Possible values: <code>translate</code>, <code>scale</code>, <code>rotate</code>, <code>skewX</code>, <code>skewY</code>, <code>matrix</code>.

Example:

<svg class="svg" width="230" height="140"><ellipse rx="110" ry="30" cx="115" cy="70" fill="gold" stroke="orange" stroke-width="5" transform="rotate(-23 115 70)"/></svg>

```html
<svg width="230" height="140">
  <ellipse rx="110" ry="30" cx="115" cy="70"
    fill="gold" stroke="orange" stroke-width="5"
    transform="rotate(-23 115 70)"/> <!-- Трансформация -->
</svg>
```

You can specify multiple transformations separated by commas or spaces.

<h3>translate(tx [ty])</h3>

If the second parameter is not specified, it is equal to 0.

<div class="columns">
<div class="column column-left">
  <code>translate(100)</code>

  <svg class="svg" width="250" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="translate(100)"/></svg>
</div>
<div class="column column-right">
  <code>translate(70, 70)</code>

  <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="translate(70, 70)"/></svg>
</div>
</div>


<h3>scale(<i>sx [sy]</i>)</h3>

If the second parameter is not specified, it is equal to the first.

<div class="columns">
<div class="column column-left">
  <code>scale(1.5)</code>

  <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="scale(1.5)"/></svg>
</div>
<div class="column column-right">
  <code>scale(1.5, .5)</code>

  <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="scale(1.5, .5)"/></svg>
</div>
</div>

<h3>rotate(rotate-angle [cx cy])</h3>

If the rotation center coordinates are not specified, they are <code>0 0</code> - this is the upper left corner of the SVG image.

<div class="columns">
<div class="column column-left">
    <code>rotate(45)</code>

  <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="rotate(45)"/></svg>
</div>
<div class="column column-right">
  <code>rotate(45 100 100)</code>

  <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="rotate(45 100 100)"/></svg>
</div>
</div>

<h3>skewX(<i>skew-angle</i>), skewY(<i>skew-angle</i>)</h3>

<div class="columns">
<div class="column column-left">
  <code>skewX(5)</code>

  <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="skewX(5)"/></svg>
</div>

<div class="column column-right">
  <code>skewY(5)</code>

  <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="skewY(5)"/></svg>
</div>
</div>

<h3>matrix(a b c d e f)</h3>

<div class="columns">
<div class="column column-left">
  <code>matrix(.3 0 0 .95 55 25)</code>

  <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="matrix(.3 0 0 .95 55 25)"/></svg>
</div>
</div>



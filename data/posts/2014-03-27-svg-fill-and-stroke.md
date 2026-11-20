---
title: 'SVG: fill and stroke'

tags: [svg]

image: //img-fotki.yandex.ru/get/9825/5091629.9d/0_7fd41_3b1bf3e6_L.png
description: In SVG, fill and stroke have many different interesting options that provide much more functionality than what is available in CSS. For example, you can draw an SVG pattern and use it not only in the fill, but also in the stroke. You can specify different opacity for the fill and stroke, and you can also control the dotted stroke, which can be used to create interesting animated effects.

links:
- href: http://www.w3.org/TR/SVG/
  text: w3.org/TR/SVG
---

In SVG, fill and stroke have many different interesting options that provide much more functionality than what is available in CSS.
<!--more-->

For example, you can draw an SVG pattern and use it not only in the fill, but also in the stroke. You can specify different opacity for the fill and stroke, and you can also control the dotted stroke, which can be used to create interesting animated effects.

You can set fill and stroke to <code>none</code>, <a href="/tsveta">colors</a>, keywords (<code>currentColor</code> and <code>transparent</code>), as well as <a href="/svg-gradients/">gradients</a> and patterns.

<h2 id="fill">fill</h2>

Filling an element.

Possible values: <code>none</code>, keywords, colors, patterns and <a href="/svg-gradients/">gradients</a>.
The default value is <code>black</code>.

<svg class="svg" width="200" height="200"><defs><symbol id="s-rect"><rect width="70" height="70"/></symbol><linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="90%">  <stop offset="0%" stop-color="yellowgreen" />  <stop offset="90%" stop-color="green" /></linearGradient></defs><use xlink:href="#s-rect" x="20" y="20" fill="hsla(348, 83%, 47%,.3)"/><use xlink:href="#s-rect" x="110" y="20" fill="rgb(255, 215, 0)"/> <use xlink:href="#s-rect" x="20" y="110" fill="url(#g-green)"/><use xlink:href="#s-rect" x="110" y="110" fill="skyblue"/>  </svg>

```html
<svg width="200" height="200">
  <defs>
    <symbol id="s-rect">
      <rect width="70" height="70"/>
    </symbol>
    <linearGradient id="g-green"
      x1="0%" y1="0%"
      x2="0%" y2="90%"
    >
      <stop offset="0%" stop-color="yellowgreen" />
      <stop offset="90%" stop-color="green" />
    </linearGradient>
  </defs>

  <use xlink:href="#s-rect"
    x="20" y="20"
    fill="hsla(348, 83%, 47%,.3)"/> <!-- HSLA -->
  <use xlink:href="#s-rect"
    x="110" y="20"
    fill="rgb(255, 215, 0)"/> <!-- RGB -->
  <use xlink:href="#s-rect"
    x="20" y="110"
    fill="url(#g-green)"/> <!-- Градиент -->
  <use xlink:href="#s-rect"
    x="110" y="110"
    fill="skyblue"/> <!-- Цвет по названию -->
</svg>
```


<h2 id="fill-rule">fill-rule</h2>

The property determines how complex shapes that have intersections within themselves will be filled. For simple figures it has no effect.

Possible values: <code>nonzero</code>, <code>evenodd</code>

<div class="columns">
<div class="column column-left">
  <code>fill-rule="nonzero"</code>

  <svg class="svg" width="200" height="200"><path stroke="orange" stroke-width="5" fill="gold" fill-rule="nonzero" d="M 100,20 L 50,180 180,80 20,80 150,180 z"/></svg>
</div>
<div class="column column-right">
  <code>fill-rule="evenodd"</code>

  <svg class="svg" width="200" height="200"><path stroke="orange" stroke-width="5" fill="gold" fill-rule="evenodd" d="M 100,20 L 50,180 180,80 20,80 150,180 z"/></svg>

</div>
</div>

<code>fill-rule="nonzero"</code> behaves interestingly for figures from two paths. For example, if the outer circle is drawn clockwise and the inner one in the opposite direction, the center circle will remain unfilled (on the left). If both circles are drawn in the same direction, the figure will be filled completely (on the right):

<div class="columns">
<div class="column column-left">
    <svg class="svg" width="200" height="200"><g fill="yellowgreen" fill-rule="nonzero" stroke="green" stroke-width="5"><path d="M 20,100 A20,20 0 0,1 180,100 M 20,100 A20,20 0 0,0 180,100 M 150,100 A 50,50 0 0,1 50,100 M 150,100 A 50,50 0 0,0 50,100"/></g></svg>
</div>
<div class="column column-right">
    <svg class="svg" width="200" height="200"><g fill="yellowgreen" fill-rule="nonzero" stroke="green" stroke-width="5"><path d="M 20,100 A20,20 0 0,1 180,100 M 20,100 A20,20 0 0,0 180,100 M 50,100 A 50,50 0 0,1 150,100 M 50,100 A 50,50 0 0,0 150,100"/></g></svg>

</div>
</div>

<h2 id="fill-opacity">fill-opacity</h2>

Controlling fill transparency. You can set values ​​from 0.0 to 1.0 or as a percentage. True, Firefox does not like percentage values ​​for gradients (<a href="http://cdpn.io/nstGK">pruflink</a>, look in FF).

<svg class="svg" width="200" height="200"><defs><symbol id="s-rect2"><rect width="100" height="100"/></symbol><linearGradient id="g-red" x1="0%" y1="0%" x2="0%" y2="90%"><stop offset="0%" stop-color="orange" /><stop offset="90%" stop-color="crimson" /></linearGradient><linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="90%"><stop offset="0%" stop-color="yellowgreen" /><stop offset="90%" stop-color="green" /></linearGradient></defs><use xlink:href="#s-rect2" x="20" y="20" fill="url(#g-red)" fill-opacity=".5"/>  <use xlink:href="#s-rect2" x="50" y="50" fill="hsl(50, 100%, 50%)" fill-opacity=".5"/> <use xlink:href="#s-rect2" x="80" y="80" fill="url(#g-green)" fill-opacity=".5"/></svg>

```html
<!-- ... -->
<use xlink:href="#s-rect"
  x="20" y="20"
  fill="url(#g-red)" fill-opacity=".5"/>
<use xlink:href="#s-rect"
  x="50" y="50"
  fill="hsl(50, 100%, 50%)" fill-opacity=".5"/>
<use xlink:href="#s-rect"
  x="80" y="80"
  fill="url(#g-green)" fill-opacity=".5"/>
<!-- ... -->
```

<h2 id="stroke">stroke</h2>

Stroke color. There is no default value.

<svg class="svg" width="200" height="200"><rect width="160" height="160" x="20" y="20" fill="none" stroke="yellowgreen"/></svg>

```html
<svg width="200" height="200">
  <rect width="160" height="160" x="20" y="20"
    fill="none"
    stroke="yellowgreen"/>
</svg>
```


<h2 id="stroke-width">stroke-width</h2>

The thickness of the stroke can be specified in length units or as a percentage.
Default value: 1.

<svg class="svg" width="200" height="200"><rect width="160" height="160" x="20" y="20" fill="none" stroke="yellowgreen" stroke-width="10%"/><rect width="100" height="100" x="50" y="50" fill="none" stroke="gold" stroke-width="10"/></svg>

```html
<svg width="200" height="200">
  <rect width="100" height="100" x="50" y="50"
    fill="none" stroke="gold"
    stroke-width="10"/>
  <rect width="160" height="160" x="20" y="20"
    fill="none" stroke="yellowgreen"
    stroke-width="10%"/>
</svg>
```

<h2 id="stroke-linecap">stroke-linecap</h2>

The property determines how the ends of the lines will look.
Possible values: <code>butt</code>, <code>round</code>, <code>square</code>.
Default value: <code>butt</code>.

<svg class="svg" width="200" height="205"><symbol id="s-path-guide"><circle r="3" cx="30" cy="15"/><circle r="3" cx="170" cy="15"/><path d="M 30 15 170 15" stroke-width="2"/></symbol><symbol id="s-path"><path d="M 30 15 170 15" stroke-width="30"/></symbol><use xlink:href="#s-path" stroke="orangered" y="20" stroke-linecap="butt"/><use xlink:href="#s-path" stroke="olivedrab" y="85" stroke-linecap="round"/><use xlink:href="#s-path" stroke="steelblue" y="150" stroke-linecap="square"/><g class="guides"><use xlink:href="#s-path-guide" y="20" stroke="orange" fill="orange"/><use xlink:href="#s-path-guide" y="85" stroke="yellowgreen" fill="yellowgreen"/><use xlink:href="#s-path-guide" y="150" stroke="skyblue" fill="skyblue"/></g></svg>

```html
<!-- ... -->
  <use xlink:href="#s-path" stroke="orangered" y="20"
    stroke-linecap="butt"/>

  <use xlink:href="#s-path" stroke="olivedrab" y="85"
    stroke-linecap="round"/>

  <use xlink:href="#s-path" stroke="steelblue" y="150"
    stroke-linecap="square"/>
<!-- ... -->
```

<h2 id="stroke-linejoin">stroke-linejoin</h2>

Determines how line connections at corners will look.
Possible values: <code>miter</code>, <code>round</code>, <code>bevel</code>.
Default value: <code>miter</code>.

<svg class="svg" width="215" height="300"><symbol id="s-corner-guide"><circle r="3" cx="50" cy="100"/><circle r="3" cx="164" cy="100"/><path d="M 30 50 h 80 v 80" stroke-width="2" fill="none" transform="rotate(-45 100 50)"/></symbol><symbol id="s-corner"><path d="M 30 50 h 80 v 80" stroke-width="30" fill="none" transform="rotate(-45 100 50)"/></symbol><use xlink:href="#s-corner" stroke="orangered" y="0" stroke-linejoin="miter"/><use xlink:href="#s-corner" stroke="olivedrab" y="80" stroke-linejoin="round"/><use xlink:href="#s-corner" stroke="steelblue" y="160" stroke-linejoin="bevel"/><g class="guides"> <use xlink:href="#s-corner-guide" y="0" stroke="orange" fill="orange"/> <use xlink:href="#s-corner-guide" y="80" stroke="yellowgreen" fill="yellowgreen"/><use xlink:href="#s-corner-guide" y="160" stroke="skyblue" fill="skyblue"/></g></svg>

```html
<!-- ... -->
  <use xlink:href="#s-corner" stroke="orangered" y="0"
    stroke-linejoin="miter"/>

  <use xlink:href="#s-corner" stroke="olivedrab" y="80"
    stroke-linejoin="round"/>

  <use xlink:href="#s-corner" stroke="steelblue" y="160"
    stroke-linejoin="bevel"/>
<!-- ... -->
```

<h2 id="stroke-dasharray">stroke-dasharray</h2>

Controls the appearance of the dashed stroke. Can be specified in length units or as a percentage.
If one value is given, the second value is considered equal to the first. For example, <code>stroke-dasharray="1"</code> will draw a line of segments one unit long separated by spaces of the same width.

Examples of different dotted lines:

<svg class="svg" width="300" height="160"><path d="M 20 20 h 260" stroke="purple" stroke-width="1" stroke-dasharray="1" /><path d="M 20 40 h 260" stroke="mediumspringgreen" stroke-width="15" stroke-dasharray="1 3" /><path d="M 20 60 h 260" stroke="orangered" stroke-width="1" stroke-dasharray="5%" /><path d="M 20 80 h 260" stroke="green" stroke-width="1" stroke-dasharray="1 5" /><path d="M 20 100 h 260" stroke="steelblue" stroke-width="1" stroke-dasharray="2 7 6" /> <path d="M 20 120 h 260" stroke="orange" stroke-width="5" stroke-dasharray="5" /> <path d="M 20 140 h 260" stroke="mediumseagreen" stroke-width="1" stroke-dasharray="12% 5%" /></svg>

```html
<svg width="300" height="160">
  <path d="M 20 20 h 260"
    stroke="purple" stroke-width="1"
    stroke-dasharray="1" />
  <path d="M 20 40 h 260"
    stroke="mediumspringgreen" stroke-width="15"
    stroke-dasharray="1 3" />
  <path d="M 20 60 h 260"
    stroke="orangered" stroke-width="1"
    stroke-dasharray="5%" />
  <path d="M 20 80 h 260"
    stroke="green" stroke-width="1"
    stroke-dasharray="1 5" />
  <path d="M 20 100 h 260"
    stroke="steelblue" stroke-width="1"
    stroke-dasharray="2 7 6" />
  <path d="M 20 120 h 260"
    stroke="orange" stroke-width="5"
    stroke-dasharray="5" />
  <path d="M 20 140 h 260"
    stroke="mediumseagreen" stroke-width="1"
    stroke-dasharray="12% 5%" />
</svg>
```

Using strokes and simple shapes you can achieve amazing things:

<p data-height="400" data-theme-id="4974" data-slug-hash="bwDzx" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/bwDzx/'>SVG-patterns</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
<br>

Also <code>stroke-dasharray</code> combines interestingly with animation:

<p data-height="400" data-theme-id="4974" data-slug-hash="uGfBE" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/uGfBE/'>Animated stroke</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<h2 id="stroke-dashoffset">stroke-dashoffset</h2>

The property allows you to set the offset of the dotted stroke relative to its original position. The value is specified in length units or as a percentage; values ​​can be negative.
Default value: 0.

In this example, the orange and yellow lines are offset from the red line using different <code>stroke-dashoffset</code> values:

<svg class="svg" width="270" height="270"><g class="g-circles"  fill="none" stroke-width="15" stroke-dasharray="25% 110%" transform="rotate(72 135 135)"><circle r="115" cx="135" cy="135" stroke="crimson"/><circle r="115" cx="135" cy="135" stroke="orangered" stroke-dashoffset="25%"/><circle r="115" cx="135" cy="135" stroke="gold" stroke-dashoffset="50%"/></g></svg>

```html
<svg width="270" height="270">
  <g class="g-circles" fill="none"
    stroke-width="15"
    stroke-dasharray="25% 110%"
    transform="rotate(72 135 135)">
    <circle r="115" cx="135" cy="135"
      stroke="crimson"/> <!-- Красная обводка без смещения -->
    <circle r="115" cx="135" cy="135"
      stroke="orangered"
      stroke-dashoffset="25%"/> <!-- Оранжевая обводка смещена на 25% -->
    <circle r="115" cx="135" cy="135"
      stroke="gold"
      stroke-dashoffset="50%"/> <!-- Желтая обводка смещена на 50% -->
  </g>
</svg>
```

By combining <code>stroke-dashoffset</code> and <code>stroke-dasharray</code> you can get interesting effects.

<i>For full viewing, use Webkit browsers. <a href="https://codepen.io/yoksel/full/CgrFz/">Link to full version</a>.</i>

<p data-height="500" data-theme-id="4974" data-slug-hash="CgrFz" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/CgrFz/'>dasharray + dashoffset = magic</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<i>To restart, click Rerun.</i>

Some inspiring links about animation on <code>stroke-dashoffset</code>:

- <a href="http://css-tricks.com/svg-line-animation-works/">How SVG Line Animation Works</a>
- <a href="http://jakearchibald.com/2013/animated-line-drawing-svg/">Animated line drawing in SVG</a>
- <a href="http://tympanus.net/Development/SVGDrawingAnimation/">SVG Drawing Animation</a>

<h2 id="stroke-opacity">stroke-opacity</h2>

Stroke transparency. Values ​​are set from 0.0 to 1.0.

<svg class="svg" width="200" height="200"><g class="g-circles" fill="none" stroke-width="15"><circle r="40" cx="60" cy="60" stroke="crimson" stroke-opacity=".7"/><circle r="55" cx="100" cy="100" stroke="orangered" stroke-opacity=".5" /><circle r="40" cx="140" cy="140" stroke="gold" stroke-opacity=".25"/></g></svg>

```html
<svg width="200" height="200">
  <g class="g-circles" fill="none"
    stroke-width="15">
    <circle r="40" cx="60" cy="60"
      stroke="crimson"
      stroke-opacity=".7"/>
    <circle r="55" cx="100" cy="100"
      stroke="orangered"
      stroke-opacity=".5" />
    <circle r="40" cx="140" cy="140"
      stroke="gold"
      stroke-opacity=".25"/>
  </g>
</svg>
```

Stroke animation allows you to achieve absolutely amazing things. True, in my examples I used CSS (and this demo does not play in Firefox) and SVG animation, which works everywhere, but is set strangely, long and inconveniently. I think the best way to animate SVG is to use JavaScript libraries.

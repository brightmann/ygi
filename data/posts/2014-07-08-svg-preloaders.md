---
title: SVG preloaders

tags: [svg, experiments]

image: //img-fotki.yandex.ru/get/6700/5091629.a0/0_84185_5f439231_orig
description: Looking for something else to do that would make it work, I wanted to make preloaders on SVG. Such preloaders can be used on any background. Elements in them can change not only transparency, but also color, outline, or position in space. You can come up with a huge number of different design and animation options.
---

Looking for something else to do that would make it work, I wanted to make preloaders on SVG.

It turned out great, although the result is not yet very suitable for use in real life.

<!--more-->

These are the preloaders I got:

<p data-height="470" data-theme-id="4974" data-slug-hash="fjcvA" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/fjcvA/'>Thinking about SVG-preloaders</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

They can be used on any background. Elements in them can change not only transparency, but also color, outline, or position in space. You can come up with a huge number of different design and animation options.

Moreover, the use of symbols allows you to change the elements of the preloaders as you wish (the preloaders themselves, by the way, do not necessarily have to be round):

<p data-height="470" data-theme-id="4974" data-slug-hash="GcgrD" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/GcgrD/'>Changing items of SVG-preloaders, .v2</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Instead of circles, you can insert any shapes: fish, flowers, snowflakes, cats... The type of preloader can be changed according to the season, according to your mood, or completely randomly.

How to make a simple preloader?

Oddly enough, you can simply write it by hand without going into a graphics editor.
First of all, we need a circle, let's write it:

```html
<circle r="10" cx="10" cy="10"/>
```

A simple figure without decoration, it will then be specified via CSS.

To explicitly indicate a reused element, wrap it in a <code>symbol</code>:

```html
<symbol id="s-circle">
  <circle r="10" cx="10" cy="10"/>
</symbol>
```

Now you need to add the required number of copies of the symbol to the page. Copies are inserted via <code>use</code>:

```html
<use xlink:href="#s-circle" class="u-circle"/>
```

To be able to manipulate all copies at once, wrap them in a <nowrap><code>g</code>:</nowrap> tag

```html
<g id="circle" class="g-circles">
  <use xlink:href="#s-circle" class="u-circle"/>
  <use xlink:href="#s-circle" class="u-circle"/>
  <use xlink:href="#s-circle" class="u-circle"/>
  ...
</g>
```

This will be useful if the whole group immediately needs to add common design styles or the preloader needs to be somehow transformed: reduced, moved, and so on.

My code ends up looking like this:

```html
<svg viewBox="0 0 120 120" class="svg-preloader">
  <symbol id="s-circle">
    <circle r="10" cx="10" cy="10"></circle>
  </symbol>

  <g id="circle" class="g-circles">
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
  </g>
</svg>
```

Inside the SVG tag is a symbol and below it is a group containing copies of it.
Notice the <code>viewBox</code>:

```html
viewBox="0 0 120 120"
```

This attribute indicates the size of the rendered area of ​​the SVG content.
An absolutely necessary thing if you have not yet decided what size your preloader should be: if you set the width and height of the <code>viewBox</code> element, the image content will be stretched or compressed to fit the specified dimensions.

The result of the code on the page looks like this:

<p data-height="280" data-theme-id="4974" data-slug-hash="ozKmy" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ozKmy/'>ozKmy</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

That's right, the circles have a default fill (black) and are not given a position in space, so they accumulate in the upper left corner of the area, the dimensions of which are specified by <code>viewBox</code>.

I added gray borders of the displayed area for clarity; in fact, the <code>viewBox</code> borders are not visible. By the way, it’s convenient to make borders using this shape:

```html
<rect class="r-bounds" width="100%" height="100%"/>
```

In CSS:


```css
.r-bounds {
  fill: none;
  stroke: #AAA;
}
```

Such a rectangle will stretch over the entire displayed area and show its boundaries. The rendered area may not coincide with the boundaries of the SVG element itself.

Now you need to add styles to the copies of the symbol.

I use SCSS because it's easier, faster, and can use loops and variables. For example, a preloader can have its own config:


```css
$max: 12; /* количество кружков */
$size: 120px; /* размер прелоадера */
$fill: orangered; /* цвет кружков */
$angle: 360/$max; /* угол поворота каждого кружка относительно центра фигуры */
```

We use variables to set the size of the preloader and the color of the shapes:


```css
.svg-preloader {
  height: $size;
  width: $size;
}

.g-circles {
  fill: $fill;
}
```

Result:

<p data-height="268" data-theme-id="4974" data-slug-hash="rAwgq" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rAwgq/'>rAwgq</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The future preloader has received the specified dimensions, the circles have become orange, but are still in the upper left corner. Transformation is needed.

The first step is to set the center of the transformation, because in SVG it is by default in the upper left corner of the parent element. If no transformations were applied to the parent, the center of rotation will be in the upper left corner of the displayed area.

We find the coordinates of the center by dividing the width and height into two:


```css
transform-origin: $size/2 $size/2;
```

Now, using transformation, you need to arrange the circles in a circle. Each circle has its own rotation angle, so the transformation is specified using the <code>@for</code> loop and the <code>:nth-child</code> selector.

The transformation itself consists of three parts:

```css
transform: rotate(#{-$angle*$item}deg) /* угол поворота каждого отдельного кружочка */
translate(10px, 10px) /* сдвигаем каждый кружок к центру, иначе они выползут за пределы видимости */
scale(.85) /* немного уменьшаем*/

```

All transformation code:

```css
.u-circle {
  transform-origin: $size/2 $size/2;

  @for $item from 1 through $max {
    &:nth-child(#{$max}n + #{$item}){
      transform: rotate(#{-$angle*$item}deg) translate(10px, 10px) scale(.85);
    }
  }
}
```

<code>translate(10px, 10px)</code> could be removed from the CSS and added to the symbol, but it’s more convenient to store all the transformations in one place.
It would also be convenient to set <code>translate(10px, 10px) scale(.85)</code> not to each individual circle, but to the <code>.u-circle</code> class, but, unfortunately, transformations cannot be glued together. That is, you cannot transform an element and then transform it again - it won’t work, because the second transformation will overwrite the first (you can only do some kind of gluing, we will consider this method below, for the option when gluing becomes an urgent need).

Result of transformations:

<p data-height="268" data-theme-id="4974" data-slug-hash="KBtme" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/KBtme/'>KBtme</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

All the circles obediently arranged themselves in a circle.

Now let's animate. Create key frames:


```css
@keyframes opacity {
  0% {
    fill-opacity: 1;
  }
  75% {
    fill-opacity: 0;
  }
}
```

Add animation to the element:


```css
.u-circle {
  transform-origin: $size/2 $size/2;
  animation: opacity 1.2s linear infinite;
  ...
}
```

This animation will make all the characters disappear and appear at the same time. To make the animation “running”, each circle needs to set its own animation delay. To do this, we’ll use the transformation loop that we already have and add <code>animation-delay</code> to it:


```css
@for $item from 1 through $max {
  &:nth-child(#{$max}n + #{$item}){
    transform: rotate(#{-$angle*$item}deg) translate(10px, 10px) scale(.85);
    animation-delay: -#{$item/10}s;
  }
}
```

Result:

<p data-height="268" data-theme-id="4974" data-slug-hash="Jgixz" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Jgixz/'>Jgixz</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

But what if we want to animate not only the fill transparency, but also the color of the characters?

Add keyframes with color changes:


```css
@keyframes colors {
  0% {
    fill: orangered;
  }
  50% {
    fill: teal;
  }
}
```

We could add color control to the previous animation, but this way we can change both animations more flexibly without changes to one animation affecting the other. In addition, you can set different playback parameters for different animations, which can sometimes be useful.

Add a second animation:


```css
.u-circle {
  transform-origin: $size/2 $size/2;
  animation: 1.2s linear infinite;
  animation-name: colors,opacity;
  ...
}
```

<p data-height="268" data-theme-id="4974" data-slug-hash="nFqzd" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/nFqzd/'>nFqzd</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

We could stop there, but what if the symbols, in addition to color and transparency, change their position in space?

Writing keyframes with simple animation:

```css
@keyframes transform {
  50% {
    transform: scale(.5);
  }
}
```

Add a new animation to the list:

```css
animation-name: colors, opacity, transform;
```

And at the end we get something interesting:

<p data-height="268" data-theme-id="4974" data-slug-hash="JDHzK" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/JDHzK/'>JDHzK</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Yes, yes: the transformations do not stick together, so somewhere in the middle the symbol returns to its original position, is halved there (because <code>transform: scale(.5)</code>), and then flies on. This happens because the transformation that defines the position of each individual character is overwritten by the transformation specified in the animation.

How to maintain the position of a symbol on the plane and at the same time be able to further scale it?

You can summarize the transformations of parent and child elements. This will increase the markup, but will give more possibilities in animation. We wrap each character in a group:

```html
<g class="g-circle">
  <use xlink:href="#s-circle" class="u-circle"/>
</g>
```

We transfer the transformation of elements from <code>use</code> to the group and remove the <code>transform</code> animation:

```css
.g-circle {
  transform-origin: $size/2 $size/2;
  animation: 1.2s linear infinite;
  animation-name: colors, opacity;
  ...
}
```

Everything works:

<p data-height="268" data-theme-id="4974" data-slug-hash="nbird" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/nbird/'>nbird</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Now let's try to add animation with transformation. This time not to a group, but to symbols:

```css
.u-circle {
  animation: 1.2s linear infinite;
  animation-name: transform;
}
```

<p data-height="268" data-theme-id="4974" data-slug-hash="hDyqc" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/hDyqc/'>hDyqc</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

It turned out that the circles do not fly away anywhere, but now they lack the animation delay. To do this, we will again need a loop and <code>:nth-child</code>, but the loop will go through groups (and not through characters), because the characters are each in their own group:

```css
.g-circle {
  @for $item from 1 through $max {
    &:nth-child(#{$max}n + #{$item}) .u-circle {
       animation-delay: -#{$item/10}s;
    }
  }
}
```

Result:

<p data-height="268" data-theme-id="4974" data-slug-hash="Fqwpm" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Fqwpm/'>Fqwpm</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Thus, by complicating the markup, you can get more complex and interesting versions of animated transformations. You can add two or more transformations to symbols without fear that something will break:

<p data-height="268" data-theme-id="4974" data-slug-hash="lGLni" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/lGLni/'>lGLni</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

You can replace the circles with something else by simply changing the symbol:

<p data-height="268" data-theme-id="4974" data-slug-hash="bEIuo" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/bEIuo/'>bEIuo</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The result is a kind of constructor in which you can easily change the appearance and animations of the preloader, and the preloader itself can be as different as you like, and not necessarily in the shape of a ring.

It would be magical if all this beauty just worked everywhere, but it’s not that simple. IE9-11 do not support CSS animations and CSS transformations assigned to SVG elements at all, that is, in them the circles will remain stacked in the upper left corner, as in <a href="https://codepen.io/yoksel/pen/rAwgq">this example</a>. I also assume that there may be performance problems on weaker devices.

I liked the results of the experiments, although if the transforms could be added, the code would be more elegant. I would also like more uniform browser support. In my opinion, such preloaders are not yet ready for widespread use, but they can certainly be used on promotional sites as a small, effective addition.

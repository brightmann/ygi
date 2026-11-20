---
title: CSS Animations for Image Rotation

tags: [animation]

image: //img-fotki.yandex.ru/get/6737/5091629.a1/0_848b9_3d07c8ba_orig
description: 'In the process of creating a demo with animated SVG masks, I had to really understand the algorithms for CSS animations. These demos use two animations: one for the mask, the other for showing the images sequentially. I was interested in the algorithm options for the second animation.'

links:
- href: /css-animation/
  text: Css Animation
- href: /animated-svg-mask/
  text: Animated SVG masks
---

In the process of experimenting with <a href="/animated-svg-mask/">animated SVG masks</a>, I had to really understand the CSS animation algorithms. <!--more-->

For example, <a href="https://codepen.io/yoksel/pen/eIxmr">this demo</a> uses two animations: one for the mask, the other for changing images. Now we will talk about the second (and its variants).

Such animation is needed to sequentially show and hide pictures, while the effect of their appearance is provided by another animation.

With HTML elements this could be done with a single animation, but with SVG masks the same mask is used for all rotation elements and cannot be set to delay playback based on the position of the element it is applied to. There are two solutions: create a mask for each step with the required playback delay, or simply hide elements that are not needed at the moment. I chose the second option.

I didn't want to use JS because simple animation can be done using CSS. In addition, the use of variables in SCSS makes it easy to synchronize the animations of masks and image changes with each other.

So, <b>the first version of the animation</b>.

<b>Task:</b> create an algorithm for sequentially changing an arbitrary number of images. One image should replace another without smooth transitions. One picture is shown at a time.

Here's how it should work:

<p data-height="400" data-theme-id="4974" data-slug-hash="kDpsG" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/kDpsG/'>kDpsG</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Let's mark up the gallery:

```html
<ul class="rotation">
  <li class="rotation__item"></li>
  <li class="rotation__item"></li>
  <li class="rotation__item"></li>
  <li class="rotation__item"></li>
</ul>
```

In the demo I added pictures as a background, but inside the gallery elements there can be any content. To demonstrate SVG masks, the gallery structure is transferred, accordingly, to SVG.

Add SCSS:

```css
$rotation-height: 270px;

.rotation {
  width: 100%;
  height: $rotation-height;

  &__item {
    position: absolute;
    width: 100%;
    height: $rotation-height;
  }
}
```

Now comes the fun part: the animation. Create the config:

```css
/* количество элементов в галерее */
$max: 4;
/* длительность анимации */
$duration: 8s;
/* длительность одного шага */
$step: $duration/$max;
/* длительность показа одной картинки в процентах от общей длительности анимации */
$step-perc: percentage(1/$max);
```

You need to understand how the last parameter works. The same animation is set for all elements: the picture is shown for a short period of time and then hidden. The <code>$step-perc</code> variable is used in the animation code and determines how long each image will be displayed:

```css
@keyframes hide {
  0% {
    opacity: 1;
  }
  #{$step-perc} {
    opacity: 0;
  }
}
```

For example, in a gallery of four items, each image will be shown 25% of the time and hidden the rest of the time.

Set animation for gallery elements:

```css
.rotation__item {
  opacity: 0;
  animation: hide $duration step-end infinite;
}
```

Elements disappear and appear at the same time, you need to add a playback delay to each of them:

```css
.rotation__item {
  opacity: 0;
  animation: hide $duration step-end infinite;

  /* задержки анимации */
  &:nth-child(#{$max}n + 1){
    /* ничего не делаем */
  }
  &:nth-child(#{$max}n + 2){
    animation-delay: $step;
  }
  &:nth-child(#{$max}n + 3){
    animation-delay: $step*2;
  }
  &:nth-child(#{$max}n + 4){
    animation-delay: $step*3;
  }
}
```

The first element does not need a delay, for the rest we calculate the delay by multiplying the duration of one step by the position of the element minus 1. That is, the second element will start playing one step later, the third - two steps later, and so on.

Obviously, it will be more convenient to calculate <code>animation-delay</code> in a loop:

```css
.rotation__item {
  opacity: 0;
  animation: hide $duration step-end infinite;

  /* Задержки анимации */
  @for $item from 2 through $max {
    &:nth-child(#{$max}n + #{$item}){
      animation-delay: $step*($item — 1);
      }
    }
  }
```

In addition, this way you won’t have to add or remove the delay of steps every time if their number changes.

This is what we end up with:

<p data-height="400" data-theme-id="4974" data-slug-hash="hzlnj" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/hzlnj/'>hzlnj</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

You can edit the workpiece by doing a simple rotation:

<p data-height="400" data-theme-id="4974" data-slug-hash="kpoiq" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/kpoiq/'>kpoiq</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

You can also add special effects using animated SVG masks, for example:

<p data-height="400" data-theme-id="4974" data-slug-hash="kJwCb" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/kJwCb/'>kJwCb</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

For this demo, the gallery structure was transferred to SVG.

<b>Second animation option.</b>

<b>Task:</b> pictures appear in turn from the lower layers to the upper ones, while two pictures are visible at the same time: the current one and the previous one below it, this will allow using masks to “flow” from one picture to another.

How it should work:

<p data-height="400" data-theme-id="4974" data-slug-hash="KrqHC" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/KrqHC/'>KrqHC</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Animation is done according to the same principles as the previous one, but has its own characteristics.

Firstly, there should also be something under the very first layer, for this we change the marking a little and add a “bottom”:

```html
<dl class="rotation">
  <dt class="rotation__item--static item--1"></dt> <!-- это дно -->
  <dd class="rotation__item item--2"></dd>
  <dd class="rotation__item item--3"></dd>
  <dd class="rotation__item item--4"></dd>
  <dd class="rotation__item item--5"></dd>
</dl>
```

It does not participate in rotation, but simply always lies there. The image in this layer should be the same as in the last layer, this will allow the animation to loop.

Secondly, so that each layer has time to serve as a substrate for the next one, we lengthen the display time of each layer, now it is equal to two steps:

```css
/* было */
$step-perc: percentage(1/$max);
/* стало */
$step-perc: percentage(1/$max*2);
```

During the first step, the layer appears itself, and during the second it serves as a background for the next layer.

Thirdly, the topmost layer will need its own separate animation.

Why?

As mentioned above, in this animation option, each layer is shown in two time steps.

The last layer is also initially shown in two steps, but it is the topmost one and cannot serve as a base for other layers (there is nothing above it). Therefore, it needs to be shown one time step and then hidden. In this case, the bottommost layer is a copy of the top one, so if after one step you hide the topmost layer, the exact same bottom one will appear underneath it, and the animation will neatly loop.

Let's make a variable with half the animation duration:


```css
$half-step-perc: percentage(1/$max);
```

Duplicate the animation with a new duration:

```css
@keyframes hide-half-step {
  0% {
    opacity: 1;
  }
  #{$half-step-perc} {
    opacity: 0;
  }
}
```

We redefine the animation for the last step:

```css
.rotation__item {
  opacity: 0;
  animation: hide $duration step-end infinite;

  /* имя анимации для последнего шага */
  &:nth-of-type(#{$max}n) {
    animation-name: hide-half-step;
  }

  /* задержки анимации */
  @for $item from 2 through $max {
    &:nth-of-type(#{$max}n + #{$item}) {
      animation-delay: $step*($item — 1);
    }
  }
}
```

Visually, the result is practically no different from the previous version:

<p data-height="400" data-theme-id="4974" data-slug-hash="rJogH" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rJogH/'>rJogH</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

But if you apply SVG masks to the gallery elements, you get something interesting:

<p data-height="400" data-theme-id="4974" data-slug-hash="zcmki" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/zcmki/'>Simple animated mask in SVG (rhomb)</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Synchronizing layered animations is not the easiest task, but the result is worth it.

I am sure that based on such animations you can come up with interesting visual effects, and understanding how they work can save time if you need to do something similar.

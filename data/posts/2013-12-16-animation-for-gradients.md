---
title: Animating CSS Gradients

tags: [gradients, animation, box-shadow, draw-on-css]

image: //img-fotki.yandex.ru/get/9104/5091629.9a/0_7ec7a_bce9f6bd_M.png
description: How to animate gradients if you really need to.

links:
- href: /box-shadow/
  text: Box-shadow
- href: /css-animation/
  text: Css Animation
---

As you know, gradients do not like to be animated.<!--more-->

To be precise, the position and size of the gradient animate successfully (just like any other background):

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_1.html?css"></iframe>

But trying to manipulate the colors that make up the gradient fails:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_2.html?css"></iframe>

In FF, the colors in the example will not change at all, in Chrome they will, but abruptly, without a smooth transition.

<i><b>UPD:</b> In Webkit, using Sass, you can simulate a smooth change of colors, but the code turns out to be indecently sized. Example: <a href="https://codepen.io/yoksel/pen/gBDFj">codepen.io/yoksel/pen/gBDFj</a>.
At the time of editing, the demo does not work in Firefox (27.0.1), the animation is simply ignored.</i>

In some cases, if you need to make a gradient with a smooth change of colors, you can use <code>box-shadow</code>, which animates perfectly. Test:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_
3.html?output"></iframe>

Example code:

```css
DIV {
  background: gold;
  box-shadow: 0 -200px 100px -120px crimson inset;
  animation: background 3s infinite alternate;
}

@keyframes background {
  50% {
    background: skyblue;
    box-shadow: 0 -200px 100px -100px yellowgreen inset;
  }
}
```

The background color in this case is part of the gradient.

The shadow is set with the <code>inset</code> parameter (inner shadow), with a large blur radius (in the example <code>100px</code>) to simulate a gradient, and with large negative padding (<code>-120px</code>) - so that only the lower part is visible from the usual inner shadow. You can read more about shadows <a href="/box-shadow/">here</a>.

Complex gradients are made using several shadows:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_4.html?css"></iframe>

The code, of course, turns out to be large and inconvenient, but it completely solves the problem.

The method came up when I wanted to make an animation in which it was possible to change the color of the sky depending on the time of day:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/animation-for-gradients/demo_5
.html?output"></iframe>

The shadows did a great job. I think that the method can be useful in some cases and has a right to exist.

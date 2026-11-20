---
title: Box-shadow

tags: [box-shadow, pseudo-elements, draw-on-css]

links:
- href: /cells/
  text: Cells in CSS
- href: /shadowpainter/
  text: Drawing animated shadows
---
The <code>box-shadow</code> property allows you to add one or more shadows to elements.<!--more-->

Specification: <a href="http://www.w3.org/TR/css3-background/#the-box-shadow">w3.org/TR/css3-background/#the-box-shadow</a>

The syntax is quite simple:


```css
box-shadow: 15px 15px 5px -5px rgba(0,0,0,.2);
```

This code will give a shadow like this:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/box-shadow/demo_1.html?output"></iframe>

The first value is responsible for the indent on the left, the second - on the top. Values ​​can be negative.
Third is the blur radius. If the value is not specified or equal to 0, the shadow has clear edges.
Fourth - decreasing or increasing the shadow. Values ​​can be negative.

Unfortunately, the values ​​of the previous properties cannot be specified as percentages.

The last value is color. It is very convenient to set it in hsla or rgba so that the shadow is transparent and darkens the underlying background, regardless of its color.

There is no way to redefine just the shadow color; to do this you will have to duplicate all the values.

There is one more parameter - <code>inset</code>. If specified, the shadow is cast inside the element.

When using multiple shadows, they are specified one after the other, separated by commas.

Unlike gradients, shadows are animated, so in some cases they can be used instead of gradients.

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/box-shadow/demo_2.html?output"></iframe>

Moreover, if there are several shadows, changing the order of the specified shadows during animation gives an interesting effect:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/box-shadow/demo_3.html?output"></iframe>

You can do a lot of interesting things with shadows, from shadows themselves to various decorative elements.

Each of the examples below is made using shadows based on a single div, some using pseudo-elements:

<iframe class="live-snippet" style="height: 650px" src="../assets/demo/box-shadow/demo_4.html?output"></iframe>

You can also make a rainbow:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/box-shadow/demo_5.html?output"></iframe>

Or, for example, buttons:

<iframe class="live-snippet" style="height: 270px" src="../assets/demo/box-shadow/demo_6.html?output"></iframe>

Or a bubble with the text:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/box-shadow/demo_7.html?output"></iframe>

There is simply an amazing amount of possibilities that such a simple property provides.

Also, long shadows have become popular recently (in this case, <code>box-shadow</code> + <code>text-shadow</code>):

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/box-shadow/demo_8.html?output"></iframe>

The essence of the method is to use many shadows, while those closest to the figure have the color of the actual shadows, and those farthest from it smoothly transition to the background color.
Using <code>rgba</code> with transparency will not work here, because then the shadows will show through under each other.

It’s inconvenient to write such things by hand, so it will be easier to use generators:

* <a href="http://sandbox.juan-i.com/longshadows/">sandbox.juan-i.com/longshadows/</a>
* <a href="http://www.longshadowgenerator.com/">longshadowgenerator.com/</a>
* <a href="https://codepen.io/awesomephant/pen/mAxHz/">codepen.io/awesomephant/pen/mAxHz</a>

The disadvantage of this method is that shadows can only be applied on top of a uniform background, but when used wisely they look very impressive.

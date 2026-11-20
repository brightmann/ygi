---
title: Arrows using the border property

tags: [borders, draw-on-css]

description: Using border you can easily make arrows of different sizes and in different directions.
---

Using <code>border</code> you can easily make arrows of different sizes and in different directions.

To understand the general principle, let's take a zero-size div, give it a thick frame and color it in different colors: <!--more-->

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_1.html?css"></iframe>

Now it’s enough to set <code>transparent</code> instead of colors that are not needed, and reset <code>border</code> opposite the desired corner so that it does not affect the width of the shape:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_2.html?css"></iframe>

By resetting <code>border</code> not on one side, but on both sides, you can get the following corners:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_3.html?css"></iframe>

A similar effect can be achieved by assigning a color to two adjacent sides:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_4.html?css"></iframe>

In this case, there may be a slight unevenness in the middle of the long side, unlike the first method.

And if you set the color on three sides, you get flags :)

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_5.html?output"></iframe>

But let's get back to the arrows. By combining <code>border</code> and pseudo-elements you can get the following options:

<iframe class="live-snippet" style="height: 450px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_6.html?output"></iframe>

The big advantage of this method is the absence of images, which allows you to change the color and size of the arrow at any time.

This is also an easy way to make ribbons:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_7.html?output"></iframe>

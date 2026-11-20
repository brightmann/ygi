---
title: 'CSS shapes: petal'

tags: [experiments, box-shadow, draw-on-css]

description: 'You can easily make a petal out of one div using border-radius.'
---
You can easily make a petal from one <code>div</code> using <code>border-radius</code>:<!--more-->

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-figury-lepestok/demo_1.html?output"></iframe>

Using <code>box-shadow</code> - another one:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-figury-lepestok/demo_2.html?output"></iframe>

Using <code>:before</code> - a couple more, and you get 4 petals:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-figury-lepestok/demo_3.html?output"></iframe>

And by adding <code>:after</code> and <code>transform</code> you can make 6 petals:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_4.html?output"></iframe>

For clarity, let's paint the petals in different colors. Red is the original <code>div</code>, green is <code>:before</code>, orange is <code>:after</code>, yellow is the <code>box-shadow</code> of these three elements.

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_5.html?output"></iframe>

Flower with 4 or 6 petals based on one element! : )
Moreover, using <code>border-radius</code> you can control the shape of the petals.

Now let's make the petals oval using pseudo-elements and <code>transform</code>. It is based on two <code>div</code>'s:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_6.html?output"></iframe>

Using the same method, you can make droplet-shaped petals, and also add frames or shadows to them:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_7.html?output"></iframe>

<iframe class="live-snippet" style="height: 370px" src="../assets/demo/css-figury-lepestok/demo_8.html?output"></iframe>

In this case, you can't get by with just one element, because the object's shadow cannot be rotated.

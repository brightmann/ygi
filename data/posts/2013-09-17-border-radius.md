---
title: Border-radius

tags: [borders, draw-on-css]

description: Border-radius is a property for rounding corners.

links:
- href: /css-figury/
  text: Css shapes
---

<strong>Border-radius</strong> is a property that adds rounded corners to elements.

The fillet can be set for the entire element at once:

```css
border-radius: 10px;
```

or different angles separately, for example:

```css
border-top-left-radius: 25px;
border-top-right-radius: 50%;
```

Possible values: numbers or percentages.<!--more-->

<iframe class="live-snippet" style="height: 275px" src="../assets/demo/border-radius/demo_1.html?output"></iframe>

If you specify two <!--more--> values, the first will correspond to the top left and bottom right corners, and the second will correspond to the top right and bottom left:

<iframe class="live-snippet" style="height: 230px" src="../assets/demo/border-radius/demo_2.html?output"></iframe>

The values ​​specified via <code>/</code> define the horizontal and vertical radii:

<iframe class="live-snippet" style="height: 230px" src="../assets/demo/border-radius/demo_3.html?output"></iframe>

In this way, you can set different horizontal and vertical radii both for the entire figure at once and for individual corners:

<iframe class="live-snippet" style="height: 230px" src="../assets/demo/border-radius/demo_4.html?output"></iframe>

By experimenting with radii you can make, for example, an egg, a drop or a lemon:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/border-radius/demo_5.html?output"></iframe>

Or this thing:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/border-radius/demo_6.html?output"></iframe>

Or maybe a ball :)

<iframe class="live-snippet" style="height: 475px" src="../assets/demo/border-radius/demo_7.html?output"></iframe>

Or clouds:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/border-radius/demo_8.html?output"></iframe>

Or a flower, or some other nonsense:

<div class="columns"><div class="column column-left">
    <iframe class="live-snippet" style="height: 420px" src="../assets/demo/border-radius/demo_9.html?output"></iframe>
</div><div class="column column-right">
    <iframe class="live-snippet" style="height: 420px" src="../assets/demo/border-radius/demo_10.html?output"></iframe>
</div></div>

I don’t think it makes sense to draw like this in Css, but the examples show that with the help of imagination and a small amount of code you can do a lot of interesting things.

Article inspired by <a href="http://lanyrd.com/2013/cssday/scfzdr/#link-tdth">presentation about border-radius</a> by <a href="http://lea.verou.me/">Lea Verou</a>

Specification: <a href="http://www.w3.org/TR/css3-background/#the-border-radius">w3.org/TR/css3-background/#the-border-radius</a>

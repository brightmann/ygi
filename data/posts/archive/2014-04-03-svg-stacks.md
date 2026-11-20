---
title: "SVG stacks"

tags: [svg]

image: "//img-fotki.yandex.ru/get/9809/5091629.9d/0_80720_8dc116f0_L.png"
description: "Stacks are another way of organizing SVG. Like a sprite, only better — as if we could use use in CSS. Unfortunately, the method is very unevenly supported by modern browsers."
links:
- href: "http://simurai.com/blog/2012/04/02/svg-stacks/"
  text: SVG Stacks
- href: "https://github.com/preciousforever/SVG-Stacker"
  text: "SVG-Stacker"
- href: http://www.broken-links.com/2012/08/14/better-svg-sprites-with-fragment-identifiers/
  text: Better SVG Sprites With Fragment Identifiers
---

Stacks are another way of organizing SVG. Like a sprite, only better — as if we could use <code>use</code> in CSS.

Unfortunately, the method is very unevenly supported by modern browsers. <!--more-->

The method was proposed here: <a href="http://simurai.com/blog/2012/04/02/svg-stacks/">simurai.com/blog/2012/04/02/svg-stacks/</a> 2 years ago. Below is my loose retelling: an explanation of the principle and demos for testing.

What does the method consist of?

Suppose we have an SVG sprite. To show the needed piece of the picture we move it with <code>background-position</code>. The bigger the sprite, the more tiresome it is to set its own background position for each picture. Of course, the process can be automated, but what if we could simply stack the pictures inside the file, hide them all, and show the needed picture by referring to it by ID?

For example, there are two squares, one on top of the other, the green one on top:

<svg width="200" height="200" viewbox="0 0 200 200"><g id="svg-no"><rect fill="#FF4646" width="200" height="200" rx="8"/><text id="No." font-family="Palatino" font-size="90" fill="#fff"><tspan x="28" y="130">No.</tspan></text></g><g id="svg-yes"><rect fill="#a2d529" width="200" height="200" rx="8"/><text id="Yes!" font-family="Palatino" font-size="90" fill="#fff"><tspan x="18" y="130">Yes!</tspan></text></g></svg>

Approximate code:

```html
<svg width="150" height="150">
  <g id="no">
    <rect fill="crimson" width="150" height="150" rx="8"/>
  </g>
  <g id="yes" class="hidden">
    <rect fill="yellowgreen" width="150" height="150" rx="8"/>
  </g>
</svg>
```

By default the bottom element (the red one) should be shown, so let's add CSS:


```css
.hidden { display: none; }
```

<svg width="200" height="200" viewbox="0 0 200 200"><style>.hidden { display: none; } :target { display: block; }</style><g><rect fill="#FF4646" width="200" height="200" rx="8"/><text id="No." font-family="Palatino" font-size="90" fill="#fff"><tspan x="28" y="130">No.</tspan></text></g><g class="hidden"><rect fill="#a2d529" width="200" height="200" rx="8"/><text id="Yes!" font-family="Palatino" font-size="90" fill="#fff"><tspan x="18" y="130">Yes!</tspan></text></g></svg>

And now let's use the <code>:target</code> selector to show only the one we need:


```css
:target { display: block; }
```

Let's add the element's ID (<code>#yes</code>) to the page address <a href="#yes">Click!</a> and we see the green square:

<svg width="200" height="200" viewbox="0 0 200 200"><style>.hidden { display: none; } :target { display: block; }</style><g id="no"><rect fill="#FF4646" width="200" height="200" rx="8"/><text id="No." font-family="Palatino" font-size="90" fill="#fff"><tspan x="28" y="130">No.</tspan></text></g><g id="yes" class="hidden"><rect fill="#a2d529" width="200" height="200" rx="8"/><text id="Yes!" font-family="Palatino" font-size="90" fill="#fff"><tspan x="18" y="130">Yes!</tspan></text></g></svg>

Similarly, you can play around requesting the file by direct link: <a href="https://yoksel.github.io/assets/img/svg/yes-no.svg">without ID</a> and <a href="https://yoksel.github.io/assets/img/svg/yes-no.svg#yes">with ID</a>

Works great!

What if we try different ways of embedding, for example <code>embed</code>, <code>img</code> or <code>background-image</code>?

I made a demo with different ways to check this: <a href="https://codepen.io/yoksel/full/KDpqu/">https://codepen.io/yoksel/full/KDpqu/</a>.

And here's where something interesting is discovered:

- embedding via <code>embed</code> and <code>iframe</code> works in all browsers;
- embedding via <code>img</code> and <code>background-image</code> — in IE9+, Firefox and old Opera (only <code>img</code>), and doesn't work at all in Webkits.

The lack of ID support for <code>background-image</code> in Webkits means stacks can't be used yet.

I really like the idea and elegance of SVG stacks, and I hope that one day we'll be able to use them in all browsers without limitations.

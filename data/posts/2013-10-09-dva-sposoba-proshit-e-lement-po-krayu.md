---
title: Two ways to “stitch” an element along the edge

tags: [borders, pseudo-elements, draw-on-css]

description: There are two ways to create the effect as if an element was stitched on a sewing machine - using pseudo-elements and using outline.
---
There are two ways to make the effect as if the element was stitched on a sewing machine: using pseudo-elements and using <code>outline</code>.<!--more-->

<h2>Outline</h2>

```css
outline: 1px dashed salmon;
outline-offset: -15px;
```

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/dva-sposoba-proshit-e-lement-po-krayu/demo_1.html?output"></iframe>

<strong>Plus:</strong>
- does not require additional elements.

<strong>Minus:</strong>
- does not accept <code>border-radius</code>, therefore, the method is not suitable for elements with rounded corners.

In addition, the property behaves differently in Firefox: <code>outline</code> reacts to the size and position of the shadow.

<img src="//img-fotki.yandex.ru/get/9090/5091629.98/0_7ba5b_a045ee5f_orig.png">

<h2>Pseudo-elements</h2>

First, we need a wrapper for the text so that the text layer can then be raised above the border pseudo-element.
Secondly, the general wrapper and the text container will need to be set to <code>position: relative;</code>.

After that, we create a pseudo-element and draw a frame:


```css
.wrapper:before {
      content: "";
      display: block;
      position: absolute;
      top: 15px;
      right: 15px;
      bottom: 15px;
      left: 15px;
      border: 1px dashed salmon;
      border-radius: 5px;
      }
```

Result:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/dva-sposoba-proshit-e-lement-po-krayu/demo_2.html?output"></iframe>

<strong>Plus:</strong>
- may have rounded corners.

<strong>Minus:</strong>
- requires additional markup and more code

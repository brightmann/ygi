---
title: 'Background under the lines: adding fields'

tags: [text, box-shadow]

description: 'Problem: if you set a background to inline elements, it looks like this...'

links:
- href: /box-shadow
  text: Box shadow
---

Problem: if you set a background to inline elements, it looks like this<!--more-->:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_1.html?output"></iframe>

Trying <code>padding</code>, padding was added only at the beginning and end of the line

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_2.html?output"></iframe>

A similar situation with <code>border</code>:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_3.html?output"></iframe>

An excellent solution was found here: <strong><a href="https://codepen.io/davatron5000/pen/HGjuv">codepen.io/davatron5000/pen/HGjuv</a></strong>.

The point is to add shadow. The shadow is added to any edge of the line, even if it is not the end of the line, but a break.

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_4.html?output"></iframe>


```css
box-shadow: -20px 0 yellowgreen,
             20px 0 yellowgreen;
```

The shadow does not affect the size and position of the element, so you also need to add <code>padding</code> to the parent.

Result:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_5.html?output"></iframe>

Great solution and nice effect.

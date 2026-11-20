---
title:  Tree List in CSS

tags: [experiments]

image: //img-fotki.yandex.ru/get/9895/5091629.9a/0_7ec7b_511301f7_M.png
description: Once I needed to make a hierarchical representation of the project structure, CSS was chosen for implementation.
---

Once I needed to make a hierarchical representation of the project structure, CSS was chosen for implementation.

<!--more-->

Here's what happened:

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/list-like-tree/demo_1.html?output"></iframe>

This can be done in a few simple steps.

First, create the desired structure from nested lists and headings for them:

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/list-like-tree/demo_2.html?html"></iframe>

Level nodes are created using H1 - H6 headings. That is, before each new branch there must be a heading. So that they all behave the same from the point of view of the tree list, we add a common class <code>.header</code> to them.

Add padding and frames to see the structure.

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/list-like-tree/demo_3.html?css"></iframe>

And now the fun part: adding stripes, starting with the horizontal ones.


```css
LI:before,
.header:before{
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: .5em;
  width: 15px;
  height: 0;
  border-bottom: 1px solid #333;
}
```

They are made absolutely positioned pseudo-elements. We could get away with <code>inline-block</code> with vertical alignment, but <code>position: absolute;</code> in combination with <code>bottom</code> will allow us to make vertical lines pointing up.

To ensure that the stripes do not fall out of context, list items and headings need to be given relative positioning, and so that they do not interfere with the text, the same elements need to be padded on the left.

```css
LI,
.header {
  position: relative;
  padding-left: 1.2em;
}
```

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/list-like-tree/demo_4.html?css"></iframe>

Looks strange so far. Most of the strips are in place, but some are hanging around, because all the horizontal lines are positioned relative to the bottom edge of the elements.

Now let's add vertical lines:

```css
.header:last-of-type:before,
LI:last-child:before {
  height: 1000px;
  border: 1px solid #333;
  border-width: 0 0 1px 1px
}
```

You'll end up with a forest of vertical lines, which you can easily get rid of by setting all lists to <code>overflow: hidden;</code>, here's the result:

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/list-like-tree/demo_5.html?output"></iframe>

And now the duplication of some lines is clearly visible in the structure.

This occurs because headers (<code>.header</code>) are inside list elements (<code>LI</code>), so they receive two guides.

Let's add the class <code>.p-has-headers</code> to the lists with headers and color the different guides with different colors to see what's going on.

```css
.p-has-headers > LI:before {
  border-color: red;
}

.header:before,
.header:last-of-type:before{
  border-color: green;
}
```

The regular list item guides remain black, the list guides with headings are red, and the header guides are green.

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/list-like-tree/demo_6.html?output"></iframe>

You can clearly see from the red ones that some of them are not there. For example, on the leftmost vertical, the horizontal lines are completely off, because the lines are positioned from the bottom edge of <code>LI</code>.

This works great in a simple list, but is not at all suitable for a list with a header, because in this case the branch must start at the header level, like the green ones do.

That is why styles were written for both <code>LI</code> and <code>.header</code>. If there is a heading, the upward branch should lead from it, and not from the end of the list. Thus, in lists whose items contain headers and which we marked with the class <code>.p-has-headers</code>, you can turn off the guides for immediate heirs with code like <code>UL > LI</code>.

Code:

```css
.p-has-headers > LI:before {
  content: none;
}
```

Result:

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/list-like-tree/demo_1.html?output"></iframe>

The result is a fairly simple design, the main thing is not to get confused in the list tags, and start each new branch with a title.

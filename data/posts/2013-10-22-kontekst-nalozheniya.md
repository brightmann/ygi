---
title: Overlay context
tags: [layout]

description: If you use z-index to change the stacking order of elements, problems may occur in some cases due to properties that create a new stacking context.
---
If you use <code>z-index</code> to change the stacking order of elements, problems may occur in some cases due to properties that create a new stacking context.<!--more-->

Properties that create context{{ excerpt_separator }}:
— <code>opacity</code> with a value less than 1,
- <code>transform</code>,
- <code>perspective</code>,
- <code>filter</code>.

Let's take the following design as a guinea pig:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_1.html?output"></iframe>

By default, the blue element overlaps the red element, but I gave the red element <code>z-index: 10;</code> to see the effect of the context-creating properties.

Now let's set the parent of the first element to one of the above properties, for example: <code>opacity: .99</code>:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_2.html?output"></iframe>

The first element has received its overlay context, and now <code>z-index</code> will be calculated within it.

Here you can see that the red element overlaps the green element because the red element has a high <code>z-index</code>, and the entire left element overlaps the right element, despite the red element having a high <code>z-index</code> value:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_3.html?output"></iframe>

You can try to get around this by adding <code>z-index</code> to the parent itself, but in this case the parent element will overlap the entire content of the second element, which may not always be necessary:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_4.html?output"></iframe>

Additionally, frequent use of <code>z-index</code> can make it difficult to further debug and maintain your code.

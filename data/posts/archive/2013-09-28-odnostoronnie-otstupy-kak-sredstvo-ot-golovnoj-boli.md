---
title: One-direction margins as a cure for a headache

tags: [layout]
---

A wonderful article by <strong>Harry Roberts</strong>
<a href="http://csswizardry.com/2012/06/single-direction-margin-declarations/">csswizardry.com/2012/06/single-direction-margin-declarations/</a>.

The gist of the idea is using one-direction vertical margins.<!--more--> This creates a tidy vertical rhythm and lets you swap elements around without fearing that vertical margins of different sizes will collapse somewhere unpredictably.

As our guinea pig, let's take this layout:

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/odnostoronnie-otstupy-kak-sredstvo-ot-golovnoj-boli/demo_1.html?output"></iframe>

All header elements are given the same margin in one direction. In this case, downward.

Here's the code controlling the margins:

```css
.header-item {
  margin-bottom: 1.2em;
}

.header-item:last-child {
  margin-bottom: 0;
}
```

The first block sets the same bottom margin for all blocks in the header; the second removes it from the last element.

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/odnostoronnie-otstupy-kak-sredstvo-ot-golovnoj-boli/demo_2.html?output"></iframe>

Now you can swap the header's elements around as much as you like, and all variants will still look tidy:

<iframe class="live-snippet" style="height: 1020px" src="../assets/demo/odnostoronnie-otstupy-kak-sredstvo-ot-golovnoj-boli/demo_3.html?output"></iframe>

In my opinion, the idea is brilliant in its simplicity.

---
title: How much do selectors weigh?

tags: [selectors]

customCSS: 'specifity.css'

image: //img-fotki.yandex.ru/get/9797/5091629.9a/0_7ec6f_cda36757_M.png
description: All CSS selectors have their own weight, which determines how the same properties set in different places in the code on the same element interact.

links:
- href: http://css-tricks.com/specifics-on-css-specificity/
  text: Specifics on CSS Specificity
- href: http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/
  text: 'CSS Specificity: Things You Should Know'
- href: http://cssspecificity.com/
  text: Specificity in comics
- href: http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html
  text: Specificity using the example of "Star Wars"
---

All CSS selectors have their own weight, which determines how the same properties set in different places in the code on the same element interact.<!--more-->

This can sometimes create difficulties when a property declared lower in the code overlaps with one declared above because the former's selector is more specific (has more weight).

Here's an example of the problem. There is a div with <code>id="container"</code>, inside it is some text and a list of links.

```html
<div id="container">
  <p><a href="#">link in P</a></p>

  <ul class="list">
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
  </ul>
</div>
```

First, we give all links inside <code>#container</code> an orange background:

```css
#container A {
  background: orange;
}
```

And then, so that in the list <code>.list</code> inside the container the links have a green background, we add the following below:

```css
.list A {
  background: mediumspringgreen;
}
```

It would seem that links in the text should have an orange background, and links in the list should have a green background, but no:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/specifity/demo_1.html?output"></iframe>

Why is this so? Because the first selector contains ID and overrides the second, that is:

<code>#container A</code> <b>&gt;</b> <code>.list A</code>

<h2 id="specifity">Selector weight</h2>

The selector specificity is calculated based on 4 positions:

<iframe class="live-snippet" style="height: 220px" src="../assets/demo/specifity/demo_2.html?output"></iframe>

For each of them, the number of matching elements in the selector is counted and this number is placed in the appropriate position.

<b>Example:</b>

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/specifity/demo_3.html?output"></iframe>

<b>Selector weight</b> (descending):

<span class="wrapper-with-dottes"><code>style=""</code></span><code class="specifity"><b>1</b>,0,0,0</code>

<span class="wrapper-with-dottes"><code>#id</code></span><code class="specifity">0,<b>1</b>,0,0</code>

<span class="wrapper-with-dottes"><code>.class</code></span><code class="specifity">0,0,<b>1</b>,0</code>

<span class="wrapper-with-dottes"><code>[attr=value]</code></span><code class="specifity">0,0,<b>1</b>,0</code>

<span class="wrapper-with-dottes"><code>LI</code></span><code class="specifity">0,0,0,<b>1</b></code>

<span class="wrapper-with-dottes"><code>\*</code></span><code class="specifity">0,0,0,0</code>

Styles specified in the <code>style</code> attribute will have a unit in the first position - <code class="specifity"><b>1</b>,0,0,0</code>. This is the highest specificity, which outweighs properties specified by other methods.

You can override the styles specified in <code>style</code> by adding <code>!important</code> to the property value in the style sheet.

The opposite option is the universal selector <code>\*</code>, it has no weight: <code class="specifity">0,0,0,0</code>.

<b>Examples:</b>

<span class="wrapper-with-dottes"><code>LI</code></span><code class="specifity">0,0,0,<b>1</b></code> - selector by tag

<span class="wrapper-with-dottes"><code>UL LI</code></span><code class="specifity">0,0,0,<b>2</b></code> - a selector with two tags weighs more than with one.

<span class="wrapper-with-dottes"><code>.orange</code></span><code class="specifity">0,0,<b>1</b>,0</code> - a selector with a class weighs more than a selector with a tag.

<span class="wrapper-with-dottes"><code>.orange A SPAN</code></span><code class="specifity">0,0,<b>1</b>,<b>2</b></code> - the selector will outweigh the previous one, because in addition to the class it contains two tags.

<span class="wrapper-with-dottes"><code>#page .orange</code></span><code class="specifity">0,<b>1</b>,<b>1</b>,0</code> - the ID selector will override everything except inline styles.

Now let's compare the selectors from the original example:

<span class="wrapper-with-dottes"><code>#container A</code></span><code class="specifity">0,<b>1</b>,0,<b>1</b></code>

<span class="wrapper-with-dottes"><code>.list A</code></span><code class="specifity">0,0,<b>1</b>,<b>1</b></code>

<code class="specifity">0,<b>1</b>,0,<b>1</b></code> <b>></b> <code class="specifity">0,0,<b>1</b>,<b>1</b></code> - you can clearly see that the selector with ID weighs more than the selector with class, so all links have an orange background, although they are set to green below in the code.

<h2 id="solutions">Solution options</h2>

<b>1.</b> Add <code>!important</code>

```css
#container A {
  background: orange;
}

.list A {
  background: mediumspringgreen !important;
}
```

Links will get a green background, quickly and easily.
But this is a bad way, because the code becomes even more confusing.
Over time, overriding <code>!important</code> in one place may require adding it in other places. Hierarchy will begin to work not from top to bottom and from general to specific, but at random. In the end, maintaining such code will be very problematic.

In general, using <code>!important</code> is not recommended, but it can be useful if you want a frequently used block to look the same on all pages, regardless of the environment.
In any case, you should always clearly understand why you are using it.

<b>2.</b> The next obvious way is to add <code>#container</code> to the second selector to increase its weight:

```css
#container A {
  background: orange;
}

#container .list A {
  background: mediumspringgreen;
}
```

This will also work, but the solution is so-so: the chain of selectors is lengthened (which can affect the page rendering speed) and the readability of the code deteriorates.
You shouldn't do that either.

Methods 1 and 2 can be used if you do not have access to the markup and it does not contain the necessary classes.
If you can edit the markup or the elements do have classes, use the last method, the most correct:

<b>3.</b> Just don't use ID selectors in styles, use classes.

Let's look at the difference between <code>#container</code> and <code>.container</code>:

<span class="wrapper-with-dottes"><code>#container A</code></span><code class="specifity">0,<b>1</b>,0,<b>1</b></code> - the selector with ID overrides everything, regardless of its location in the code.

Let's replace <code>id</code> in the page markup with <code>class</code>:

<span class="wrapper-with-dottes"><code>.container A</code></span><code class="specifity">0,0,<b>1</b>,<b>1</b></code> - a selector with a class weighs less, it is less specific.

The link selector in the list weighs the same:

<span class="wrapper-with-dottes"><code>.list A</code></span><code class="specifity">0,0,<b>1</b>,<b>1</b></code>

This means that if the selector weights are equal, the styles declared below in the code will be applied.
That is, it will be enough to simply write styles, going from general to specific, from top to bottom.

As a result, the markup could look like this:

```html
<div class="container">
  <p><a href="#">link in P</a></p>

  <ul class="list">
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
  </ul>
</div>

```

And the styles are like this:


```css
.container A {
  background: orange;
}

.list A {
  background: mediumspringgreen;
}
```

And the code works as expected:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/specifity/demo_4.html?output"></iframe>

<i>If <code>id</code> in your markup is already used in Js, it would be more logical to add a class to the element and override the styles on it. If <code>id</code> is only used in markup, it is better to replace it with <code>class</code>.</i>

As general recommendations, it should also be mentioned that you need to use tag selectors as little as possible and class selectors as much as possible. This will help avoid problems when reusing site blocks, and when using “smart” classes, it can significantly shorten selector chains, increase code readability and page rendering speed.

Specifications:
* <a href="http://www.w3.org/TR/CSS2/cascade.html#specificity">w3.org/TR/CSS2/cascade.html#specificity</a>
* <a href="http://www.w3.org/TR/css3-selectors/#specificity">w3.org/TR/css3-selectors/#specificity</a>

---
title: CSS selectors

description: Selector Reference.
tags: [selectors]

links:
- href: /specifity/
  text: How much do selectors weigh?
- href: /pages/css-selectors
  text: CSS selectors in one table
---

There are plenty of ways to access the elements you need in CSS. <br/>
Each new CSS specification has added something new, and now we have many different selectors. <!--more-->In addition, the difference in specifications can be used, for example, to hide styles from older browsers.

The specification can be found here: <a href="http://www.w3.org/TR/css3-selectors/#selectors">w3.org/TR/css3-selectors</a>.

Selectors are divided into several types:

<ul>
  <li>by type (<code>H1</code>, <code>TD</code>, <code>HR</code>...);</li>
  <li>universal selector - <code>*</code> - denotes an element of any type;</li>
  <li>attribute selectors (<code>[data-name]</code>, <code>[data-name$="hidden"]</code>);</li>
  <li>selectors by class (<code>.main</code>, <code>.header__nav</code>);</li>
  <li>selectors by ID (<code>#form</code>, <code>#submit</code>);</li>
  <li>pseudo-classes:

  <ul>
    <li>dynamic (<code>:hover</code>, etc.);</li>
    <li>target selector (<code>:target</code>);</li>
    <li>language selector (<code>:lang(en)</code>);</li>
    <li>states of interface elements (<code>:enabled</code>, <code>:checked</code>...);</li>
    <li>structural pseudo-classes (<code>:root</code>, <code>:nth-child</code>);</li>
    <li>negation pseudo-class (<code>:not(P)</code>).</li>
  </ul>

  </li>
  <li>pseudo-elements (<code>:before</code>, <code>:first-line</code>);</li>
  <li>combinators (<code>DIV SPAN</code>, <code>P + H1</code>);</li>
</ul>

The selectors below are grouped by specification. This will help us understand which ones work everywhere (from CSS1), which ones work almost everywhere (from CSS2), and which ones may not work in some places.

<h2>Selectors from CSS1</h2>

The simplest and most familiar to everyone:

<ul>
	<li>referring to an element by tag (<code>BODY</code>, <code>A</code>, <code>TABLE</code>, etc.);</li>
	<li> by ID (<code>#main</code>);</li>
	<li> by class (<code>.header-image</code>);</li>
	<li> accessing a child through the parent (<code>UL A</code>, <code>.sidebar .widget</code>);</li>
	<li> link states <code>A:link</code>, <code>A:visited</code>, <code>A:hover</code>;</li>
	<li> pseudo-element for the first line of text - <code>P::first-line</code>;</li>
	<li> pseudo-element for the first character in the text - <code>P::first-letter</code>.</li>
</ul>
Not too much :)

<h2>CSS2 selectors</h2>

This specification adds a lot of interesting things:

<ul>
<li id="asteriks" data-name="*"><p><code>*</code> is a universal selector. For example, <code>* {margin: 0; }</code> will remove indentation from all elements on the page.</p></li>
<li id="has-attr" data-name="E[foo]"><p><code>E[foo]</code> - elements with a given attribute. </p>

<p>For example, code:</p>


```css
P[data-content] {
  border: 2px solid crimson;
}
```

<p>will only select paragraphs that have the <b>data-content</b> attribute:</p>

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_1.html?output"></iframe>
</li>

<li id="has-attr-val" data-name="E[foo='bar']"><p><code>E[foo="bar"]</code> - elements whose attribute has a specified value.</p>


```css
P[data-content="hello"] {
  border: 2px solid orange;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_2.html?output"></iframe>
</li>

<li id="has-attr-val-wtsp" data-name="E[foo~='bar']"><p><code>E[foo~="bar"]</code> is an element that has an attribute with a list of values, separated by space, one of which is equal to the specified one.</p>


```css
P[data-content~="hello"] {
  border: 2px solid yellowgreen;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_3.html?output"></iframe>
</li>

<li id="has-attr-val-hpsp" data-name="E[foo|='bar']"><p><code>E[foo|="bar"]</code> is an element that has an attribute with a list of values, separated by a hyphen, that begins with the given one.</p>


```css
P[data-content|="hello"] {
  border: 2px solid steelblue;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_4.html?output"></iframe>
</li>

<li id="first-child" data-name="E:first-child"><p><code>E:first-child</code> is a pseudo-class that accesses the first element of several within the parent.</p>


```css
P:first-child {
  background: gold;
}
```

<iframe class="live-snippet" style="height: 480px" src="../assets/demo/css-selectors/demo_5.html?output"></iframe>

<p>The selector selects the first element only if it matches the given tag or class and only if it is the very first child of the parent.</p>

<p>To select the first element from a list of children of a particular type, there is another selector - <code>:first-of-type</code>, added to CSS3.</p>
</li>

<li id="lang" data-name="E:lang(fr)"><p><code>E:lang(fr)</code> - selects elements in the specified language. The element's language can be obtained from the HTTP headers sent by the server, from the <code>meta</code> tag specified in the <code>head</code>, or if the element has the <code>lang</code></p> attribute set

<p>For example, this code will add a raspberry background to all elements for which the language is defined as Russian:</p>


```css
P:lang(ru) {
  background: crimson;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_6.html?output"></iframe></li>

<li id="before" data-name="E::before"><p><code>E::before</code> - generated content before the given element.</p></li>
<li id="after" data-name="E::after"><p><code>E::after</code> - generated content after the element.</p>

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors/demo_7.html?output"></iframe>
</li>

<li id="child" data-name="E > F"><p><code>E > F</code> - selects an element only if it is a direct child of its parent (not nested within anything else).</p>


```css
DIV > A {
  background: darkviolet;
  color: #FFF;
}
```

<iframe class="live-snippet" style="height: 320px" src="../assets/demo/css-selectors/demo_8.html?output"></iframe>
</li>

<li id="next" data-name="E + F"><p><code>E + F</code> - selects the second specified element that immediately follows the first.</p>


```css
P + H3 {
  background: darkturquoise;
  color: lightseagreen;
}
```


<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-selectors/demo_9.html?output"></iframe>
</li>
</ul>
<b>Continuation:</b> <a href="/css-selectors-part2/">Css selectors, part 2</a>.

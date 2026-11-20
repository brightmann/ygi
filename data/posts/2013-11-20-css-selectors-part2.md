---
title: "CSS selectors, part 2"

description: Continuation of the guide to selectors.
tags: [selectors]

links:
- href: /specifity/
  text: How much do selectors weigh?
- href: /pages/css-selectors
  text: CSS selectors in one table
---

Start here: <a href="/css-selectors">Css selectors</a>.<!--more-->

<b>CSS3 selectors:</b>

<ul>
<li id="attr-begin" data-name="E[foo^='bar']"><p><code>E[foo^="bar"]</code> - an element with a given attribute, the value of which begins with the given string.</p>

```css
P[data-content^="hello"] {
  border: 2px solid tomato;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_1.html?output"></iframe>
</li>


<li id="attr-end" data-name="E[foo$='bar']"><p><code>E[foo$="bar"]</code> is an element with a given attribute whose value ends with the given string.</p>

```css
P[data-content$="hello"] {
  border: 2px solid chartreuse;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_2.html?output"></iframe>
</li>

<li id="attr-contains" data-name="E[foo*='bar']"><p><code>E[foo*="bar"]</code> is an element with a given attribute, the value of which contains the given string.</p>


```css
P[data-content*="hello"] {
  border: 2px solid mediumseagreen;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_3.html?output"></iframe>
</li>

<li id="root" data-name=":root"><p><code>E:root</code> is a pseudo-class representing the root element of the document. Typically this is the <code>html</code> tag.</p></li>

<li id="nth-child" data-name="E:nth-child(n)"><p><code>E:nth-child(n)</code> - <code>n</code> is the child element.</p>


```css
P:nth-child(2) {
  border-color: crimson;
}
P:nth-child(3) {
  border-color: orange;
}
P:nth-child(6) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_4.html?output"></iframe>

More details about the selector: <a href="/nth-child/">
Nth-child and nth-of-type</a>
</li>

<li id="nth-last-child" data-name="E:nth-last-child(n)"><p><code>E:nth-last-child(n)</code> - <code>n</code> child element, starting from the end.</p>


```css
P:nth-last-child(1) {
  border-color: crimson;
}
P:nth-last-child(4) {
  border-color: orange;
}
P:nth-last-child(5) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_5.html?output"></iframe>
</li>

<li id="nth-of-type" data-name="E:nth-of-type(n)"><p><code>E:nth-of-type(n)</code> - <code>n</code> is a child element of a certain type.</p>


```css
P:nth-of-type(1) {
  border-color: crimson;
}
P:nth-of-type(3) {
  border-color: orange;
}
P:nth-of-type(6) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 380px" src="../assets/demo/css-selectors-part2/demo_6.html?output"></iframe>
</li>

<li id="nth-last-of-type" data-name="E:nth-last-of-type(n)"><p><code>E:nth-last-of-type(n)</code> - <code>n</code> is the child element of a certain type, starting from the end.</p>


```css
P:nth-last-of-type(1) {
  border-color: crimson;
}
P:nth-last-of-type(4) {
  border-color: orange;
}
P:nth-last-of-type(6) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 380px" src="../assets/demo/css-selectors-part2/demo_7.html?output"></iframe>
</li>

<li id="last-child" data-name="E:last-child"><p><code>E:last-child</code> is the last child element.</p>


```css
P:last-child {
  border-color: slateblue;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors-part2/demo_8.html?output"></iframe>
</li>

<li id="first-of-type" data-name="E:first-of-type"><p><code>E:first-of-type</code> is the first child element of a certain type.</p>


```css
P:first-of-type {
  border-color: orchid;
}
```

<iframe class="live-snippet" style="height: 260px" src="../assets/demo/css-selectors-part2/demo_9.html?output"></iframe>
</li>

<li id="last-of-type" data-name="E:last-of-type"><p><code>E:last-of-type</code> is the last child element of a certain type.</p>


```css
P:last-of-type {
  border-color: fuchsia;
}
```

<iframe class="live-snippet" style="height: 260px" src="../assets/demo/css-selectors-part2/demo_10.html?output"></iframe>
</li>

<li id="only-child" data-name="E:only-child"><p><code>E:only-child</code> is the only child element of the parent.</p>


```css
P:only-child {
  border-color: lightsalmon;
}
```

<iframe class="live-snippet" style="height: 370px" src="../assets/demo/css-selectors-part2/demo_11.html?output"></iframe>
</li>

<li id="only-of-type" data-name="E:only-of-type"><p><code>E:only-of-type</code> is the only child element of this type</p>


```css
P:only-of-type {
  border-color: crimson;
}
```

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/css-selectors-part2/demo_12.html?output"></iframe>
</li>

<li id="empty" data-name="E:empty"><p><code>E:empty</code> - empty element.</p></li>

<li id="target" data-name="E:target"><p><code>E:target</code> - element to which an anchor with a hash mark in the page address leads, for example <i>http://someurl.com<b>#test</b></i></p>


```css
P:target {
  border-color: orangered;
}
```

<iframe class="live-snippet" style="height: 210px" src="../assets/demo/css-selectors-part2/demo_13.html?output#test"></iframe>
</li>

<li id="enabled" data-name="E:enabled, E:disabled"><p><code>E:enabled</code>,
<code>E:disabled</code> - inputs with editing allowed and blocked.</p>


```css
INPUT:enabled {
  border: 2px solid orange;
}
INPUT:disabled {
  border: 2px solid #EEE;
  color: #CCC;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors-part2/demo_14.html?output"></iframe>
</li>

<li id="checked" data-name="E:checked"><p><code>E:checked</code> - selected radio button or checkbox</p>


```css
INPUT {
  outline: 5px solid #DDD;
}
INPUT:checked {
  outline-color: yellowgreen;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors-part2/demo_15.html?output"></iframe>
</li>

<li id="not" data-name="E:not(s)"><p><code>E:not(s)</code> - elements that do not meet the condition specified in brackets</p>


```css
*:not(DIV) {
  border-color: gold;
}
P:not([class="one"]) {
  border-color: skyblue;
}
```

<iframe class="live-snippet" style="height: 270px" src="../assets/demo/css-selectors-part2/demo_16.html?output"></iframe>
</li>

<li id="next" data-name="E ~ F"><p><code>E ~ F</code> is the second element that follows the first, regardless of their distance from each other. All following elements are selected, as opposed to <code>E + F</code>, which selects only those immediately after each other.</p>


```css
P ~ DIV {
  border-color: yellowgreen;
}
```

<iframe class="live-snippet" style="height: 320px" src="../assets/demo/css-selectors-part2/demo_17.html?output"></iframe>
</li>
</ul>

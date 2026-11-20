---
title: Transform

tags: [3D, transform]

description: The CSS property allows you to transform elements, including in three-dimensional space.

links:
- href: https://tympanus.net/Development/CreativeLinkEffects/#cl-effect-2
  text: tympanus.net/Development/CreativeLinkEffects
  description: interesting example of 3D transformation on hover

---
<section>CSS property <code>transform</code> allows you to transform elements, including in three-dimensional space.<!--more-->

Specification: <a href="http://www.w3.org/TR/css3-transforms/">www.w3.org/TR/css3-transforms/</a>.

Using the <code>transform</code> property, you can assign one or more transformation functions to an element.
All functions can be found here: <a href="/pages/transform-functions">Transform Functions</a>

Possible values: <code>none</code> or space-separated transformation functions.

Examples of transformations:

<p data-height="560" data-theme-id="4974" data-slug-hash="zNazqX" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/zNazqX/">CSS Transforms</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

It is important to remember that functions are applied in the order in which they are written, and previous functions can affect subsequent ones.
That is, the lines

```css
transform: translateZ(5em) rotateY(90deg);
```

And

```css
transform: rotateY(90deg) translateZ(5em);
```

will give completely different results, but the line:

```css
transform: rotateY(45deg) rotateY(45deg);
```

will rotate the object 90 degrees because both functions will be executed sequentially.

</section><section id="transform-origin" data-name="transform-origin"><h2>Transform-origin</h2>
The property defines the center of transformation.

Possible values: distances in pixels or percentages or keywords (<code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>).

Initial value: <code>50% 50%</code> - the center of the element.

Coordinates are measured from the top left corner of the element.
If only one value is given, the second takes the value <code>center</code>.
If two values ​​are given, the third takes the value 0.

<p data-height="450" data-theme-id="4974" data-slug-hash="VPdWym" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: transform-origin" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/VPdWym/">CSS Transforms: transform-origin</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

</section><section id="transform-style" data-name="transform-style"><h2>Transform-style</h2>
Defines 3D support within a transformable element.

Possible values:

<code>flat</code> - the transformed element is flat

<code>preserve-3d</code> - the transformed element has an internal volume

<p data-height="450" data-theme-id="4974" data-slug-hash="xgzreO" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: transform-style" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/xgzreO/">CSS Transforms: transform-style</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The following properties can override <code>transform-style: preserve-3d;</code> and cause the element to appear flat regardless of the <code>transform-style</code> value:

<code>overflow</code> with any value other than <code>visible</code>

<code>opacity</code> with any value other than <code>1</code> <s>(blocks three-dimensionality if set to the wrapper of the transformed object, that is, at a level higher than <code>transform-style: preserve-3d;</code>. At the same level they do not interfere with each other)</s> this was the case at the time of writing, now transparency makes a three-dimensional element flat.

<code>filter</code> with any value other than <code>none</code>

</section><section id="perspective" data-name="perspective"><h2>Perspective</h2>
The property determines the depth of the scene.
The lower the value, the more the scene is extended towards the viewer.
Set to the parent of the transformed elements.

Possible values: <code>none</code> or length in pixels.

<p data-height="400" data-theme-id="4974" data-slug-hash="YNvxyE" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: perspective" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/YNvxyE/">CSS Transforms: perspective</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

</section><section id="perspective-origin" data-name="perspective-origin"><h2>Perspective-origin</h2>
Responsible for the location of the point from which the perspective is measured.
Essentially, the position of the viewer relative to the scene is set.

Possible values: distances in pixels or percentages or keywords (<code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>).

<p data-height="450" data-theme-id="4974" data-slug-hash="jyKLGO" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: perspective-origin" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/jyKLGO/">CSS Transforms: perspective-origin</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

</section><section id="backface-visibility" data-name="backface-visibility"><h2>Backface-visibility</h2>
Determines the visibility of the back side of an object.

Possible values:

<code>visible</code> - the object is always visible, regardless of which side it is turned to (default value).

<code>hidden</code> - hide an object if its back is turned.

<p data-height="450" data-theme-id="4974" data-slug-hash="zNadaw" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: backface-visibility" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/zNadaw/">CSS Transforms: backface-visibility</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</section>

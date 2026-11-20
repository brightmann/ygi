---
title: CSS Animation

tags: [animation]

description: Animation allows you to bring page elements to life. You can control animation duration, repetition, direction, movement type, and steps. You can animate any elements, including pseudo-elements.

links:
- href: /pages/svojstva-animation
  text: Animation properties in one table
- href: /3d-and-gradients/
  text: CSS gradients and 3D
---

<section>The <code>animation</code> property allows you to animate page elements.

You can control animation duration, repetition, direction, movement type, and steps.
You can animate any elements, including pseudo-elements.<!--more-->

A prerequisite is the presence of specific values. Properties with the value <code>auto</code> are not animated.

Specification: <a href="http://www.w3.org/TR/css3-animations/">w3.org/TR/css3-animations</a>

<i>Safari does not currently support animation of pseudo-elements, please use other browsers to view the recording</i>

CSS animation example:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/css-animation/demo_1.html?output"></iframe>

Example animation code:

```css
@keyframes move {
  40% {
    left: 50%;
    bottom: 75%;
    animation-timing-function: ease-in;
    }
  80% {
    left: 90%;
    bottom: -10em;
    }
}
```

Connecting animation:

```css
.sun {
  animation: move 15s infinite linear;
}
```

<code>move</code> - animation name

<code>15s</code> - duration

<code>infinite</code> - endless repetition

<code>linear</code> - type of movement

</section><section id="keyframes" data-name="@keyframes"><h2>@keyframes</h2>
The animation itself is set inside the <code>@keyframes</code> block.
After <code>@keyframes</code> the name of the animation is specified, and then its steps are specified inside the curly braces.

Steps can be specified using percentages or using the <code>from</code> and <code>to</code> keywords.
In this case, you can change the animation type in steps (<code>animation-timing-function</code>):

<iframe class="live-snippet" style="height: 240px" src="../assets/demo/css-animation/demo_2.html?output"></iframe>

</section><section id="animation-name" data-name="animation-name"><h2>Animation-name</h2>
Used to set the name of the animation.

Possible values: one or more animation names.
Default value: none.

<code>animation-name: move;</code> - one animation.

<code>animation-name: move, sun-color;</code> - two animations, names separated by commas.

</section><section id="animation-duration" data-name="animation-duration"><h2>Animation-duration</h2>
The duration of the animation is controlled by the <code>animation-duration</code> property.

Possible values: time in seconds (s) or milliseconds (ms).
In the case of several animations, the time for each of them can be specified separated by commas.
The initial value is 0s.

</section><section id="animation-timing-function" data-name="animation-timing-function"><h2>Animation-timing-function</h2>
The property defines the animation type.

Possible values:

<strong>Smooth animation</strong>

<code>ease</code> - sliding (default)

<code>linear</code> - smooth movement

<code>ease-in</code> - acceleration towards the end

<code>ease-out</code> - acceleration at the beginning

<code>ease-in-out</code> - smoother sliding than <code>ease</code>

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/css-animation/demo_3.html?output"></iframe>

<code>cubic-bezier(number,number,number,number)</code> allows you to specify a complex animation type. It is convenient to select values ​​at <a href="http://cubic-bezier.com/">cubic-bezier.com</a>.

<code>cubic-bezier(.24,1.49,.29,-0.48);</code>

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/css-animation/demo_4.html?output"></iframe>

<strong>Step-by-step animation</strong>

<code>step-start</code> and <code>step-end</code> - allow you to set step-by-step animation, be sure to set specific steps. At the same time, with

<code>step-start</code> changes occur at the beginning of the step, and with

<code>step-end</code> - at the end.

<code>step-end</code>. If you set <code>step-start</code>, the counter will start from ones.

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-animation/demo_5.html?output"></iframe>

<code>steps(number)</code> - allows you to set the number of steps in which the animation will be performed, while you can set only the last step without the need to specify intermediate ones.

<code>steps(60)</code>

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-animation/demo_6.html?output"></iframe>

</section><section id="animation-iteration-count" data-name="animation-iteration-count"><h2>Animation-iteration-count</h2>
Controls the repetition of the animation.
Default value: 1 (animation plays once).

Possible values:

number - how many times to play the animation.
<code>infinite</code> - endless repetition.

</section><section id="animation-direction" data-name="animation-direction"><h2>Animation-direction</h2>
Responsible for the direction of animation.

Possible values:

<code>normal</code> - the animation is played in the normal direction, from beginning to end.

<code>reverse</code> - the animation is played in the opposite direction, that is, from the end.

<code>alternate</code> - the animation is played from beginning to end, and then in the opposite direction.

<code>alternate-reverse</code> - the animation is played from the end to the beginning, and then in the opposite direction.

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/css-animation/demo_7.html?output"></iframe>

</section><section id="animation-play-state" data-name="animation-play-state"><h2>Animation-play-state</h2>
Controls the stopping and playing of the animation.

Possible values:

<code>running</code> - animation is played (default value).

<code>paused</code> - the animation freezes at the first step.

It is not possible to control the step where the stop will be, but you can stop the animation using <code>:hover</code>:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-animation/demo_8.html?output"></iframe>

</section><section id="animation-delay" data-name="animation-delay"><h2>Animation-delay</h2>
You can use <code>animation-delay</code> to delay the animation before it starts playing.

Possible values: time in seconds (s) or milliseconds (ms).
Values ​​can be negative.
In the case of several animations, the time for each of them can be specified separated by commas.
The initial value is 0s.

<iframe class="live-snippet" style="height: 330px" src="../assets/demo/css-animation/demo_9.html?output"></iframe>

</section>
<section id="animation-fill-mode" data-name="animation-fill-mode"><h2>Animation-fill-mode</h2>
The property determines whether the animation will affect the element outside of the animation's playback time.

Possible values:

<code>none</code> - the animation affects the element only during playback; upon completion, the element returns to its original state.

<code>forwards</code> - the animation affects the element after playback ends.

<code>backwards</code> - the animation affects the element before playback begins.

<code>both</code> - animation affects the element both before and after playback ends.

To see how <code>backwards</code> and <code>both</code> work before the animation starts playing, set the delay <code>animation-delay: 3s;</code>. It also makes sense to open the example in a new window.

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/css-animation/demo_10.html?output"></iframe>

All these properties can be written using a short notation, for example:


```css
animation: timing 5s infinite alternate;
```

Required values ​​are animation name and duration.
The first time value is considered the playback duration, the second - the delay.

</section>

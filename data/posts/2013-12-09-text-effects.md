---
title: Text effects

tags: [text]

image: //img-fotki.yandex.ru/get/9749/5091629.9a/0_7ec7c_17590c11_L.png
description: CSS effects based on text-shadow.
---

This post presents some effects based on <code>text-shadow</code>.

<code>text-shadow</code> is a property that describes the shadow cast by text. <!--more-->Unlike <code>box-shadow</code>, the shadow is not clipped by the shape, it cannot be sized (only the blur radius) and it does not support the <code>inset</code> parameter, that is, you cannot create an internal shadow.

However, by using multiple shadows with different parameters, you can create a simulated stroke (which would be easier to achieve if the shadow maintained size) and a simulated inner shadow, which allows you to make pressed text.

By combining shadows, gradients and pseudo-elements you can create a lot of interesting things.

Hover over example text to see hover effects.

<h2 id="convex">Convex text</h2>


```css
H1 {
  text-shadow:
    1px 1px 1px silver,
    -1px 1px 1px silver;
  color: white;
  transition: all .5s;
}

H1:hover {
  text-shadow:
    -1px -1px 1px silver,
    1px -1px 1px silver;
  color: white;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_1.html?output"></iframe>

<h2 id="inner-shadow">Depressed text</h2>

```css
H1 {
  text-shadow:
    -1px -1px #000,
    0 1px 0 #444;
  color: #222;
  transition: all 1s;
}

H1:hover {
  text-shadow:
    -1px -1px #000,
    0 1px 0 #444;
  color: #1A1A1A;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_2.html?output"></iframe>

<h2 id="blur">Blur</h2>

```css
H1 {
  font-size: 50px;
  font-weight: normal;
  cursor: pointer;
  text-shadow: 0 0 15px #999;
  color: transparent;
  transition: all .5s;
}

H1:hover {
  text-shadow: 0 0 0 #333;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_3.html?output"></iframe>

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_4.html?output"></iframe>

<h2 id="contour">Contours</h2>

```css
H1 {
  text-shadow:
    1px 1px 0 orange,
    1px -1px 0 orange,
    -1px 1px 0 orange,
    -1px -1px 0 orange;
  color: white;
  transition: all 1s;
}

H1:hover {
  text-shadow:
    1px 1px 0 yellowgreen,
    1px -1px 0 yellowgreen,
    -1px 1px 0 yellowgreen,
    -1px -1px 0 yellowgreen;
  }
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_5.html?output"></iframe>

```css
H1 {
  text-shadow:
    -1px -1px #FFF,
    -2px -2px #FFF,
    -1px 1px #FFF,
    -2px 2px #FFF,
    1px 1px #FFF,
    2px 2px #FFF,
    1px -1px #FFF,
    2px -2px #FFF,
    -3px -3px 2px #BBB,
    -3px 3px 2px #BBB,
    3px 3px 2px #BBB,
    3px -3px 2px #BBB;
  color: steelblue;
  transition: all 1s;
}

H1:hover {
  color: yellowgreen;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_6.html?output"></iframe>

To create an outline around the text, you can use the <a href="https://gist.github.com/yoksel/9467758">SCSS function</a>.

<h2 id="long-shadows">Long shadows</h2>

```css
H1 {
  text-shadow:
    1px 1px 0 hsl(20,100%,50%),
    2px 2px 0 hsl(20,100%,50%),
    3px 3px 0 hsl(35,100%,50%),
    4px 4px 0 hsl(35,100%,50%),
    5px 5px 0 hsl(45,100%,50%),
    6px 6px 0 hsl(45,100%,55%),
    7px 7px 0 hsl(55,100%,60%),
    8px 8px 0 hsl(55,100%,65%);
  color: hsl(0,100%,40%);
  transition: all 1s;
}

H1:hover {
  text-shadow:
    1px -1px 0 hsl(290,100%,40%),
    2px -2px 0 hsl(290,100%,40%),
    3px -3px 0 hsl(280,100%,60%),
    4px -4px 0 hsl(280,100%,60%),
    5px -5px 0 hsl(270,100%,75%),
    6px -6px 0 hsl(270,100%,80%),
    7px -7px 0 hsl(260,100%,85%),
    8px -8px 0 hsl(260,100%,90%);
  color: hsl(300,100%,30%);
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_7.html?output"></iframe>

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_8.html?output"></iframe>

<h2 id="striped-shadow">Striped shadow</h2>

```css
H1 {
  display: inline-block;
  position: relative;
  letter-spacing: .05em;
  text-shadow:
    1px 1px mediumturquoise,
    -1px 1px mediumturquoise,
    -1px -1px mediumturquoise,
    1px -1px mediumturquoise;
  color: white;
  transition: all 1s;
}

H1:before {
  content: "";
  position: absolute;
  top: 10px;
  right: -15px;
  bottom: -15px;
  left: 0;
  z-index: -1;
  background: linear-gradient(
    -45deg,
    rgba(72, 209, 204, 0) 2px,
    mediumturquoise 3px,
    rgba(72, 209, 204, 0) 3px )
    repeat;
  background-size: 4px 4px;
}

H1:after {
  content: attr(data-name);
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: -2;
  text-shadow:
    1px 1px white,
    2px 2px white,
    3px 3px white,
    4px 4px white;
  color: white;
  transition: all 1s;
}

H1:hover {
  color: lemonchiffon;
}

H1:hover:before {
  animation: 5s move_lines infinite linear;
}

H1:hover:after {
  color: lemonchiffon;
  text-shadow:
    1px 1px lemonchiffon,
    2px 2px lemonchiffon,
    3px 3px lemonchiffon,
    4px 4px lemonchiffon;
}

@keyframes move_lines {
  100% {
    background-position: 40px 40px;
  }
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_9.html?output"></iframe>

<i>The idea is not mine, found here: <a href="https://codepen.io/lbebber/pen/BzoHi">codepen.io/lbebber/pen/BzoHi</a></i>

<h2 id="live-underline">Live underline</h2>

```css
H1 {
  display: inline-block;
  text-shadow:
    1px 1px 1px white,
    1px -1px 1px white,
    -1px 1px 1px white,
    -1px -1px 1px white;
  color: steelblue;
  transition: all 1s;
}

H1:after {
  content: "";
  display: block;
  position: relative;
  z-index: -1;
  width: 100%;
  margin: auto;
  border-bottom: 3px solid steelblue;
  bottom: .15em;
  transition: all 1s;
}

H1:hover:after {
  width: 0%;
  border-bottom-width: 1px;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_10.html?output"></iframe>

<h2 id="underline">Eyeliner</h2>

```css
H1 {
  text-shadow:
    1px 1px white,
    2px 2px #777;
  color: #333;
  transition: all 1s;
}

H1:hover {
  text-shadow:
    1px 1px white,
    2px 2px tomato;
  color: crimson;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_11.html?output"></iframe>

<h2 id="sliding-text">Sliding text</h2>

```css
H1 {
  overflow: hidden;
  text-shadow:
    0 0 tomato,
    0 0 yellowgreen,
    0 0 skyblue;
  color: transparent;
  transition: all 1s;
}

H1:hover {
  text-shadow:
    -400px 0 tomato,
    400px 0 yellowgreen,
    0 0 skyblue;
  }
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/text-effects/demo_12.html?output"></iframe>

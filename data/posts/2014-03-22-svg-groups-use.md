---
title: "SVG: Grouping and Reusing Elements"

tags: [svg]

image: //img-fotki.yandex.ru/get/9761/5091629.9d/0_7fc0d_2a6180fb_M.png
description: 'SVG shapes can be grouped to help structure your file. There are several tags for these purposes: g, defs and symbol. Elements, element groups, and symbols can be reused.'

links:
- href: http://www.w3.org/TR/SVG/struct.html
  text: Document Structure
- href: http://sarasoueidan.com/blog/structuring-grouping-referencing-in-svg/
  text: 'Structuring, Grouping, and Referencing in SVG – The <g>, <use>, <defs> and <symbol> Elements'
---

SVG shapes can be grouped to help structure your file. There are several tags for these purposes: <nobr><code>g</code></nobr>, <code>defs</code> and <code>symbol</code>. Elements, element groups, and symbols can be reused. <!--more-->

<h2 id="g">g</h2>

The <code>g</code> tag is used to group shapes by meaning in order to maintain a transparent document structure. A group of elements can be reused.

<svg width="275" height="100" class="svg"><g id="to-sun"><circle fill="purple" r="20" cx="25" cy="25"/><circle fill="crimson" r="20" cx="70" cy="25"/><circle fill="red" r="20" cx="115" cy="25"/><circle fill="orange" r="20" cx="160" cy="25"/><circle fill="gold" r="20" cx="205" cy="25"/><circle fill="yellow" r="20" cx="250" cy="25"/></g><g id="to-night"><circle fill="greenyellow" r="20" cx="25" cy="70"/><circle fill="yellowgreen" r="20" cx="70" cy="70"/><circle fill="green" r="20" cx="115" cy="70"/><circle fill="steelblue" r="20" cx="160" cy="70"/><circle fill="darkviolet" r="20" cx="205" cy="70"/><circle fill="purple" r="20" cx="250" cy="70"/></g></svg>

```html
<svg width="275" height="100">
  <!-- Группа 1  -->
  <g id="to-sun">
    <circle fill="purple" r="20" cx="25" cy="25"/>
    <circle fill="crimson" r="20" cx="70" cy="25"/>
    <circle fill="red" r="20" cx="115" cy="25"/>
    <circle fill="orange" r="20" cx="160" cy="25"/>
    <circle fill="gold" r="20" cx="205" cy="25"/>
    <circle fill="yellow" r="20" cx="250" cy="25"/>
  </g>

  <!-- Группа 2 -->
  <g id="to-night">
    <circle fill="greenyellow" r="20" cx="25" cy="70"/>
    <circle fill="yellowgreen" r="20" cx="70" cy="70"/>
    <circle fill="green" r="20" cx="115" cy="70"/>
    <circle fill="steelblue" r="20" cx="160" cy="70"/>
    <circle fill="darkviolet" r="20" cx="205" cy="70"/>
    <circle fill="purple" r="20" cx="250" cy="70"/>
  </g>
</svg>
```

Groups, like shapes, can be given fills and borders. The style will work for shapes within a group that don't have their own style:

<svg class="svg" width="170" height="50">
<g id="to-sun" fill="tomato">
  <ellipse rx="30" ry="10" cx="25" cy="25" transform="rotate(-45 25 25)"/>
  <ellipse rx="30" ry="10" cx="105" cy="25" transform="rotate(-45 105 25)"/>
</g>
<g id="to-sun" fill="skyblue">
  <ellipse rx="30" ry="10" cx="65" cy="25" transform="rotate(45 65 25)"/>
  <ellipse rx="30" ry="10" cx="145" cy="25" transform="rotate(45 145 25)"/>
</g>
</svg>

```html
<svg width="170" height="50">
  <!-- Красные фигуры -->
  <g id="to-sun" fill="tomato">
    <ellipse rx="30" ry="10" cx="25" cy="25"
             transform="rotate(-45 25 25)"/>
    <ellipse rx="30" ry="10" cx="105" cy="25"
             transform="rotate(-45 105 25)"/>
  </g>

  <!-- Голубые фигуры -->
  <g id="to-sun" fill="skyblue">
    <ellipse rx="30" ry="10" cx="65" cy="25"
             transform="rotate(45 65 25)"/>
    <ellipse rx="30" ry="10" cx="145" cy="25"
             transform="rotate(45 145 25)"/>
  </g>
</svg>
```

Groups do not work like nested elements in HTML, but rather like grouping elements in graphics editors.

Groups do not manifest themselves visually in any way, but can be used for group operations on their contents: you can apply transformations to a group of elements at once, without having to move them one by one, you can set a visual design for the entire group at once, and all elements within the group will inherit it.
This adds group properties to internal elements without overriding existing ones. For example, if an element has a red fill and a group has a green fill, the element’s fill will remain red.

For an element to inherit the visual design of a group, it must not have its own design.

<h2 id="defs">defs</h2>

The <code>defs</code> tag serves as a library of elements and effects that will be used later. The content of the tag is not displayed on the page.

<svg class="svg" width="200" height="200">
  <defs><g><linearGradient id="g1" x1="0%" y1="0%" x2="90%" y2="90%"><stop stop-color="crimson" offset="0%"/><stop stop-color="gold" offset="100%"/></linearGradient><linearGradient id="g2" x1="0%" y1="0%" x2="90%" y2="90%"><stop stop-color="yellowgreen" offset="0%"/><stop stop-color="green" offset="100%"/></linearGradient></g><g><circle fill="url(#g1)" r="50" id="sun"/><rect width="200" height="70" id="rect" fill="url(#g2)"/></g></defs>
  <use xlink:href="#sun" x="120" y="60"/><use xlink:href="#rect" x="0" y="110" transform="rotate(10 100 110)"/>
</svg>

```html
<svg width="200" height="200">
  <!-- Скрытый контейнер для эффектов и фигур -->
  <defs>
    <!-- Группа градиентов -->
    <g>
      <linearGradient id="g1" x1="0%" y1="0%" x2="90%" y2="90%">
        <stop stop-color="crimson" offset="0%"/>
        <stop stop-color="gold" offset="100%"/>
      </linearGradient>
      <linearGradient id="g2" x1="0%" y1="0%" x2="90%" y2="90%">
        <stop stop-color="yellowgreen" offset="0%"/>
        <stop stop-color="green" offset="100%"/>
      </linearGradient>
    </g>

    <!-- Группа фигур. Она не отображается на странице -->
    <g>
      <circle fill="url(#g1)" r="50" id="sun"/>
      <rect width="200" height="70" id="rect" fill="url(#g2)"/>
    </g>
  </defs>

  <!-- Использование фигур -->
  <use xlink:href="#sun" x="120" y="60"/>
  <use xlink:href="#rect" x="0" y="110" transform="rotate(10 100 110)"/>
</svg>
```

<h2 id="symbol">symbol</h2>

A symbol is a group of figures that represent a single whole. Just like <code>defs</code>, it is not displayed on the page, and just like <code>g</code>, it can be used again. The symbol has its own coordinate system.

<svg class="svg" width="240" height="170"><defs><g><circle fill="gold" r="30" id="yellowball"/></g><symbol id="mouth"><polyline points="15 15 5 10 15 5" stroke="crimson" fill="none" stroke-width="3"/></symbol><symbol id="bird"><g stroke="brown"><polyline points="0 0 0 25" stroke-width="3" transform="translate(25 100)"/><polyline points="0 0 0 25" stroke-width="3" transform="translate(45 100)"/><polyline points="0 0 12 0" stroke-width="3" transform="translate(19 125)"/><polyline points="0 0 12 0" stroke-width="3" transform="translate(40 125)"/></g><use xlink:href="#mouth" x="83" y="35"/><use xlink:href="#yellowball" x="90" y="55" transform="scale(.75)"/><use xlink:href="#yellowball" x="35" y="75" width="100"/><polyline points="55 70 45 90 20 80" stroke="orange" stroke-width="3" fill="none"/><circle fill="black" r="5" cx="75" cy="35"/><circle fill="gray" r="1" cx="77" cy="35"/></symbol></defs><use xlink:href="#bird" x="15" y="15"/><use xlink:href="#bird" x="0" y="35" transform="translate(225 -20) scale(-1,1)"/></svg>

```html
<svg width="240" height="170">
  <defs>
    <g>
      <circle fill="gold" r="30" id="yellowball"/>
    </g>

    <!-- Описание символа -->
    <symbol id="mouth">
      <polyline points="15 15 5 10 15 5"
        stroke="crimson" fill="none" stroke-width="3"/>
    </symbol>

    <!-- Описание символа -->
    <symbol id="bird">
      <g stroke="brown">
        <polyline points="0 0 0 25" stroke-width="3"
          transform="translate(25 100)"/>
        <polyline points="0 0 0 25" stroke-width="3"
          transform="translate(45 100)"/>
        <polyline points="0 0 12 0" stroke-width="3"
          transform="translate(19 125)"/>
        <polyline points="0 0 12 0" stroke-width="3"
          transform="translate(40 125)"/>
      </g>

      <use xlink:href="#mouth" x="83" y="35"/>
      <use xlink:href="#yellowball" x="90" y="55"
        transform="scale(.75)"/>
      <use xlink:href="#yellowball" x="35" y="75" width="100"/>

      <polyline points="55 70 45 90 20 80"
        stroke="orange" stroke-width="3"
        fill="none"/>

      <circle fill="black" r="5" cx="75" cy="35"/>
      <circle fill="gray" r="1" cx="77" cy="35"/>
    </symbol>
  </defs>

  <!-- Использование символа -->
  <use xlink:href="#bird" x="15" y="15"/>
  <!-- Ещё раз используем символ, повернув его по горизонтали -->
  <use xlink:href="#bird" x="0" y="35" transform="translate(225 -20) scale(-1,1)"/>
</svg>
```

<h2 id="use">use</h2>

A tag that allows you to reuse SVG elements. You can copy any elements within one HTML page. You can also include a library of elements at the beginning of the page, and then use them in the right places.

You can set the copy position, width and height:

<svg class="svg" width="260" height="140"><defs><symbol id="color-wheel"><circle r="50" fill="gold" cx="50" cy="50"/><circle r="35" fill="orangered" cx="50" cy="50"/><circle r="20" fill="crimson" cx="50" cy="50"/><circle r="5" fill="maroon" cx="50" cy="50"/></symbol></defs><use xlink:href="#color-wheel" x="20" y="20"/><use xlink:href="#color-wheel" x="140" y="20" height="50"/></svg>

```html
<svg width="260" height="140">
  <defs>
    <!-- Создаем символ -->
    <symbol id="color-wheel">
      <circle r="50" fill="gold" cx="50" cy="50"/>
      <circle r="35" fill="orangered" cx="50" cy="50"/>
      <circle r="20" fill="crimson" cx="50" cy="50"/>
      <circle r="5" fill="maroon" cx="50" cy="50"/>
     </symbol>
  </defs>

  <!-- Копия символа с координатами -->
  <use xlink:href="#color-wheel" x="20" y="20"/>
  <!-- Копия символаы с координатами и высотой -->
  <use xlink:href="#color-wheel" x="140" y="20" height="50"/>
</svg>
```

The copy's position is relative to the top left corner of the shape in the existing coordinate system. At the same time, the symbol has its own coordinate system.

When inserting a symbol, the width and height (<code>width</code> and <code>height</code>) determine not the size of the shape, but the visible area of ​​the copy (like the right shape), but when copying a group (<code>g</code>), the width and height have no effect. To resize a copy, use transformations.

You can also set stroke, fill and transformations:

<svg class="svg" width="260" height="140"><defs><symbol id="s-rect"><rect width="100" height="25" x="2" y="2"/></symbol></defs><use xlink:href="#s-rect" x="20" y="20"/><use xlink:href="#s-rect" x="140" y="20" width="50" fill="yellowgreen"/><use xlink:href="#s-rect" x="20" y="80" fill="gold" stroke="orange" stroke-width="4"/><use xlink:href="#s-rect" x="140" y="80" fill="skyblue" stroke="steelblue" stroke-width="2" transform="rotate(-25 190 92)"/></svg>

```html
<svg width="260" height="140">
  <defs>
    <!-- Исходный символ, не отображается -->
    <symbol id="s-rect">
      <rect width="100" height="25" x="2" y="2"/>
     </symbol>
  </defs>

  <!-- Просто копия, цвет фона по умолчанию — черный -->
  <use xlink:href="#s-rect" x="20" y="20"/>
  <!-- Добавили ширину и фон -->
  <use xlink:href="#s-rect" x="140" y="20"
       width="50" fill="yellowgreen"/>
  <!-- Добавили фон и обводку -->
  <use xlink:href="#s-rect" x="20" y="80"
       fill="gold" stroke="orange" stroke-width="4"/>
  <!-- Добавили фон, обводку и трансформацию -->
  <use xlink:href="#s-rect" x="140" y="80"
       fill="skyblue" stroke="steelblue" stroke-width="2"
       transform="rotate(-25 190 92)"/>
</svg>
```

Copies can be assigned different classes:

<svg class="svg" width="260" height="50"><style>.col-1 {fill: #F35C78;}.col-2 {fill: #E77D6D;}   .col-3 {fill: #D99B64;}  .col-4 {fill: #C8B357;} .col-5 {fill: #B2CC49;}</style><defs><path id="house" d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"/></defs><use xlink:href="#house" class="col-1" x="20" y="10" transform="rotate(35 36 26)"/><use xlink:href="#house" class="col-2" x="67" y="10" transform="rotate(100 83 26)"/><use xlink:href="#house" class="col-3" x="114" y="10" transform="rotate(140 130 26)"/><use xlink:href="#house" class="col-4" x="161" y="10" transform="rotate(30 177 26)"/><use xlink:href="#house" class="col-5" x="208" y="10" transform="rotate(100 224 26)"/></svg>

<i class="tiny-text">House with <a href="http://icomoon.io/">icomoon.io</a></i>

```html
<svg width="260" height="50">
  <style>
 .col-1 {
    fill: #F35C78;
    }
  .col-2 {
    fill: #E77D6D;
    }
  .col-3 {
    fill: #D99B64;
    }
  .col-4 {
    fill: #C8B357;
    }
  .col-5 {
    fill: #B2CC49;
    }
  </style>

  <defs>
    <!-- Домик -->
    <path id="house" d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"/>
  </defs>

  <!-- Копии домика -->
  <use xlink:href="#house"
       class="col-1"
       x="20" y="10"
       transform="rotate(35 36 26)"/>
  <use xlink:href="#house"
       class="col-2"
       x="67" y="10"
       transform="rotate(100 83 26)"/>
  <use xlink:href="#house"
       class="col-3"
       x="114" y="10"
       transform="rotate(140 130 26)"/>
  <use xlink:href="#house"
       class="col-4"
       x="161" y="10"
       transform="rotate(30 177 26)"/>
  <use xlink:href="#house"
       class="col-5"
       x="208" y="10"
       transform="rotate(100 224 26)"/>
</svg>
```

A well-structured file will make development faster and more comfortable, and copying symbols can make the code much shorter.

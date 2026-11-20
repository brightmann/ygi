---
title: Fun console

tags: [js, tools]

image: https://img-fotki.yandex.ru/get/64326/5091629.a4/0_8db28_39e1a15b_orig
description: Recently I had to debug a capricious script in which something paranormal was clearly happening. To find the problem, it was necessary to output a large amount of debugging information to the browser console. The contents of the console turned into an endless sausage of monotonous text, and something had to be done about it.

links:
- href: https://developers.google.com/web/tools/chrome-devtools/debug/console/console-reference
  text: Console API Reference
- href: https://developer.mozilla.org/en-US/docs/Web/API/Console
  text: developer.mozilla.org/en-US/docs/Web/API/Console
---

Recently I had to debug a very capricious script in which, it seemed, some paranormal phenomena were happening. To find the problem, it was necessary to output a large amount of debugging information to the browser console. <!--more-->On the one hand, it became more convenient to search for an error, on the other hand, the contents of the console turned into an endless sausage of monotonous text, and something had to be done about it.

I must say that I rarely write Javascript, so when I became interested in the capabilities of the console, I learned a lot of new things.

To simply output something to the console, use <code>console.log()</code>:

```javascript
console.log ( 'Что-нибудь' );
```

<img src="/assets/img/articles/funny-console/fig1.png" alt="Something">

This way you can output any data types - strings, numbers, arrays, objects:

```javascript

var str = 'Главный вопрос жизни вселенной и всего такого';

var num = 42;

var fruitsList = [ 'apple', 'pear', 'banana' ];

var fruitsObj = {
  'apple': {
    color: 'red',
    seeds: true
  },
  'pear': {
    color: 'green',
    seeds: true
  },
  'banana': {
    color: 'yellow',
    seeds: false
  }
};

console.log ( str );
console.log ( num );
console.log ( fruitsList );
console.log ( fruitsObj );
```

<img src="/assets/img/articles/funny-console/fig2.png" alt="Output of different data types">

The code is highlighted, nested object elements are collapsed.

How can this conclusion be improved? We see the contents of the variables in the console, but we do not see their names. The most obvious way is to add a title before the output:

```javascript
console.log ( 'Строка: ' + str );
console.log ( 'Число: ' + num );
console.log ( 'Массив: ' + fruitsList );
console.log ( 'Объект: ' + fruitsObj );
```

<img src="/assets/img/articles/funny-console/fig3.png" alt="Add titles">

In this case, all variable values ​​will be reduced to a string. For strings and numbers this is not a problem, the array will lose highlighting, although it will remain readable, but the object will turn into the string [object Object], and the contents of the object can now neither be read nor expanded.

So-so option, there is a better way: you can pass a comma-separated list of variables to <code>console.log()</code>, in which case they will be output correctly:

```javascript
console.log ( 'Строка:', str );
console.log ( 'Число:', num );
console.log ( 'Массив:', fruitsList );
console.log ( 'Объект:', fruitsObj );
```

<img src="/assets/img/articles/funny-console/fig4.png" alt="Now that's right">

And this is also possible:

```javascript
console.log ( 'Всё сразу:', str, num, fruitsList, fruitsObj );
```

<img src="/assets/img/articles/funny-console/fig5.png" alt="All at once">

The passed variables can be output not only one after another, but also in a more manageable form:

```javascript
console.log ( 'Сначала строчка: "%s", потом число: %i', str, num );
```

<img src="/assets/img/articles/funny-console/fig6.png" alt="Changing the output">

Variables are also passed into the function as a list, and to insert them into a specific place in the line, pointers are used, which are also responsible for the output format:

<code>%s</code> - as a string;
<code>%d</code> or <code>%i</code> - as a number;
<code>%f</code> - as a floating point number;
<code>%o</code> - in the form of an expandable DOM element;
<code>%O</code> - in the form of an expandable JavaScript object;
<code>%c</code> - formats the output in accordance with the CSS passed as an additional parameter.

Variables are converted to the specified format before being output to the console. It is important to choose the right pointer correctly, because otherwise the result may be incorrect or simply unreadable:

```javascript
var str = 'Главный вопрос жизни вселенной и всего такого';
var float = 12.34;
var fruitsList = [ 'apple', 'pear', 'banana' ];

console.log ( 'str: %i: ', str );
console.log ( 'float: %i', float );
console.log ( 'fruitsList: %O:', fruitsList );
```

<img src="/assets/img/articles/funny-console/fig7.png" alt="Invalid formats">

The string could not be reduced to a number, and the result was <code>NaN</code>, the floating point number lost its decimal part, and the array was displayed as an expandable object, and now you have to click to see its contents.

The <code>%o</code> and <code>%O</code> formats are especially useful for displaying page elements:

```javascript
var h1Elem = document.querySelector('h1');

console.log ( '%o', h1Elem );
console.log ( '%O', h1Elem );
```

<img src="/assets/img/articles/funny-console/fig8.png" alt="Different output of DOM elements">

In the first case, the element code will be displayed, in the second - a Javascript object. Moreover, if there is no need to display auxiliary text, a similar result can be obtained by simply using <code>console.log()</code> and <code>console.dir()</code>:

```javascript
console.log ( h1Elem ); // код элемента
console.dir ( h1Elem ); // Javascript-объект
```

The result of this code will be the same as in the screenshot above.

Of all the pointers, I liked the last one the most: <code>%c</code> - styling text, because it was he who helped me bring the monotonous sausage in the console into a more or less readable form.

In order to set the design of the text, the CSS code must be passed as a separate parameter, and the first parameter in this case should be a line with pointers, the second - a line with CSS, and the third - the data that needs to be displayed.

Example:

```javascript
var str = 'Главный вопрос жизни вселенной и всего такого';

console.log ( '%c%s', 'color: green; font: 1.2rem/1 Tahoma;', str );
```

<img src="/assets/img/articles/funny-console/fig9.png" alt="Green text">

It would be even more convenient to put the styles into a separate variable, then they can be reused:

```javascript
var str = 'Главный вопрос жизни вселенной и всего такого';
var style = ['padding: 1rem;',
  'background: linear-gradient( gold, orangered);',
  'text-shadow: 0 2px orangered;',
  'font: 1.3rem/3 Georgia;',
  'color: white;'].join('');

console.log ( '%c%s', style, str );
```

<img src="/assets/img/articles/funny-console/fig10.png" alt="Orange gradient">

This way you can control the indentation, background and text design. Some things will not work, for example, <code>box-shadow</code>, but what is there is quite enough to add a little beauty to the console:

<img src="/assets/img/articles/funny-console/rainbow.png" alt="Rainbow">
(<a href="http://stackoverflow.com/questions/7505623/colors-in-javascript-console/21457293#21457293" target="_blank">From here</a>)

For my purposes, I prepared several styles:

 ```javascript
 var consoleStyles = {
  'h1': 'font: 2.5em/1 Arial; color: crimson;',
  'h2': 'font: 2em/1 Arial; color: orangered;',
  'h3': 'font: 1.5em/1 Arial; color: olivedrab;',
  'bold': 'font: bold 1.3em/1 Arial; color: midnightblue;',
  'warn': 'padding: 0 .5rem; background: crimson; font: 1.6em/1 Arial; color: white;'
};
```

and a function that saved me from having to manually form a set of parameters and string formatting:

```javascript
function log ( msg, style ) {
  if ( !style || !consoleStyles[ style ] ) {
    style = 'bold';
  }
  console.log ( '%c' + msg, consoleStyles[ style ] );
}
```

Usage example:

```javascript
log ( 'Заголовок 1', 'h1' );
log ( 'Заголовок 2', 'h2' );
log ( 'Заголовок 3', 'h3' );
log ( 'Жирный текст', 'bold' );
log ( 'Ошибка', 'warn' );
```

<img src="/assets/img/articles/funny-console/fig11.png" alt="Headings">

Thus, from such a sausage of boring text

<img src="/assets/img/articles/funny-console/fig12.png" alt="Unpainted console">

you can get this:

<img src="/assets/img/articles/funny-console/fig13.png" alt="Colorful console">

In my opinion, this is much better, especially if there is a lot of debug information and it’s easy to get lost in it.

To use several styles in one line, you need to specify each of them as a separate parameter, and then use <code>%c</code> to set the beginning of a new style in the text:

```javascript
var styles = [
'background: red',
'background: orange',
'background: gold',
'background: yellowgreen',
'background: skyblue',
'background: steelblue',
'background: darkviolet'
];

console.log ( '%c R %c A %c I %c N %c B %c O %c W ',
  styles[0], styles[1], styles[2], styles[3],
  styles[4], styles[5], styles[6] );
```

<img src="/assets/img/articles/funny-console/fig21.png" alt="Rainbow">

To color only part of the line, one of the styles can be set to empty:

```javascript
console.log ( '%c text1 %c text2', 'color: crimson;', '' );
```

<img src="/assets/img/articles/funny-console/fig22.png" alt="Two-color text">

If you don’t want to bother with coloring, you can use <code>console.table()</code> to display a large amount of data:

<img src="/assets/img/articles/funny-console/fig14.png" alt="Tables">

The table may not look very readable, but it’s still better than a list of collapsed objects, and it also allows you to look at the entire array at once.

You can also select individual lines from the general flow using <code>console.info()</code> and <code>console.warn()</code>:

```javascript
console.info ( 'your text' );
console.warn ( 'your text' );
```

<img src="/assets/img/articles/funny-console/fig15.png" alt="warn & info">

They work like regular <code>console.log()</code>, they only add icons to the beginning of the line (and <code>console.warn()</code> also adds a background).

You can also display error messages and additional debugging information. For example, using <code>console.error()</code>:

```javascript
console.error ( 'Houston, we have a problem' );
```

<img src="/assets/img/articles/funny-console/fig16.png" alt="console.error()">

<code>console.error()</code> doesn't check anything, it just prints a message formatted in a certain way. To display a message only when specified conditions are met, you can use <code>console.assert()</code>:

```javascript
var fruitsObj = {
  'apple': {
    color: 'red',
    seeds: true
  }
};
var expression = fruitsObj.apple.color === 'blue';

console.assert ( expression, 'There is no blue apple' );
```

The message will only be printed if <code>expression</code> is equal to <code>false</code>:

<img src="/assets/img/articles/funny-console/fig17.png" alt="console.assert()">

To simply print a message with debugging information to the console, you can use <code>console.trace()</code>:

```javascript
console.trace ( 'Hello' );
```

<img src="/assets/img/articles/funny-console/fig18.png" alt="console.trace()">

To visually group messages, you can use <code>console.group()</code> and <code>console.groupEnd()</code>, indicating the beginning and end of the group, respectively:

```javascript
console.group ( 'Animals' );
console.log ( 'cat' );
console.log ( 'dog' );
console.groupEnd ();
```

<img src="/assets/img/articles/funny-console/fig19.png" alt="console.group()">

To make the group collapsed by default, use <code>console.groupCollapsed()</code> instead of <code>console.group()</code>.

You can also count function calls using <code>console.count()</code>:

```javascript
function myFunc() {
  console.count ( 'myFunc() called' );
}

for (var i = 0; i < 3; i++) {
  myFunc ();
}
```

<img src="/assets/img/articles/funny-console/fig20.png" alt="console.count()">

You can do other interesting things in the console, like measure the execution time of your code. Also, smart guys use <code>debugger</code> and breakpoints for debugging, but that's a completely different story.

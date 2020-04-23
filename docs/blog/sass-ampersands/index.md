---
SASS Ampersands
date: "2018-12-18T06:00:00.000Z"
description: Cool things I learned about SASS Ampersand
state: published
tags:
  - SASS
  - Font-End
---
# SASS Ampersands

One of the many reasons I love working at Scalefactor is that I get to work extensively both in the front-end and the back-end. That being said at the moment, the back-end is my stronger suit. That is why you might see a lot more front-end related posts here as I try to level up in that area. Going back to SASS. Here is something small I learned today. Borrowing the explanation below from [CSS-Tricks](https://css-tricks.com/the-sass-ampersand/).

Here is a simple nesting example that works in SASS:

```css
.parent {
  .child {}
}

```

Which is compiled to in css:

```css
.parent .child {}
```

What about when we use an `&`

```css
.first-parent {
  &.second-parent {}
}

```

Which is compiled to in css:

```css
.first-parent.second-parent {}
```

The difference between the two is that in the second example we are selecting an element that has **both** classes: `first-parent` and `second parent`.

I like to think of `&` as copying the parent selector and pasting it next to the child selector. This gets interesting when used along with [BEM CSS Methodology— Block Element Modifier](http://getbem.com/introduction/). More on that later.

There are a lot more uses of `&` in sass. This article in [CSS-Tricks](https://css-tricks.com/the-sass-ampersand/) does an amazing job explaining everything.

Thank you for reading!

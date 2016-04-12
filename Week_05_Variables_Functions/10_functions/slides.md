![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 10

## Review (and a bit about functions)

---

## Agenda

* Review
* Functions
* Lab

---

## Let's Review Everything We've Done So Far

![](../../img/unit_1/its_gonna_be_hard.jpg)

---

## What have we learned?

* HTML
* CSS
* Javascript
* jQuery

---

## Javascript vs. jQuery

Javascript __is__ jQuery

Anything you can do in jQuery, you can do in plain old Javascript.. but it's harder.

We are using jQuery to make our code simpler.

---

![GeneralAssemb.ly](../../img/icons/code_along.png)

## Temperature Converter

---

## How do I do this?

1. Figure out our goal.
2. Write pseudo-code.
3. Write the HTML.
4. Write the Javascript.
5. Write the CSS.

---

## Functions

__Functions__ are chunks of code that accomplish a specific task.

---

## Functions Syntax

![](../../img/unit_2/functions_syntax.png)

---

## Function Calls

![](../../img/unit_2/function_calls.png)

---

## Function Arguments

![](../../img/unit_2/argument_syntax.png)

---

## Function Arguments

![](../../img/unit_2/function_call_argument.png)

---

## Function Returns

```
function addThings(val1, val2) {
    var sum = val1 + val2;
    return sum;
}

var newNumber = addThings(1, 2);  // newNumber = 3
```

---

## Organizing Function 

Where do you put functions?

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Cash Register

---

## Anonymous Functions

Functions with no name.

---

## Anonymous Functions

```
$('a.readMore').click(function() {
    // Do stuff here
});
```

---

## Remember document.ready?

That is an anonymous function!

```
$(document).ready(function() {
    // All the jQuery goes here!
});
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Anonymous Cash Register

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
## Temp Converter... part 2

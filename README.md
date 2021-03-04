# JS Functions, Callbacks and Timing Functions

## Learning Objectives
___

* Declare and invoke functions
* Use functions that accept parameters and return values
* Explore callback functions by using javascript's built-in timing functions
* Understand variable scoping

## Defining a Named Function
___

A function is like a container of code, you can put your code inside of it and save it for later when you need to use it. Functions are useful for storing code that you might need to use over and over in different places, allowing you to write *DRY (Don't Repeat Yourself) code*.

Here's the syntax to create a function. Just like strings, numbers, arrays, etc., we have to save our function to a variable in order to reference it later:
```javascript
// define a function named 'sayHello' that introduces itself with a console log
const sayHello = () => {
  // code inside here doesn't run until sayHello() is invoked
  console.log("hi, I'm a function")
}
```
All the code between the curly bois `{ }` won't run until the function is *invoked* Invokation is done with the function's name followed by parenthesis:

```javascript
// invoke the function sayHello
sayHello() // logs hi, I'm a function
```

## Mini-lab!
Go to `functions-lab.js` and tackle questions 1 - 3!

## Supplying Function Parameters 
___

When we define a function, we can declare that it needs to be given *parameters* to run. A parameter is like a placeholder where a real value will go when the function gets invoked. When we invoke the function, we supply *arguments* to fill those parameter slots. 

```javascript
// declare a function that accepts two parametera that are numbers, adds them, and logs the sum
const addTwoNumbers = (number1, number2) => {
  // add the arguments together in a local variable
  let sum = number1 + number2
  console.log(`${number1} plus ${number2} is ${sum}`)
}

// invoke the functions with arguments
addTwoNumbers(5, 10) // 15
addTwoNumbers(3, 3) // 6

// variables can be passed to function arguments to!!
let nine = 9
let seven = 7

addTwoNumbers(nine, seven)
```

## Mini-lab!
Go to `functions-lab.js` and tackle questions 4 - 6!

## Returning Values From Functions
---

If *parameters* are the entrance to a function, then its *return* is the exit. A function's return will **stop** the code inside, and can give a value back.

```javascript
// declare a function that accepts two arguments that are numbers, adds them, and returns the sum
const addTwoAndReturn = (number1, number2) => {
  // log the values passed as parameters
  console.log(`thanks for ${number1} and ${number2}!`)
  // add the arguments together
  let sum = number1 + number2
  // return the sum once the parameters have been added together
  return sum
  console.log("I will never run! Help I'm trapped!") // will not run because it is after the return
}
```

When a function *returns* something, you can assign it to a variable:

```javascript
let firstAdd = addTwoAndReturn(3, 7) // set firstAdd to 10
let secondAdd = addTwoAndReturn(12, 8) // set secondAdd to 20

console.log(`firstAdd is: ${firstAdd} and secondAdd is ${secondAdd}`)
```

## Mini-lab!
Go to `functions-lab.js` and tackle questions 7 - 9!

## Callback Functions

*NOTE*: callbacks will probably not make sense until you get to the next section, Timing Functions. This is ok.

*Callback functions* are passed to another function's parameters. Make sure not to use the `()` when passing the callback, overwise javascript will *invoke* it right away! A function that receives a *callback* as on of its parameters is called a *higher order function*.`

```javascript
// will call a function passed to it
const higherOrder = (func) => {
  func()
} 

const callback = () => {
  console.log("callback has been invoked!")
}

higherOrder(callback)
```

what happens if you invoke `callback()` when you pass it to higher order?

```javascript
higherOrder(callback())
```

*callbacks* can also be declared *inline* straight into the function parameters when you are invoking the *higher order* function.


## Timing Functions
---

Javascript has two important built-in functions used for timing of events: `setInteraval()` and `setTimeout()`. Both accept a callback function and an how long to wait (in milliseconds) before invoking the callback. `setInterval()` invokes the callback over and over, and `setTimeout()` invokes it just once.

```javascript
const justOnce = () => {
  console.log('I will only print once!')
}

const tick = () => {
  console.log('tick')
}

setTimeout(justOnce, 2500) // invoke justOnce after 2 and a half seconds
setInterval(tick, 1000) // invoke tick every one second
```

If `setInteraval()` or `setTimeout()` are set to a global variable, they can be stopped with `clearInterval()` and `clearTimeout()` respectively:

```javascript
let clock = setInterval(tick, 1000) // invoke tick every one second

const stopClock = () => {
  console.log('stop the clock!')
  clearInterval(clock)
}

setTimeout(stopClock, 5000) // clear the clock interval in 5 seconds
```

## Mini-lab!
Go to `callbacks-lab.js` and tackle questions 1 - 4!


## Global and Local Scope
___

Variables declared outside of a function are in the *global scope* -- **everyone has access to them**. Variables declared with `let` inside functions are in the *local scope* of that function -- **nobody has access to them outside of the function**

```javascript 
// declare a variable in the global scope and assign it a string value
let globalVariable = "Everyone can access me, I'm a variable in the global scope!"

// declare a function named 'sharingIsCaring' that prints globalVariable
const sharingIsCaring = () => {
  console.log(`sharingIsCaring() logs: ${globalVariable}`)
}

  // declare a function named 'workingTogether' that prints globalVariable
const workingTogether = () => {
  console.log(`workingTogether() logs: ${globalVariable}`)
}

sharingIsCaring() 
workingTogether()
```

Trying to access a variable that has been declared in a *local scope* from some where else will throw an error:

```javascript
// declare a function named 'selfish'
const selfish = () => {
  // declare a locally scoped variable named 'mineAllMine'
  let mineAllMine = "nobody else can get me"
}

console.log(mineAllMine) // will throw an error
```

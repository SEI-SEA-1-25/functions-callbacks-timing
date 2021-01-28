/*  //  //  //  //  //  //  //  //
1.
declare a variable in the global scope and assign it a value of 'Hello' 
write a function that concatenates the string ' World' with the variable and then logs it
invoke the function
*/  //  //  //  //  //  //  //  //

// declare a variable in the global scope and assign it a value of 'Hello' 
let helloVar = 'hello'

// write a function 
function helloWorld() {
  // that concatenates the string ' World' with the variable 
  helloVar = helloVar + ' World'
  // and then logs it
  console.log(helloVar)
}

console.log('~~~~~~~~ Solution 1 ~~~~~~~') // just for visibility in the console 
// invoke the function
helloWorld()

/*  //  //  //  //  //  //  //  //
2. 
// write a function that assigns a numerical  value to the global variables number1 and number2
// write a second function that multiplies number1 by number2 and assigns the product to the global variable result
// write a third function that prints the value stored in result to the console
// invoke the three functions in order
*/  //  //  //  //  //  //  //  //


let number1
let number2
let result

// write a function that assigns a numerical value to the global variables number1 and number2
function assignNumbers() {
  number1 = 10
  number2 = 15
}

// write a second function that multiplies number1 by number2 and assigns the product to the global variable result
function multiplyNumbers() {
  result = number1 * number2
}

// write a third function that prints the value stored in result to the console
function logResult() {
  console.log(result)
}

console.log('~~~~~~~~ Solution 2 ~~~~~~~') // just for visibility in the console 
// invoke the three functions in order
assignNumbers()
multiplyNumbers()
logResult()

/*  //  //  //  //  //  //  //  //
3. 
// write a function that accepts a number as a parameter, squares it (multiplies it by itself) and returns the square
// invoke the function and assign its return to a new variable
// print the variable
*/  //  //  //  //  //  //  //  //

// write a function that accepts a number as a parameter 
function square(number) {
  // squares it (multiplies it by itself) and returns the square
  return number * number
}

// invoke the function and assign its return to a new variable
let squareTest = square(10)

console.log('~~~~~~~~ Solution 3 ~~~~~~~') // just for visibility in the console 
// print the variable
console.log(squareTest)

/*  //  //  //  //  //  //  //  //
4. 
write a function that accepts two integers as parameters, converts the two integers to strings and concatenates them, and returns the result
invoke the function and assign its return to a new variable
print the variable

example input: 5, 4
output: "54"
example input: 67, 1
output: "671"
*/  //  //  //  //  //  //  //  //

// write a function that accepts two integers as parameters, 
function integersToString(int1, int2) {
  // converts the two integers to strings 
  int1 = int1.toString()
  int2 = int2.toString()
  
  // concatenates them and returns the result
  return int1 + int2
}
// invoke the function and assign its return to a new variable
let stringTest = integersToString(31, 87)

console.log('~~~~~~~~ Solution 4 ~~~~~~~') // just for visibility in the console 
// print the variable
console.log(stringTest)

/*  //  //  //  //  //  //  //  //
5. 
write a function that accepts two numbers as parameters, compares them and returns the number that is larger
invoke the function and assign its return to a new variable
print the variable

example input: 3, 15
output: 15
*/  //  //  //  //  //  //  //  //

// write a function that accepts two numbers as parameters, 
function largerNumber(number1, number2) {
  let largerNumber // locally scoped variable
  // compares them  
  if(number1 > number2) {
    largerNumber = number1
  } else {
    largerNumber = number2
  }
  // returns the number that is larger
  return largerNumber
}


console.log('~~~~~~~~ Solution 5 ~~~~~~~') // just for visibility in the console 
// invoke the function and assign its return to a new variable
let largerNumberTest = largerNumber(6, 13) 
// print the variable
console.log(largerNumberTest)

/*  //  //  //  //  //  //  //  //
6. 
create an object with several key: value pairs and assign it to a variable
write a function that accept an object as an parameter, loop over the object and print out the value of every key
*/  //  //  //  //  //  //  //  //

// create an object with several key: value pairs and assign it to a variable
let creatures = {
  squirrel: 'mammal',
  toad: 'amphibian',
  snake: 'reptile',
  lobster: 'crustacean'
}

// write a function that accepts an object as an parameter, 
function logObject(obj) {
  // loop over the object and print out the value of every key
  for(key in obj) {
    console.log(obj[key])
  }
}

console.log('~~~~~~~~ Solution 5 ~~~~~~~') // just for visibility in the console 
logObject(creatures)

/*  //  //  //  //  //  //  //  //
7. 
create and array with several numbers in it and assign it to a variable  
write a function that accepts an array of numbers as a parameter, loops over the array and finds the average of all the values in the array and returns the average
invoke the function and assign its return to a new variable
print the variable
*/  //  //  //  //  //  //  //  //

// create and array with several numbers in it and assign it to a variable  
let numberArray = [34, 7, 89, 16]

// write a function that accepts an array of numbers as a parameter, 
function findAverage(arr) {
  // loops over the array and finds the average of all the values in the array and 
  let sum = 0 // locally scoped variable for the sum of the numbers
  
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  
  // returns the average
  return sum / arr.length
}

// invoke the function and assign its return to a new variable
let averageTest = findAverage(numberArray)

console.log('~~~~~~~~ Solution 6 ~~~~~~~') // just for visibility in the console 
// print the variable
console.log(averageTest)
### Assert Equals - Step 1

Adding the assert equals would allow us to create a function that reviews and prints either a Pass or Fail based on thre parameters.

We started by review the console.assert() function which is a built in command to check the arguments.

Once we understand how this works (nothing happens if argument is true but prints Assert Fails if argument is false), we started on our own approach.

We needed this new function to compare two imputs:

Actual
VS
Expected

We can then do an if else to verify if the function paraments equate to true or false.

If the argument is true the console will print: 
`✅✅✅  Assertion Passed: ${actual} === ${expected}`

If the argument is false the console will print: 
`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`

The back ticks allow us to use the ES6 template literals instead of the older clunckier concate options.

With the ${} we can call a different part of the code (in this case the argument inputs for actual and expected) and print them out in the string we wanted for the Assertion.

Additionally we used a comparisson operator to showcase if the assertion passed it actual would exactly equal (===) the expected value.

If the assertion failed actual would exactly not equal (!==) the expected value.

A simple code to check to arguments comparatively. 

Lastly a small bit of code refactor used a teranary operator format to shorted and simplify the code:

``` Javascript:

const assertEqual = (actual, expected) => {
 return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
 : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

```
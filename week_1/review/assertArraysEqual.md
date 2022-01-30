### Lotide - Asserting AND equalling check for arrays

So we have two functions, one that can assert a console log to say if an array is assert pass or assert fail (true or false).

As well as a function that can check two different arrays and tell us if they are true or false.

Lets now combine these to make a super function that takes both aspects and performs both checks by invoking the eqarrays within the function of the assertArraysEqual function (this one is new). 

This is way easier than you would expect as they both do a true of false check we just need to set up a new function for Assert Arrays Equals and within it invoke the eqArrays function to compare the data.

If the data is true print the assertArrays console log of Assertion passed and if it fales print the fail message.

This is made possibly thanks to the wonderful cascading way the computer will read the code. First it will read the eqArrays code and verify that it's a working function than move on to the assertArraysEquals and see this function works. Then it makes it to the actual asserArraysEqual function call and runs through to see if needs to invoke the eqArrays and print the desired outcome! 

Seriously so cool!

``` Javascript:

const eqArrays = (actual, expected) => {
  let isEqual = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
};


const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

```
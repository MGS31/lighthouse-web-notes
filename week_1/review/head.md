## Lotide - Head function

The object of this challenge was to retrieve only the first element of an array. It is referred to as the head function.

The first few steps were to have the code review a few factors.

A) is the array being checked blank?
B) How do we pull the first element only from the array.

We then wanted to ensure we were using our handy assertEquals function to review the code and let us know if it passed or failed the assertion. 

setting up a head function we called the value within the argument "array". This way we know what the function will be reviewing.

Next we filtered through a simple if else statment but took into account the potential outcomes from the argument (Such as a blank array) and verified if it was true or not.

If the array is not (!=) blank ([]) then return the array[0] or the 0th element of the array.

Else we would return an error stating the array value of the argument was "undefinied".

Lastly, we plug in the assertEquals function using the head argument to compare the first array and the assert Equals argment to verify if it matches a desired outcome. Ex = 5 === 5 from an argument set up as ([5,6,7]), 5). The answer should be true.

``` Javascript:

const head = function(array) {
  if (array !== []) {
  return array[0];
  } else {
    return "undefined";
  }
};

```
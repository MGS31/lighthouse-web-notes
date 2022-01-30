### Lotide - eqArrays Challenge 


To quote the assignment 

 > While implementing tail previously we came across another problem: JS doesn't allow us to easily compare arrays. This made the test code for our function more cumbersome. Let's fix that by first implementing a function that can compare two arrays for a perfect match.

To do this we will need our assertEquals function as well as a new set up to determine if the arrays when compared are truthy or falsy.

Lets walk through the steps.

A) We need to compare two arrays.
B) We need to look at all elements of the arrays
C) If the match we need to return true
D) If they do not match we need to return false.

Lets get started, we would set up a function reviewing two different arrays. You can call these argument params whatever you want.

Next we need to loop through these both and compare. So to start lets loop through the first arr (lets call it arr1) and look at all of it's elements (so we invoke the .length feature). As we loop through these we need to tell the computer to verify if the index'd element it's currently looking at MATCHES the index'd element in the arr2 of the argument. so we would use an if else statment again (these are real handy) to review if the arr1[i] is exactly equal to the arr2[i] by having it check if they are NOT equal using the is not exactly equal call (!==) . Whats really wonderful about this is the loop function and if statment work in tandem to actuall do the comparison and loop through the other array without you needing to write a new loop! (so cool!)

Because of this the statment can then print false if these don't match else it would return true and end the function. 

But what if the arr2 has more elements than the arr1?? If they matched up to this point they would likely compare as true but we would know it should be false. **SO** lets add a handly little extra OR statment in the if section of our function to say OR (||)
if arr1.length doesn't exactly equal (!==) arr2.length return false. This adds another check to the comparissons of the arrays to verify even further if they are the same or not.

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

```
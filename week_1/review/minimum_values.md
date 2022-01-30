### Minimum Values Challenge

In this challenge we forked a gist from the git hub terminal that was looking at a function that wanted to return the minimum or smallest value from the argument.

This was similar to the challenge where we were returned the maximum value in the prep work.

To ensure we did this correctly we needed to do a few things, loop through the entire array or find a way to review the elements of the array and return the array's smallest value/element.

As I mentioned the similiarities to the prep work I recalled how this was done then.

Simply using the .sort function would work the best!

I created a new "array" titled arr and used the inputed argument labeled as numbers.sort.

Next I need to tell it to sort them from smallest to larget (a - b). {in the prep work it would have been b - a since we needed the largest value}.

then I simply return the sorted array using the a - b function within the .sort. 

And outside of that internal function return my newly created arr variable BUT I only return the "0th" element from this new array to ensure we are looking at ONLY the smallest or minimum value!

``` Javascript 

function min(numbers) {
  const arr = numbers.sort(function(a, b) {
    return a - b;
  });
  return arr[0];
}

```
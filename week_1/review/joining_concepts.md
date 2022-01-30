### Joining Concepts Challenge


This challenge asked that a function will take an array as input and return a comma separated string from that array. Sounds easy enough!

Lets start from the top what do we know we need to do? 

A) We know we will be reviewing an array.
B) We know we want to take ALL elements of this array.
C) We then know we need to print them in a string.
D) We also need to separate each element by a comma.


Starting from the top we can make a function that reviews an array value as it's argument. 
Next we look ahead and create a blank string that our function will return the final details in. We then move on to a for loop to review each of the different aspects of the array in question. The arr.length will ensure the loop will go through each of the different elements of the array as it iterates through. 

Once we have have a loop we need to give the function an if else review to push the index'd elements to the previously set up empty string. This first if statment is looking at all elements being looped through and removing the last element to ensure the printed string ONLY has a space and comma separting the points. It then presents an else statment to print the remaining elements to the string.

This ensures that the values are printed with a comma so long as there is an element AFTER them, and then the final element is printed to finalize the string.

Lastly we simply return the newly set up string so that the function completes.

``` Javascript

const joinList = (arr) => {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      string += (arr[i] + ', ');
    } else {
      string += arr[i];
    }
  }
  return string;
};

```

### Lotide - Flatten

How do we take a nested array and "flatten" it into a single array?

A) first check if you're working with arrays using the Array.isArray function.
B) Second loop through the "arrays" in the code.
C) third push everything to a new empty array and return!

Pretty straight forward once you learn about the Array.isArray function in JS.

With this you can check if the original array being input as an argument is indeed an array (it won't be seen as one when looping through). So if you were to loop through the array and say if (!== Array.isArray) and push that information to your new array this will handle the details from the first main array. Next you need to loop through the nested array with a nested loop checking the index'd elements of the initial loop. Since you did an if else statment you should set up the nested loop as an else statment so the computer knows to do this if the element IS an array.

Once it's looped through just have it push this new data to the same array you pushed the first elements to.

Because you're doing this in a straight forward way you shouldn't need to sort these and can just return the now completed new array to get the desired flattened outcome!

``` Javascript: 

const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else { 
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      } 
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

```
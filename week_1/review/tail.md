### Lotide - Tail

With this challenge we were tasked with retrieving all of the elements from an array EXCEPT for the "0th" element. Essentially the opposite of what we achieved with the head function.

The first things to consider:

A) Pass all of the elements except the "0th" element.
B) return as a new array (do not modifiy the original array).
C) we cannot compare two arrays so we need to find a work around.

For the first section we can return to the process.argv argument to get a quick hint.

Using a .slice method we can have an array be returned with all of the elements AFTER a specific section.

In this case we want to exclude only the first element (so the 0th element) and would do this by simply slicing the array at the (1) point.

Now we need to return as a new array.

You could first creat a blank array (or quickly pushed the .slice method while creating a new array) and return the finalized work in the new array. In this case we used a new array titled "sum". 

So now the assertEquals function will come into play again reviewing the outputted NEW array from our tail function and comparing it against a different arrays value.

We also used the following to verify the original array was not being edited:

``` Javascript

const words = ["Yo Yo", "Lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);

```

This way we can compare the length of the original "words" variable after using our tail function and confirming the return the expected 3 elements in length we can see the tail function is working correctly.

Completed Tail function:

``` Javascript

const tail = (array) => {
  const sum = array.slice(1);
  return sum;
};

```
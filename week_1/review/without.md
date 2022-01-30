### Lotide - Without

Lets look at how we can filter our data by removing specific unwanted items so that we can focus on the details that matter most!

We will be looking at taking the details from 1 array and removing from it whichever element is specified in the second array.

So what do we need to do?

A) First loop through both Arrays
B) Check using comparatives if the details match
C) If they do match splice that part out
D) Then return a new with the edited elements
E) We can then check to see if the new element matches what we would expect to see using the assertArraysEqual function.

To call the functions we want to check we would (for now) copy those details to this code sheet.

Next we set up a without function and next we would need to assign it argument value names.

It would be best to push the values from this argument to a new array so we don't alter the original array. 

So we would put in a blank array and this time filter .length the array we need to be removing elements from and pushing the index'd items to this new array.

next we will need to do a loop WITHIN a loop to verify all of the details from BOTH arrays.

So we would do a for loop and loop through the first array and within it's argument we would set up another loop to take the second array and loop it against the first and then itself. We would need to .length each array value and then simply using a comparitive opperator check if the idex'd elements of array 1 are matching those of arra 2. if they are we just .splice the index'd items to a new array. We don't always need to specify an else statment as the computer will understand that the else is not going to happen.

We then return the new array and boom we have the elements that were not being removed based on the second array.

``` Javascript: 

const without = (arr1, itemsToRemove) => {
  let newArr = [];
  for (let y = 0; y < arr1.length; y++){
    newArr.push(arr1[y]);
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice([i], 1); 
      }
    } 
  }
  return newArr;
};

```

From here you can use the assertArrayEquals function to call against the without function and verify what you think the out come should be is actually true or not.
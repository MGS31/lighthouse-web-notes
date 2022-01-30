### Obfuscating a password

This is another example of string manipulation. Similar to the pig latin challenge but this time replacing specific values of a string with new values.

In this case we looked at:

A) make the function take a single string as a command line argument 
B) Every "a" in the string should be replaced with a "4".
C) Every 'e" in the string should be replaced with a "3".
D) Every "o" (oh) in the string should be replaced with a "0".
E) Every "l" (el) in the string should be replaced with a "1".
F) print out an obfuscated version of that password.

First we bring the process.argv to a variable outside of our function. We want to ensure we could use this in multiple functions using global scope.

Next we need the classic blank string as well as an array that takes the data from the process.argv.slice.

From here we can loop through the new array.length and using the index'd items if they are exact matches to our filtered portions listed about we add them to the blank string using the += method.

All we need to do is ensure the else statment accounts for the elements not being changed and return our completed string! 

``` Javascript:

let input = process.argv.slice(2);

const obfuscate = () => {
  let result = "";
  let arr = input[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      result += "4";
    } else if (arr[i] === "e") {
      result += "3";
    } else if (arr[i] === "o") {
      result += "0";
    } else if (arr[i] === "l") {
      result += "1";
    } else {
      result += arr[i];
    }
  }
  return result;
};
return console.log(obfuscate());

```
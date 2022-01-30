### Reversing a string challenge

How do we look at reversing a string with details brought in from command line AND having them display on a new line?

A) Start by having a variable call the process.argv information outside of your function.
B) Next have the function loop through the array being sent from command line
C) then have each item from that array looped through in reverse and printed to a blank string
D) then return that string to a different blank string with a new line call added
E) return the completed string.

Using the forEach loop and specifing you only want the first part reviewed (in this casing referring to them as the items) you can then loop through each letter of this element or item in reverse (using a reversed for loop) and adding them to a blank string with the += method.

Once you have them added to the first blank string add them again to a different blank string with the ES6 template litereals concating everything and a simple \n in the string to print each to a new line.

return this new string and bing bang boom you've got a fancy reversed string!

``` Javascript:

const reverse = () => {
  let input = process.argv.slice(2);
  let string = "";
  input.forEach(item => {
    let stringItem = "";
    for (let i = item.length - 1; i >= 0; i--) {
      stringItem += item[i];
    }
    string += `${stringItem}\n`;
  });
  return string;
};
console.log(reverse());

```
### Pig Latin Translator Challenge.

We need to loop through a string pushed from the command line, move the first letter to the end of the string and also add "ay" to the string before printing it back to the user.

Pretty simple in theory.

We would first set up a function for the pigLatin call. Next we would include the details from the process.argv section as seen in previous challenges. Lastly we need a blank string to return at the end of the function.

From here we can use the same for each we di in the reverse string to check each part of the command line string being sent to use and loop through each element of that string. This way if multiple words are sent we can ensure we are checking ALL of them separately. 

Next since we do a standard loop we push these items to the first of three blank strings so now we have each item detailed out from the process.argv.

Next we can take another string and simply push the words we filtered through but moving the first element using the .substring function. It takes two index (start and end) and can extract from the string. So if you set it to extract the first elment using the substring(0,1) call (this will take the first element from the string) from here you simply add it to the substring of the string containing all but the 0th element (substring(1)) you will be moving the 0th to the end.

Last step is print the element to another blank string using the ES6 template literal to also concatinate an "ay " so that each word will be changed to pig latin!

``` Javascript: 
const pigLatin = () => {
  let words = process.argv.slice(2);
  let output = "";
  words.forEach(item => {
    let stringItem = "";
    for (let i = 0; i < item.length; i++) {
      stringItem += item[i];
    }
    let newString = (stringItem.substring(1) + stringItem.substring(0, 1));
    output += `${newString}ay `;
  });
  return output;
};
console.log(pigLatin());
```
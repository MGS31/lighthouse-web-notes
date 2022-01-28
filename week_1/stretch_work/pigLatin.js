//take process.argv.slice(2) (any number of command line arguments)
//converts each argument individually
//into pig latin:
//- (moving the first element of the string to the end)
//- adding "ay" after the element has been moved

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
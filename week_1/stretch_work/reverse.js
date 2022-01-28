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
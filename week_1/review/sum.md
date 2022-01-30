### Sum.js 

The object of this assignment was to create a function that would sum two command line entries and return the number.

To start we needed to ensure we were processing the argmuents input via the command line.

"process.argv.slice(2)"

Process.argv stands for processing the argument and takes the inputs from command line and inputs them into the code.

The reason for the .slice(2) is to ensure we are only taking the inputs from the command line and not the extra details brought in by process.argv. The .slice will remove the first to elements of the array that is being created and return only the information AFTER that slice. 

Once the data is entered into our function we process a simple for loop through the different elements of the array using a process.argv.length to ensure the loop goes through each element of the array.

All that is left is to:
A) ensure the output is returned to a string
B) ensure the output is a number
C) Only return the index'd elements from the array
and D) add the indexed elements together in the new string.

Therefore we take an empty string, += the information from the loop while also using the Number built in function to convert all of the index'd information from the process.argv are numbers.

To finsih we simply return the new string/ print it to the console.

Breakdown is as follows:
``` Javascript
let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
```
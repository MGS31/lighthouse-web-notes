### Rolling Dice Challenge.

We need to look at a function that takes a number from the command line and "rolls that number of dice" and then prints the details to the console.

So like always lets breakdown the steps for this code.

A) Firstly we need to take an argument from the command line
B) Next that argument should be a number
C) Our function will then need to print out a different random number between 1 and 6 for each of the dice entered in the console.
D) It needs to then push this information to a string stating the number of dice rolled and the random numbers generated.
E) Lastly it needs to be printed to the console.

So if we look back at process.argv we know this argument plus a .slice(2) will return a command line argument to our code.

Next we need to ensure that the details from this command line argument are being pushed to an array and that array is being translated to a string. The reason for the new array is the details coming from process.argv are in an array themselves so we need to consider this and set up a new array to push our randomly generated numbers to.

But wait how are we going to generate the numbers? It would make the most sense to set up a SEPARATE function to generate a random number. This keeps the code condensed and frees up a bit more processing time by doing that work outside of our dice rolling function.

  To do this built in Math functions within JS. The first two are Math.ceil and Math.floor. The .ceil will return a number rounded to the highest value you specify. In this case we would set this to 1 as thats as low as we want to go with this 6 sided dice. The .floor function will do the opposite of the .ceil so we need to ensure it won't surpase the number 6 during this process.

  The last Math function we would look at is Math.Random. this randomly generates a number (it can also generate fractions) so we need to filter it. Hence the .ceil and .floor functions we set up earlier.

  If we review the Math.Floor and function it by the random number multipled by the max and min numbers we set up +1 + the min again we will get a randomly genereated number between 1 and 6. All we had to do is call this random number function in the original function for the dice rolling.

So jumping back to the dice function we can look at where we left off which looping through the array of numbers pushed in the process.argv command line information.  Using a simple for loop by that is limited by the number passed in the process.argv we can ensure we are looping through the entered array by the number entered. That way as we perform the desired number of loops we can simply .push the randomly genereated number to the new blank array everytime. Just like that we have an array of randomly generated dice rolls!

The last few steps are to get the new array we set up as a string using the string += array but we also need a sperator for each of the elements of the array so we use the .join(', ') set up to add a comma and space after each element. The .join function does what we did with the joining concepts but without all th extra code. It's a built in function!

Now that we have the elements in a fancy new string seperated by commas and space we can push it to ANOTHER string this time with the ES6 template literals to call the number of dice originally submitted with process.argv AND the string of separated random numbers as well as a little human friendly wording to print out the numbers.

We then just return the final string and it works!

``` Javascript:

const randomNum = () => {
  let min = Math.ceil(1);
  let max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const diceRoller = () => {
  let numOfDice = process.argv.slice(2);
  let arr = [];
  let string = "";
  for (let i = 0; i < numOfDice; i++) {
    arr.push(randomNum());
  }
  string = arr.join(', ');
  let result = `Rolled ${numOfDice} dice: ${string}`;
  console.log(result);
};

diceRoller();

```
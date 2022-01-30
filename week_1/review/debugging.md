### Tips for Debugging Errors,

Here are a few helpful tips when debugging an error message.

1) A syntax error will normally highlight in the error message what part is wrong. Looking at the below we can see it pointed to in the incorrectly called variables. In this example we would need to sepearate each variable by a **","**.

node syntax-error.js
/vagrant/w1d2/syntax-error.js:4
console.log(rank name);
                 ^^^^ **this part here**
SyntaxError: Unexpected identifier
    at exports.runInThisContext (vm.js:73:16)
    at Module._compile (module.js:443:25)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3


2) using the above error message we can see a few other points as well. Next to the /vagrant/w1d2/syntax-error we can see a **.js:4** this section is part of the message that indicates WHERE in your code the error is coming from. In this example the 4th line of the code.

3) trickier messages like: 
  /vagrant/w1d2/syntax-error2.js:6
  });
    ^
  SyntaxError: Unexpected token )

Which are detailing a missing or unexpected token in the line specified. For this error specifically we would need to add a closing curly bracer to contain the variables code.

4) a reference error like this error below:

node reference-error.js
/vagrant/w1d2/reference-error.js:4
console.log(firstName, lasName);
                       ^
ReferenceError: lasName is not defined

Is showcasing that the lasName function isn't defined. This is a quick finder for spelling mistakes as if its spelled wrong it won't exist in the code call. 

5) another example of a similar refernece error would be a misspelled function such as:

node type-error.js
/vagrant/w1d2/type-error.js:3
console.log(favouriteMeal.toLower());
                          ^
TypeError: undefined is not a function

This error is saying .toLower isn't a function and that's because it isn't. This helpful littler error message is saying you need to adjust this. We would know to make this "toLowerCase" as the built in function is needing the "case" part to work properly.
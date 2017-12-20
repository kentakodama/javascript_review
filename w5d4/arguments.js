
ES5 
NB: There is a special arguments array that exists for every function. 
It can only take three methods: length, indexed [], and slice

We can extract a real array of args by slicing and calling like below
//Why does this work? arguments is Array-like enough for the slice method to work.
function thisWorks() {
  let args = Array.prototype.slice.call(arguments);  
  args instanceof Array; //=> true
  args.forEach((arg)=> console.log(arg)); // This works!
}

ES6 
For creating functions 
//Rest operator ... will grab all other args and store them in a real array 
function restWay(firstArg, ...otherArgs) {
  console.log(`The first arg is ${firstArg}!`);

  console.log(`The other args are:`);

  otherArgs.forEach((arg) => {
    console.log(arg);
  });
}

For invoking functions 
//the spread operator can destructure an array so that a function can take invidiual args 
function madLib(verb, pluralNoun1, pluralNoun2, place) {
  return `I like to ${verb} ${pluralNoun1} with ${pluralNoun2} by the ${place}.`;
}

const words = ["eat", "socks", "rabbits", "sea"];

madLib(...words);
//here

NB prefer call over apply
//problem: greet must be called methods style becaus eit has this, but obj doesnt have a greet method 
//solution: use call to use them together in the proper scope 

const obj = {
  name: "Earl Watts"
};

function greet(msg1, msg2) {
  console.log(`${msg1}: ${this.name}`);
  console.log(`${msg2}: ${this.name}`);
}

greet.call(obj, "Hello", "Goodbye");
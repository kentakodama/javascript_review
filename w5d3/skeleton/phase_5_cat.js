// Define a Cat class
// The constructor function should take a name and owner and store them in the instance
// Write Cat.prototype.cuteStatement method that returns "[owner] loves [name]"
// cuteStatement should be defined on the prototype
// Prototypes example:
// Create several Cat instances, test out their cuteStatement method
// Reassign the Cat.prototype.cuteStatement method with a function that returns "Everyone loves [name]!"
// Invoke the cuteStatement method on your old cats; the new method should be invoked
// Add a meow method to the Cat class You can now call meow on your previously constructed Cat instances
// Take one of your cats and set the meow property on the instance (cat1.meow = function () { ... }. 
// Call meow on this Cat instance; call meow on any other cat. The other cats should continue to use the prototype method.

//only difference is the function name is capitalized
function Cat(name, owner) {
  this.name = name;
  this.owner = owner;

} 

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`
};

//must be called like this to create a new instance of Cat class 
let cat2 = new Cat('garfield', 'john') 

//difference between let and var 
function blockScope() {
  if (true) {
    var x = 'var';
    let y = 'let';
    console.log(x); // 'var'
    console.log(y); // 'let'
  }
  console.log(x); // 'var'
  console.log(y); // ReferenceError: y is not defined
}

blockScope(); // evoking the function

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined


//NB: Constants are not immutable. Only the binding is immutable. For example, if we set a constant equal to an object, we can still modify that object:

const animals = {};
animals.cetacea = 'beluga whale';
animals.rodent = 'capybara'; // This works!

animals = {cetacea: 'beluga whale'}; // Raises an error
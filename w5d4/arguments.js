

NB: There is a special arguments array that exists for every function. 
It can only take three methods: length, indexed [], and slice

We can extract a real array of args by slicing and calling like below
//Why does this work? arguments is Array-like enough for the slice method to work.
function thisWorks() {
  let args = Array.prototype.slice.call(arguments);  
  args instanceof Array; //=> true
  args.forEach((arg)=> console.log(arg)); // This works!
}


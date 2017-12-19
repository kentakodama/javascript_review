// Array#myEach(callback) - receives a callback function and executes the callback for each element in the array
// Note that JavaScript's forEach function has no return value (returns undefined)
// Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
// should use myEach and a closure
// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)


Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i])
  }
};

[1, 2, 3].myEach(console.log)//this works, dont invoke 

Array.prototype.myMap = function (callback) {
  for (var i = 0; i < this.length; i++) {
    this[i] = callback(this[i])
  }
  return this
};

[1, 2, 3].myMap((x)=> x*2 )

Array.prototype.myReduce = function (callback, accumulator) {
  
  let i = 0;
  if (accumulator === undefined) {
    accumulator = this[0]
    i ++;
  }
  
  while(i < this.length) {
    accumulator = callback(this[i], accumulator)
    i ++;
  }
  
  return accumulator;
  
};
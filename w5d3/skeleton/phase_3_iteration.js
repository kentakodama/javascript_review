// Array#bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm
// String#substrings - receives a string, returns an array of all substrings

Array.prototype.bubbleSort = function () {
  
  let i = 0;
  while(i < this.length) {
    let j = i + 1
    while(j < this.length) {
      if (this[i] > this[j]) {
        [this[i], this[j]] = [this[j], this[i]]
        //destructuring
      }
      j ++;
    }
    i ++;
  }
  
  return this
  
};

String.prototype.substrings = function () {
  
  let subs = []
  
  //loop through each substring 
  
  for (var i = 0; i < this.length; i++) {
    for (var j = this.length - i; j > 0; j--) {
      subs.push(this.slice(i, j))
    }
  }
  return subs
  //push to subs if uniq not included 
  
  
  //return subs
};
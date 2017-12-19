// Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.
// 
// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array
// 
// Array#twoSum - returns an array of position pairs where the elements sum to zero
// 
// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array


Array.prototype.uniq = function () {
  
  let uniqArray = [];
  for (var i = 0; i < this.length; i++) {
    if (!uniqArray.includes(this[i])) {
      uniqArray.push(this[i])
    }
  }
  
  return uniqArray
  
};

Array.prototype.twoSum = function () {
    let positions = [];
    for (var i = 0; i < this.length; i++) {
      for (var j = i + 1; j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          positions.push([i, j]);
        }
      }
    }
    return positions;
};


Array.prototype.transpose = function () {
  
  let reversed = []
  
  let i = 0
  while(i < this[0].length) {
    reversed.push([])
  }
  
  let y = 0 
  while (y < this.length) {
    let x = 0
    while (x < this[y].length) {
      reversed[x][y] = this[y][x];
      x ++;
    }
    y ++;
  }
  return reversed
};








// range(start, end) - receives a start and end value, returns an array from start up to end
// 
// sumRec(arr) - receives an array of numbers and recursively sums them
// 
// exponent(base, exp)


const range = (start, end) => {
  
  if(start === end) {
    return [end]
  }
  
  return [start].concat(range(start+1, end))
  //must have return statement for inductive step
}
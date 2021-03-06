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

const sumRec = (arr) => {
  
  if(arr.length === 1) {
    return arr[0]
  }
  
  return arr[0] + sumRec(arr.slice(1)) 
  
}

const exponent = (base, exp) => {
  
  if (exp === 1) {
    return base
  }
  
  return base * exponent(base, exp-1)
  
} 
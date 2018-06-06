/*
We'll pass you an array of two numbers. Return the sum of those two numbers
plus the sum of all the numbers between them.

The lowest number will not always come first.
*/
function sumAll(arr) {
  arr = arr.sort((a,b)=>a-b)
  let temp = [];
  for(let val = arr[0]; val <= arr[1]; val++){
    temp.push(val)
  }
  return temp.reduce((a,b) => a+b)
}

sumAll([1, 4]);

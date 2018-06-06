/*
Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between
these parameters.

The range will be an array of two numbers that will not necessarily be in
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and
3 that is also evenly divisible by all numbers between 1 and 3. The answer
here would be 6.
*/
function smallestCommons(arr) {
  arr = arr.sort((a,b) => a-b)
  let vals = [];
  for(let i = arr[0]; i <= arr[1]; i++){
    vals.push(i)
  }
  let evenlyDivisibleByAll = (val, divisors) => {
     for(let el of divisors){
       if(val % el != 0){
         return false
       }
     }
     return true
  }
  let candidate = arr[1];
  while(!evenlyDivisibleByAll(candidate, vals)){
    candidate += arr[1]
  }

  return candidate;
}


smallestCommons([23,18]);

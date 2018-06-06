/*
Write a function that takes two or more arrays and returns a new array of
unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final
array should not be sorted in numerical order.
*/

function uniteUnique() {
  let final = [];
  let arr = [];
  for (let i in arguments){
    arr = arr.concat(arguments[i])
  }
  for(let val of arr){
    if(final.indexOf(val) != -1){
      continue
    }
    else {
      final.push(val)
    }
  }
  return final
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

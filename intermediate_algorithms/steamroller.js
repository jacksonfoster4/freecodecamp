/*
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
  let final = []
  flatten(arr)

  function flatten(arr){
    for(let el of arr){
      if(Array.isArray(el)){
        flatten(el)
      }
      else {
        final.push(el)
      }
    }
  }
  return final
}

steamrollArray([1, [2], [3, [[4]]]])

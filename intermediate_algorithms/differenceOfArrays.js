/*
Compare two arrays and return a new array with any items only found in one of 
the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  let longestArray = (arr1.length >= arr2.length) ? arr1 : arr2
  let shortestArray = (arr1.length >= arr2.length) ? arr2 : arr1
  let uniqueInLongest = longestArray.filter((el) => shortestArray.indexOf(el) == -1 )
  let uniqueInShortest = shortestArray.filter((el) => longestArray.indexOf(el) == -1 )

  return uniqueInLongest.concat(uniqueInShortest)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

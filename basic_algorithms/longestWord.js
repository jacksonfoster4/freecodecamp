/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWordLength(str) {
  let words = str.split(' ')

  let max = 0;
  for(let word of words){
    if(word.length > max){
      max = word.length
    }
  }
  return max
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

function findLongestWordLength(str) {
  let words = [];
  while(str.indexOf(' ') != -1){
    let index = str.indexOf(' ')
    words.push(str.slice(0, index))
    str = str.slice(index+1, str.length)
  }
  words.push(str) // push the final word

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

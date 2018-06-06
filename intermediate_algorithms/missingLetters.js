/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
  let correct = ALPHABET.slice(ALPHABET.indexOf(str[0]), ALPHABET.indexOf(str[str.length - 1]) + 1)
  for(let char of correct){
    if(str.indexOf(char) == -1){
      return char
    }
  }
}


fearNotLetter("abcdefghjklmno");

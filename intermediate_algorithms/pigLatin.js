/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an
English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  const VOWELS ='aeiou';
  if(VOWELS.indexOf(str[0]) != -1){return str + 'way'}
  
  let consonantCluster = '';
  let i = 0
  while(VOWELS.indexOf(str[i]) == -1 && i < str.length){
    consonantCluster += str[i]
    i++
  }

  str = str.slice(i, str.length)
  return str + consonantCluster + 'ay';
}

translatePigLatin("consonant");
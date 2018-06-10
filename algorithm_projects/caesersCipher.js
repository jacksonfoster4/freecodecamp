function rot13(str) { // LBH QVQ VG!
  let final = '';
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let i = 0; i < str.length; i++){
      let j = ALPHABET.indexOf(str[i])
      if(j == -1) {
        final += str[i];
        continue;
      };

      if(j-13 >= 0){
          final += ALPHABET[j-13]
      }
      else {
          final += ALPHABET[j+13]
      }
  }
  return final;
}

rot13("SERR PBQR PNZC");

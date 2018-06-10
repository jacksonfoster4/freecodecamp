function palindrome(str) {
  const ALPHANUM = /[a-z0-9]/i
  str = str.toLowerCase().split('').filter(
    (char) => ALPHANUM.test(char)
    )
  return str.join('') === str.reverse().join('');
}



palindrome("eye");

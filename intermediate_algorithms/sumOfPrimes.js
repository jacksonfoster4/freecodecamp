/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two
divisors, one and itself. For example, 2 is a prime number because it's only
divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  let arr = [];
  let i = 0
  while(i <= num){
    arr.push(i)
    i++
  }
  let isPrime = (value) => {
    for(var i = 2; i < value; i++) {
        if(value % i == 0) {
            return false;
        }
    }
    return value > 1;
  }
  return arr.filter((el) => isPrime(el)).reduce((a,b) => a+b)
}

sumPrimes(10);

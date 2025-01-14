/* 
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.
*/

function advancedExponent(b, n) {
    // your code here
    if ( n == 0 ) return 1;
    if ( n == 1 ) return b;
    
    if ( n < 0 ) return 1 / advancedExponent(b, -n);
  
    if ( n % 2 === 0 ) {
      let evenN = advancedExponent(b, n / 2 );
      return evenN * evenN;
    }
    let oddN = advancedExponent(b, Math.floor(n / 2));
    return b * oddN * oddN;
  }


console.log(advancedExponent(2, 0)); // 1
console.log(advancedExponent(2, 1)); 
console.log(advancedExponent(2, 7));
console.log(advancedExponent(2, -2)); 
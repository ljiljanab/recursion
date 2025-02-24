/*
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater 
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120
*/

const factorial = num => {
    if ( num === 0 ) return 0;
    if ( num === 1 ) return 1;
    return num * factorial(num - 1 );
}

console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
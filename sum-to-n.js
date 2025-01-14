/* 
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.
*/

const sumToN = num => {
    if ( num < 0 ) return null;
    if ( num == 0 ) return 0;
    return num + sumToN(num - 1);

}

console.log(sumToN(5)); // 15
console.log(sumToN(1)); // 1
console.log(sumToN(9)); // 45
console.log(sumToN(-8)); // null

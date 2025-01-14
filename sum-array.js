/* 
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
*/

const sumArray = array => {
    if (array.length === 0 ) return 0;
    return array[0] + sumArray(array.slice(1)); 
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([0, 1, -3])); // -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
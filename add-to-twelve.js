/* 
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.
*/

const addToTwelve = array => {
    if (array.length <  2 ) return false;
    if (array[0] + array[1] === 12 ) return true;
    return addToTwelve(array.slice(1));
   
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false
/* 
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.
*/

const isSorted = array => {
    if (array.length < 2 ) return true;

    if (array[0] > array[1]) {
      return false;
    }
    return isSorted(array.slice(1));
}

console.log(isSorted([1, 2, 3, 4, 5, 6, 7])); // true
console.log(isSorted([1, 2, 4, 6, 3])); // false
console.log(isSorted([5, 4, 3, 1])); // false
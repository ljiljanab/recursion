/* 
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
*/

const subsets = array => {

    if (array.length === 0 ) return [[]];

    let arrSliced = subsets(array.slice(1));
    let first = arrSliced.map(subset => [array[0], ...subset]);
    return first.concat(arrSliced);

}

console.log(subsets([]));
console.log(subsets([1]));
console.log(subsets([1, 2]));
console.log(subsets([1, 2, 3]));
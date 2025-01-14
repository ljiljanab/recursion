/* 
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.
*/

const flatten = array => {

    if (array.length === 0 )  return [];

    const [first, ...rest] = array;

    if (Array.isArray(first)) {
        return flatten(first).concat(flatten(rest));
    } else {
        return [first].concat(flatten(rest));
    }
}

console.log(flatten([]));
console.log(flatten([1, 2]));
console.log(flatten([1, [2, [3]]]));
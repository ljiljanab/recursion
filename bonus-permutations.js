/*
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.
*/

const permutations = array => {
    if (array.length === 0 ) return [[]];

    let permutationArr = [];

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let remaining = array.slice(0, i).concat(array.slice(i + 1)); 
        let remainingPermut = permutations(remaining);

        remainingPermut.forEach(permutation => {
            permutationArr.push([current, ...permutation]);
        })
    }

    return permutationArr;
}

console.log(permutations([1, 2]));
console.log(permutations([1, 2, 3]));
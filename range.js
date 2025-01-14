/*
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.
*/

const range = (start, end) => {
    
    if ( start >= end ) return [];
    return [start].concat(range(start + 1, end));
}

console.log(range(1, 5));
console.log(range(3, 4));
console.log(range(7, 6));
/* 
Write a recursive function reverse(string) that takes in a string and returns
it reversed.
*/

const reverse = string => {

    if (string === "" ) return "";
    
    return string.split("").reverse().join("");
}

console.log(reverse("house"));
console.log(reverse("dog"));
console.log(reverse("q"));
console.log(reverse(""));
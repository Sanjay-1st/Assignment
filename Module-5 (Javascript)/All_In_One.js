// 1.Write a JavaScript program to convert a given string into an array of words.
function reversrString(str) {
    return [...String(str)].reverse().join();
}
console.log(reversrString("String"));

// Write your function here

var input = [1, 2];

function addToBackOfNew (array, element) {
    let emptyArray = [];
    let newArray = emptyArray.concat(array);
    newArray.push(element);
    return newArray;
}
var output = addToBackOfNew(input, 3);
console.log(input);
console.log(output);
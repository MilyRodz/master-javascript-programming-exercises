// Write your function here

function getAllElementsButNth (array, index) {
    array.splice(index, 1);
    return array;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output);
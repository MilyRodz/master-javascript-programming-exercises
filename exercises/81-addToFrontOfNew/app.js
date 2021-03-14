// Write your function here

var input = [1, 2];

function addToFrontOfNew(array, element) {
  var newArray = [];
  newArray.unshift(element);
  return newArray.concat(array);
}

var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);
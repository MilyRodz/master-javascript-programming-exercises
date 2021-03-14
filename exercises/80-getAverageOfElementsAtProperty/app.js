// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
    let sum = 0;
    let average = 0;
    let length = obj[key].length;

    if (Array.isArray(obj[key]) === false || (obj.hasOwnProperty(key) === false) || ( length === 0 )){
    return 0;
  }
  
  for( var prop in obj[key] ) {
    sum += obj[key][prop];
  }
  
  average = sum / length;
  return average;
}
    

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); 
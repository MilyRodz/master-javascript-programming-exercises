// Write your function here

function getLastElementOfProperty(obj, key){

    if (Array.isArray(obj[key])) {
        return obj[key].pop(-1);
    } else {
        return undefined;
    }
}

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output);
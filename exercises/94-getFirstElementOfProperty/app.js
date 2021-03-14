// Write your function here

let obj = {
  key: [1, 2, 4]
};


function getFirstElementOfProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key][0];
  } else {
    return undefined;
  }
}

let output = getFirstElementOfProperty(obj, 'key');
console.log(output);
// Write your function here
let obj = {
  key: [1000, 10, 50, 10]
};

function getElementsThatEqual10AtProperty(obj, key) {
    let result = []
    for (elem in obj[key]) {
        if (obj[key][elem] === 10)
        result.push(obj[key][elem])
  }
  return result
}


let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);
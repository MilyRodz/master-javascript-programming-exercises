// Write your function here

let obj = {
  key: [1000, 20, 50, 500]
};

function getElementsLessThan100AtProperty(obj, key) {
    let arr = [];
    if(obj[key] === undefined){
        return arr;
    }
    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] < 100) {
            arr.push(obj[key][i])
        }
    }
    return arr;
}
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);
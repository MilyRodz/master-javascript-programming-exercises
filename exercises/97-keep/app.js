// Write your function here

function keep(arr, keep){
    let newArray = arr.filter((item) => item === keep);
 return newArray;
}

let output = keep([1, 2, 3, 2, 1], 2); 
console.log(output);
// Write your function here
function countAllCharacters(str) {
    let arr = str.split("");
    let obj = {};
    arr.forEach(function(s){
    let count=0;
    for(let i = 0; i < arr.length; i++){
      if(s == arr[i]){
        count+=1;
      }
      obj[s]=count;
    }
  });
  return obj;

}
let output = countAllCharacters('banana');
console.log(output);
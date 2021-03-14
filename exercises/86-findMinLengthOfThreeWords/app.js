// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3) {
    let result = 10;
    let newArray = [word1, word2, word3];
    for (let i = 0; i < newArray.length; i++) {
  	if (newArray[i].length < result){
  		result = newArray[i].length
  	}
  }
  return result;
}
let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);
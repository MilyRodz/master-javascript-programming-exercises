// Write your function here
function computeAverageLengthOfWords(word1, word2) {
    let result = 0;
  result = (word1.length + word2.length) / 2;  
  return result;
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);

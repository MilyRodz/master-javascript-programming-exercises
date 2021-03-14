// Write your function here
function isOddLength (word) {
    if(word.length %2 === 1) {
        return true;
    }
    else {
        return false;
    }
}
var output = isOddLength('special');
console.log(output);
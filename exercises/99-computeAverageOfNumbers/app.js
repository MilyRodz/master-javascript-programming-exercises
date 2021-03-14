// Write your function here

function computeAverageOfNumbers (nums) {
        let totalSum = 0;
        for(var i in nums) {
        totalSum += nums[i];
    }
    let Count = nums.length;
    let average = totalSum / Count;
    return average
}


let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output);
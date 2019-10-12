/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let answer = [1];
    let right = [];

    for (let i = 1; i < nums.length; i++) {
        answer[i] = nums[i-1] * answer[i-1]
    }

    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i+1] * right[i+1]
        answer[i] = answer[i] * right[i];
    }


    return answer;

};

console.log(productExceptSelf([1,2,3,4]));
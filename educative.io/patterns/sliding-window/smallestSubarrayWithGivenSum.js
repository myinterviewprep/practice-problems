// Problem Statement
// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray
// whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
//
// Example 1:
//
// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
// Example 2:
//
// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
// Example 3:
//
// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

const smallestSubarrayWithGivenSum = function (s, arr) {

    let left = 0
    let sum = 0
    let answer=Infinity
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]
        while(sum >=s){
            let size = right - left + 1;
            answer = Math.min(answer, size)
            sum-=arr[left]
            left++
        }



    //     if (sum >= s) {
    //
    //         let l = right - left + 1
    //
    //         if (!answer) {
    //             answer = l
    //         } else if (l < answer) {
    //             answer = l
    //         }
    //
    //         while (sum >= s && left <=arr.length) {
    //             sum -= arr[left]
    //             ++left
    //             --l
    //             if (sum >= s && l < answer) {
    //                 answer = l
    //             }
    //         }
    //     }
    }


    return answer == Infinity ? 0 : answer;
};


console.assert(smallestSubarrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]) == 2, "1st one wrong")
console.log("----")
console.assert(smallestSubarrayWithGivenSum(7, [2, 1, 5, 2, 8]) == 1, "2nd one wrong")
console.assert(smallestSubarrayWithGivenSum(8, [3, 4, 1, 1, 6]) == 3, "3rd one wrong")
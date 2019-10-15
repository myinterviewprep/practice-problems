// Problem Statement
// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
//
// Example 1:
//
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:
//
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].


function maxSumSubArray(k, arr) {

    let maxSum=0;
    let sum=0;
    let rightIndex;
    let leftIndex=0;


    for (rightIndex=0; rightIndex<arr.length; rightIndex++){


        sum += arr[rightIndex]

        if (rightIndex>=k-1) {

            if (sum > maxSum) {
                maxSum = sum;
            }
            sum -= arr[leftIndex]
            leftIndex++;
        }
    }

    return maxSum;

}

console.assert(maxSumSubArray(3, [2, 1, 5, 1, 3, 2]) == 9, "1st question wrong");
console.assert(maxSumSubArray(2, [2, 3, 4, 1, 5])==7, "2nd Question wrong")


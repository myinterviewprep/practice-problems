// Problem Statement
// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
//
// Example 1:
//
// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
// Example 2:
//
// Input: [-1, 4, 2, 1, 3], target=5
// Output: 4
// Explanation: There are four triplets whose sum is less than the target:
//    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]


const findPairSmallerSumCount = (arr, target, leftIndex) => {
    let count = 0, rightIndex = arr.length - 1
    while (leftIndex < rightIndex) {
        let leftNum = arr[leftIndex]
        let rightNum = arr[rightIndex]
        let sum = leftNum + rightNum;

        if (sum < target) {
            count += rightIndex - leftIndex
            leftIndex++
        } else {
            rightIndex--
        }

    }
    return count;

}

const tripletSmallerSum = (arr, target) => {
    let count = 0;
    arr.sort(((a, b) => a-b))
    for (let i = 0; i < arr.length-2; i++) {
        let currentNum = arr[i];
        count += findPairSmallerSumCount(arr,  target-currentNum,  i+1)
    }

    return count;
};

console.assert(tripletSmallerSum([-1, 0, 2, 3],3)==2, "1 wrong")
console.assert(tripletSmallerSum([-1, 4, 2, 1, 3],5)==4, "2 wrong")
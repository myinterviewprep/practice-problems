// Problem Statement
// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.
//
// Example 1:
//
// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
// Example 2:
//
// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

const lengthOfLongestSubarray = function (arr, k) {

    let leftIndex = 0, maxLength = 0, onesCount = 0;

    for (let rightIndex = 0; rightIndex < arr.length; rightIndex++) {


        let element = arr[rightIndex]
        if (element == 1) {
            onesCount++
        }

        let currentLength = rightIndex - leftIndex + 1

        // this part is tricky i want to use a while but an if is good enough
        if (currentLength - onesCount > k) {
            let leftElement = arr[leftIndex]
            if (leftElement == 1) {
                onesCount--
            }
            leftIndex++
        }

        currentLength = rightIndex - leftIndex + 1
        maxLength = Math.max(maxLength, currentLength)

    }


    return maxLength;
};

// how i solved it initially
//
// const lengthOfLongestSubarray = function (arr, k) {
//
//     let leftIndex = 0, maxLength = 0, zeroCount = 0;
//
//     for (let rightIndex = 0; rightIndex < arr.length; rightIndex++) {
//
//
//         let element = arr[rightIndex]
//         if (element == 0) {
//             zeroCount++
//         }
//         while (zeroCount > k) {
//             let leftElement = arr[leftIndex]
//             if (leftElement == 0) {
//                 zeroCount--
//             }
//             leftIndex++
//         }
//
//         let currentLength = rightIndex - leftIndex + 1
//         maxLength = Math.max(maxLength, currentLength)
//
//     }
//
//
//     return maxLength;
// };



console.assert(lengthOfLongestSubarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],2)==6, "1 wrong")
console.assert(lengthOfLongestSubarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],3)==9, "2 wrong")
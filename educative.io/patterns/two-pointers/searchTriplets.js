const _ = require('lodash')
// Problem Statement
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
//
// Example 1:
//
// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.
// Example 2:
//
// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

const searchTriplets = function (arr) {
    let triplets = [];
    arr.sort((a, b) => a - b);

    // console.log("sorted array:", arr);

    let cursorIndex = 0;
    while (cursorIndex < arr.length) {
        let currentNumber = arr[cursorIndex]
        if (currentNumber == arr[cursorIndex + 1]) {
            cursorIndex++
            continue;
        }

        // console.log("currentNumber:", currentNumber);
        findPair(arr, -currentNumber, cursorIndex + 1, triplets);
        cursorIndex++
    }
    // console.log("triplets:", triplets);
    return triplets;
};

function findPair(arr, target, leftIndex, triplets) {
    let rightIndex = arr.length - 1;

    // console.log("target:", target)
    while (leftIndex <= rightIndex) {

        let leftNum = arr[leftIndex]
        let rightNum = arr[rightIndex]

        // console.log(`arr[${leftIndex}]: ${leftNum}`)
        // console.log(`arr[${rightIndex}]: ${rightNum}`)

        let sum = leftNum + rightNum;

        // console.log("sum:", sum);


        if (sum == target) {
            // console.log("FOUND:", sum, target);
            triplets.push([-target, leftNum, rightNum])
            leftIndex++
            while (leftIndex < rightIndex && leftNum == arr[leftIndex]) {
                leftIndex++
            }
            rightIndex--
            while (leftIndex < rightIndex && rightNum != arr[rightIndex]) {
                rightIndex--
            }
        } else if (sum < target) {
            leftIndex++
        } else {
            rightIndex--
        }

    }
}

console.assert(_.isEqual(searchTriplets([-3, 0, 1, 2, -1, 1, -2]), [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]), "1 wrong")
console.assert(_.isEqual(searchTriplets([-5, 2, -1, -2, 3]), [[-5, 2, 3], [-2, -1, 3]]), "2 wrong")

const _ = require("lodash");

// Quadruple Sum to Target (medium)
// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.
//
// Example 1:
//
// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// Explanation: Both the quadruplets add up to the target.
// Example 2:
//
// Input: [2, 0, -1, 1, -2, 2], target=2
// Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
// Explanation: Both the quadruplets add up to the target.

const searchQuadruplets = function (arr, target) {
    let quadruplets = [];

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 3; i++) {

        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        // findTriplets(arr, i + 1, target, quadruplets);

        for(let j=i+1;j<arr.length-2;j++){
            console.log("i:", i, "j:", j);

            if(j>i+1 && arr[j]===arr[j-1]){
                continue;
            }



            findPair(arr, target, i, j, quadruplets)
        }


    }

    console.log("quadruplets:", quadruplets);
    return quadruplets;
};

function findTriplets(arr, leftIndex, target, quadruplets) {
    console.log("find triplets:", target);
    let answer = [];
    for (let i = leftIndex; i < arr.length - 2; i++) {
        if (i > leftIndex+1 && arr[i] === arr[i - 1]) {
            continue;
        }
        findPair(arr, i + 1, target, leftIndex, i, quadruplets);
    }
    return answer;
}

function findPair(arr, target, first, second, quadruplets) {
    console.log("find pair for target:", target);
    let rightIndex = arr.length - 1;
    let leftIndex = second + 1;
    while (leftIndex < rightIndex) {

        let sum = arr[first] + arr[second] + arr[leftIndex] + arr[rightIndex]
        if (sum === target) {
            console.log("pair found indexes:", first, second, leftIndex, rightIndex);
            quadruplets.push([arr[first], arr[second], arr[leftIndex], arr[rightIndex]]);
            leftIndex++
            rightIndex--
        } else if (sum > target) {
            rightIndex--;
        } else {
            leftIndex++
        }
    }
}

console.assert(_.isEqual(searchQuadruplets([4, 1, 2, -1, 1, -3], 1), [-3, -1, 1, 4], [-3, 1, 1, 2]), "1 wrong")
console.assert(_.isEqual(searchQuadruplets([2, 0, -1, 1, -2, 2], 2), [-2, 0, 2, 2], [-1, 0, 1, 2]), "2 wrong")
// Problem Statement
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible,
// return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
//
// Example 1:
//
// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
// Example 2:
//
// Input: [-3, -1, 1, 2], target=1
// Output: 0
// Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
// Example 3:
//
// Input: [1, 0, 1, 1], target=100
// Output: 3
// Explanation: The triplet [1, 1, 1] has the closest sum to the target.

const tripletSumCloseToTarget = function (arr, targetSum) {
    let answer;
    // sort
    arr.sort(((a, b) => a - b))

    let closestDifference;
    for (let i = 0; i < arr.length-2; i++) {
        let currentNum = arr[i];

        let closePairSum = pairSumCloseToTarget(arr, i + 1, targetSum - currentNum);
        let currentAnswer;
        if (closePairSum != null) {
            currentAnswer = closePairSum + currentNum;
        }

        if (currentAnswer == targetSum) {
            console.log("found:", targetSum);
            return targetSum;
        }


        let currentDifference = Math.abs(targetSum - currentAnswer);

        if (!closestDifference) {
            closestDifference = currentDifference
        }

        if (answer==null) {
            answer = currentAnswer;
            // console.log("first answer:", currentAnswer);
        } else if (currentDifference == closestDifference && currentAnswer < answer) {
            answer = currentAnswer;
            // console.log("new answer with difference same:", currentAnswer);
        } else if (currentDifference < closestDifference) {
            answer = currentAnswer;
            // console.log("new answer with smaller difference:", currentAnswer);
        }
    }

    // console.log("answer:", answer);
    return answer;
};


function pairSumCloseToTarget(arr, leftIndex, target) {

    let rightIndex = arr.length - 1;
    let closestSum;
    let closestDifference = Infinity;

    // console.log("target:", target);
    // console.log("leftIndex:", leftIndex);
    // console.log("rightIndex:", rightIndex);
    while (leftIndex < rightIndex) {

        let leftNum = arr[leftIndex]
        let rightNum = arr[rightIndex]
        let sum = leftNum + rightNum;

        // console.log(` arr[${leftIndex}]: ${arr[leftIndex]}`)
        // console.log(` arr[${rightIndex}]: ${arr[rightIndex]}`)
        // console.log("sum:", sum);

        if (!closestSum) {
            closestSum = sum;
        }
        let difference = Math.abs(sum - target);
        // console.log("difference:", difference);
        // console.log("closestDifference:", closestDifference);

        if (sum === target) {
            // console.log("exiting here!!!!")
            return target;
        }

        if (difference < closestDifference) {
            closestDifference = difference;
            closestSum = sum;
        } else if (difference == closestDifference) {
            // console.log("same difference between", sum, closestSum);
            if (sum < closestSum) {
                closestSum = sum;
            }
        }

        if (sum > target) {
            rightIndex--
        } else{
            leftIndex++
        }


    }

    // console.log("closestSum:", closestSum)
    return closestSum;

}

console.assert(tripletSumCloseToTarget([-2, 0, 1, 2],2) == 1, "1 wrong")
console.assert(tripletSumCloseToTarget([-3, -1, 1, 2],1) == 0, "2 wrong")
console.assert(tripletSumCloseToTarget([1,0,1,1],100) == 3, "3 wrong")
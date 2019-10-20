// Problem Statement
// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
//
// Example 1:
//
// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:
//
// Input: [-3, -1, 0, 1, 2]
// Output: [0 1 1 4 9]

const makeSquares = function (arr) {
    squares = []
    // TODO: Write your code here

    let leftPointer = 0, rightPointer = arr.length - 1, highestSquareIndex = arr.length - 1;

    while (leftPointer <= rightPointer) {
        let leftSquare = arr[leftPointer] * arr[leftPointer]
        let rightSquare = arr[rightPointer] * arr[rightPointer]
        if (leftSquare > rightSquare) {
            squares[highestSquareIndex] = leftSquare;
            leftPointer++
        } else {
            squares[highestSquareIndex] = rightSquare
            rightPointer--
        }
        highestSquareIndex--
    }

    return squares;
};

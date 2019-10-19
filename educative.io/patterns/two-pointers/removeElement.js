// Similar Questions
// Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and
// return the new length of the array.
//
// Example 1:
//
// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4
// Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
// Example 2:
//
// Input: [2, 11, 2, 2, 1], Key=2
// Output: 2
// Explanation: The first two elements after removing every 'Key' will be [11, 1].


function removeElement(arr, key) {

    let arrayEndIndex=0, cursorIndex=0;

    while(cursorIndex<arr.length){

        let currentElement = arr[cursorIndex]
        if (currentElement != key) {
            arr[arrayEndIndex] = currentElement
            arrayEndIndex++
        }
        cursorIndex++
    }

    return arrayEndIndex;
}

console.log(`Array new length: ${removeElement([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
console.log(`Array new length: ${removeElement([2, 11, 2, 2, 1], 2)}`);
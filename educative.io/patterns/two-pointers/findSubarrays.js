// Problem Statement
// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose
// product is less than the target number.
//
// Example 1:
//
// Input: [2, 5, 3, 10], target=30
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.
// Example 2:
//
// Input: [8, 2, 6, 5], target=50
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
// Explanation: There are seven contiguous subarrays whose product is less than the target.

const findSubarrays = function (arr, target) {
    let result = [];

    let leftIndex=0, product=1;

    for (let rightIndex=0;rightIndex<arr.length;rightIndex++){
        product *= arr[rightIndex]
        console.log("product:", product);
        while (leftIndex<arr.length && product>=target){
            console.log("move leftIndex")
            product /=arr[leftIndex]
            leftIndex++
        }

        const temp =[]
        console.log("begin")
        for (let i=rightIndex;i> leftIndex-1; i--){
            temp.unshift(arr[i])

            console.log("temp:", temp);

            result.push(temp);
            console.log("result:", result);
        }
    }


    return result;
};

findSubarrays([2, 5, 3, 10], 30)
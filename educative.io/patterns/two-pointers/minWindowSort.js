// Minimum Window Sort (medium)
// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
//
// Example 1:
//
// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
// Example 2:
//
// Input: [1, 3, 2, 0, -1, 7, 10]
// Output: 5
// Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
// Example 3:
//
// Input: [1, 2, 3]
// Output: 0
// Explanation: The array is already sorted
// Example 4:
//
// Input: [3, 2, 1]
// Output: 3
// Explanation: The whole array needs to be sorted.

const shortest_window_sort = function(arr) {
    let answer, left=0,right=arr.length-1, max=0, min=Infinity;

    while(left < right){
        if(arr[left] < arr[left+1]){
            left++
        }
        else if(arr[left]>arr[left+1]){

        }
        else if(arr[right] > arr[right-1]){
            right--
        }


        min = Math.min(arr[left], arr[right], min)
        max = Math.max(arr[left], arr[right], max)

    }

    for(let i=left;i<right;i++){

    }


};

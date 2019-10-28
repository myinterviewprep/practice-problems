// 215. Kth Largest Element in an Array
//
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Example 1:
//
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:
//
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {


};


function minHeap(values) {

    this.values = values;


}


minHeap.prototype.add = function (num) {
    this.values.push(num);
    this.float(this.values.length - 1)
}


minHeap.prototype.float = function (index) {
    while (index > 0) {
        let value = this.values[index]
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex]
        if (value < parent) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]]
        }
        else {
            break;
        }

        index = parentIndex;
    }
}

minHeap.prototype.pop = function () {
    let min = this.values[0];
    let top = this.values.pop();
    if (this.values.length) {
        this.values[0] = top;
        this.sink(0);
    }
    return min;
}

minHeap.prototype.sink = function (index) {


    while (true) {

        let value = this.values[index]
        let leftIndex = 2 * index + 1
        let rightIndex = 2 * index + 2
        let needsSwap, swapIndex;

        if(leftIndex<this.values.length){


            if(this.values[leftIndex] < value){
                needsSwap = true;
                swapIndex = leftIndex;





            }

            if(rightIndex<this.values.length){



            }



        }

    }


}
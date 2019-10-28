function quickSort(arr, left = 0, right = arr.length - 1) {

    console.log("quicksort:" ,arr, left, right);

    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);

        if(left < index -1){
            quickSort(arr, left, index-1)
        }
        if(index < right){
            quickSort(arr, index, right-1);
        }

    }
    return arr;
}

function partition(arr, _left, _right) {
    let left = _left, right = _right;
    let pivot = arr[Math.floor((left + right) / 2)];
    console.log("partition:", arr, left, right);
    console.log("pivot:", pivot);

    while (left <= right) {


        while (arr[left] < pivot) {
            console.log(`element at ${left}: ${arr[left]} is smaller than pivot`);
            left++
        }


        while (arr[right] > pivot) {
            console.log(`element at ${right}: ${arr[right]} is greater than pivot`);
            right--
        }

        console.log(`left ${left} right ${right}`)

        // swap if we're still in bounds
        if (left <= right) {
            console.log("swap the values:", arr[right], arr[left]);
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++
            right--
            console.log("arr after swap:", arr)
        }

    }

    console.log("done partitioning returning left:", left);
    return left;
}

console.log(quickSort([5,3,7,6,2,9]));

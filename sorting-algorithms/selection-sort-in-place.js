/**
 * selectionSort recursive
 * @param toSort
 * @param sorted
 * @returns {Array}
 */
function selectionSort(toSort, i=0) {

    // base case
    if (i >= toSort.length - 1) {
        return toSort;
    }

    const minIndex = findIndexOfMinimum(toSort, i);
    swap(toSort, i, minIndex);
    i++;

    return selectionSort(toSort, i);
}

/**
 * selectionSort with a while loop
 * @param toSort
 * @returns {*}
 */
function selectionSortLoop(toSort){
    var i=0;
    while(i<=toSort.length-1){
        const minIndex = findIndexOfMinimum(toSort, i);
        swap(toSort,  i,  minIndex);
        i++;
    }
    return toSort;
}

/**
 * findIndexOfMinimum - return index of the min value
 * @param arr
 * @param i
 * @returns {*}
 */
function findIndexOfMinimum(arr, i) {
    let minIndex = i;
    for (var j = i; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) minIndex = j
    }
    return minIndex;
}

/**
 * swap
 * @param arr
 * @param x
 * @param y
 */
function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}


const testCase = [64, 25, 12, 22, 11]
const answer = selectionSort(testCase);
const answer = selectionSortLoop(testCase);
console.log("answer:", answer);
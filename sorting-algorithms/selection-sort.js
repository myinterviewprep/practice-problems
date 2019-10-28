/**
 * selectionSort
 * @param toSort
 * @param sorted
 * @returns {Array}
 */
function selectionSort(toSort, sorted=[]) {

    // base case
    if (!toSort.length) {
        return sorted;
    }

    let minIndex = findMinimum(toSort);
    sorted.push(...toSort.splice(minIndex, 1))

    return selectionSort(toSort, sorted);
}

function findMinimum(arr) {
    let minIndex=0;
    arr.forEach(function (item, index) {
        if(item < arr[minIndex]) {
            minIndex = index;
        }
    })
    return minIndex;
}


const testCase = [64, 25, 12, 22, 11]
const answer = selectionSort(testCase);

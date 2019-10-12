/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    console.log("matrix:", matrix);

    var height = matrix.length;
    var width = matrix[0].length;


    console.log("height:", height, "width:", width);
    let startIndex = 0;
    if (height > 1) {
        startIndex = Math.round(height / 2)
    }

    console.log("startIndex:", startIndex)
    // console.log("matrix[startIndex]:", matrix[startIndex])
    let v = matrix[startIndex][width - 1]
    console.log("v:", v)


    if (target == v) {
        return true
    } else if (matrix.length == 1) {
        return binarySearch(matrix[0], target);

    } else if (target > v) {
        console.log("target in upper half")
        let m = matrix.slice(startIndex)
        // let m = matrix.splice(0, startIndex)
        console.log("m:", m);
        return searchMatrix(m, target)
    } else if (target < v) {
        console.log("target in lower half")
        let m = matrix.slice(0, startIndex)
        // let m = matrix.splice(startIndex)
        console.log("m:", m);
        return searchMatrix(m, target)
    }


};

function binarySearch(a, target) {
    console.log("binary search:", a,  target);

    var startIndex = Math.round(a.length / 2);
    console.log("startIndex:", startIndex);
    let v = a[startIndex]

    console.log("v:", v);

    if (v == target) {
        return true;
    } else if (a.length == 1) {
        return false;
    } else if (target < v) {
        console.log("target in lower  half")
        return binarySearch(a.slice(0, startIndex), target)
    } else {
        console.log("target in upper half")

        return binarySearch(a.slice(startIndex), target)
    }


}


let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
let answer = searchMatrix(matrix, 3)
console.log("answer:", answer);
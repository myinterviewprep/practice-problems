const _ = require('lodash');


/*
Your previous Plain Text content is preserved below:

Given a list of float numbers, insert “+”, “-”, “*” or “/” between each consecutive pair of numbers to find the maximum value you can get. For simplicity, assume that all operators are of equal precedence order and evaluation happens from left to right.

Example:
    (1.0, 12.0, 3.0) -> 1 + 12 * 3  = 39
min   1   -11  ...
max   1   13
A brute-force solution (generating all possible numbers) would be a good start (and a good coding exercise). Once it’s running, we can then discuss and possibly implement some optimizations.


optimizations:

1. check positive or negative
2. check if current number is > next number
3.


        1
    -11 1/12 12 13




 */


function findMaxSolution(arr, answer) {


    console.log("arr:", arr, "answer:", answer)


    if (!arr.length) {
        return answer;
    }

    if (!answer) {
        answer = arr.shift()
    }


    var nextFloat = arr.shift();


    const possibleOperations = ['+', '-', '*', '/']


    let max = findMaxSolution(_.clone(arr), answer + nextFloat)

    console.log("max:", max);


    let a2 = findMaxSolution(_.clone(arr), answer - nextFloat)
    if (a2 > max) {
        max = a2
    }


    console.log("a2:", a2);
    console.log("max:", max);

    let a3 = findMaxSolution(_.clone(arr), answer * nextFloat)

    console.log("a3:", a3);

    if (a3 > max) {
        max = a3
    }

    console.log("max:", max);

    let a4 = findMaxSolution(_.clone(arr), answer / nextFloat)

    console.log("a4:", a4);

    if (a4 > max) {
        max = a4
    }

    console.log("max:", max);

    return max;


}

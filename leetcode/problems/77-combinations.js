const _ = require('lodash')
// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// Example:
//
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {


    let backtrack = (first, _current = [], answer = []) => {
        let current = _.clone(_current);
        console.log("backtrack:", first,  current)

        if (current.length == k) {
            answer.push(_.clone(current));
            console.log("answer updated:", answer);
            current.pop()
            console.log("popped:", current);
        }

        for (let i = first; i < n + 1; i++) {
            current.push(i);
            console.log("pushed:",current);
            backtrack(i + 1, _.clone(current), answer);


        }


        return answer;
    };

    return backtrack(1);

}




console.log(combine(4,2))
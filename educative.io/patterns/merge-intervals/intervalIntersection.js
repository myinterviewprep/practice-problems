// Problem Statement
// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
//
// Example 1:
//
// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.
// Example 2:
//
// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]
// Explanation: The output list contains the common intervals between the two lists.

const findIntersection = function (intervals_a, intervals_b) {
    let result = [];

    let indexA = 0, indexB = 0;
    while (indexA < intervals_a.length && indexB < intervals_b.length) {

        let intervalA = intervals_a[indexA]
        let intervalB = intervals_b[indexB]


        if (intervalA[1] < intervalB[0]) {
            indexA++
        }
        else if (intervalB[1] < intervalA[0]) {
            indexB++
        }
        else if (intervalA[0] <= intervalB[1] || intervalB[0] <= intervalA[1]) {
            let intersection = [Math.max(intervalA[0], intervalB[0]), Math.min(intervalA[1], intervalB[1])]
            result.push(intersection)

            if (intervalA[1] < intervalB[1]) {
                indexA++
            }
            else {
                indexB++
            }
        }
    }


    return result;
};

merged_intervals = findIntersection([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]);
result = "";
for (i = 0; i < merged_intervals.length; i++)
    result += "[" + merged_intervals[i][0] + ", " + merged_intervals[i][1] + "] ";
console.log("Intervals Intersection: " + result);

merged_intervals = findIntersection([[1, 3], [5, 7], [9, 12]], [[5, 10]]);
result = "";
for (i = 0; i < merged_intervals.length; i++)
    result += "[" + merged_intervals[i][0] + ", " + merged_intervals[i][1] + "] ";
console.log("Intervals Intersection: " + result);


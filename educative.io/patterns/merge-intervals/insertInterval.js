// Problem Statement
// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
//
// Example 1:
//
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
// Example 2:
//
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
// Example 3:
//
// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

const insert = function (intervals, new_interval) {
    let answer = [];

    let interval = intervals[0], i = 0
    // if the interval ends before the new interval begins we continue
    while (intervals[i][1] < new_interval[0]) {
        answer.push(intervals[i])
        i++
    }

    if (i >= intervals.length) {
        return answer;
    }



    do {
        // console.log("merge:", interval, new_interval)
        let start = Math.min(intervals[i][0], new_interval[0])
        let end = Math.max(intervals[i][1], new_interval[1])
        new_interval = [start, end]
        // console.log("merged:", new_interval);
        i++
    } while (i < intervals.length && new_interval[1] >= intervals[i][0])


    answer.push(new_interval);

    while (i < intervals.length) {
        answer.push(intervals[i])
        i++
    }

    return answer;
};

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 6]);
result = "";
for (i = 0; i < intervals.length; i++)
    result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 10]);
result = "";
for (i = 0; i < intervals.length; i++)
    result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[2, 3], [5, 7]], [1, 4]);
result = "";
for (i = 0; i < intervals.length; i++)
    result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

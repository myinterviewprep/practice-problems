// Problem Statement
// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
//
// Example 1:
//
// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].
//
// Example 2:
//
// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
//
// Example 3:
//
// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.
//

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}


const merge = function(intervals) {
// console.log("intervals:", intervals);
    answer = []

    intervals.sort(((a, b) => a.start-b.start));
    // console.log("intervals sorted:", intervals);


    for(let i=0;i<intervals.length-1;i++){

        if(intervals[i].end >= intervals[i+1].start){

            let merged = new Interval(intervals[i].start, Math.max(intervals[i+1].end, intervals[i].end));
            intervals[i+1] = merged;
            intervals[i] = null;

            answer.push(merged);

        }
        else{

            answer.push(intervals[i])

        }

    }


    // return intervals.filter((a) => a!==null);
    return answer;
};




merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)

// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
//
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.
//
// For example:
//
//   { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm
//
// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
//
// For example, given:
//
//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]
//
// your function would return:
//
//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]
//
// Do not assume the meetings are in order. The meeting times are coming from multiple teams.
//
// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.


function _mergeRanges(meetings) {
    // // console.log  ("--------------");
    // // console.log  ("mergeRanges:", meetings);

    // Merge meetings ranges
    var answer = [];
    var hasMerged = false;
    meetings.sort((a,b) => {a.startTime - b.startTime})

    for (var i = 0; i < meetings.length; i++) {


        var meeting1 = meetings[i];

        // // // console.log  ("i:", i);
        // // console.log  ("meeting1:", meeting1);

        if (!meeting1) {
            continue;
        }

        for (var j = 0; j < meetings.length; j++) {

            if (j == i) {
                continue
            }

            var meeting2 = meetings[j];
            // // // console.log  ("j:", j);
            // // console.log  ("meeting2:", meeting2);

            if (!meeting2) {
                continue
            }


            if (isMergeable(meeting1, meeting2)) {

                // // // console.log  ("is mergeable");

                var merged = merge(meeting1, meeting2);

                // // console.log  ("merged:", merged);
                meetings[i] = null;
                meetings[j] = null;
                answer.push(merged);
                hasMerged = true;
            }


        }


    }

    answer.push(...meetings.filter((a) => !!a))

    // // console.log  ("answer:", answer);
    // // console.log  ("hasMerged:", hasMerged);

    if(hasMerged){
        return mergeRanges(answer);
    }
    else{
        return answer.sort((a,b) => a.startTime - b.startTime);
    }


}

function mergeRanges(meetings) {
    // // console.log  ("--------------");
    // // console.log  ("mergeRanges:", meetings);

    meetings.sort((a, b) => {

        // console.log("a:", JSON.stringify(a),  "b:", JSON.stringify(b));
        // console.log("a:", a.startTime,  "b:", b.startTime);

        var ast = a.startTime;
        var bst = b.startTime;

        // console.log("ast:", ast,  "bst:", bst);

        let answer = ast-bst;
        // console.log("ast:", ast, "bst", bst, " = ", answer);
        return answer;
    })

    // console.log("meetings after sort:", meetings);

    for (var i = 1; i < meetings.length; i++) {

        let m1 = meetings[i-1];
        let m2 = meetings[i];

        if(isMergeable(m1,m2)){
            var merged = merge(m1, m2);
            meetings[i-1]=null;
            meetings[i] = merged;
        }

    }

    return meetings.filter((m) => !!m)
}


function isMergeable(m1, m2) {
    if (!m1 || !m2) {
        return false;
    }
    if (m1.endTime >= m2.startTime) {
        return true;
    } else {
        return false;
    }
}

function merge(m1, m2) {
    let endTime;
    if (m2.endTime > m1.endTime) {
        endTime = m2.endTime
    } else {
        endTime = m1.endTime
    }

    return {"startTime": m1.startTime, endTime};
}


// Tests

let desc = 'meetings overlap';
let actual = mergeRanges([{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]);
let expected = [{startTime: 1, endTime: 4}];
assertArrayEquals(actual, expected, desc);

desc = 'meetings touch';
actual = mergeRanges([{startTime: 5, endTime: 6}, {startTime: 6, endTime: 8}]);
expected = [{startTime: 5, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'meeting contains other meeting';
actual = mergeRanges([{startTime: 1, endTime: 8}, {startTime: 2, endTime: 5}]);
expected = [{startTime: 1, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'meetings stay separate';
actual = mergeRanges([{startTime: 1, endTime: 3}, {startTime: 4, endTime: 8}]);
expected = [{startTime: 1, endTime: 3}, {startTime: 4, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'multiple merged meetings';
actual = mergeRanges([
    {startTime: 1, endTime: 4},
    {startTime: 2, endTime: 5},
    {startTime: 5, endTime: 8},
]);
expected = [{startTime: 1, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'meetings not sorted';
actual = mergeRanges([
    {startTime: 5, endTime: 8},
    {startTime: 1, endTime: 4},
    {startTime: 6, endTime: 8},
]);
expected = [{startTime: 1, endTime: 4}, {startTime: 5, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'oneLongMeetingContainsSmallerMeetings';
actual = mergeRanges([
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 5},
    {startTime: 6, endTime: 8},
    {startTime: 9, endTime: 10},
    {startTime: 10, endTime: 12}
]);
expected = [
    {startTime: 1, endTime: 12}
];
assertArrayEquals(actual, expected, desc);

desc = 'sample input';
actual = mergeRanges([
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 5},
    {startTime: 4, endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9, endTime: 10},
]);
expected = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
];
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
    const arrayA = JSON.stringify(a);
    const arrayB = JSON.stringify(b);
    if (arrayA !== arrayB) {
        console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
    } else {
        console.log(`${desc} ... PASS`);
    }
}
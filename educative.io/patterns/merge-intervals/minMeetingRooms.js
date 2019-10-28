// Minimum Meeting Rooms (hard)
// Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.
//
// Example 1:
//
// Meetings: [[1,4], [2,5], [7,9]]
// Output: 2
// Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can
// occur in any of the two rooms later.
// Example 2:
//
// Meetings: [[6,7], [2,4], [8,12]]
// Output: 1
// Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
// Example 3:
//
// Meetings: [[1,4], [2,3], [3,6]]
// Output:2
// Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to
// hold all the meetings.
//
// Example 4:
//
// Meetings: [[4,5], [2,3], [2,4], [3,5]]
// Output: 2
// Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
//
// Here is a visual representation of Example 4:
//


// const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}


function min_meeting_rooms(meetings) {


}

function Heap(values) {
    this.content = [...values];
    this.length = this.content.length;
    this.compare = (a, b) => a.end - b.end;

}

Heap.prototype.insert = function (item) {
    this.content.push(item)
    this.float(this.content.length-1)
    this.length++;
}


Heap.prototype.float = function (index) {
    let value = this.content[index]
    while (index > 0) {

        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.content[parentIndex]

        // parent is less we swap
        if (this.compare(parent, value) < 0) {
            this.content[index] = parent;
            this.content[parentIndex] = value;
        }
        else {
            break;
        }

        index = parentIndex;

    }


}


console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);


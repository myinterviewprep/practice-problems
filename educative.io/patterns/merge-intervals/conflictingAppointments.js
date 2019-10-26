// Problem Statement
// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
//
// Example 1:
//
// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
// Example 2:
//
// Appointments: [[6,7], [2,4], [8,12]]
// Output: true
// Explanation: None of the appointments overlap, therefore a person can attend all of them.
// Example 3:
//
// Appointments: [[4,5], [2,3], [3,6]]
// Output: false
// Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

const can_attend_all_appointments = function(intervals) {

    intervals.sort((a,b) => a[0]-b[0])

    let index1=0,index2=1

    while(index2<intervals.length){

        let interval1=intervals[index1]
        let interval2=intervals[index2]

        if(interval2[0]<interval1[1]){
            return false;
        }


        index1++
        index2++

    }

    return true;
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([[1, 4], [2, 5], [7, 9]])}`)
console.log(`Can attend all appointments: ${can_attend_all_appointments([[6, 7], [2, 4], [8, 12]])}`)
console.log(`Can attend all appointments: ${can_attend_all_appointments([[4, 5], [2, 3], [3, 6]])}`)

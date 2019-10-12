/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals.sort((a,b) => a[0]-b[0])

    for (let i=0;i<intervals.length-1;i++){
        let thisInterval = intervals[i]
        let nextInterval = intervals[i+1]

        if (thisInterval[1] >= nextInterval[0]) {

            let endTime = thisInterval[1] > nextInterval[1] ? thisInterval[1] : nextInterval[1]

            let merged = [thisInterval[0], endTime];
            intervals[i + 1] = merged;
            intervals[i] = null;
        }
    }

    return intervals.filter((value, index) => !!value)

};
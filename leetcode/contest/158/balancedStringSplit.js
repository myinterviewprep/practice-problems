/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {

    var answer=0
    var lCount=0
    var rCount=0

    for (let i=0;i<s.length;i++){

        let c = s[i];

        const L = 'L'
        const R = 'R'

        if (c == L) {
            lCount++
        }
        else{
            rCount++
        }

        if (lCount>0 && lCount == rCount) {
            answer++
            lCount = 0
            rCount = 0
        }


    }

    return answer;

};

let testCase = "RLRRLLRLRL"
console.log(balancedStringSplit(testCase));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("LLLLRRRR"));

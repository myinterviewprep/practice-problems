/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function (low, high) {

    var answer = [];

    for (var i = low; i <= high; i++) {

        if (isSteppingNumber(i)) {
            answer.push(i)
        }

    }
    return answer;

};

function isSteppingNumber(num) {
    var sNum = num.toString();
    var answer = true;
    for (var i = 1; i < sNum.length; i++) {
        var currentDigit = sNum.charAt(i);
        var previousDigit = sNum.charAt(i - 1);
        if (Math.abs(Number.parseInt(previousDigit) - Number.parseInt(currentDigit)) == 1) {
            answer = true;
        } else {
            answer = false;
        }
    }
    return answer;

}

console.log(countSteppingNumbers(0, 21))
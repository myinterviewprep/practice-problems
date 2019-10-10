const {swap} = require("./helpers")

function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    for (var i=0;i<arrayOfChars.length/2;i++){

        var backIndex= arrayOfChars.length -1 - i;


        var temp = arrayOfChars[i]
        arrayOfChars[i] = arrayOfChars[backIndex]
        arrayOfChars[backIndex] = temp;

    }

}

function smartReverse(word) {
    var i = 0;
    var j = word.length - 1;

    while (i < j) {
        swap(word, j, i);
        i++;
        j--;
    }
    return;
}


// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}
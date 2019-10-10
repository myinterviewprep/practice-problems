const {swap} = require("./helpers")

function reverseWords(message) {

    // reverse characters
    reverseCharacters(message)

    var startOfWord = 0;

    // Decode the message by reversing the words
    for (var i = 0; i < message.length; i++) {

        if (message[i] == ' ') {
            endOfWord = i-1
            reverseCharacters(message,  startOfWord, endOfWord)
            startOfWord = i+1;
        }

    }

    reverseCharacters(message,  startOfWord, message.length)

}

function reverseCharacters(word, start=0, end) {
    var i = start;
    var j = end || word.length - 1;

    while (i < j) {
        swap(word, j, i);
        i++;
        j--;
    }
}

// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}
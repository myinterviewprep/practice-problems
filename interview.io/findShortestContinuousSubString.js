const _ = require('lodash');

/*
Write a function that takes an input string and an alphabet and returns the minimum continuous substring which contains every letter of the alphabet at least once.

Example 1:

Input: “acbbsab”
Alphabet: {'a', 'b', ‘c’, ’s'}
Output: "acbbs" or “cbbsa”

Example 2:

Input: “aaaabbbb|bca|cccc”
Alphabet: {‘a’, ‘b’, ‘c’}
Output: "bca"

*/
function minContinguousSubstring(inputString, letters) {

    let previousLetter
    let answer = ''


    // startIndex
    let i = 0
    while (i < inputString.length - letters.length) {

        console.log("i:", i);
        let l = new Set(letters)

        // endIndex
        innerloop:
            for (let j = i; j < inputString.length; j++) {


                console.log("j:", j);

                let c = inputString[j]


                console.log("c:", c);
                console.log("l:", l);


                if (previousLetter && previousLetter == c) {
                    i++
                }


                l.delete(c)

                console.log("l:", l);
                console.log("l.size:", l.size);


                if (!l.size) {

                    console.log("l is empty");
                    console.log("slice i:", i, "j:", j + 1)


                    let currentAnswer = inputString.slice(i, j + 1)
                    console.log("currentAnswer:", currentAnswer);

                    if (!answer) {
                        answer = currentAnswer;
                    } else if (currentAnswer.length < answer.length) {
                        answer = currentAnswer;

                    }

                    break innerloop;
                }


            }
        i++;
    }

    console.log("answer:", answer);
    return answer
}


console.log(minContinguousSubstring("acbbsab", ['a', 'b', 'c', 's']))
console.log(minContinguousSubstring("aaaabbbbbcacccc", ['a', 'b', 'c']))x






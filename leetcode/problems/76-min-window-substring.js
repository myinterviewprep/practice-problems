/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    // console.log("s:", s);
    // console.log("t:", t);

    let leftIndex = 0;
    let rightIndex;
    let answer = '';

    let tLength = t.length;


    // for keeping track of those that occur more than one
    let tCounts = new Map();
    for (let i = 0; i < tLength; i++) {
        let c = t[i]

        let tCount = tCounts.get(c);
        if (!tCount) {
            tCounts.set(c, 1)
        } else {
            tCounts.set(c, ++tCount)
        }

    }

    if (s.length == 1 && t.length == 1 && s == t) {
        return s;
    }
    if (s == t) {
        return s;
    }

    overall:
    while (leftIndex <= s.length - t.length) {

        // create a set with the letters in t
        let letters = new Map()

        innerloop:
            for (rightIndex = leftIndex; rightIndex < s.length; rightIndex++) {

                // console.log("begin for loop");
                let letter = s[rightIndex]
                // console.log("letter:", letter);

                let count = letters.get(letter);

                if (t.includes(letter)) {
                    if (!count) {
                        letters.set(letter, 1);
                    } else {
                        letters.set(letter, ++count)
                    }
                }


                // console.log("letters:", letters);

                let isEqual = true;
                letters.forEach(function (value, key) {
                    if (value < tCounts.get(key)) {
                        isEqual = false;
                    }
                })

                if (letters.size == tCounts.size && isEqual) {
                    // console.log("rightIndex:", rightIndex, "leftIndex:", leftIndex)
                    let currentAnswer = s.slice(leftIndex, rightIndex + 1)
                    // console.log("currentAnswer:", currentAnswer);
                    if (!answer) {
                        answer = currentAnswer
                    } else if (answer.length > currentAnswer.length) {
                        answer = currentAnswer
                    }

                    // console.log("answer:", answer);
                    break innerloop;
                }

            }

        // console.log('now try to move left index');

        // now try to move the left index
        let isValid = true;
        while (isValid) {
            // console.log("left:", leftIndex, "right:", rightIndex);

            let letter = s[leftIndex]
            // console.log("letter:", letter);

            // we always need to increment the left index
            leftIndex++

            let count1 = letters.get(letter)
            let count2 = tCounts.get(letter)

            // console.log(`letter ${letter} count1: ${count1} needs to have at least ${count2}`)

            if (count1 > count2) {
                letters.set(letter, --count1)
                answer = s.slice(leftIndex, rightIndex + 1);
                // console.log("answer:", answer);
                // console.log(letters);
                continue;
            } else if (count1 == count2) {
                isValid = false;
                // console.log("done here")

                if (rightIndex==s.length-1) {
                    break;
                }


            }

        }

    }

    return answer;

};

console.log("is:", minWindow("ADOBECODEBANC", "ABC")) // 'BANC'
console.log("is:", minWindow("ab", "B")) // ''
console.log("is:", minWindow("aa", "aa")) // 'aa'
console.log("is:", minWindow("abc", "a")) // 'a'
console.log("is:", minWindow("abc", "cba")) // 'abc'
console.log("is:", minWindow("abc", "ac")) // 'abc'
console.log("is:", minWindow("bbaac", "aba")) // 'baa'
console.log("----")
console.log("is:", minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd")) // "abbbbbcdd"
// Smallest Window containing Substring (hard)
// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
//
// Example 1:
//
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"
// Example 2:
//
// Input: String="abdabca", Pattern="abc"
// Output: "abc"
// Explanation: The smallest substring having all characters of the pattern is "abc".
// Example 3:
//
// Input: String="adcad", Pattern="abc"
// Output: ""
// Explanation: No substring in the given string has all characters of the pattern.

const find_substring = function (str, pattern) {

    let patternCount = {};
    let shortest;
    for (let i = 0; i < pattern.length; i++) {
        let c = pattern[i]
        if (!patternCount[c]) {
            patternCount[c] = 0
        }
        patternCount[c]++
    }


    console.log(patternCount);

    let leftIndex = 0, completedLetters = 0;
    for (let rightIndex = 0; rightIndex < str.length; rightIndex++) {


        let letter = str[rightIndex]
        if (letter in patternCount) {
            if (--patternCount[letter] === 0) {
                completedLetters++
            }
        }


        console.log("letter:", letter);
        console.log("patternCount:", patternCount, Object.keys(patternCount).length);
        console.log("completedLetters:", completedLetters);

        while (completedLetters === Object.keys(patternCount).length) {

            console.log("completedLetters === patternCount.length", completedLetters, patternCount.size)


            if (!shortest) {
                shortest = str.slice(leftIndex, rightIndex + 1)
                console.log("shortest:", shortest);
            }
            else if (rightIndex - leftIndex + 1 < shortest.length) {
                console.log("rightIndex:", rightIndex, "leftIndex:", leftIndex, "shortest length:", shortest.length);
                console.log("shortest before:", shortest);
                shortest = str.slice(leftIndex, rightIndex + 1)
                console.log("shortest after:", shortest);
            }


            let leftLetter = str[leftIndex];
            if (leftLetter in patternCount) {
                if (patternCount[leftLetter]++ === 0) {
                    completedLetters--
                }
            }
            leftIndex++

        }




    }


    return shortest || '';
}

// console.log(find_substring("aabdec", "abc"))
console.log(find_substring("abdabca", "abc"))
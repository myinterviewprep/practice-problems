const _ = require('lodash');
// Permutation in a String (hard)
// Given a string and a pattern, find out if the string contains any permutation of the pattern.
//
// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
//
// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters it will have n!n! permutations.
//
// Example 1:
//
// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.
// Example 2:
//
// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring.
// Example 3:
//
// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other.
// Example 4:
//
// Input: String="aaacb", Pattern="abc"
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern.

const findPermutation = function (str, pattern) {

    let patternCounts = {};
    for (let i=0;i<pattern.length;i++){
        let letter = pattern[i];
        if (!patternCounts[letter]) {
            patternCounts[letter]=0
        }
        patternCounts[letter]++
    }


    let numLetters = Object.keys(patternCounts).length;
    let leftIndex = 0, numLettersCleared=0;

    for (let rightIndex=0;rightIndex<str.length;rightIndex++){
        let rightLetter = str[rightIndex]

        if (rightLetter in patternCounts) {
            if (--patternCounts[rightLetter]==0) {
                numLettersCleared++
            }
        }

        if (numLettersCleared == numLetters) {
            return true
        }

        if (rightIndex >= pattern.length-1) {
            let leftLetter = str[leftIndex]
            if (leftLetter in patternCounts) {
                if (patternCounts[leftLetter]==0) {
                    numLettersCleared--
                    patternCounts[leftLetter]++
                }
            }
            leftIndex++
        }
    }
    return false;
};

console.assert(findPermutation("oidbcaf","abc")==true, "1 wrong")
console.assert(findPermutation("odicf","dc")==false, "2 wrong")
console.assert(findPermutation("bcdxabcdy","bcdyabcdx")==true, "3 wrong")
console.assert(findPermutation("aaacb","abc")==true, "4 wrong")
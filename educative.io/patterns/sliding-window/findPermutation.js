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

    let patternCount = {}
    for(let i=0;i<pattern.length;i++){
        if (!patternCount[pattern[i]]) {
            patternCount[pattern[i]] = 0
        }
        patternCount[pattern[i]]++
    }

    let leftIndex=0, answer=false, counts={};

    for (let rightIndex=0;rightIndex<str.length;rightIndex++){
        let rightLetter=str[rightIndex]
        if (!(rightLetter in patternCount)) {
            patternCount[rightLetter]--
        }

        if (rightIndex >= pattern.length) {

            let leftLetter = str[leftIndex]
            counts[leftLetter]--
            if (counts[leftLetter]==0) {
                delete counts[leftLetter]
            }
            leftIndex++
        }

        let isEqual=true;
        Object.keys(counts).forEach(function(key){
            if (patternCount[key]!=counts[key]) {
                isEqual=false;
                return false;
            }
        })

        if (isEqual) {
            return true;
        }

    }

    return answer;
};

console.assert(findPermutation("oidbcaf","abc")==true, "1 wrong")
console.assert(findPermutation("odicf","dc")==false, "2 wrong")
console.assert(findPermutation("bcdxabcdy","bcdyabcdx")==true, "3 wrong")
console.assert(findPermutation("aaacb","abc")==true, "4 wrong")
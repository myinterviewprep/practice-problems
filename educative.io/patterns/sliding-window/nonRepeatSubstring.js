// Problem Statement
// Given a string, find the length of the longest substring which has no repeating characters.
//
// Example 1:
//
// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".
// Example 2:
//
// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".
// Example 3:
//
// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

const nonRepeatSubstring = function (str) {

    let maxLength=0
    let leftIndex=0
    let uniqueCharacters= new Set();

    for(let rightIndex=0;rightIndex<str.length;rightIndex++){
        let currentCharacter = str[rightIndex]
        while (uniqueCharacters.has(currentCharacter) ) {
            uniqueCharacters.delete(str[leftIndex])
            leftIndex++
        }
        uniqueCharacters.add(currentCharacter)
        let currentLength = rightIndex - leftIndex + 1
        maxLength = Math.max(currentLength,maxLength)
    }


    return maxLength;
};
console.assert(nonRepeatSubstring("aabccbb")==3, "1st wrong")
console.assert(nonRepeatSubstring("abbbb")==2, "2nd wrong")
console.assert(nonRepeatSubstring("abccde")==3, "3rd wrong")
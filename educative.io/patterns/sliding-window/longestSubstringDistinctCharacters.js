// Problem Statement
// Given a string, find the length of the longest substring in it with no more than K distinct characters.
//
// Example 1:
//
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:
//
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Example 3:
//
// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".


const longestSubstringWithKDistinct = function (str, k) {

    let longestLength=0;
    let leftIndex=0;
    let distinctCharacters = new Set();
    for (let rightIndex=0;rightIndex<str.length;rightIndex++){

        let currentCharacter = str[rightIndex]
        distinctCharacters.add(currentCharacter)


        let currentLength = rightIndex-leftIndex+1
        if (distinctCharacters.size <= k) {
            if (currentLength > longestLength) {
                longestLength =  currentLength
            }
        }
        else{

            while(distinctCharacters.size > k){
                distinctCharacters.delete(str[leftIndex])
                leftIndex++

                // let currentLength = rightIndex - leftIndex + 1
                // if (distinctCharacters.size <= k) {
                //     if (currentLength > longestLength) {
                //         longestLength = currentLength
                //     }
                // }
            }

        }

    }

    return longestLength
};


console.assert(longestSubstringWithKDistinct("araaci", 2)==4, "1st wrong");
console.assert(longestSubstringWithKDistinct("araaci", 1)==2, "2nd wrong")
console.assert(longestSubstringWithKDistinct("cbbebi", 3)==5, "3rd wrong")

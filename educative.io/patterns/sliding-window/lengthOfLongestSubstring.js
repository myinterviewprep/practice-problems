// Problem Statement
// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
// find the length of the longest substring having the same letters after replacement.
//
// Example 1:
//
// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
// Example 2:
//
// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
// Example 3:
//
// Input: String="abccde", k=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

function lengthOfLongestSubstring(str, k) {

    let leftIndex = 0
    let maxLength = 0
    let countOfMaxLetter = 0
    let counts = {}
    for (let rightIndex = 0; rightIndex < str.length; rightIndex++) {

        const letter = str[rightIndex]
        if (!(letter in counts)) {
            counts[letter] = 0
        }
        counts[letter]++

        console.log("counts:", counts)

        countOfMaxLetter = Math.max(countOfMaxLetter, counts[letter])
        let currentLength = rightIndex - leftIndex + 1
        console.log("countOfMaxLetter:", countOfMaxLetter);
        console.log("currentLength:", currentLength);
        console.log("k:", k)


        while((rightIndex-leftIndex+1)-countOfMaxLetter > k){
            console.log("boo --")
            let leftLetter = str[leftIndex]
            counts[leftLetter]--
            leftIndex++
        }

        currentLength = rightIndex - leftIndex + 1
        maxLength = Math.max(maxLength,  currentLength)
    }

    console.log("maxLength:", maxLength)
    return maxLength

}


// const lengthOfLongestSubstring = function (str, k) {
//
//     let leftIndex=0
//     let maxLength = 0
//     let maxRepeatCharCount = 0
//     let characterCount = new Map()
//     for (let rightIndex = 0; rightIndex < str.length; rightIndex++) {
//
//         let currentCharacter = str[rightIndex]
//
//         let count = characterCount.get(currentCharacter) || 0
//         if (!count) {
//             characterCount.set(currentCharacter, 1);
//         } else {
//             characterCount.set(currentCharacter, ++count)
//         }
//
//         maxRepeatCharCount = Math.max(count,  maxRepeatCharCount)
//
//         console.log("maxRepeatCharCount:", maxRepeatCharCount);
//
//         let currentLength = rightIndex - leftIndex + 1
//         while (currentLength-maxRepeatCharCount>k) {
//             let beginningCharacter = str[leftIndex]
//             let beginningCharacterCount = characterCount.get(beginningCharacter)
//             if (beginningCharacterCount == 1) {
//                 characterCount.delete(beginningCharacter)
//             } else {
//                 characterCount.set(beginningCharacter, --beginningCharacterCount)
//             }
//             leftIndex++
//         }
//
//
//         maxLength = Math.max(rightIndex - leftIndex + 1, maxLength)
//
//         console.log("currentLength:", currentLength);
//         console.log("maxLength:", maxLength);
//         console.log("characterCount:", characterCount);
//     }
//
//     console.log("maxLength:", maxLength);
//     return maxLength;
// };


console.assert(lengthOfLongestSubstring("aabccbb", 2) == 5, "1st wrong")
console.assert(lengthOfLongestSubstring("abbcb", 1) == 4, "2nd wrong")
console.assert(lengthOfLongestSubstring("abccde", 1) == 3, "3rd wrong")
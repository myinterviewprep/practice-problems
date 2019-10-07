// Given a string, find the length of the longest substring without repeating characters.
//
// Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * lengthOfLongestSubstring
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    var longestLength = 0
    var currentLength = 0
    var o = {}

    for (var i = 0; i < s.length; i++) {
        console.log("i:", i);

        var currentChar = s[i]

        console.log(`currentChar[${i}]: ${currentChar}`);

        if (o[currentChar]==null) {
            currentLength++;
            o[currentChar] = i;
        } else {
            if (currentLength > longestLength) {
                longestLength = currentLength
            }
            currentLength = 0


            console.log(o[currentChar]);

            i = o[currentChar];
            o = {}
        }

        console.log('currentLength:', currentLength);
        // console.log('longestLength:', longestLength);
    }

    if (currentLength > longestLength) {
        longestLength = currentLength;
    }

    return longestLength;
};

const testCase = "pwwkew";
const answer = lengthOfLongestSubstring(testCase);
console.log(answer);
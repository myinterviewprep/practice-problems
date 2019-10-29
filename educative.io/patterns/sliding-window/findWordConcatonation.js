// Words Concatenation (hard)
// Given a string and a list of words, find all the starting indices of substrings in the given string that are a
// concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.
//
// Example 1:
//
// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".
// Example 2:
//
// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

const find_word_concatenation = function(str, words) {
    let answer = []


    let wordCounts = {};
    for(let i=0;i<words.length;i++){
        let word = words[i];
        if(!wordCounts[word]){
            wordCounts[word]=0
        }
        wordCounts[word]++
    }

    let wordLength = words[0].length, numWords = words.length;

    for(let i=0;i<str.length+1-wordLength*numWords;i++){
        let wordsSeen={}

        for(let j=0;j<numWords;j++){
            let nextWordIndex = i+j*wordLength
            word = str.substring(nextWordIndex, nextWordIndex+wordLength)
            if(!wordCounts[word]){
                break;
            }

            if(!wordsSeen[word]){
                wordsSeen[word]=0
            }
            wordsSeen[word]++

            if(wordsSeen[word] > wordCounts[word]){
                break;
            }

            if(j+1===numWords){
                answer.push(i)
            }
        }
    }
    return answer;
};

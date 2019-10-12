function wordCountEngine(document) {
    // your code goes here


    var temp = {};

    var word = ''
    var order = 0
    document = document.toLowerCase();

    for (var i = 0; i < document.length; i++) {

        let currentChar = document.charAt(i);

        if (currentChar >= 'a' && currentChar <= 'z') {
            word += currentChar;
        } else if (currentChar == ' ' && word != '') {

            if (!temp[word]) {
                temp[word] = {
                    count: 1,
                    order: order
                }

                order++;

            } else {
                temp[word].count++
            }

            word = '';

        }

    }

    if (word != '') {
        if (!temp[word]) {
            temp[word] = {
                count: 1,
                order: order
            }

            order++;

        } else {
            temp[word].count++
        }
    }


    let sorted = Object.keys(temp).sort(function (a, b) {

        console.log("a:", a, temp[a]);
        console.log("b:", b, temp[b]);

        var compareCount = temp[b].count - temp[a].count;
        var compareOrder = temp[a].order - temp[b].order;

        if (temp[a].count == temp[b].count) {
            return compareOrder;
        }

        return compareCount

    })

    console.log("sorted:", sorted);


    var answer = []

    sorted.forEach(function (word) {
        answer.push([word, temp[word].count.toString()])

    })

    return answer;


}


// function wordCountEngine(document):
//     wordMap = new Map()
//     wordList = document.split()
//     largestCount = 0;
//
//     for i from 0 to wordList.length-1:
//         # convert each token to lowercase
//         word = wordList[i].toLowerCase()
//
//         # and remove special/punctuation characters
//         charArray = []
//         for ch in word:
//             if (ch >= 'a' and ch <= 'z'):
//                 charArray.push(ch)
//
//         # form a string from the characters in charArray.
//         # use your programming language's native “join”
//         # or equivalent function. If there isn't any,
//         # implement yourself. It's quite straightforward.
//         cleanWord = join(charArray)
//
//         # if the token consisted of only whitespace
//         # characters, then cleanWord is an empty string
//         # and we should ignore it and continue to the
//         # next word.
//         if (cleanWord.length < 1):
//             continue
//
//         # add clean word to the wordMap and
//         # increase counter if needed
//         count = 0
//         if (cleanWord in wordMap):
//             count = wordMap[cleanWord]
//             count++
//         else:
//             count = 1
//
//         if (count > largestCount):
//             largestCount = count
//
//         wordMap[cleanWord] = count
//
//     # init the word counter list of lists.
//     # Since, in the worst case scenario, the
//     # number of lists is going to be as
//     # big as the maximum occurrence count,
//     # we need counterList's size to be the
//     # same to be able to store these lists.
//     # Creating counterList will allow us to
//     # “bucket-sort” the list by word occurrences
//     counterList = new Array(largestCount+1)
//     for j from 0 to largestCount:
//         counterList[j] = null
//
//     # add all words to a list indexed by the
//     # corresponding occurrence number.
//     for word in wordMap.keys():
//         counter = wordMap[word]
//         wordCounterList = counterList[counter]
//
//         if (wordCounterList == null):
//             wordCounterList = []
//
//         wordCounterList.push(word)
//         counterList[counter] = wordCounterList
//
//     # iterate through the list in reverse order
//     # and add only non-null values to result
//     result = []
//     for l from counterList.length-1 to 0:
//         wordCounterList = counterList[l]
//         if (wordCounterList == null):
//             continue
//
//         stringifiedOccurrenceVal = toString(l)
//         for m from 0 to wordCounterList.length-1:
//             result.push([wordCounterList[m], stringifiedOccurrenceVal])
//
//     return result
//
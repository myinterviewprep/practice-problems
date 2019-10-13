class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {

        let startIndex = 0;
        let endIndex;
        for (let i = 0; i < inputString.length; i++) {

            let current = inputString[i]

            if (isLetterRegex(current)) {

            } else if (current == ' ') {
                endIndex = i;


                let lengthOfCurrent = endIndex - startIndex;
                if (lengthOfCurrent) {

                    // check the ending character
                    let word;
                    let endingChar = inputString[endIndex - 1]
                    if (!isLetterRegex(endingChar)) {
                        word = inputString.slice(startIndex, endIndex - 1);
                    } else {
                        word = inputString.slice(startIndex, endIndex);
                    }

                    if (word.length) {
                        let count = this.wordsToCounts.get(word)
                        if (count) {
                            this.wordsToCounts.set(word, ++count)
                        } else {
                            this.wordsToCounts.set(word, 1)
                        }
                    }


                }

                startIndex = i + 1;
            }
        }

        endIndex = inputString.length;
        let lengthOfCurrent = endIndex - startIndex;
        if (lengthOfCurrent) {
            // check the ending character
            let word;
            let endingChar = inputString[endIndex - 1]
            if (!isLetterRegex(endingChar)) {
                word = inputString.slice(startIndex, endIndex - 1);
            } else {
                word = inputString.slice(startIndex, endIndex);
            }

            if (word.length) {
                let count = this.wordsToCounts.get(word)
                if (count) {
                    this.wordsToCounts.set(word, ++count)
                } else {
                    this.wordsToCounts.set(word, 1)
                }
            }


        }
        console.log("answer:", this.wordsToCounts)


        return this.wordsToCounts;



    }
}

function isLetterRegex(character) {
    let expr = RegExp(/[A-Za-z]/);
    return expr.test(character);
}

// function isLetter(character){
//     // new way with es7
//     return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(character)
//     // old fancy way with ~ and index of
//     return !!~'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character)
// }
//
// function splitWords(inputString, countMap=new Map()){
//
//     let startIndex=0;
//     let endIndex;
//     for (let i=0;i<inputString.length;i++){
//
//         let current = inputString[i]
//
//         if (isLetterRegex(current)) {
//
//         }
//         else if (current == ' ') {
//             endIndex = i;
//
//
//             let lengthOfCurrent = endIndex-startIndex;
//             if (lengthOfCurrent) {
//
//                 // check the ending character
//                 let word;
//                 let endingChar = inputString[endIndex - 1]
//                 if (!isLetterRegex(endingChar)) {
//                     word = inputString.slice(startIndex, endIndex-1);
//                 }
//                 else{
//                     word = inputString.slice(startIndex, endIndex);
//                 }
//
//                 let count = countMap.get(word)
//
//                 if (count) {
//                     countMap.set(word,  count++)
//                 }else {
//                     countMap.set(word, 1)
//                 }
//             }
//
//             startIndex = i + 1;
//         }
//     }
//
//     endIndex = inputString.length;
//     let lengthOfCurrent = endIndex - startIndex;
//     if (lengthOfCurrent) {
//         // check the ending character
//         let word;
//         let endingChar = inputString[endIndex - 1]
//         if (!isLetterRegex(endingChar)) {
//             word = inputString.slice(startIndex, endIndex - 1);
//         } else {
//             word = inputString.slice(startIndex, endIndex);
//         }
//         let count = countMap.get(word)
//         if (count) {
//             countMap.set(word, ++count)
//         } else {
//             countMap.set(word, 1)
//         }
//     }
//
//     return countMap;
// }


// Tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'longer sentence';
actual = new WordCloudData('Chocolate cake for dinner and pound cake for dessert').wordsToCounts;
expected = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
    ['Chocolate', 1], ['dinner', 1], ['cake', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'punctuation';
actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts;
expected = new Map([['cake', 1], ['Strawberry', 1], ['short', 1], ['Yum', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'hyphenated Words';
actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts;
expected = new Map([['cake', 1], ['Dessert', 1], ['mille-feuille', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'ellipses between words';
actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
expected = new Map([['mmm', 2], ['decisions', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'apostrophes';
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
expected = new Map([['Bakery', 1], ['Cakes', 1], ["Allie's", 1], ["Sasha's", 1]]);
assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        const testVal = map2.get(key);

        // In cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}

function assert(condition, desc) {
    if (condition) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL`);
    }
}

// [0, 'a','A', '-','.', ' ', ''].forEach(function(value){
//     console.log(`value: ${value} is letter: ${isLetterRegex(value)}`)
//     console.log(`value: ${value} is letter: ${isLetter(value)}`)
// })
//
// console.log(splitWords("My name is Christopher Chen. I'm a person."))
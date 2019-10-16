// Problem Statement
// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
//
// You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
//
// Write a function to return the maximum number of fruits in both the baskets.
//
// Example 1:
//
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Example 2:
//
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

const fruitsIntoBaskets = function (fruits) {

    let leftIndex = 0
    let fruitCount = {}
    let maxCount = 0
    for (let rightIndex = 0; rightIndex < fruits.length; rightIndex++) {

        let fruit = fruits[rightIndex]
        if (!fruitCount[fruit]) {
            fruitCount[fruit] = 1
        } else {
            fruitCount[fruit]++
        }

        while (Object.keys(fruitCount).length > 2 && leftIndex < fruits.length) {
            let fruit = fruits[leftIndex]
            fruitCount[fruit]--
            if (fruitCount[fruit] == 0) {
                delete fruitCount[fruit]
            }
            leftIndex++
        }

        let count = rightIndex - leftIndex + 1
        maxCount = Math.max(count, maxCount)
    }

    return maxCount;

}


console.assert(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']) == 3, "1st wrong")
console.assert(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']) == 5, "2nd wrong")
/*

Given a set of integers, e.g. {1,3,2}, and an array of random integers, e.g.
[1, 2, 2, -5, -4, 0, 1, 1, 2, 2, 0, 3,3]
Find the shortest continuous subarray that contains all of the values from the set. If the subarray can not be found, return an empty array.
Result: [1, 2, 2, 0, 3]

*/


function findShortest(arr, s) {


    var min;
    // start at 0
    // end when the window is smaller than 3


    for (let i = 0; i < arr.length - s.length; i++) {

        let j = i;
        let setOfDigits = new Set(s);


        innerwhile:
            while (j < arr.length && setOfDigits.size) {


                let currentValue = arr[j]

                if (setOfDigits.has(currentValue)) {
                    setOfDigits.delete(currentValue)

                }
                if (!setOfDigits.size) {

                    let currentLength = j - i

                    if (!min) {

                        min = currentLength
                    } else if (currentLength < min) {
                        min = currentLength
                    }

                    break innerwhile;

                }


                j++
            }


    }

    return min;


}


let testCase = [1, 2, 2, -5, -4, 0, 1, 1, 2, 2, 0, 3, 3]
console.log(findShortest(testCase, [1, 3, 2]))

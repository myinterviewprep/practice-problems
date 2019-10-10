function mergeArrays(myArray, alicesArray) {

    var merged = [];
    var myIndex=0;
    var aliceIndex=0;

    while(myIndex < myArray.length && aliceIndex < alicesArray.length){

        var me = myArray[myIndex]
        var her = alicesArray[aliceIndex]

        if (her > me) {
            merged.push(me)
            myIndex++
        }
        else{
            merged.push(her)
            aliceIndex++
        }

    }

    while(myIndex<myArray.length){
        merged.push(myArray[myIndex])
        myIndex++
    }

    while (aliceIndex < alicesArray.length) {
        merged.push(alicesArray[aliceIndex])
        aliceIndex++
    }

    return merged;
}


// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
        console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}
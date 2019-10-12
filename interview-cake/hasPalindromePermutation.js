function hasPalindromePermutationDumb(theString) {

    let count = {};

    if (theString == '') {
        return true;
    }

    // Check if any permutation of the input is a palindrome
    for (let i = 0; i < theString.length; i++) {
        let char = theString[i]
        if (!count[char]) {
            count[char] = 1
        } else {
            count[char]++
        }
    }

    let counts = Object.values(count);
    let countOfCounts = {};
    let s = new Set();
    for (let i = 0; i < counts.length; i++) {

        let c = counts[i]

        // console.log("c:", c);
        // console.log("c%2:", c % 2)

        s.add(c % 2);


        if (!countOfCounts[c]) {
            countOfCounts[c] = 1;
        }
        else{
            countOfCounts[c]++
        }




    }



    if (theString.length % 2 == 0 && s.has(0) && s.size == 1) {
        return true;
    } else if (theString.length % 2 == 1 && s.has(1) && (s.size == 2 || s.size == 1) && countOfCounts[1]==1) {
        return true;
    }

    return false;
}


function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    var unpaired = new Set();

    if (theString == '') {
        return true;
    }


    for (let i = 0; i < theString.length; i++) {


        let character = theString[i]
        if (unpaired.has(character)) {
            unpaired.delete(character)
        } else {
            unpaired.add(character);
        }

    }

    if (theString.length%2 == 0 && !unpaired.size) {
        return true;
    }
    else if (theString.length%2 == 1 && unpaired.size == 1) {
        return true;
    }



    return false;
}


// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}
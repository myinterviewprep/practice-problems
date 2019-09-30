function encrypt(word) {
    // "dnotq"
    var numbers = [];
    for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        if (i == 0) {
            numbers.push(c + 1);
        } else {
            numbers.push(c + numbers[i - 1]);
        }
    }

    var output = "";
    for (var i = 0; i < numbers.length; i++) {
        while (numbers[i] <= 'z') {
            numbers[i] -= 26;
        }
        output += String.fromCharCode(numbers[i]);
    }

    return output;
}

function decrypt(word) {
    //dnotq -> crime
    var numbers = [];

    numbers.push(word.charCodeAt(0) - 1);

    for (var i = 1; i < word.length; i++) {
        var c = word.charCodeAt(i);
        var prev = word.charCodeAt(i - 1);
        c = c-prev;
        console.log("c:",c)
        while (c < 97) {
            c += 26;
            console.log("c is less than 'a':", c);
        }
        numbers.push(c);
        console.log("numbers:", numbers);
    }

    var output = "";
    for (var i = 0; i < numbers.length; i++) {
        output += String.fromCharCode(numbers[i]);
    }

    return output;
}

let word = "dnotq";
decrypt(word);

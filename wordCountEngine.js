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


var testCase = "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. "
wordCountEngine(testCase);
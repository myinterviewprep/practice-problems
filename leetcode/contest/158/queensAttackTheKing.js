/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {

    console.log("queens:", queens);
    console.log("king:", king);

    let answer = []
    for (let i = 0; i < queens.length; i++) {


        let queen = queens[i]
        console.log("queen:", queen);

        if (canAttack(queen, king)) {


            insertReplaceOrBlock(answer, queen, king)


            answer.push(queen)
        }
    }

    return filterOutBlocking(answer, king);
};

function insertReplaceOrBlock(queens, king, queen) {

    if (!queens.length) {
        queens.push(queen);
    }

    let kingX = king[0]
    let kingY = king[1]

    // incoming queen
    let queenX = queen[0]
    let queenY = queen[1]


    if (queen[0] == king[0]) {

        for (let i = 0; i < queens.length; i++) {
            let currentQueen = queens[i]
            let currentX = currentQueen[0]
            let currentY = currentQueen[1]

            // same x
            if (currentQueen[0] == queen[0]) {

                // both y greater than king
                if (currentQueen[1] > king[1] && queen[1] > king[1]) {

                    // queen is closer to king so replace
                    if (queen[1] < currentQueen[1]) {
                        queens[i] = queen
                    }

                    // otherwise it's blocked so dont insert
                    break;
                }

                // both y less than king
                else if (currentQueen[1] < king[1] && queen[1] < king[1]) {

                    // replace because queen is closer to king because it is greater
                    if (queen[1] > currentQueen[1]) {
                        queens[i] = queen;
                    }

                    break;
                }
                else{
                    // just insert no blocking
                    queens.push(queen)
                }

            }

            // same y
            if (kingY == queenY) {

                // both x > king
                if (queenX > kingX && currentX > kingX) {





                }
                // both y
                else if (queenY < kingY && currentY < kingY ) {


                }


            }

        }

    }


}


}


function filterOutBlocking(queens, king) {
    let answer = []

    for (let i = 0; i < answer.length; i++) {
        let queen = queens[i]


        // give me the closest one to


        // if they have same x there can only be two
        if (queen[0] == king[0]) {

            for (let j = i; j < answer.length; j++) {

            }

        }
        // they have same y there can only be two
        else if (queen[1] == king[1]) {

            // check to see if there is anything sharing y with x between queen[0] and king[0]

        }
        // diagonal there can be four of them


    }
    return answer;
}

function canAttack(queen, king) {
    return inSameRowOrColumn(queen, king) || isDiagonal(queen, king);
}


function inSameRowOrColumn(queen, king) {
    return queen[0] == king[0] || queen[1] == king[1]
}

function isDiagonal(queen, king) {
    return Math.abs(queen[0] - king[0]) == Math.abs(queen[1] - king[1])
}


console.log(
    queensAttacktheKing([[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], [0, 0])
)
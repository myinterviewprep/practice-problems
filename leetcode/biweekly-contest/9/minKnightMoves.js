/**
 *
 *  MY SOLUTION IS TOO SLOW!!!
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var minKnightMoves = function(x, y) {

    var numMoves = 0;
    var myX = 0;
    var myY = 0;
    var queue=[];
    var board = [[]];

    const possibleMoves = [
        [1,2],[2,1], [-1, 2], [-2, 1], [-1, -2], [-2, -1], [1, -2], [2, -1]
    ]

    queue.push([myX,myY]);
    queue.push(null);

    while(queue.length!=0){
        let position = queue.shift();
        if(position == null) {
            numMoves++
            position = queue.shift();
            queue.push(null);
        }

        myX = position[0];
        myY = position[1];

        board[myX, myY]=true;

        if(myX==x && myY==y){
            break;
        }

        possibleMoves.forEach(function(move){
            let possibleX = myX + move[0];
            let possibleY = myY + move[1];
            if (!board[possibleX, possibleY]) {
                queue.push([possibleX,  possibleY]);
            }
        });


    } // end while

    // console.log("numMoves:", numMoves);
    return numMoves;


}


console.log(minKnightMoves(5, 5))
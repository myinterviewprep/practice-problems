// In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].
//
// A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.
//
//
//
// Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.
//
//
//
// Example 1:
//
// Input: x = 2, y = 1
// Output: 1
// Explanation: [0, 0] → [2, 1]
// Example 2:
//
// Input: x = 5, y = 5
// Output: 4
// Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
//
//
// Constraints:
//
// |x| + |y| <= 300


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

            // not already checked and not outside of bounds
            let alreadyChecked = !board[possibleX,possibleY];
            let withinBounds = Math.abs(possibleX) + Math.abs(possibleY) <= 300;
            if (alreadyChecked && withinBounds) {
                queue.push([possibleX,  possibleY]);
            }
        });


    } // end while

    // console.log("numMoves:", numMoves);
    return numMoves;


}


console.log(minKnightMoves(5, 5))
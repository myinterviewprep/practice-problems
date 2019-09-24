/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var minKnightMoves = function(x, y) {

    console.log("destination:", x, y);

    var numMoves = 0;
    var myX = 0;
    var myY = 0;
    var moves = [];
    var queue=[];
    var board = [[]];


    var possibleMovesQ1 = [ [1,2],[2,1] ]
    var possibleMovesQ2 = [ [-1,2],[-2,1] ]
    var possibleMovesQ3 = [ [-1,-2],[-2,-1] ]
    var possibleMovesQ4 = [ [1,-2],[2,-1] ]
    
    
    var possibleMoves;
    
    // Q1
    if(x>0 && y>0){
        possibleMoves = possibleMovesQ1
    }
    // Q2
    else if(x<0 && y > 0){
        possibleMoves = possibleMovesQ2
    }
    // Q3
    else if(x<0 && y < 0){
        possibleMoves = possibleMovesQ3
    }
    // Q4
    else if(x>0 && y < 0){
        possibleMoves = possibleMovesQ4
    }
    else{
        throw new Error("boo");
    }
    
    queue.push([myX,myY]);
    queue.push(null);



    console.log("initial queue:", queue);

    while(queue.length!=0){

        console.log("queue b4:", queue);

        var position = queue.shift();

        if(position == null){
            numMoves++
            position = queue.shift();
        }


        console.log("position:", position);

        myX = position[0];
        myY = position[1];

        board[myX, myY]=true;

        if(myX==x, myY==y){
            break;
        }

        possibleMoves.forEach(function(move){
            queue.push([myX+move[0], myY+move[1]]);
        });
        queue.push(null);


        console.log("queue after:", queue);
        console.log("numMoves:", numMoves);


    } // end while

    console.log("numMoves:", numMoves);
    return numMoves;

    
}

minKnightMoves(2,1);
minKnightMoves(5,5);


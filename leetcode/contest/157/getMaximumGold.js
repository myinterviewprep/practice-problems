/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {

    let maxGold = 0;
    for (var i = 0; i < grid.length; i++) {

        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != 0) {
                console.log("start at", i, ", ", j, "with value", grid[i][j])

                var queue = [[i, j]];
                console.log("queue 1 :", queue);
                let gold = bfs(grid, queue);
                console.log("----- gold ----- :", gold);
                if (gold > maxGold) {
                    maxGold = gold;
                }
            }

        }

    }

    return maxGold;
};


// function _bfs(grid, x, y, visited = {}, currentGold = 0, maxGold = 0) {
//
//
//     console.log("x:", x,  "y:", y);
//     // console.log("maxGold:", maxGold);
//     currentGold = currentGold + grid[x][y];
//     if (currentGold > maxGold) {
//         maxGold = currentGold;
//     }
//     console.log("currentGold:", currentGold);
//     // console.log("maxGold:", maxGold);
//     visited[`${x},${y}`] = true;
//     console.log("visited:", visited);
//     let moves = getMoves(grid, x, y, visited)
//     console.log("moves:", moves);
//     if (!moves.length) {
//         console.log("no more moves returning max gold of ", maxGold);
//         return maxGold;
//     }
//     moves.forEach(function (move) {
//         var g = bfs(grid, move[0], move[1], visited, currentGold, maxGold);
//         // console.log("g:", g);
//         if (g > maxGold) {
//             maxGold = g;
//         }
//     })
//
//     return maxGold;
// }

function bfs(grid, queue, visited = {}, currentGold = 0, maxGold = 0) {
    console.log("queue:", queue);

    while(queue.length){

        var pos = queue.shift();
        var x = pos[0]
        var y = pos[1]

        console.log("x:", x, "y:", y);

        // console.log("maxGold:", maxGold);
        currentGold = currentGold + grid[x][y];
        if (currentGold > maxGold) {
            maxGold = currentGold;
        }
        console.log("currentGold:", currentGold);
        console.log("maxGold:", maxGold);
        visited[`${x},${y}`] = true;
        console.log("visited:", visited);
        let moves = getMoves(grid, x, y, visited)
        console.log("moves:", moves);

        if (!moves.length) {
            break;
        }


        var g = bfs(grid, moves, visited,  currentGold, maxGold);
        if (g > maxGold) {
            maxGold = g;
        }
        // moves.forEach(function (move) {
        //     var g = bfs(grid, move[0], move[1], visited, currentGold, maxGold);
        //     // console.log("g:", g);
        //     if (g > maxGold) {
        //         maxGold = g;
        //     }
        // })
        //
        // return maxGold;
    }

    return maxGold;
}

function getMoves(grid, currentX, currentY, visited = {}) {

    const xLength = grid.length;
    const yLength = grid[0].length;

    // console.log("xlength:", xLength);
    // console.log("yLength:", yLength);

    var moves = [
        [currentX, currentY + 1],
        [currentX, currentY - 1],
        [currentX + 1, currentY],
        [currentX - 1, currentY]
    ];

    // console.log("moves:", moves);

    return moves.filter(function (move) {

        // console.log("move:", move);

        let x = move[0]
        let y = move[1]

        let inBounds = x < xLength && x >= 0 && y < yLength && y >= 0;

        // console.log("in bounds:", inBounds);

        if (inBounds) {
            let notVisited = !visited[`${x},${y}`]
            let notZero = grid[x][y] != 0
            // console.log("notVisited:", notVisited);
            // console.log("notZero:", notZero);
            return notVisited && notZero;
        } else {
            return false;
        }


    })

}


let grid = [
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20]
]
// console.log(getMaximumGold(grid))

grid = [
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0]
]

grid = [
    [1, 0, 7, 0, 0, 0],
    [2, 0, 6, 0, 1, 0],
    [3, 5, 6, 7, 4, 2],
    [4, 3, 1, 0, 2, 0],
    [3, 0, 5, 0, 20, 0]
]

console.log(getMaximumGold(grid))

grid = [
    [0, 0, 0, 0, 0, 0, 32, 0, 0, 20],
    [0, 0, 2, 0, 0, 0, 0, 40, 0, 32],
    [13, 20, 36, 0, 0, 0, 20, 0, 0, 0],
    [0, 31, 27, 0, 19, 0, 0, 25, 18, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 18, 0, 6],
    [0, 0, 0, 25, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 21, 0, 30, 0, 0, 0, 0],
    [19, 10, 0, 0, 34, 0, 2, 0, 0, 27],
    [0, 0, 0, 0, 0, 34, 0, 0, 0, 0]
]

// console.log(getMaximumGold(grid))
// console.log(bfs(grid, [[1,2]]));
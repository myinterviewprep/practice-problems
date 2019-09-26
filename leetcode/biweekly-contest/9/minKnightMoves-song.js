const getMoves = (x, y) => {
    const moves = [[x - 2, y + 1], [x - 2, y - 1], [x - 1, y + 2], [x - 1, y - 2], [x + 1, y + 2], [x + 1, y - 2], [x + 2, y + 1], [x + 2, y - 1]]
    return moves.filter(([nx, ny]) => {
        return Math.abs(nx) + Math.abs(ny) <= 300
    })
}

const doubleSideBfs = function (x, y, queue, reverseQueue, visited, reverseVisited, count) {
    if (!queue.length) return 0
    const level = queue.pop()
    let found = false
    const nextLevelSet = level.reduce((acc, [nx, ny]) => {
        const key = [nx, ny].join(',')
        if (found || reverseVisited[key]) {
            found = true
            return acc
        }
        if (visited[key]) {
            return acc
        }
        visited[key] = true
        return acc.concat(getMoves(nx, ny))
    }, [])
    if (found) return count

    queue.push([...nextLevelSet])

    if (count % 2) {
        return doubleSideBfs(x, y, queue, reverseQueue, visited, reverseVisited, count + 1)
    }
    return doubleSideBfs(x, y, reverseQueue, queue, reverseVisited, visited, count + 1)
};

const minKnightMoves = (x, y, choices = [[0, 0]], count = 0) => {
    if (choices.find(([nx, ny]) => nx === x && ny === y)) return count

    const choiceSet = new Set(choices.reduce((acc, move) => {
        return acc.concat(getMoves(...move).map(choice => choice.join(',')))
    }, []))

    const nextChoices = Array.from(choiceSet).map(choice => {
        return choice.split(',').map(e => parseInt(e))
    })

    const minDistance = nextChoices.reduce((acc, [px, py]) => {
        const distance = getDistance(x, y, px, py)
        if (acc < distance) return acc
        return distance
    }, Math.abs(x) + Math.abs(y))

    const filteredNextChoices = nextChoices.filter(move => {
        return getDistance(x, y, ...move) <= minDistance + 1
    })

    if (minDistance < 8) return doubleSideBfs(x, y, [filteredNextChoices], [[[x, y]]], {}, {}, count)

    return minKnightMoves(x, y, filteredNextChoices, count + 1)
}

const getDistance = (x1, y1, x2, y2) => {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1)
}
function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y]
    arr[y] = temp
}

module.exports = {swap}
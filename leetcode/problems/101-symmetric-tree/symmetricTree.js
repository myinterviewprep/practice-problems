// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//
//
// But the following [1,2,2,null,3,null,3] is not:
//
//     1
//    / \
//   2   2
//    \   \
//    3    3
//
//
// Note:
// Bonus points if you could solve it both recursively and iteratively.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    var currentLevel = [root];
    return bfs(currentLevel);
};

/**
 * bfs
 * @param queue
 */
function bfs(queue) {

    // console.log("bfs:", queue);

    // base case
    if (!queue.length) {
        // console.log("!queue.length:", queue.length);
        return true;
    }

    if (!isLevelSymmetric(queue)) {
        // console.log("not symmetric")
        return false;
    }

    // console.log("build next level");
    // console.log("---------------");

    let nextLevel = [];

    queue.forEach(function (treeNode) {

        // console.log("one queue item:", treeNode);
        if (treeNode) {
            nextLevel.push(treeNode.left);
            nextLevel.push(treeNode.right);
        }

    });


    return bfs(nextLevel);


}

/**
 * isLevelSymmetric
 */
function isLevelSymmetric(arr) {
    var temp = [];
    arr.forEach(function (tNode) {
        temp.push(getValue(tNode))
    })
    var isSym = true;
    while (temp.length > 1) {
        if (temp.shift() != temp.pop()) {
            isSym = false;
            break;
        }
    }
    return isSym;
}

function getValue(treeNode) {
    if (!treeNode) {
        return null;
    }
    return !treeNode ? null : treeNode.val;
}

// var test = new TreeNode(1)
// test.left = new TreeNode(2)
// test.right = new TreeNode(2)
// test.left.right = new TreeNode(3);
// test.right.right = new TreeNode(3);
// console.log(isSymmetric(test));



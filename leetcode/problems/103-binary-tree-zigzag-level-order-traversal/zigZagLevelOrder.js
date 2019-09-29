// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]




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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    return bfs([root], [], 0);
};

function bfs(queue, answer, level) {
    // console.log("answer:", answer);
    // console.log("queue:", queue);
    // console.log("level:", level);

    if (!queue.length) {
        return answer;
    }

    var currentLevel = [];
    var nextLevel=[];

    queue.forEach(function (treeNode) {


        if (!treeNode) {
            return;
        }

        // console.log("level%2", level%2);

        if (level % 2 == 0) {
            // console.log("left to right")
            currentLevel.push(treeNode.val);
        } else {
            // console.log("right to left")
            currentLevel.unshift(treeNode.val);
        }

        if (treeNode.left) {
            nextLevel.push(treeNode.left);
        }
        if (treeNode.right) {
            nextLevel.push(treeNode.right);
        }
    })

    // console.log("currentLevel:", currentLevel);
    // console.log("nextLevel:", nextLevel);

    if (currentLevel.length) {
        answer.push(currentLevel);
    }
    level++;
    return bfs(nextLevel,  answer,  level);
}

// var test = new TreeNode(3)
// test.left = new TreeNode(9)
// test.right = new TreeNode(20)
// test.right.left = new TreeNode(15);
// test.right.right = new TreeNode(7);
// console.log(zigzagLevelOrder(test));
//


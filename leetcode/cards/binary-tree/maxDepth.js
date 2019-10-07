// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

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


let testCase = new TreeNode(1)
testCase.left = null
testCase.right = new TreeNode(2)
testCase.right.left = new TreeNode(3);

let testCase2 = null;

let testCase3 = new TreeNode(3)
testCase3.left = new TreeNode(1)
testCase3.right = new TreeNode(2)

let testCase4 = new TreeNode(3)
testCase4.left = new TreeNode(9)
testCase4.right=new TreeNode(20)
testCase4.right.left=new TreeNode(15)
testCase4.right.right=new TreeNode(7)





var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    return bfs([root]);
};


function bfs(queue, answer = 0) {

    var nextLevel = [];

    if (!queue.length) {
        return answer;
    }

    while (queue.length>0) {
        var curr = queue.shift();

        console.log("curr:", curr.val);

        if (curr.left) {
            nextLevel.push(curr.left);
        }
        if (curr.right) {
            nextLevel.push(curr.right);
        }
    }
    answer++;
    return bfs(nextLevel, answer);
}


console.log(maxDepth(testCase3));
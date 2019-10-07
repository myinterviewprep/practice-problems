const TreeNode = require("../../helpers/TreeNode");

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
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return dfs(root.left, root.right);
};

function dfs(t1, t2) {
    // console.log("dfs called:", t1,  t2);

    if (!t1 && !t2) {
        console.log("both null:", t1, t2);
        return true;
    }

    if (!t1 || !t2) {
        return false;
    }

    console.log(t1.val, t2.val);
    return (t1.val == t2.val) && dfs(t1.left, t2.right) && dfs(t1.right && t2.left);
}

var test = new TreeNode(1)
test.left = new TreeNode(2)
test.right = new TreeNode(2)
test.left.left = new TreeNode(3);
test.left.right = new TreeNode(4);
test.right.left = new TreeNode(4);
test.right.right = new TreeNode(3);


// var test2 = new TreeNode(1)
// test.left = new TreeNode(2)
// test.right = new TreeNode(2)
// test.left.right = new TreeNode(3);
// test.right.right = new TreeNode(3);

console.log(isSymmetric(test));

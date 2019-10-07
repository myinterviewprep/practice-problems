const TreeNode = require("../../helpers/TreeNode");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {

    if (!root1) {
        return false;
    }

    var difference = target-root1.val;
    if (findTarget(root2, difference)) {
        return true;
    }
    else{
        return twoSumBSTs(root1.right, root2, target) || twoSumBSTs(root1.left, root2, target);
    }

};

function findTarget(root, target){

    if (!root) {
        return false;
    }

    else if (root.val == target) {
        return true;
    }

    else if (root.val > target) {
        return findTarget(root.left, target);
    }

    else if (root.val < target) {
        return findTarget(root.right, target);
    }

}

let testCase1 = new TreeNode(0);
testCase1.left = new TreeNode(-10);
testCase1.right = new TreeNode(10);

let testCase2 = new TreeNode(5);
testCase2.left = new TreeNode(1);
testCase2.right = new TreeNode(7);
testCase2.left.left = new TreeNode(0);
testCase2.left.right = new TreeNode(2);

console.log(twoSumBSTs(testCase1, testCase2, 18));




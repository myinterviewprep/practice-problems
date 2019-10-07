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
 * @return {number[]}
 */
var preorderTraversal = function (root,answer=[]) {

    if (root) {
        answer.push(root.val)


        if (root.left) {
            preorderTraversal(root.left, answer)
        }


        if (root.right) {
            preorderTraversal(root.right, answer);
        }

    }

    return answer;

};

let testCase = new TreeNode(1)
testCase.left =null
testCase.right = new TreeNode(2)
testCase.right.left = new TreeNode(3);

let testCase2 = null;

let testCase3 = new TreeNode(3);
testCase3.left = new TreeNode(1);
testCase3.right =  new TreeNode(2);



let answer = preorderTraversal(testCase);
console.log("answer:", answer);
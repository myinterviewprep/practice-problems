// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */

import java.util.*;

class Solution {


    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }

    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> answer = new ArrayList<List<Integer>>();
        List<TreeNode> queue = new ArrayList<TreeNode>();
        queue.add(root);
        bfs(queue, answer);
        return answer;
    }

    public static void bfs(List<TreeNode> level, List<List<Integer>> answer){

        // base case
        if (level.size()==0) {
            return;
        }

        List<Integer> thisLevel = new ArrayList<Integer>();

        List<TreeNode> nextLevel = new ArrayList<TreeNode>();

        for(TreeNode treeNode : level){

            if (treeNode != null) {
                // add to this level
                thisLevel.add(treeNode.val);

                // add to next level
                nextLevel.add(treeNode.left);
                nextLevel.add(treeNode.right);
            }


        }
        if (!thisLevel.isEmpty()) {
            answer.add(thisLevel);
        }

        bfs(nextLevel);
    }

    public static void main(String[] args) {
        TreeNode test = new TreeNode(3);
        test.left = new TreeNode(9);
        test.right = new TreeNode(20);
        test.right.left = new TreeNode(15);
        test.right.right = new TreeNode(7);


        List<List<Integer>> a = levelOrder(test);
        System.out.println(a);
    }
}
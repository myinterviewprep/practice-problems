/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */
class Solution {


    public boolean isSymmetric(TreeNode root) {
       return isMirror(root.left, root.right);
    }

    public boolean isMirror(TreeNode left, TreeNode right){

        if (left == null && right == null) {
            return true;
        }

        if (left == null && right != null || left == null && right != null) {
            return false;
        }

        return isMirror(left.left, right.right) && isMirror(left.right), right.left);
    }



    public static void main(String[] args) {

        public class TreeNode {
            int val;
            TreeNode left;
            TreeNode right;

            TreeNode(int x) {
                val = x;
            }
        }

        TreeNode test = new TreeNode(3);
        test.left = new TreeNode(9);
        test.right = new TreeNode(20);
        test.right.left = new TreeNode(15);
        test.right.right = new TreeNode(7);


        boolean a = isSymmetric(test);
        System.out.println(a);
    }
}
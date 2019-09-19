/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) { val = x; }
 * }
 */
class Solution {


    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode currentOne = l1;
        ListNode currentTwo = l2;
        boolean overTen = false;

        ListNode previousNode = null;
        ListNode solutionHead = null;

        while (currentOne != null && currentTwo != null) {

//            System.out.println("current one: " + currentOne.val);
//            System.out.println("current two: " + currentTwo.val);

            int v = currentOne.val + currentTwo.val;

            if (overTen) {

                // if the previous solution was over ten then when we add it, we have to add 1
                v++;

                // reset the over ten
                overTen=false;
            }


            if (v >= 10) {
                overTen = true;
                v = v-10;
            }


            ListNode solutionNode = new ListNode(v);
            if (solutionHead == null) {
                solutionHead = solutionNode;
            }

            if (previousNode != null) {
                previousNode.next = solutionNode;
            }
            previousNode = solutionNode;
            currentOne = currentOne.next;
            currentTwo = currentTwo.next;
        }

        while (currentOne != null && currentTwo == null) {
            int v = currentOne.val;
            if (overTen) {
                v++;
                overTen = false;
            }
            if (v >= 10) {
                overTen = true;
                v = v - 10;
            }
            ListNode solutionNode = new ListNode(v);
            if (previousNode != null) {
                previousNode.next = solutionNode;
            }
            previousNode = solutionNode;
            currentOne = currentOne.next;
        }


        while (currentOne == null && currentTwo != null) {
            int v = currentTwo.val;
            if (overTen) {
                v++;
                overTen = false;
            }
            if (v >= 10) {
                overTen = true;
                v = v - 10;
            }
            ListNode solutionNode = new ListNode(v);
            if (previousNode != null) {
                previousNode.next = solutionNode;
            }
            previousNode = solutionNode;
            currentTwo = currentTwo.next;
        }

        if (currentOne == null && currentTwo==null && overTen) {
            ListNode solutionNode = new ListNode(1);
            previousNode.next = solutionNode;
        }

        return solutionHead;
    }
}
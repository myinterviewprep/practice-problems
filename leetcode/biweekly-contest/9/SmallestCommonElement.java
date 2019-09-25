// Given a matrix mat where every row is sorted in increasing order,return the smallest common element in all rows.
//
//        If there is no common element,return-1.
//
//
//        Example 1:
//
//        Input:mat=[[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
//        Output:5
//
//
//        Constraints:
//
//        1<=mat.length,mat[i].length<=500
//        1<=mat[i][j]<=10^4
//        mat[i]is sorted in increasing order.
//

import java.util.Arrays;

class Solution {
    public static int smallestCommonElement(int[][] mat) {
        int smallest = -1;


        int[] firstArray = mat[0];

        System.out.println("First Array: " + Arrays.toString(firstArray));


        boolean goNext = false;

        for(int valueToCheck : firstArray){

            System.out.println("Checking value: " + valueToCheck);

            // this loops through array of arrays
            for (int i = 1; i < mat.length; i++) {

                int[] currentArray = mat[i];
                System.out.println("current array of index " + i + " " + Arrays.toString(currentArray));

                // this loops through array
                for (int j = 0; j < currentArray.length; j++) {

                    int value = currentArray[j];
                    if (value == valueToCheck) {
                        System.out.println("value found in array " + i +  " at index: " + j);
                        break;
                    }
                    else if (value>valueToCheck) {
                        System.out.println("value " +value+ " is greater than the value we're checking (" +valueToCheck+ ") so no reason to check further in this array");
                        goNext=true;
                        break;
                    }

                }

                if (goNext) {
                    System.out.println("Since it's missing from one we skip the rest and go to the next value");
                    goNext=false;
                    break;
                }

                if (i == mat.length-1) {
                System.out.println("Solution found: " + valueToCheck);
                smallest = valueToCheck;
                }

            }

            if (smallest != -1) {
                System.out.println("Solution found so no more checking");
                break;
            }

        }




        return smallest;
    }

    public static void main(String[] args) {

        int[][] matrix = {
                {1, 2, 3, 4, 5},
                {2, 3, 5, 8, 10},
                {3, 5, 7, 9, 11},
                {1, 3, 5, 7, 9}
        };

        int answer = smallestCommonElement(matrix);
        System.out.println("answer: " + answer);

    }
}


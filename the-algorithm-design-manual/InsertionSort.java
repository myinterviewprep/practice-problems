import java.util.*;

public class InsertionSort {

    public static void insertionSort(int array[]){
        for(int i=0;i<array.length;i++){

            int k=i-1;
            int j=i;
            while(k>=0){

                if (array[j] < array[k]) {

                    // swap if it's less than the one to the left
                    swap(array,j, k);

                    // move counters down
                    j--;
                    k--;
                }
                else{
                    break;
                }
            }
        }
    }

    public static void insertionSortRecursive(int array[], k){
        // base case

    }

    public static void swap(int array[], int j, int k){
        int temp = array[j];
        array[j] = array[k];
        array[k] = temp;
    }


    public static void main(String args[]){
        int[] testCase = {9, 14, 3, 2, 43, 11, 58, 22};
        System.out.println("testCase before: " + Arrays.toString(testCase));
        insertionSort(testCase);
        System.out.println("testCase after: " + Arrays.toString(testCase));
    }
}
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the sockMerchant function below.
//    static int sockMerchant(int n, int[] ar) {
//
//
//        int numPairs = 0;
//
//        for (int i = 0; i < n; i++) {
//            int color = ar[i];
//            if (temp[color] == 0) {
//                temp[color] = 1;
//            } else {
//                temp[color] = 0;
//                numPairs++;
//            }
//        }
//
//        return numPairs;
//    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

//        int[] ar = new int[n];

        HashSet<Integer> temp = new HashSet<Integer>(n);

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int numPairs = 0;

        for (int i = 0; i < n; i++) {
            int arItem = Integer.parseInt(arItems[i]);

            if (temp.remove(arItem)) {
                numPairs++;
            } else {
                temp.add(arItem);
            }

//            ar[i] = arItem;
        }

//        int result = sockMerchant(n, ar);

        bufferedWriter.write(String.valueOf(numPairs));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}

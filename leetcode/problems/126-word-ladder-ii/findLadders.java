// Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
//
// Only one letter can be changed at a time
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:
//
// Return an empty list if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:
//
// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
//
// Output:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]
// Example 2:
//
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
//
// Output: []
//
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.



import java.util.*;

class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> answer = new ArrayList<List<String>>();

        List<String> queue = new ArrayList<String>(Arrays.asList(beginWord));
        List<String> reverseQueue = new ArrayList<String>(Arrays.asList(endWord));
        List<List<String>> paths = new ArrayList<List<String>>();
        List<List<String>> pathsReverse = new ArrayList<List<String>>();

        return doubleBfs(queue, reverseQueue, wordList, answer, paths, pathsReverse);
    }

    public List<List<String>> doubleBfs(List<String> queue, List<String> reverseQueue, List<String> wordList, List<List<String>> answer, List<List<String>> paths, List<List<String>> pathsReverse){

        if (queue.isEmpty()) {
            return answer;
        }

        List<String> nextLevel = new ArrayList<String>();

        for(String word : queue){
            nextLevel = findWordsOneCharDifferent(word, wordList);
            if (answer.isEmpty()) {
                answer.add(new ArrayList<String>(Arrays.asList(word)));
            }
            else{
                for(List<String> l : answer){

                }
            }

        }


        return doubleBfs(queue, reverseQueue,wordList,answer,paths,pathsReverse);
    }

    /**
     * findWordsOneCharDifferent
     * @param word
     * @param wordList
     * @return
     */
    public static List<String> findWordsOneCharDifferent(String word, List<String> wordList){
        // boolean contains = false;

        // System.out.println("word: " + word);

        List<String> words = new ArrayList<String>();

        for(String listWord : wordList){

            // System.out.println("listword: " + listWord);

            if (word == listWord) {
                // System.out.println("contains true");
                contains = true;
                continue;
            }


            int numDiff =0;
            for(int i = 0;i<word.length();i++){
                char c = word.charAt(i);

                // System.out.println("char c: " + c);
                // System.out.println("num diff: " + numDiff);

                if (listWord.indexOf(c) == -1) {
                    numDiff++;
                    // System.out.println("num diff++: " + numDiff);
                }
                if (numDiff > 1) {
                    numDiff=0;
                    break;
                }
            }

            if (numDiff==1) {
                // System.out.println("numDiff: " + numDiff);
                // System.out.println("adding to list: " + listWord);
                words.add(listWord);
                // System.out.println("listWord: " + listWord);
            }
            numDiff = 0;

        }

        return words;
    }

    public static void main(String[] args) {

        String word = "hit";
        List<String> wordList = new ArrayList<String>(Arrays.asList("hot", "dot", "dog", "lot", "log", "cog"));
        System.out.println("wordList: " + wordList);
        List<String> words = findWordsOneCharDifferent(word,wordList );
        System.out.println("words: " + words);

    }
}


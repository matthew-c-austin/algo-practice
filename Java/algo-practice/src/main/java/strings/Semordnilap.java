package main.java.strings;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

public class Semordnilap {

    public ArrayList<ArrayList<String>> semordnilap(String[] words) {
        HashSet<String> wordsSet = new HashSet<>(Arrays.asList(words));
        ArrayList<ArrayList<String>> semordnilapPairs = new ArrayList<>();

        for (String word : words) {
            String reverse = new StringBuilder(word).reverse().toString();
            if (wordsSet.contains(reverse) && !reverse.equals(word)) {
                ArrayList<String> semordnilapPair = new ArrayList<>();
                semordnilapPair.add(word);
                semordnilapPair.add(reverse);
                semordnilapPairs.add(semordnilapPair);

                wordsSet.remove(word);
                wordsSet.remove(reverse);
            }
        }

        return semordnilapPairs;
    }

}

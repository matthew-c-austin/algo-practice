package strings;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class GroupAnagrams {

    public static List<List<String>> groupAnagrams(List<String> words) {
        HashMap<String, List<String>> wordsMap = new HashMap<>();

        for (String word : words) {
            char[] charArray = word.toCharArray();
            Arrays.sort(charArray);
            String sortedWord = new String(charArray);

            if (wordsMap.containsKey(sortedWord)) {
                wordsMap.get(sortedWord).add(word);
            } else {
                wordsMap.put(sortedWord, new ArrayList<String>(Arrays.asList(word)));
            }
        }

        return new ArrayList(wordsMap.values());
    }
}

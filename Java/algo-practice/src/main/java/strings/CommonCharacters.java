package main.java.strings;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class CommonCharacters {
    public static String[] commonCharacters(String[] strings) {
        HashMap<Character, Integer> charactersCountMap = new HashMap<>();
        for (String string : strings) {
            HashSet<Character> characterSet = new HashSet<>();
            for (char c : string.toCharArray()) {
                if (!characterSet.contains(c)) {
                    if (charactersCountMap.containsKey(c)) {
                        charactersCountMap.put(c, (charactersCountMap.get(c) + 1));
                    } else {
                        charactersCountMap.put(c, 1);
                    }
                    characterSet.add(c);
                }
            }
        }

        ArrayList<Character> commonCharactersList = new ArrayList<>();

        for (char c : charactersCountMap.keySet()) {
            if (charactersCountMap.get(c) == strings.length) {
                commonCharactersList.add(c);
            }
        }

        String[] commonCharactersArray = new String[commonCharactersList.size()];
        for (int i = 0; i < commonCharactersArray.length; i++) {
            commonCharactersArray[i] = commonCharactersList.get(i).toString();
        }

        return commonCharactersArray;
    }
}

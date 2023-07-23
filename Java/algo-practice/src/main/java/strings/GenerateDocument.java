package main.java.strings;

import java.util.HashMap;

public class GenerateDocument {
    public boolean generateDocument(String characters, String document) {
        if (characters == null || document == null) {
            throw new IllegalArgumentException("Input Strings cannot be null");
        }

        if (document.equals("")) {
            return true;
        }

        HashMap<Character, Integer> charactersMap = new HashMap<>();

        for (char c : characters.toCharArray()) {
            if (charactersMap.containsKey(c)) {
                charactersMap.put(c, (charactersMap.get(c) + 1));
            } else {
                charactersMap.put(c, 1);
            }
        }

        for (char c : document.toCharArray()) {
            if (charactersMap.containsKey(c)) {
                int count = charactersMap.get(c);
                if (count == 0) {
                    return false;
                } else {
                    count--;
                    charactersMap.put(c, count);
                }
            } else {
                return false;
            }
        }

        return true;
    }
}

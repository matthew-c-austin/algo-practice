package main.java.strings;

import java.util.HashMap;

public class FirstNonRepeatingCharacter {
    public int firstNonRepeatingCharacter(String string) {
        int outputIdx = -1;
        if (string.isEmpty()) {
            return outputIdx;
        }

        HashMap<Character, Integer> characterCounts = new HashMap<>();

        for(int idx = 0; idx < string.length(); idx++) {
            char character = string.charAt(idx);
            characterCounts.put(character, characterCounts.getOrDefault(character, 0) + 1);
        }

        for(int idx = 0; idx < string.length(); idx++) {
            char character = string.charAt(idx);
            if (characterCounts.get(character) == 1) {
                return idx;
            }
        }

        return outputIdx;
    }
}

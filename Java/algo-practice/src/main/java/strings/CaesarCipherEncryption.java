package main.java.strings;

public class CaesarCipherEncryption {
    public static String caesarCypherEncryptor(String str, int key) {
        if (str == null) {
            return null;
        }

        int newKey = key % 26;
        String alphabet = "abcdefghijklmnopqrstuvwxyz";
        StringBuilder sb = new StringBuilder();

        for (char c : str.toCharArray()) {
            sb.append(getNewLetter(c, newKey, alphabet));
        }

        return sb.toString();
    }


    public static char getNewLetter(char letter, int key, String alphabet) {
        int newIndex = alphabet.indexOf(letter) + key;
        return alphabet.charAt(newIndex % 26);
    }
}

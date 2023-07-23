package main.java.strings;

public class RunLengthEncoding {
    public static String runLengthEncoding(String string) {
        if (string == null) {
            return null;
        }

        StringBuilder sb = new StringBuilder();

        char currentChar = string.charAt(0);
        int count = 0;

        for (int i = 0; i < string.length(); i++) {
            if (string.charAt(i) != currentChar) {
                encodeCharacter(count, currentChar, sb);
                count = 0;
                currentChar = string.charAt(i);
            }

            count++;
        }

        encodeCharacter(count, currentChar, sb);

        return sb.toString();
    }

    public static void encodeCharacter(int count, char c, StringBuilder sb) {
        for (int i = 0; i < count / 9; i++) {
            sb.append("9" + c);
        }

        int remainder = count % 9;
        if (remainder != 0) {
            sb.append(Integer.toString(remainder) + c);
        }
    }
}

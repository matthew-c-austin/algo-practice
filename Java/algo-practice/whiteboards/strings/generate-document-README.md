# Strings - Generate Document

## Features

You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string (
).

## Whiteboard Process

Note: Whiteboard below may not be a working solution based on technical interview simulation. Code solution may differ.

![Whiteboard Image](../images/strings-generate-document.png)

## Approach & Efficiency

- The Big O time complexity for the is O(n * m), where n is the number of strings, m is the length of the longest string. The space complexity is O(c), where c is the number of unique characters across all strings.

## Solution

[Link to Correct Code](../../src/main/java/strings/GenerateDocument.java)




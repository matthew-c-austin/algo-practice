# Strings - Run Length Encoding

## Features

Write a function that takes in a non-empty string and returns its run-length encoding.
From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A" . 

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 A s), can't naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA" Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A".

## Whiteboard Process

Note: Whiteboard below may not be a working solution based on technical interview simulation. Code solution may differ.

![Whiteboard Image](../images/strings-run-length-encoding.png)

## Approach & Efficiency

- The Big O time complexity for the is O(n), as we traverse the string once and perform mostly constant time operations. The space complexity is O(n), we're building a string that is at worst all different characters.

## Solution

[Link to Correct Code](../../src/main/java/strings/RunLengthEncoding.java)




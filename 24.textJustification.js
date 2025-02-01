var fullJustify = function(words, maxWidth)
 {
    
    let result = [];
    let temp = [];
    let tempLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (tempLength + temp.length + words[i].length > maxWidth) {
            let space = maxWidth - tempLength;
            for (let j = 0; j < space; j++) {
                temp[j % (temp.length - 1 || 1)] += ' ';
            }
            result.push(temp.join(''));
            temp = [];
            tempLength = 0;
        }
        temp.push(words[i]);
        tempLength += words[i].length;
    }
    result.push(temp.join(' '));
    for (let i = 0; i < result.length; i++) {
        while (result[i].length < maxWidth) {
            result[i] += ' ';
        }
    }
    return result;

};
 console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
  // ["This    is    an", "example  of text", "justification.  "]
    console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16)); 
    // ["What   must   be", "acknowledgment  ", "shall be        "]
    console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20)); 
    // ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "]
 

// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
// For the last line of text, it should be left-justified, and no extra space is inserted between words.
// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
 
// Example 1: Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Example 2: Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.

// Example 3: Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]
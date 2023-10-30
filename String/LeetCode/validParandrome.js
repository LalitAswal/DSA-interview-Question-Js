// https://leetcode.com/problems/valid-palindrome/
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    // const alphaFinder = /[^a-zA-Z]/g;
    const onlyString = s.replace(/[^a-zA-Z]/g,'').toLowerCase()
    console.log(onlyString);
    if(s == " ")  return true
    
    let reverseOnlyString ='';
    for(let x=0; x<onlyString.length;x++){
        reverseOnlyString=reverseOnlyString+onlyString[x]
    }
    console.log('reverseOnlyString',reverseOnlyString);
    console.log('onlyString',onlyString);
    if(reverseOnlyString === onlyString) return true
    return false
};

// let s = "race a car";
let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s))
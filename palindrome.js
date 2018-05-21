'use strict';

const HashMap = require('./hashmaps');

// Any permutation a palindrome
// Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.
function is_palindrome(s) {
  //need to create new hashmap. loop through our string rearrange letters to create new strings to send through the set function and set new key-value pairs. Need to get and check each value to see if it is a palindrome. If it is return true if it is not return false.
  //something is a palindrome if everything in the string is even except for one that is odd. key is letter, value is count (increment it).
  let newHashMap = new HashMap();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  //loop over the string
  //letter is the key, count is the value
  //if the key is not there then add key (letter) and set the value to 1
  //if the key (letter) is there then increment the counter by 1
  for (let i = 0; i < s.length; i++) {
    let keyCount;
    try {
      keyCount = newHashMap.get(s[i]);
    }
    catch (err) {
      keyCount = 0;
    }
    newHashMap.set(s[i], keyCount + 1);
  }
  //set a count variable for hash count
  //iterate through the slots arr
  //get the num value for each key(letter)
  //is the value odd (increase hashcount by 1)
  //if we get a value >1 at the end then it won't be a palindrome

  let hashCount = 0;
  for (let i = 0; i < newHashMap.length; i++) {
    if(newHashMap.get(s[i]) % 2 !==0) {
      hashCount ++;
      console.log(hashCount);
    }
  }
  return hashCount >1 ? `${s} is not a palindrome` : `${s} is a palindrome`;
}
  
// true, true, true
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
console.log(is_palindrome("end"));
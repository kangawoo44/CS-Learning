/**
 * Write a function called findLongestSubstring, which accepts
 * a string and returns the length of the longest substring with all distinct characters.
 * 
 * Constraints:
 * Time - O(n)
 */

function findLongestSubstring(str) { //time O(n), space O(n)
  if (str.length <= 1) {
    console.log(str.length);
    return str.length;
  }
  //loop over entire string
  //make a hash map to store each character
  //for each character, add into map if it doesn't exist
    //count++ and store into variable if it's greater than the max length found so far
  //if it exists, change the position to 1 + position of previous duplicate char
    //reset hashmap
  //if the rest of the string length is less than the current max length found, return max length
  let maxLength = 0;
  let charMap = new Map();
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (!charMap.has(str[i])) {
      charMap.set(str[i], i);
      counter++;
      maxLength = counter > maxLength ? counter : maxLength;
    } else {
      i = charMap.get(str[i]);
      charMap = new Map();
      counter = 0;
      let charsLeftOver = str.length - i - 1;
      if (charsLeftOver < maxLength) {
        console.log(maxLength);
        return maxLength;
      }
    }
  }
  console.log(maxLength);
  return maxLength;
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
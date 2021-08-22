/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Example:
validAnagram('', '') // ture
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // ture
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // ture
*/

const validAnagram = (str1, str2) => { //time O(n), space O(n)
  //input checks: type ('123', '321')

  //Check:
  //invalid: null, undefined, if found return false
  //empty: empty string
  //check if str1 and 2 are of the same length
    //if not, return false
  if (!(str1 && str2 && str1.length > 0 && str1.length === str2.length)) {
    return false;
  }
  
  //if same, make frequency maps of both strings by looping over a string : O(n)
  const str1_map = getFrequencyMap(str1);
  const str2_map = getFrequencyMap(str2);
  
  //compare the two frequency maps by looping over one of the maps : O(n)
  for (const [key, value] of str1_map) {
    //if a frequency mismatch is found, return false
    if (!(str2_map.get(key) == value)) return false;
  }
  return true;
}

const getFrequencyMap = (str) => {
  let map = new Map();
  for (const char of str) {
    const mapVal = map.get(char);
    let value = mapVal ? mapVal + 1 : 1;
    map.set(char, value);
  }
  return map;
}

console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
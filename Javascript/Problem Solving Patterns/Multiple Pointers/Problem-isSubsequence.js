/**
 * Write a function called isSubsequence which takes in 
 * two strings and checks whether the characters in the first string 
 * form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first string 
 * appear somewhere in the second string, without their order changing.
 * 
 * Examples:
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 * 
 * Your solution MUST have AT LEAST the following complexities:
 * time - O(n+m)
 * space - O(1)
 */

function isSubsequence(str1, str2) {
  //type
  if (!str1 || !str1.length) {
    console.log('true');
    return true;
  }
  if (!str2 || typeof str1 !== 'string' || typeof str2 !== 'string'
    || str2.length < str1.length) {
    console.log('false');
    return false;
  }

  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) {
      console.log('true');
      return true;
    }
  }
  console.log('false');
  return false;
}

//recursive but not O(1) space
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//   return isSubsequence(str1, str2.slice(1))
// }

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
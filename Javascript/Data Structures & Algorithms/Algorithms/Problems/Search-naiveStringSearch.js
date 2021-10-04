/**
 * naiveStringSearch
 * 
 * Pseudo Code:
 * loop over the longer string
 * loop over the shorter string
 * if the characters don't match, break out of the inner loop
 * if the characters do match, keep going
 * if you complete the inner loop and find a match, increment the count of matches
 * return the count
 */

let naiveStringSearch = (longStr, shortStr) => {
  //loop through the longStr
  //if a character match is found, loop through the shortStr and see if every character matches. During this loop the longStr will only temporarily change its index position.
  //if the whole shortStr match is found, increment the numberOfMatches counter. Continue looping through longStr from where it was left off (after first char match if no complete match to shortStr was found).
  return numberOfMatches;
}

console.log(naiveStringSearch("", ""));
console.log(naiveStringSearch("hello my name is helion. people often say he's a cool guy.", "he")); // 3

////////////////////////////////////////////////////////////////////////////
function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

naiveSearch("lorie loled", "lol")
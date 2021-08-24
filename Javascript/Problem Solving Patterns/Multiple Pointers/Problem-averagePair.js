/**
 * Write a function called averagePair. 
 * Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array where 
 * the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 * 
 * Bonus Constraints:
 * - Time: O(n)
 * - Space: O(1)
 * 
 * Sample Input:
 * averagePair([1,2,3],2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19],8) // true
 * averagePair([-1,0,3,4,5,6],4.1) // false
 * averagePair([],4) // false
 */

function averagePair (arr, target) {
  //invalid inputs, empty inputs, input types
  if (!arr || arr.length < 2 || !target) {
    console.log('false');
    return false;
  }
  
  let left = 0, right = arr.length - 1;
  while(left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      console.log('true');
      return true;
    } else if (average < target) {
      left++;
    } else if (average > target) {
      right--;
    }
  }
  console.log('false');
  return false;
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6],4.1) // false
averagePair([],4) // false
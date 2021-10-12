/**
 * Radix Sort
 * 
 * Look at one digit at a time for all numbers from the end. Put them into digit buckets 0 to 9 based on what the digit value is.
 * Then use the bucket order (0 to 9) to sort the list. Repeat with the second digit from the end, til the end.
 * If there is no value for the current digit, put the number into the 0 bucket.
 * This process should repeat for how many digits the biggest number has.
 */

//i starts from the end of a number. i.e. for 12345, 0th would be 5.
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//count how many digits are there in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//find the longest digit number
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])
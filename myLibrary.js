// You are given the length of a video in minutes.
// The format is mm:ss (e.g.: "02:54").
// Create a function that takes the video length and return it in seconds.
// Examples
// minutesToSeconds("01:00") ➞ 60
// minutesToSeconds("13:56") ➞ 836
// minutesToSeconds("10:60") ➞ false
// Notes
// The video length is given as a string.
// If the number of seconds is 60 or over, return false (see example #3).
// You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).
const minutesToSeconds = time => {
    let [minutes, seconds] = time.split(":").map(Number);
    //usage of destructuring, map casting
	return seconds < 60 ? (minutes * 60) + seconds : false;
}

//factorial of a positive integer
// The factorial of 0 is 1.
// The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).
function factorial(z) {
    return z ? (z * factorial(z - 1)) : 1
    //usage of a recursive function
}

//n - number of socks in ar
//ar - array of sock by their colors
//find the number of available same color sock pairs in the "ar"ray
function sockMerchant(n, ar) {
    let colorMap = new Map()
    let validPairs = 0
    ar.forEach(color => {
        if (colorMap.has(color)) {
            colorMap.delete(color)
            validPairs++
        } else {
            colorMap.set(color, 1)
        }
    })
    //usage of Map: set, has, delete
    return validPairs
}


console.log(Math.max(1, 3, 2));
// expected output: 3
console.log(Math.max(-1, -3, -2));
// expected output: -1

//Spread syntax usage
const array1 = [1, 3, 2];
console.log(Math.max.apply(null, array1));
// expected output: 3
// replace function.apply() with a simpler Spread syntax
console.log(Math.max(...array1));
// expected output: 3

const str = "abcdef"
console.log([str])
// expected output: [ 'abcdef' ] - convert into array with one string in it
console.log([...str])
// expected output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
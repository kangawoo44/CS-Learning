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

//more Map()
let hMap = new Map([
    [8, 0], [7, 1], [6, 2],
    [5, 3], [4, 4], [3, 5],
    [2, 6], [1, 7], [0, 8]
])
let max = Math.max(...hMap.keys()) //expected max: 8
console.log(hMap.get(max));
// expected output: 0

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

// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
// indexShuffle("abcd") ➞ "acbd"
// // "ac" (even-indexed) + "bd" (odd-indexed)
// indexShuffle("abcdefg") ➞ "acegbdf"
// indexShuffle("holiday") ➞ "hldyoia"
// indexShuffle("maybe") ➞ "myeab"
function indexShuffle(str) {
	const even = [...str].filter((char, i) => i % 2 === 0);
	const odd = [...str].filter((char, i) => i % 2);
	return [...even, ...odd].join('');
}
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//regex
if (stationSearchTerm.endsWith('radio')) {
    stationSearchTerm = stationSearchTerm.replace(/radio$/, '')
    //$ - end of string
}
//e.g. “mix 106 5” >> “mix 106.5", “94 5” >> “94.5"
stationSearchTerm = stationSearchTerm.replace(/(\d{2,3})(\s)(\d\s?$)/, '$1.$3')
// (exp) - grouping, refer to them with $1, $2 respectively
// \d - a digit | \s - a white space
// exp{2,3} - 2 to 3 times
//e.g. “5 50” >> “550"
stationSearchTerm = stationSearchTerm.replace(/(\d)(\s)(\d{2})/, '$1$3')
//e.g. “10 10” >> “1010"
stationSearchTerm = stationSearchTerm.replace(/(\d{2})(\s)(\d{2})/, '$1$3')

const REGEXP = /blue|red/
"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue
// Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
const REGEXP = /blue flag|red flag/g
const REGEXP = /(red|blue) flag/g //even better
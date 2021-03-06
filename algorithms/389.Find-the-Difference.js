/**
 * 389. Find the Difference
 * Given two strings s and t which consist of only lowercase letters.
 * String t is generated by random shuffling string s and then add one more letter at a random position. 
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// give an array [26]
// s -1 in array[i] and t +1 in array[i], then find which is 1
var findTheDifference = function(s, t) {
    var nums = new Array(26);
    for(var idx = 0; idx < nums.length; idx++) {
        nums[idx] = 0;
    }
    s = s !== null && s !== undefined ? s.split("") : null;
    t = t !== null && t !== undefined ? t.split("") : null;
    for(var i = 0; i < s.length; i++) {
        nums[s[i].charCodeAt()-97]--;
        nums[t[i].charCodeAt()-97]++;
    }
    nums[t[t.length-1].charCodeAt()-97]++;
    
    for(var k = 0; k < nums.length; k++) {
        if(nums[k] == 1) {
            return String.fromCharCode(k+97);
        }
    }
};


console.log(findTheDifference("abcd", "abcde")); //e
console.log(findTheDifference("abcd", "becad")); //e

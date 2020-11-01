/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = {}
​
  for(const word of s) {
    if(count[word]) count[word]++
    else count[word] = 1
  }
​
  for( let i = 0; i < s.length; i++) {
    const strWrd = s[i]
​
    if (count[strWrd] === 1) {
        return i
    }
  }
​
  return -1
};

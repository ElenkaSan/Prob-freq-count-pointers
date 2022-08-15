// add whatever parameters you deem necessary
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Time Complexity: O(M + N) - 
// If M is the length of message and N is the length of letters:
function constructNote(msg, letter) {
    let msgFrequency = {};
    let ltrFrequency = {};
    for (let val of msg) {
        let valCount = msgFrequency[val] || 0;
        msgFrequency[val] = valCount + 1;
        // msgFrequency[val] = msgFrequency[val] + 1 || 1;
     }
    for (let char of letter) {
       let charCount = ltrFrequency[char] || 0;
       ltrFrequency[char] = charCount + 1;
       // ltrFrequency[char] = ltrFrequency[char] + 1 || 1;
    }
    for (let char in msgFrequency) {
       if (!ltrFrequency[char]) return false;
       if (msgFrequency[char] > ltrFrequency[char]) return false;
    }
  return true;
}

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

module.exports = { constructNote };
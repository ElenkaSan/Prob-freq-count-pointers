// add whatever parameters you deem necessary
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Time Complexity - O(N + M)
function isSubsequence(str1, str2) {
    let ind1 = 0;
    let ind2 = 0;
    if(str1 === null) return true;
    while (ind2 < str2.length) {
		if (str2[ind2] === str1[ind1]) {
			ind1 ++;
		}
		if (ind1 === str1.length) return true;
		ind2 ++;
	}
	return false;
}

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

module.exports = { isSubsequence };
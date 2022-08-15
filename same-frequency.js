// add whatever parameters you deem necessary
// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// Time Complexity - O(N + M)
function sameFrequency(num1, num2) { 
  let str1 = num1.toString();
	let str2 = num2.toString();
  if(str1.length !== str2.length) return false;
    const charM1 = createFrequencyCounter(str1);
    const charM2 = createFrequencyCounter(str2);
    // console.log(charM1, charM2)
    if(charM1.size !== charM2.size) return false;
    for (let letter of charM1.keys()) {
      if(charM2.get(letter) !== charM1.get(letter)) return false;
    }
    return true;
}

function createFrequencyCounter(array) {
    let frequencies = new Map();
    for (let val of array) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
    return frequencies;
  }

//   function sameFrequency(num1, num2) {
// 	let str1 = num1.toString();
// 	let str2 = num2.toString();
// 	if (str1.length !== str2.length) return false;
// 	let n1 = {};
// 	let n2 = {};
// 	for (let i = 0; i < str1.length; i++) {
// 		n1[str1[i]] = (n1[str1[i]] || 0) + 1;
// 	}
// 	for (let j = 0; j < str2.length; j++) {
// 		n2[str2[j]] = (n2[str2[j]] || 0) + 1;
// 	}
// 	for (let key in n1) {
// 		if (n1[key] !== n2[key]) return false;
// 	}
// 	return true;
// }

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

module.exports = { sameFrequency };

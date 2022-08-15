// add whatever parameters you deem necessary
// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You 
// can assume that there will be no duplicate values in the array.
// Constraints
// Time Complexity - O(N * log(N))
// or  Time Complexity - O(N)
// O(N):
function countPairs(arr, num) {
    let set = new Set(arr);
    let count = 0;
    for (let val of arr) {
      set.delete(val);
      if (set.has(num - val)) {
        count++;
      }
    }
  return count;
}

// O(N * log(N)):
// function countPairs(arr, num) {
// 	arr.sort((a, b) => a - b);
// 	let count = 0;
// 	let left = 0;
// 	let right = arr.length - 1;
// 	while (left < right) {
// 		let sum = arr[left] + arr[right];
// 		if (sum === num) {
// 			count++;
// 			left++;
// 			right--;
// 		} else if (sum > num) {
// 			right--;
// 		} else {
//             left++;
// 		}
// 	}
// 	return count;
// }

// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2

module.exports = { countPairs };
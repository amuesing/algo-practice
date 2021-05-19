//** Multiple Pointers */

// Creating pointers or values that correspond to an
// index of position and move towards the beginning,
// end or middle based on a certain condition

// Very efficient for solving problems
// with minimal space complexity as well

//** An Example */

// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exists

// Naive Solution

// const sumZero = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i+1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === 0) {
//                 return arr[i], arr[j];
//             }
//         }
//     }
// }

// Time Complexity - O(N^2)
// Space Complexity - O(1)


// Refactored Solution with 2 pointers

function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
        let sum = arr[left + arr[right]];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// Time Complexity - O(N)
// Space Complexity - O(1)

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))
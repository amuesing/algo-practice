// Frequency Counters

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

//**** Naive Solution */

// This is a naive solution because it is O(n^2) time because of the nested loop. 

// function same(arr1, arr2) {
//     if(arr1.length != arr2.length) { // first checks if the two arrays are the same length
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2) // call indexOf where we pass in the square of each value-- what is the index of i^2 in the second array 
//         if(correctIndex === -1) { // if the corrected index is -1, meaning that it is not in the second array, return false
//             return false;
//         }
//         arr2.splice(correctIndex, 1) // removes the indexOf i^2 from the second array
//     }
//     return true // iterate through the array, and if we never return false we return true
// }

//** Refactored */

// Time Complexity = O(n)

const same = (arr1, arr2) => {
    if(arr1.length != arr2.length) {
        return false;
    }
    let frequencyCounter1 = {} // count frequency of individual values in the array-- compiling an object that tells us how many times a value is in that array
    let frequencyCounter2 = {} 
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) { // if key value of frequencyCounter1[i] is not presented and squared in frequencyCounter2, return false
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // checking to see if frequency of the values is the same by measuring truthy values
            return false
        }
    }
    return true
}
// console.log(same([1,2,3], [4,4,9]))

/** Anagrams */

// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed iceman.
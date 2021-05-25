// How do we search?

// Given an array, the simplest way to
// search for a value is to look at
// every element in the array and
// check if it's the value we want.

// There are many different search methods on arrays in JavaScript:

// indexOf
// includes
// find
// findIndex

//** Pseudo Code Example **//

// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

const linearSearch = (arr, val) => {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
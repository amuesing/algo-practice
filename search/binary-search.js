//** Binary Search **//

// Binary Search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays!

//** PseudoCode **//

// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
    // Create a pointer in the middle
    // If you find the value you want, return the index
    // If the value is too small, move the left pointer up
    // If the value is too large, move the right pointer down
// If you never find the value, return -1

// Write a function called binarySearch which accepts a sorted array 
// and a value and returns the index at which the value exists. 
// Otherwise, return -1.

const binarySearch = (arr, elem) => {
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28], 15))
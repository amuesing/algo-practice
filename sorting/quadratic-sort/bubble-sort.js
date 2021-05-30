//** Bubble Sort **//

// A sorting algorithm where the largest
// values bubble up to the top

// Before we sort, we must swap!

// Many sorting algorithms involve some type
// of swapping functionality (e.g. swapping
// to numbers to put them in order)

// // ES5

// const swap = (arr, idx1, idx2) => {
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp
// }

// // ES2015

// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// BubbleSort Pseudocode

// Start looping with a variable called i at the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i -1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// Optimized with noSwaps variable

function bubbleSort(arr) {
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
           if(arr[j] > arr[j+1]){
               //SWAP!
               var temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
               noSwaps = false;
           }
        }  
        if(noSwaps) break; 
    }
    return arr;
}

// const bubbleSort = (arr) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

console.log(bubbleSort([37,45,29,8]))

// In general, the time complexity is O(n^2) because we have a nested loop.
// However, if the data is already sorted, or nearly sorted then it is closer to linear time O(n).
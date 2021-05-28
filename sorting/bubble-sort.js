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

// function bubbleSort(arr) {
//     for(var i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
//            if(arr[j] > arr[j+1]){
//                //SWAP!
//                var temp = arr[j];
//                arr[j] = arr[j+1];
//                arr[j+1] = temp
//            }
//         }   
//     }
//     return arr;
// }

const bubbleSort = (arr) => {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37,45,29,8]))
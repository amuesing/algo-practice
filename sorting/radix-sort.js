//** Radix Sort **//

// Radix sort is a special sorting algorithm that
// works on lists of numbers.

// It never makes comparisons between elements!

// It exploits the fact that information
// about the size of a number is encoded
// in the number of digits.

// More digits means a bigger number!

//** Radix Sort Helpers **//

// In order to implement radix sort,
// it's helpful to build a few helper functions:

// getDigit(num, place) - returns the digit in num at the given place value
// digitCount(num) - returns the number of digits in num
// mostDigits(nums) - Given an array of numbers, returns the
// number of digits in the largest numbers in the list

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

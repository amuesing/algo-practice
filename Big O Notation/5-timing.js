const { performance } = require('perf_hooks');
// Suppose we want to write a function
// that calculates the sum of all numbers from 1 up to
// (and including) some number n.

function addUpToA(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now();
addUpToA(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

console.log(addUpToA(6))

function addUpToB(n) {
    return n * (n + 1) / 2;
}

var t3 = performance.now();
addUpToB(1000000000);
var t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

console.log(addUpToB(6))
// Write a function which takes two numbers and returns their sum.

// 1. Can I restate the problem in my own words?
// "implement addition"
// 2. What are the inputs that go into the problem?\
    // -ints?
    // -floats?
    // -what about string for large numbers?

// 3. What are the outputs that should come from the solution to the problem?
    // -int? float? string?
// 4. Can the outputs be determined from the inputs? In other words, ddo I have enough information to solve the problem

// 5. How should I label the important pieces of data that are a part of the problem?


// Start with Simple Examples
// Progress to More Complex Examples
// Explore Examples with Empty Inputs
// Explore Examples with Invalid Inputs


// Write a function which takes in a string and returns counts of each character in the string


// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character..
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        // if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;   
        }
        // if the char is a number/letter AND not object, add it to object and set value to 1
        else {
            result[char] = 1;
        }
    }
    // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result
}

debugger

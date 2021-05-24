//** Why Use Recursion **//

// What is recursion?

// A process (a function in our case) that calls itself

// It's Everywhere

// JSON.parse / JSON.stringify
// document.getElementById and DOM traversal algorithms
// Object traversal
// Sometimes a cleaner alternative to iteration

//** The Call Stack **//

// It's a stack data structure
// Any time a function is invoked it is placed (pushed) on the top of the call stack
// When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

// Why do I care?

// You're used to functions being
// pushed on the call stack and popped
// off when they are done

// When we write recursive functions,
// we keep pushing new functions onto
// the call stack!
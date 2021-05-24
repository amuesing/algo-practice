const collectOddValues = (arr) => {
    let result = [];

    const helper = (helperInput) => {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

// Helper Method Recursion

// const outer = (input) => {
//     var outerScopedVariable = [];

//     const helper = (helperInput) => {
//         // modify the outerScopedVariable
//         helper(helperInput--)
//     }

//     helper(input)

//     return outerScopedVariable;
// }
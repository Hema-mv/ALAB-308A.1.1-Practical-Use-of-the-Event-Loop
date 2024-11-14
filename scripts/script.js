console.log("************Part 1: Stack Overflow*******************************")

// Step 1: Declare a global counter variable
let i = 0;

// Step 2: Create a recursive function that increments the counter
function recursiveFunction() {
    i++;
    recursiveFunction();
}

// Step 3: Use a try/catch block to handle the stack overflow error
try {
    recursiveFunction();
} catch (error) {
    console.log("Error:", error.message);
    console.log("Number of recursive calls before stack overflow:", counter);
}


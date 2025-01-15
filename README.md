# Type Coercion Bypassing Type Safety in TypeScript

This repository demonstrates a common issue in TypeScript where type coercion can bypass type checking, potentially leading to runtime errors.  The example shows functions that are declared to accept numbers, but due to JavaScript's loose typing, string arguments are accepted and coerced to numbers causing unexpected behaviour.  The solution demonstrates how to enforce stricter type checking to avoid this. 

## How to Run

1. Clone the repository.
2. Navigate to the repository directory in your terminal.
3. Compile the TypeScript code using the command `tsc bug.ts` and `tsc bugSolution.ts`.
4. Run the compiled JavaScript code using Node.js. 

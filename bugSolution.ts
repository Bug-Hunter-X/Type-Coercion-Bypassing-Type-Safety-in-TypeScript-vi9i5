function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Correct
//let result2 = add("5", 3); // Type Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let result3 = subtract(5, 3); // Correct
//let result4 = subtract("5", 3); // Type Error: Argument of type 'string' is not assignable to parameter of type 'number'.

//Using type assertion
let result5 = add(Number("5"),3);
console.log(result5) // Output 8

let result6 = subtract(Number("5"),3);
console.log(result6)// Output 2
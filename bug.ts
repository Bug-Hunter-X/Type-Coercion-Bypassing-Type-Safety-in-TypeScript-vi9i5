function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Correct
let result2 = add("5", 3); // Type Error
let result3 = subtract(5,3); //Correct
let result4 = subtract("5",3); //Type Error
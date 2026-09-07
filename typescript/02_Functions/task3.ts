// Task 3: Write a function type variable `let compare: (a: number, b: number) => boolean;`
// and assign it a function that checks if a is greater than b.

// the type is declared upfront on the variable, so the assigned function's
// params (a, b) don't need re-annotating — TS infers them as number, number
let compare: (a: number, b: number) => boolean;
compare = (a, b) => a > b;

console.log(compare(5, 3)); // true
console.log(compare(2, 8)); // false

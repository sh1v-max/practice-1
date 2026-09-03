// Task 7: Write describeValue(value: any): void first using `any`.
// Then write a second version, describeValueSafe(value: unknown): void,
// using `unknown` with proper narrowing (typeof / instanceof) before use.
// Compare the safety difference in a comment.

function describeValue(value: any): void {
  // "any" gives up all type checking — TS lets us call ANY method here,
  // even ones that don't exist, and it'll only blow up at runtime
  console.log(value.toUpperCase());
}

function describeValueSafe(value: unknown): void {
  // "unknown" forces us to prove the type before using it
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK, narrowed to string
  } else if (typeof value === "number") {
    console.log(value.toFixed(2)); // OK, narrowed to number
  } else if (value instanceof Date) {
    console.log(value.toISOString()); // OK, narrowed to Date
  } else {
    console.log("unsupported type:", value);
  }
}

describeValue("hello"); // works, prints HELLO
// describeValue(42); // compiles fine but CRASHES at runtime: 42.toUpperCase is not a function

describeValueSafe("hello"); // prints HELLO
describeValueSafe(42); // prints 42.00
describeValueSafe(new Date(2000, 0, 1)); // prints ISO date string
describeValueSafe(true); // prints "unsupported type: true", no crash

// ---- JavaScript equivalent (both versions behave like the "any" one) ----
// function describeValueJS(value) {
//   // JS has no type system — this is exactly what describeValue(any) does,
//   // there's no "safe" version possible without manual runtime checks
//   console.log(value.toUpperCase());
// }
//
// describeValueJS("hello"); // works
// describeValueJS(42); // crashes at runtime: value.toUpperCase is not a function
//
// // the "safe" version in JS is just manual discipline — nothing forces you to write it:
// function describeValueSafeJS(value) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else if (typeof value === "number") {
//     console.log(value.toFixed(2));
//   } else if (value instanceof Date) {
//     console.log(value.toISOString());
//   } else {
//     console.log("unsupported type:", value);
//   }
// }
// // works the same as describeValueSafe, but TS's "unknown" type actively
// // forces every caller to think about narrowing — JS just trusts you to remember

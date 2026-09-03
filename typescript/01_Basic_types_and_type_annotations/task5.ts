// Task 5: Declare `let input: unknown = "42"`. Safely convert it to a number
// only after narrowing with `typeof`.

let input: unknown = "42";

// input.toUpperCase(); // Error: input is 'unknown', can't use it directly

let result: number;

if (typeof input === "string") {
  // inside this block, TS narrows `input` from `unknown` to `string`
  result = Number(input);
  console.log(`converted "${input}" to number ${result}`);
} else {
  throw new Error("input was not a string");
}

// ---- JavaScript equivalent (no type safety) ----
// let inputJS = "42";
//
//? JS has no "unknown" concept — inputJS could be reassigned to anything,
//? anywhere, and nothing forces a check before using it
//? inputJS.toUpperCase(); // this would just work if it's a string, or crash if it's not — no compiler warning either way
//
// let resultJS;
// if (typeof inputJS === "string") {
//? the typeof check here is optional defensive coding, not enforced by anything
//   resultJS = Number(inputJS);
//   console.log(`converted "${inputJS}" to number ${resultJS}`);
// } else {
//   throw new Error("input was not a string");
// }
//
//?the risk: if someone changes inputJS to a number by mistake elsewhere in the file,
//? JS gives no warning — TS's "unknown" type would force you to re-check it at every use site

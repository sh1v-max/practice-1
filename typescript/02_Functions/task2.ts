// Task 2: Write greet(...names: string[]): string[] that returns an array of
// "Hello, <name>!" for each name passed, using rest params.

function greet(...names: string[]): string[] {
  // rest params collect every argument into a typed array (string[] here),
  // so any call site passing a non-string errors at compile time
  return names.map((name) => `Hello, ${name}!`);
}

console.log(greet("Shiv")); // ["Hello, Shiv!"]
console.log(greet("Shiv", "Alex", "Sam")); // ["Hello, Shiv!", "Hello, Alex!", "Hello, Sam!"]
console.log(greet()); // []

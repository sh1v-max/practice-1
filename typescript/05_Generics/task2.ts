// Task 2: Write a generic function getLength<T extends { length: number }>(item: T): number
// that returns .length, constrained so it only accepts types that actually have one.

function getLength<T extends { length: number }>(item: T): number {
  // the constraint guarantees `item.length` exists at compile time —
  // without `extends { length: number }`, T could be anything and this line would error
  return item.length;
}

console.log(getLength("hello")); // 5 — strings have .length
console.log(getLength([1, 2, 3, 4])); // 4 — arrays have .length
// getLength(42); // Error: number doesn't satisfy the constraint (no .length)

export {};

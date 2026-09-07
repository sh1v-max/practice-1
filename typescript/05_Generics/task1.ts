// Task 1: Write a generic function getFirstElement<T>(arr: T[]): T | undefined
// that returns the first element of any array.

function getFirstElement<T>(arr: T[]): T | undefined {
  // T is filled in per call from the argument's element type — the return
  // type stays connected to it, unlike `any` which would lose that link
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1 — inferred T = number
console.log(getFirstElement(["a", "b"])); // "a" — inferred T = string
console.log(getFirstElement([])); // undefined — empty array, still type-safe

export {};

// Task 3: Define a generic interface interface Box<T> { contents: T }
// and write a function unwrap<T>(box: Box<T>): T that returns the contents.

interface Box<T> {
  contents: T;
}

function unwrap<T>(box: Box<T>): T {
  // T here is tied to whatever Box<T> was constructed with, so the return
  // type matches the box's actual contents type
  return box.contents;
}

const numberBox: Box<number> = { contents: 42 };
const stringBox: Box<string> = { contents: "hello" };

console.log(unwrap(numberBox)); // 42, typed as number
console.log(unwrap(stringBox)); // "hello", typed as string

export {};

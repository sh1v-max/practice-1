// Task 3: Define a discriminated union
// type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number }
// and write area(shape: Shape): number.

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  // checking the shared `kind` literal narrows `shape` to the matching branch,
  // making `radius`/`side` safely accessible without a manual cast
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side ** 2;
}

console.log(area({ kind: "circle", radius: 2 })); // ~12.566
console.log(area({ kind: "square", side: 4 })); // 16

export {};

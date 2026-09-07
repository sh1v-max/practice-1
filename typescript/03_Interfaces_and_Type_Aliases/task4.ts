// Task 4: Define type Point = [number, number] (a tuple) and write a function
// distanceFromOrigin(point: Point): number that returns the straight-line
// distance using Math.sqrt.

// a tuple fixes both length and per-position types: index 0 is x, index 1 is y
type Point = [number, number];

function distanceFromOrigin(point: Point): number {
  const [x, y] = point;
  return Math.sqrt(x * x + y * y);
}

console.log(distanceFromOrigin([3, 4])); // 5
console.log(distanceFromOrigin([0, 0])); // 0
// distanceFromOrigin([1, 2, 3]); // Error: tuple has exactly 2 elements

export {}; // marks this file as a module, so `Point` stays local instead of leaking globally

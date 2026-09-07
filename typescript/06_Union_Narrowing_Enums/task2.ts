// Task 2: Define enum Direction { Up, Down, Left, Right } and a function
// move(dir: Direction): string returning a description.

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

function move(dir: Direction): string {
  switch (dir) {
    case Direction.Up:
      return "Moving up";
    case Direction.Down:
      return "Moving down";
    case Direction.Left:
      return "Moving left";
    case Direction.Right:
      return "Moving right";
  }
}

console.log(move(Direction.Up)); // "Moving up"
console.log(move(Direction.Right)); // "Moving right"

export {};

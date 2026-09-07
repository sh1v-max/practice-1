# Union Types, Type Narrowing & Enums in TypeScript

How TypeScript handles values that can be one of several types, and lets you check which one you actually have — with JavaScript equivalents alongside each concept.

## 1. Union types

**JavaScript** — a value can just be anything; no declared possibilities.
```js
function formatValue(value) {
  return value; // no idea what value could be
}
```

**TypeScript**
```ts
function formatValue(value: string | number): string {
  return value; // Error — string | number doesn't have a single common shape to just return
}
```

`string | number` means "this could be either type." TS won't let you treat it as one specific type until you **narrow** it.

## 2. Narrowing with `typeof`

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase(); // TS knows value is `string` here
  }
  return value.toFixed(2); // TS knows value is `number` here (only option left)
}
```

Inside the `if`, TS **narrows** the type from `string | number` down to just `string`, so string-only methods like `.toUpperCase()` become available. Outside/after the `if`, it narrows to whatever's left — `number`.

## 3. Narrowing with `instanceof`

Useful for classes/objects rather than primitives:
```ts
class Dog { bark() { return "Woof"; } }
class Cat { meow() { return "Meow"; } }

function speak(animal: Dog | Cat): string {
  if (animal instanceof Dog) {
    return animal.bark(); // narrowed to Dog
  }
  return animal.meow(); // narrowed to Cat
}
```

## 4. Narrowing with a discriminant property

A common pattern: give each shape in a union a shared literal field to switch on.
```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2; // narrowed to the circle branch
  }
  return shape.side ** 2; // narrowed to the square branch
}
```

## 5. Enums

**JavaScript** — no built-in enum; people fake it with frozen objects.
```js
const Direction = Object.freeze({ Up: 0, Down: 1, Left: 2, Right: 3 });
```

**TypeScript**
```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

function move(dir: Direction): string {
  switch (dir) {
    case Direction.Up: return "Moving up";
    case Direction.Down: return "Moving down";
    case Direction.Left: return "Moving left";
    case Direction.Right: return "Moving right";
  }
}

move(Direction.Up); // "Moving up"
```

By default, enum members are auto-numbered starting at `0`. You can also assign specific values (including strings):
```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
}
```

Enums are a runtime construct (unlike `type`/`interface`, which vanish after compilation) — they actually generate a JS object you can inspect.

---

## Practice Tasks

1. Write `formatValue(value: string | number): string` that formats differently based on the type (narrow with `typeof`).
2. Define `enum Direction { Up, Down, Left, Right }` and a function `move(dir: Direction): string` returning a description.
3. Define a discriminated union `type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number }` and write `area(shape: Shape): number`.

### Checklist
- [ ] Task 1 — typeof narrowing
- [ ] Task 2 — enum + switch
- [ ] Task 3 — discriminated union narrowing

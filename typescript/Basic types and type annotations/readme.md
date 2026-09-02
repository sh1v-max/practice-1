# Basic Types & Type Annotations in TypeScript

A complete reference for TypeScript's basic types and how to annotate them. TypeScript adds a static type layer on top of JavaScript — this file covers the foundation everything else builds on.

## 1. What is a Type Annotation?

A type annotation explicitly tells TypeScript what type a variable, parameter, or return value should be, using a colon `:` followed by the type.

```ts
let username: string = "shiv";
let age: number = 25;
```

TypeScript can also **infer** types automatically without annotations:

```ts
let username = "shiv"; // inferred as string
```

**Rule of thumb:** let inference work for simple variable declarations with an initial value; use explicit annotations for function parameters, return types, and when a variable has no initial value.

## 2. Primitive Types

### `string`
```ts
let firstName: string = "Shiv";
let template: string = `Hello, ${firstName}`;
```

### `number`
Covers integers, floats, hex, binary, octal — TypeScript has only one numeric type.
```ts
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
```

### `boolean`
```ts
let isActive: boolean = true;
```

### `null` and `undefined`
By default, `null` and `undefined` are assignable to any type unless `strictNullChecks` is enabled (recommended, on by default with `strict: true`).
```ts
let empty: null = null;
let notSet: undefined = undefined;
```

### `bigint`
```ts
let big: bigint = 100n;
```

### `symbol`
```ts
let sym: symbol = Symbol("id");
```

## 3. Arrays

Two equivalent syntaxes:
```ts
let scores: number[] = [90, 85, 77];
let names: Array<string> = ["Alice", "Bob"];
```

Arrays of mixed/union types:
```ts
let mixed: (string | number)[] = [1, "two", 3];
```

## 4. Tuples

Fixed-length arrays where each position has a specific type.
```ts
let coordinate: [number, number] = [10, 20];
let user: [string, number, boolean] = ["Shiv", 25, true];
```

Optional and rest elements in tuples:
```ts
let point: [number, number, number?] = [1, 2]; // z is optional
let stringArr: [string, ...number[]] = ["counts", 1, 2, 3];
```

## 5. `any`

Opts a value out of type checking entirely — TypeScript won't complain about anything you do with it. **Avoid it** unless absolutely necessary (e.g., migrating JS code); it defeats the purpose of TypeScript.
```ts
let data: any = 5;
data = "now a string"; // no error
data.foo.bar; // no error, but crashes at runtime
```

## 6. `unknown`

A safer alternative to `any`. You can assign anything to it, but you can't use it until you narrow its type.
```ts
let value: unknown = "hello";

value.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof value === "string") {
  value.toUpperCase(); // OK, narrowed to string
}
```

## 7. `void`

Used for functions that don't return a value.
```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

## 8. `never`

Represents values that never occur — functions that always throw or never finish (infinite loops), or exhaustive checks.
```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

## 9. Object Type

```ts
let user: { name: string; age: number } = { name: "Shiv", age: 25 };
```

Usually you'd use an `interface` or `type` alias instead of inlining this (covered in a separate topic).

## 10. Literal Types

Restrict a value to specific literal values, not just a general type.
```ts
let direction: "up" | "down" | "left" | "right";
direction = "up"; // OK
direction = "north"; // Error

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
```

## 11. Union Types (`|`)

A value can be one of several types.
```ts
let id: string | number;
id = 101;
id = "A101";
```

## 12. Intersection Types (`&`)

Combines multiple types into one (more relevant with object/interface types, mentioned here for completeness).
```ts
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged; // must have both name and age
```

## 13. Type Aliases (quick intro)

Give a type a reusable name using `type`.
```ts
type ID = string | number;
let userId: ID = 42;
```

## 14. Arrays of Objects

```ts
let users: { name: string; age: number }[] = [
  { name: "Shiv", age: 25 },
  { name: "Alice", age: 30 },
];
```

## 15. Type Assertions (Casting)

Tell the compiler "trust me, I know the type" — doesn't change runtime behavior.
```ts
let value: unknown = "hello world";
let strLength: number = (value as string).length;
// or: (<string>value).length  (not usable in .tsx files)
```

## 16. `readonly` Modifier

Prevents reassignment after initialization (works on array/tuple/object properties).
```ts
let point: readonly [number, number] = [10, 20];
// point[0] = 5; // Error

const arr: readonly number[] = [1, 2, 3];
// arr.push(4); // Error, no mutating methods allowed
```

## 17. Type Inference Rules Summary

| Situation | Recommendation |
|---|---|
| Variable with initial value | Let TS infer |
| Variable declared without value | Annotate explicitly |
| Function parameters | Always annotate |
| Function return type | Annotate for public/exported functions (clarity), optional for simple internal ones |
| `any`-prone areas (JSON, external APIs) | Prefer `unknown` + narrowing |

---

## Practice Tasks

1. Declare variables for `title` (string), `pages` (number), `isAvailable` (boolean) for a book, without redundant annotations where inference is enough.
2. Create a tuple `rgbColor: [number, number, number]` representing an RGB color and log it as a template string.
3. Write a variable `id: string | number` and assign both a string and a number to it at different points, printing the type using `typeof`.
4. Create a literal type `type TrafficLight = "red" | "yellow" | "green"` and a function `nextLight(current: TrafficLight): TrafficLight` that cycles through them.
5. Declare `let input: unknown = "42"` and safely convert it to a number only after narrowing with `typeof`.
6. Create a `readonly` tuple for a fixed date `[number, number, number]` (year, month, day) and try (and observe the error) mutating it.
7. Write a function `describeValue(value: any): void` first using `any`, then refactor it to use `unknown` with proper narrowing — compare the safety difference.

### Checklist
- [ ] Task 1 — primitives & inference
- [ ] Task 2 — tuples
- [ ] Task 3 — union types
- [ ] Task 4 — literal types
- [ ] Task 5 — unknown + narrowing
- [ ] Task 6 — readonly
- [ ] Task 7 — any vs unknown

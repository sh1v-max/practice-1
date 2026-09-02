# Basic Types & Type Annotations in TypeScript

A complete reference for TypeScript's basic types and how to annotate them, with the JavaScript equivalent next to each so you can compare directly against what you already know.

## 1. What is a Type Annotation?

A type annotation explicitly tells TypeScript what type a variable, parameter, or return value should be, using a colon `:` followed by the type. JavaScript has no such syntax — types are only known at runtime.

**JavaScript**
```js
let username = "shiv"; // type only known at runtime
let age = 25;
```

**TypeScript**
```ts
let username: string = "shiv";
let age: number = 25;
```

TypeScript can also **infer** types automatically without annotations:
```ts
let username = "shiv"; // inferred as string, still checked at compile time
```

**Rule of thumb:** let inference work for simple variable declarations with an initial value; use explicit annotations for function parameters, return types, and when a variable has no initial value.

## 2. Primitive Types

### `string`
**JavaScript**
```js
let firstName = "Shiv";
let template = `Hello, ${firstName}`;
```
**TypeScript**
```ts
let firstName: string = "Shiv";
let template: string = `Hello, ${firstName}`;
```

### `number`
Covers integers, floats, hex, binary, octal — same as JS, TypeScript just has one numeric type to match.
**JavaScript**
```js
let age = 25;
let price = 99.99;
let hex = 0xff;
```
**TypeScript**
```ts
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
```

### `boolean`
**JavaScript**
```js
let isActive = true;
```
**TypeScript**
```ts
let isActive: boolean = true;
```

### `null` and `undefined`
In JS these are just values. In TS, with `strictNullChecks` (on by default under `strict: true`), they're their own types and aren't assignable to other types unless explicitly allowed (e.g. `string | null`).
**JavaScript**
```js
let empty = null;
let notSet = undefined;
```
**TypeScript**
```ts
let empty: null = null;
let notSet: undefined = undefined;
```

### `bigint`
**JavaScript**
```js
let big = 100n;
```
**TypeScript**
```ts
let big: bigint = 100n;
```

### `symbol`
**JavaScript**
```js
let sym = Symbol("id");
```
**TypeScript**
```ts
let sym: symbol = Symbol("id");
```

## 3. Arrays

**JavaScript** (no type restriction — can hold anything)
```js
let scores = [90, 85, 77];
let names = ["Alice", "Bob"];
scores.push("oops"); // allowed in JS, bug waiting to happen
```

**TypeScript** (two equivalent syntaxes)
```ts
let scores: number[] = [90, 85, 77];
let names: Array<string> = ["Alice", "Bob"];
scores.push("oops"); // Error: not a number

let mixed: (string | number)[] = [1, "two", 3];
```

## 4. Tuples

JS arrays don't distinguish position/type — a tuple is a TS-only concept layered on top of a regular array.
**JavaScript**
```js
let coordinate = [10, 20]; // just an array, no fixed shape enforced
let user = ["Shiv", 25, true];
```
**TypeScript**
```ts
let coordinate: [number, number] = [10, 20];
let user: [string, number, boolean] = ["Shiv", 25, true];

// Optional and rest elements
let point: [number, number, number?] = [1, 2]; // z is optional
let stringArr: [string, ...number[]] = ["counts", 1, 2, 3];
```

## 5. `any`

Opts a value out of type checking entirely — this is basically how *every* variable behaves in plain JavaScript. **Avoid it** in TS unless migrating JS code; it defeats the purpose of TypeScript.
**JavaScript** (this is just... normal JS)
```js
let data = 5;
data = "now a string"; // fine, JS doesn't care
data.foo.bar; // crashes at runtime, no warning beforehand
```
**TypeScript**
```ts
let data: any = 5;
data = "now a string"; // no compile error
data.foo.bar; // no compile error, but still crashes at runtime
```

## 6. `unknown`

A safer alternative to `any` that has no JS equivalent. You can assign anything to it, but must narrow its type before using it.
```ts
let value: unknown = "hello";

value.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof value === "string") {
  value.toUpperCase(); // OK, narrowed to string
}
```
In JS you'd just call `value.toUpperCase()` directly and hope it's a string — `unknown` forces you to check first, like a compiler-enforced version of defensive JS code (`typeof value === "string"` guards you'd write anyway).

## 7. `void`

Used for functions that don't return a value. In JS, a function with no `return` implicitly returns `undefined` — TS's `void` documents that intent.
**JavaScript**
```js
function logMessage(msg) {
  console.log(msg);
}
```
**TypeScript**
```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

## 8. `never`

Represents values that never occur — functions that always throw or never finish (infinite loops), or exhaustive checks. No direct JS equivalent; JS just lets these functions be typed as returning `undefined` implicitly.
**JavaScript**
```js
function throwError(msg) {
  throw new Error(msg);
}
```
**TypeScript**
```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

## 9. Object Type

**JavaScript**
```js
let user = { name: "Shiv", age: 25 };
```
**TypeScript**
```ts
let user: { name: string; age: number } = { name: "Shiv", age: 25 };
```
Usually you'd use an `interface` or `type` alias instead of inlining this (covered in a separate topic).

## 10. Literal Types

Restrict a value to specific literal values, not just a general type. In JS you'd only get this via manual `if`/comment convention — no enforcement.
**JavaScript**
```js
let direction; // "up", "down", "left", or "right" by convention/comment only
direction = "up";
direction = "north"; // no error, but logically wrong
```
**TypeScript**
```ts
let direction: "up" | "down" | "left" | "right";
direction = "up"; // OK
direction = "north"; // Error

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
```

## 11. Union Types (`|`)

A value can be one of several types — this is how JS variables behave by default (dynamically any type), TS just makes the allowed set explicit.
**JavaScript**
```js
let id;
id = 101;
id = "A101"; // fine, JS allows any type at any time
```
**TypeScript**
```ts
let id: string | number;
id = 101;
id = "A101"; // still fine, both types are allowed
id = true; // Error: boolean not part of the union
```

## 12. Intersection Types (`&`)

Combines multiple types into one (more relevant with object/interface types). JS equivalent is merging objects with spread — but nothing enforces both shapes are present.
**JavaScript**
```js
const named = { name: "Shiv" };
const aged = { age: 25 };
const person = { ...named, ...aged }; // shape not enforced
```
**TypeScript**
```ts
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged; // must have both name and age

const person: Person = { name: "Shiv", age: 25 };
```

## 13. Type Aliases (quick intro)

Give a type a reusable name using `type`. No JS equivalent — closest is a JSDoc `@typedef` comment.
```ts
type ID = string | number;
let userId: ID = 42;
```

## 14. Arrays of Objects

**JavaScript**
```js
let users = [
  { name: "Shiv", age: 25 },
  { name: "Alice", age: 30 },
];
```
**TypeScript**
```ts
let users: { name: string; age: number }[] = [
  { name: "Shiv", age: 25 },
  { name: "Alice", age: 30 },
];
```

## 15. Type Assertions (Casting)

Tell the compiler "trust me, I know the type" — this is a compile-time-only construct, it doesn't change runtime behavior (unlike casting in languages like Java/C#). Closest JS parallel: just accessing a property and trusting it's there, since JS has no type system to assert against.
**JavaScript**
```js
let value = "hello world";
let strLength = value.length; // no assertion needed, JS just runs it
```
**TypeScript**
```ts
let value: unknown = "hello world";
let strLength: number = (value as string).length;
// or: (<string>value).length  (not usable in .tsx files)
```

## 16. `readonly` Modifier

Prevents reassignment after initialization (works on array/tuple/object properties). JS's closest equivalent is `Object.freeze()`, which is a runtime guard rather than a compile-time one.
**JavaScript**
```js
const arr = Object.freeze([1, 2, 3]);
arr.push(4); // throws at runtime (strict mode) or silently fails
```
**TypeScript**
```ts
let point: readonly [number, number] = [10, 20];
// point[0] = 5; // Compile-time error

const arr: readonly number[] = [1, 2, 3];
// arr.push(4); // Compile-time error, no mutating methods allowed
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

# Functions in TypeScript

How TypeScript adds type safety to function parameters, return values, and function shapes — with JavaScript equivalents alongside each concept.

## 1. Parameter & Return Types

**JavaScript**
```js
function add(a, b) {
  return a + b;
}
add("2", 3); // "23" — silently wrong, no warning
```

**TypeScript**
```ts
function add(a: number, b: number): number {
  return a + b;
}
add("2", 3); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

Parameter types are checked at every call site; the return type is checked against every `return` statement in the function body.

## 2. Optional Parameters (`?`)

**JavaScript** (no such concept — every param is "optional" by default, just becomes `undefined`)
```js
function greet(name, greeting) {
  return `${greeting || "Hello"}, ${name}`;
}
greet("Shiv"); // "Hello, Shiv" — works by accident (falsy fallback)
```

**TypeScript**
```ts
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}`;
}
greet("Shiv"); // OK, greeting is `string | undefined`
greet("Shiv", "Hey"); // OK
```

`greeting?: string` means the parameter's type is really `string | undefined`, and it's fine to omit it at the call site. TS forces you to handle the `undefined` case (e.g. with `??`) before treating it as a plain `string`.

**Rule:** optional parameters must come after required ones — `function f(a?: number, b: number)` is a compile error.

## 3. Default Parameters

**JavaScript**
```js
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}`;
}
```

**TypeScript**
```ts
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}
```

Nearly identical syntax to JS — TS just infers `greeting: string` automatically from the default value (`: string` is optional here since it's inferable), and callers can still omit it.

## 4. Rest Parameters

**JavaScript**
```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, "2", 3); // "12" then NaN-ish bugs — no protection
```

**TypeScript**
```ts
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // OK
sum(1, "2", 3); // Error: 'string' is not assignable to 'number'
```

`...nums: number[]` types every element collected into the rest array.

## 5. Function Types (typing a variable that holds a function)

**JavaScript** (no way to declare a variable's expected function "shape" ahead of time)
```js
let multiply = (a, b) => a * b;
```

**TypeScript**
```ts
let multiply: (a: number, b: number) => number;
multiply = (a, b) => a * b; // params inferred from the variable's type, no need to re-annotate
```

`(a: number, b: number) => number` is a **function type** — it describes the shape (parameter types + return type) a function must have. Useful for callbacks, e.g. `function process(cb: (x: number) => void) { ... }`.

## 6. Void vs Undefined Return

**JavaScript** — no distinction, everything just returns `undefined` if nothing is returned.

**TypeScript**
```ts
function logMsg(msg: string): void {
  console.log(msg);
  // implicitly returns undefined
}
```
`void` specifically means "the return value should be ignored" — it's a signal for callers, not a strict runtime type (a function typed to return `void` can technically return something and TS won't complain if you discard it, which matters for callback typing, but this nuance isn't needed at the basic level).

## 7. Function Overloads (brief mention)

TypeScript allows declaring multiple call signatures for the same function name when behavior varies by argument types — not covered in the basic tasks below, but good to know it exists for later.

---

## Practice Tasks

1. Write `calculateTotal(price: number, quantity: number, discount?: number): number` that returns `price * quantity`, minus a percentage `discount` if provided (e.g. `discount = 10` means 10% off).
2. Write `greet(...names: string[]): string[]` that returns an array of `"Hello, <name>!"` for each name passed, using rest params.
3. Write a function type variable `let compare: (a: number, b: number) => boolean;` and assign it a function that checks if `a` is greater than `b`.
4. Write `formatPrice(amount: number, currency: string = "USD"): string` using a default parameter, returning something like `"100 USD"`.
5. Write `describeArgs(first: string, second?: number): string` that returns a different message depending on whether `second` was provided (use `??` or a check).

### Checklist
- [ ] Task 1 — optional params
- [ ] Task 2 — rest params
- [ ] Task 3 — function type variable
- [ ] Task 4 — default params
- [ ] Task 5 — optional param handling

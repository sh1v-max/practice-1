# Generics in TypeScript

How TypeScript lets you write reusable code that works across many types while still keeping full type safety — with JavaScript equivalents alongside each concept.

## 1. The problem generics solve

**JavaScript** — one function works for any type, but you get zero type info back.
```js
function getFirstElement(arr) {
  return arr[0];
}
getFirstElement([1, 2, 3]); // 1 — but no type checking anywhere
```

**TypeScript, without generics** — you'd have to either hardcode a type (losing reusability) or use `any` (losing safety):
```ts
function getFirstElement(arr: any[]): any {
  return arr[0];
}
const first = getFirstElement([1, 2, 3]); // typed `any` — TS can't help you here
```

## 2. Generic functions — `<T>`

**TypeScript**
```ts
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const nums = getFirstElement([1, 2, 3]);      // inferred as `number | undefined`
const strs = getFirstElement(["a", "b"]);      // inferred as `string | undefined`
```

`<T>` declares a **type parameter** — a placeholder that gets filled in per call, based on the argument you pass. TS infers `T` automatically from `arr`'s type; you rarely need to write `getFirstElement<number>([1,2,3])` explicitly. The return type `T | undefined` stays connected to whatever `T` was for that call — that's the whole benefit over `any`.

## 3. Multiple type parameters

```ts
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

pair("age", 25); // inferred as [string, number]
```

Each type parameter is independent — `A` and `B` don't have to match.

## 4. Generic constraints — `extends`

Sometimes `T` needs to guarantee it has certain properties/methods before you can use them:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");      // OK — strings have .length
getLength([1, 2, 3]);    // OK — arrays have .length
getLength(42);           // Error: number doesn't have .length
```

`T extends { length: number }` restricts `T` to only types that have a `.length` property — without this constraint, `item.length` inside the function body would be a compile error, since a fully unconstrained `T` could be anything.

## 5. Generic interfaces

```ts
interface Box<T> {
  contents: T;
}

const numberBox: Box<number> = { contents: 42 };
const stringBox: Box<string> = { contents: "hello" };
```

Just like a generic function, a generic interface is a *template* — `Box<T>` isn't a real type until you supply `T` (e.g. `Box<number>`).

## 6. Generic classes

```ts
class Wrapper<T> {
  constructor(private value: T) {}
  getValue(): T {
    return this.value;
  }
}

const w = new Wrapper<string>("hi");
console.log(w.getValue()); // "hi", typed as string
```

---

## Practice Tasks

1. Write a generic function `getFirstElement<T>(arr: T[]): T | undefined` that returns the first element of any array.
2. Write a generic function `getLength<T extends { length: number }>(item: T): number` that returns `.length`, constrained so it only accepts types that actually have one.
3. Define a generic interface `interface Box<T> { contents: T }` and write a function `unwrap<T>(box: Box<T>): T` that returns the contents.

### Checklist
- [ ] Task 1 — generic function
- [ ] Task 2 — generic constraint
- [ ] Task 3 — generic interface

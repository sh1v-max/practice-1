# TypeScript 30-Minute Practice Workflow

A focused session covering TypeScript fundamentals. Each block includes what to learn and what to build/solve.

## 0-5 min — Basic Types & Type Annotations
Learn: `string`, `number`, `boolean`, `array`, `tuple`, `any`, `unknown`, `void`, `null`/`undefined`, type inference vs explicit annotation.

**Task 1:** Declare variables for a user profile (`name: string`, `age: number`, `isActive: boolean`, `tags: string[]`, `coords: [number, number]`) and log them.

## 5-10 min — Functions
Learn: parameter types, return types, optional (`?`) and default params, rest params, function types.

**Task 2:** Write a function `calculateTotal(price: number, quantity: number, discount?: number): number` that returns the total price, applying an optional discount percentage.

**Task 3:** Write a function `greet(...names: string[]): string[]` that returns a greeting for each name using rest params.

## 10-15 min — Interfaces & Type Aliases
Learn: `interface` vs `type`, optional properties, readonly properties, extending interfaces.

**Task 4:** Define an `interface Product { id: number; name: string; price: number; description?: string }` and write a function `printProduct(product: Product): void`.

**Task 5:** Create a `type` union `Status = "pending" | "shipped" | "delivered"` and a function `getStatusMessage(status: Status): string` using a switch statement.

## 15-20 min — Classes & OOP
Learn: class properties, constructors, access modifiers (`public`, `private`, `protected`), inheritance, `implements`.

**Task 6:** Create a class `Animal` with a `protected name` and a method `makeSound()`. Extend it with a `Dog` class that overrides `makeSound()`.

## 20-24 min — Generics
Learn: generic functions, generic constraints, generic interfaces.

**Task 7:** Write a generic function `getFirstElement<T>(arr: T[]): T | undefined` that returns the first element of any array.

## 24-27 min — Union Types, Type Narrowing & Enums
Learn: union types, `typeof`/`instanceof` narrowing, enums.

**Task 8:** Write a function `formatValue(value: string | number): string` that formats differently based on the type (narrowing with `typeof`).

**Task 9:** Define an `enum Direction { Up, Down, Left, Right }` and a function `move(dir: Direction): string` returning a description.

## 27-30 min — Utility Types (quick review)
Learn: `Partial<T>`, `Pick<T, K>`, `Omit<T, K>`, `Readonly<T>` — skim docs/examples, no need to code extensively.

**Task 10 (stretch):** Given the `Product` interface from Task 4, create a type `ProductPreview = Pick<Product, "id" | "name">` and write a function that accepts it.

---

## Quick Checklist
- [ ] Task 1 — basic types
- [ ] Task 2 — function with optional param
- [ ] Task 3 — rest params
- [ ] Task 4 — interface
- [ ] Task 5 — type alias + union
- [ ] Task 6 — class inheritance
- [ ] Task 7 — generics
- [ ] Task 8 — type narrowing
- [ ] Task 9 — enums
- [ ] Task 10 — utility types (stretch)

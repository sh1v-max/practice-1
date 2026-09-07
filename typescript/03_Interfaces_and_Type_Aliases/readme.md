# Interfaces & Type Aliases in TypeScript

How TypeScript lets you name and reuse the "shape" of data — with JavaScript equivalents alongside each concept.

## 1. `interface` — describing an object's shape

**JavaScript** (no way to declare a shape ahead of time — you just hope the object has the right fields)
```js
function printProduct(product) {
  console.log(`${product.name} - $${product.price}`);
}
printProduct({ name: "Mouse" }); // "Mouse - $undefined" — no warning
```

**TypeScript**
```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

function printProduct(product: Product): void {
  console.log(`${product.name} - $${product.price}`);
}
printProduct({ name: "Mouse" }); // Error: missing properties 'id', 'price'
```

An `interface` is a named contract — any object typed as `Product` must have exactly these properties (unless marked optional).

## 2. Optional properties (`?`)

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // may be omitted
}
```

Same `?` meaning as optional function params — the property's type becomes `string | undefined`, and it's fine to leave it out when creating the object.

## 3. Readonly properties

```ts
interface Product {
  readonly id: number; // can be set once (e.g. at creation), never reassigned after
  name: string;
}

const p: Product = { id: 1, name: "Mouse" };
p.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
```

## 4. Extending interfaces

```ts
interface Product {
  id: number;
  name: string;
}

interface DetailedProduct extends Product {
  description: string;
}
// DetailedProduct now requires id, name, AND description
```

`extends` builds a new shape on top of an existing one — like inheritance, but for object shapes rather than classes.

## 5. `type` aliases

**TypeScript**
```ts
type Product = {
  id: number;
  name: string;
  price: number;
};
```

A `type` alias can describe an object shape almost identically to `interface`. The difference matters more for other cases:

```ts
type ID = number | string;           // type aliases can name unions
type Status = "pending" | "shipped" | "delivered"; // and literal unions
type Point = [number, number];       // and tuples, primitives, etc.
```

`interface` can only describe object/function shapes (and can be extended/merged); `type` can alias *anything* — unions, tuples, primitives — but can't be reopened later to add more fields the way an interface can.

**Rule of thumb:** use `interface` for object shapes you expect to extend; use `type` for unions, tuples, or simple aliases.

## 6. Union types with `type`

```ts
type Status = "pending" | "shipped" | "delivered";

function getStatusMessage(status: Status): string {
  switch (status) {
    case "pending": return "Order is pending";
    case "shipped": return "Order is on its way";
    case "delivered": return "Order has arrived";
  }
}
```

`Status` can only ever be one of those three exact strings — passing `"cancelled"` is a compile error, not a runtime surprise.

---

## Practice Tasks

1. Define `interface Product { id: number; name: string; price: number; description?: string }` and write a function `printProduct(product: Product): void`.
2. Create a `type` union `Status = "pending" | "shipped" | "delivered"` and a function `getStatusMessage(status: Status): string` using a switch statement.
3. Give `Product` a `readonly id`, then define `interface DetailedProduct extends Product { description: string }` and write a function `printDetailedProduct(product: DetailedProduct): void`. Also try reassigning `id` on a `Product` object to confirm TS blocks it.
4. Define `type Point = [number, number]` (a tuple) and write a function `distanceFromOrigin(point: Point): number` that returns the straight-line distance using `Math.sqrt`.

### Checklist
- [ ] Task 1 — interface with optional property
- [ ] Task 2 — type alias + union + switch
- [ ] Task 3 — readonly property + extending an interface
- [ ] Task 4 — type alias for a tuple

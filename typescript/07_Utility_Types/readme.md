# Utility Types in TypeScript

Built-in generic types that transform an existing type into a new one — instead of writing a near-duplicate type by hand. Quick-review level: skim these, they're mostly self-explanatory once you've seen `interface`/`type` and generics.

## 1. `Partial<T>` — make every property optional

**Without it**
```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

// updating just the price means re-typing the whole shape as optional by hand:
function updateProduct(id: number, updates: { id?: number; name?: string; price?: number }) {}
```

**With `Partial<T>`**
```ts
function updateProduct(id: number, updates: Partial<Product>): void {
  // updates.name, updates.price, updates.id are all `X | undefined`
}

updateProduct(1, { price: 20 }); // OK — only price supplied
```

`Partial<Product>` is `Product` with every property's `?` added automatically. Common for PATCH-style update functions.

## 2. `Pick<T, K>` — keep only some properties

```ts
type ProductPreview = Pick<Product, "id" | "name">;
// same as: { id: number; name: string }
```

`K` must be a union of keys that actually exist on `T` (`"id" | "name"` here) — picking a key `Product` doesn't have is a compile error.

## 3. `Omit<T, K>` — drop some properties, keep the rest

```ts
type ProductWithoutId = Omit<Product, "id">;
// same as: { name: string; price: number }
```

`Omit` is the inverse of `Pick` — instead of naming what to keep, you name what to remove.

## 4. `Readonly<T>` — make every property readonly

```ts
type ImmutableProduct = Readonly<Product>;

const p: ImmutableProduct = { id: 1, name: "Mouse", price: 25 };
p.price = 30; // Error: Cannot assign to 'price' because it is a read-only property
```

Same effect as writing `readonly` on every field manually, generated for you.

## 5. Combining utility types

These compose freely, since each one just takes a type and returns a new type:
```ts
type ProductPatch = Partial<Omit<Product, "id">>;
// { name?: string; price?: number } — id excluded entirely, the rest optional
```

---

## Practice Tasks

1. Given the `Product` interface (`{ id: number; name: string; price: number; description?: string }`), create `type ProductPreview = Pick<Product, "id" | "name">` and write a function `printPreview(preview: ProductPreview): void` that accepts it.
2. Create `type ProductUpdate = Partial<Omit<Product, "id">>` and write a function `updateProduct(id: number, updates: ProductUpdate): void` that logs what's being updated (only the id and whichever fields were passed).
3. Create `type LockedProduct = Readonly<Product>` and demonstrate that reassigning any field on a `LockedProduct` object is a compile error (comment it out, as usual).

### Checklist
- [ ] Task 1 — `Pick`
- [ ] Task 2 — `Partial` + `Omit` combined
- [ ] Task 3 — `Readonly`

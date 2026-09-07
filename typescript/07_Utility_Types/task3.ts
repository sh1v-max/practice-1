// Task 3: Create type LockedProduct = Readonly<Product> and demonstrate that
// reassigning any field on a LockedProduct object is a compile error.

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// Readonly<Product> is Product with every field prefixed `readonly`, generated
// automatically instead of writing `readonly` on each one by hand
type LockedProduct = Readonly<Product>;

const locked: LockedProduct = { id: 1, name: "Mouse", price: 25 };
console.log(locked.name); // reading is fine

// locked.name = "Keyboard"; // Error: Cannot assign to 'name' because it is a read-only property
// locked.price = 30;        // Error: Cannot assign to 'price' because it is a read-only property

export {};

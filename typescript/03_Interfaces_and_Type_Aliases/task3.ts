// Task 3: Give Product a readonly id, then define
// interface DetailedProduct extends Product { description: string }
// and write a function printDetailedProduct(product: DetailedProduct): void.
// Also try reassigning `id` on a Product object to confirm TS blocks it.

interface Product {
  readonly id: number; // settable once, at object creation — never after
  name: string;
  price: number;
}

// extends pulls in id, name, price from Product, then adds description as required
interface DetailedProduct extends Product {
  description: string;
}

function printDetailedProduct(product: DetailedProduct): void {
  console.log(`#${product.id} ${product.name} ($${product.price}) - ${product.description}`);
}

const detailed: DetailedProduct = {
  id: 1,
  name: "Mouse",
  price: 25,
  description: "Wireless, ergonomic",
};
printDetailedProduct(detailed);

const p: Product = { id: 1, name: "Mouse", price: 25 };
// p.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

export {}; // marks this file as a module, so `Product`/`DetailedProduct` stay local instead of leaking globally

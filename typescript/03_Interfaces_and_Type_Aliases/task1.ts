// Task 1: Define an interface Product { id: number; name: string; price: number; description?: string }
// and write a function printProduct(product: Product): void.

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // optional — object may omit it entirely
}

function printProduct(product: Product): void {
  // description is `string | undefined`, so `??` supplies a fallback
  console.log(`${product.name} ($${product.price}) - ${product.description ?? "No description"}`);
}

printProduct({ id: 1, name: "Mouse", price: 25 });
printProduct({ id: 2, name: "Keyboard", price: 60, description: "Mechanical, RGB" });

export {}; // marks this file as a module, so `Product` stays local instead of leaking globally

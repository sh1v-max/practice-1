// Task 1: Given the Product interface, create
// type ProductPreview = Pick<Product, "id" | "name">
// and write a function printPreview(preview: ProductPreview): void.

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// Pick lifts only "id" and "name" out of Product — price/description are gone
type ProductPreview = Pick<Product, "id" | "name">;

function printPreview(preview: ProductPreview): void {
  console.log(`#${preview.id} - ${preview.name}`);
}

printPreview({ id: 1, name: "Mouse" });
// printPreview({ id: 1, name: "Mouse", price: 25 }); // Error: 'price' not in ProductPreview

export {};

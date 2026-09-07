// Task 2: Create type ProductUpdate = Partial<Omit<Product, "id">> and write
// a function updateProduct(id: number, updates: ProductUpdate): void that logs
// what's being updated (only the id and whichever fields were passed).

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// Omit<Product, "id"> drops id, leaving { name, price, description? };
// Partial<...> then makes name/price optional too, since only description
// was already optional
type ProductUpdate = Partial<Omit<Product, "id">>;

function updateProduct(id: number, updates: ProductUpdate): void {
  console.log(`Updating product #${id}:`, updates);
}

updateProduct(1, { price: 20 }); // OK — only price supplied
updateProduct(2, { name: "Keyboard", description: "Mechanical" }); // OK — two fields
// updateProduct(3, { id: 4 }); // Error: 'id' does not exist on ProductUpdate

export {};

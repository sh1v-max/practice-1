// Task 1: Write calculateTotal(price: number, quantity: number, discount?: number): number
// that returns price * quantity, minus a percentage discount if provided
// (e.g. discount = 10 means 10% off).

function calculateTotal(price: number, quantity: number, discount?: number): number {
  const subtotal = price * quantity;
  // discount is `number | undefined` — the `??` fallback treats a missing discount as 0%
  const discountPercent = discount ?? 0;
  return subtotal - (subtotal * discountPercent) / 100;
}

console.log(calculateTotal(100, 2)); // 200 (no discount passed)
console.log(calculateTotal(100, 2, 10)); // 180 (10% off 200)

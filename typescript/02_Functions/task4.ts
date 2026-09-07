// Task 4: Write formatPrice(amount: number, currency: string = "USD"): string
// using a default parameter, returning something like "100 USD".

function formatPrice(amount: number, currency: string = "USD"): string {
  // `currency: string` here is optional to write out — TS infers it from
  // the default value "USD" — but kept explicit since the task asks for it
  return `${amount} ${currency}`;
}

console.log(formatPrice(100)); // "100 USD"
console.log(formatPrice(250, "EUR")); // "250 EUR"

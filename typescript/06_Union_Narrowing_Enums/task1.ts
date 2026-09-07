// Task 1: Write formatValue(value: string | number): string that formats
// differently based on the type (narrow with typeof).

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    // narrowed to `string` here — .toUpperCase() is only valid on strings
    return value.toUpperCase();
  }
  // only `number` is left after the string branch, so this is safe
  return value.toFixed(2);
}

console.log(formatValue("hello")); // "HELLO"
console.log(formatValue(3.14159)); // "3.14"

export {};

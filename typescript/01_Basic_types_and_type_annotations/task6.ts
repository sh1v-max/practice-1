// Task 6: Create a readonly tuple for a fixed date [number, number, number]
// (year, month, day). Try mutating it and observe the TypeScript error
// (comment out the mutation line after seeing the error, or leave it
// commented to keep the file compiling).

let birthDate: readonly [number, number, number] = [2000, 1, 15];

console.log(`year: ${birthDate[0]}, month: ${birthDate[1]}, day: ${birthDate[2]}`);

// birthDate[0] = 2025; // Error: Cannot assign to '0' because it is a read-only property
// birthDate.push(2026); // Error: Property 'push' does not exist on type 'readonly [number, number, number]'

// ---- JavaScript equivalent (no compile-time protection) ----
// let birthDateJS = [2000, 1, 15];
// console.log(`year: ${birthDateJS[0]}, month: ${birthDateJS[1]}, day: ${birthDateJS[2]}`);
//
// birthDateJS[0] = 2025; // allowed, no error — silently mutates
// birthDateJS.push(2026); // allowed too, array just grows to length 4
//
// // Object.freeze() is the closest JS gets to "readonly", but it's a RUNTIME guard,
// // not a compile-time one — mistakes are only caught when the code actually runs
// const frozenDateJS = Object.freeze([2000, 1, 15]);
// frozenDateJS[0] = 2025; // fails silently in non-strict mode, throws in strict mode/modules

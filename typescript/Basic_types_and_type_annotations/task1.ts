// Task 1: Declare variables for a book — title (string), pages (number), isAvailable (boolean).
// Use inference where the initial value makes the type obvious; avoid redundant annotations.
// typeScript's ability to figure out a variable's type automatically from its initial value, without you writing an explicit annotation

let title = 'the pragmatic programmer' // assume as string
let pages = 52 // assume as number
let isAvailable = true // assume as boolean

console.log(`"${title}" has ${pages} pages. Available: ${isAvailable}`)
// using template literals (`...`) to print the book info
// and this is string interpolation (${...}), which is a feature of ES6 and later versions of JavaScript.

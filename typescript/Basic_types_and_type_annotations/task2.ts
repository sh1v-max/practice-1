// Task 2: Create a tuple `rgbColor: [number, number, number]` representing an RGB color
// and log it as a template string, e.g. "rgb(255, 0, 0)".

let rgbColor: [number,  number, number] = [255, 0, 0]
// this is tuple type, which is an array with 3 elements
// a regular array can have any number of elements, but a tuple has a fixed number of elements
// the annotation was required here to make it explicitly a tuple

console.log(`rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`)
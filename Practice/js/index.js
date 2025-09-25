let string = "my na sh me is shiv sh sh"
// check if "sh" is present in string or not
// count the number of sh present

let count = 0
for (let i = 0; i < string.length; i++) {
  if (string[i] == "sh") {
    count++
  }
}
console.log(count)
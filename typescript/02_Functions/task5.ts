// Task 5: Write describeArgs(first: string, second?: number): string that returns
// a different message depending on whether second was provided (use ?? or a check).

function describeArgs(first: string, second?: number): string {
  // second is `number | undefined`; an explicit check narrows it to `number`
  // inside the branch, so it's safe to use without a fallback there
  if (second === undefined) {
    return `Got only: ${first}`;
  }
  return `Got ${first} and ${second}`;
}

console.log(describeArgs("Shiv")); // "Got only: Shiv"
console.log(describeArgs("Shiv", 42)); // "Got Shiv and 42"

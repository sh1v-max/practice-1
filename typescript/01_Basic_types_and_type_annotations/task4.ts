// Task 4: Create a literal type `type TrafficLight = "red" | "yellow" | "green"`
// and a function `nextLight(current: TrafficLight): TrafficLight` that cycles
// red -> green -> yellow -> red.
// it's literal type union type that can only take one of the three string values: "red", "yellow", or "green". 
// the nextLight function takes a TrafficLight value as input and returns the next TrafficLight value in the cycle.
// the function uses a switch statement to determine the next light based on the current light.

type TrafficLight = "red" | "yellow" | "green";

function nextLight(current: TrafficLight): TrafficLight {
  // parameter current is of type TrafficLight, which means it can only be one of the three string values: "red", "yellow", or "green"
  // return type : TrafficLight, which means the function will return one of the three string values: "red", "yellow", or "green"
  switch (current) {
    case "red":
      return "green";
    case "green":
      return "yellow";
    case "yellow":
      return "red";
  }
}

let light: TrafficLight = "red";
for (let i = 0; i < 4; i++) {
  console.log(light);
  light = nextLight(light);
}

// why it's better than js?
// in JS, a typo like "gren" would silently pass through and only fail at runtime (or never get caught)
// With the literal union type, TS catches it immediately at compile time, and your editor autocompletes exactly the 3 valid values.

// ---- JavaScript equivalent (no type safety) ----
// function nextLightJS(current) {
//? "current" could be any string, or even something entirely unrelated —
//? nothing stops you from passing "purple" here, and no autocomplete hints exist
//   switch (current) {
//     case "red":
//       return "green";
//     case "green":
//       return "yellow";
//     case "yellow":
//       return "red";
//     default:
//? JS needs this default case for safety — TS didn't, because the
//? union type guarantees only 3 possible values can ever reach here
//       throw new Error("unknown light: " + current);
//   }
// }
//
// let lightJS = "red";
// for (let i = 0; i < 4; i++) {
//   console.log(lightJS);
//   lightJS = nextLightJS(lightJS);
// }
//
//? typo example — this would run without any compile-time warning in JS:
//? lightJS = "gren"; // silently wrong, bug only shows up at runtime
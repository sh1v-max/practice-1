// Task 2: Create a type union Status = "pending" | "shipped" | "delivered"
// and a function getStatusMessage(status: Status): string using a switch statement.

type Status = "pending" | "shipped" | "delivered";

function getStatusMessage(status: Status): string {
  switch (status) {
    case "pending":
      return "Order is pending";
    case "shipped":
      return "Order is on its way";
    case "delivered":
      return "Order has arrived";
  }
}

console.log(getStatusMessage("pending")); // "Order is pending"
console.log(getStatusMessage("shipped")); // "Order is on its way"
console.log(getStatusMessage("delivered")); // "Order has arrived"
// getStatusMessage("cancelled"); // Error: not assignable to type 'Status'

export {}; // marks this file as a module, so `Status` stays local instead of leaking globally

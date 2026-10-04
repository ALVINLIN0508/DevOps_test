import { add, subtract, multiply, divide } from "./mylib.js";

console.log("Add:", add(2, 3));
console.log("Subtract:", subtract(5, 2));
console.log("Multiply:", multiply(4, 3));
console.log("Divide:", divide(10, 2));

try {
  divide(10, 0);
} catch (err) {
  console.error("Error:", err.message);
}

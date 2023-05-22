"use strict";

// Sample input: node calculator.js -o + 3 7
// steps
// from process.argv
// get the operator. Allowed operators are + - * / **
// get the operands (values)
// do the operation on the operands
// print the operation and results ex:  3 + 7 = 10
var args = process.argv.slice(2);
console.log(process.argv);
console.log(args);
var operator = args[0];
var operands = args.slice(1).map(parseFloat);
var results = 0;

switch (operator) {
  case "+":
    results = operands.reduce(function (a, b) {
      return a + b;
    }, 0);
    break;

  case "-":
    results = operands.reduce(function (a, b) {
      return a - b;
    });
    break;

  case "*":
    results = operands.reduce(function (a, b) {
      return a * b;
    }, 1);
    break;

  case "/":
    results = operands.reduce(function (a, b) {
      return a / b;
    });
    break;

  case "**":
    results = operands.reduce(function (a, b) {
      return Math.pow(a, b);
    });
    break;

  default:
    console.log("Invalid operator");
    break;
}

console.log("".concat(operands.join("".concat(operator)), " = ").concat(results));
//# sourceMappingURL=calculator.dev.js.map

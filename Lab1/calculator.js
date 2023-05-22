// Sample input: node calculator.js -o + 3 7

// steps
// from process.argv
// get the operator. Allowed operators are + - * / **
// get the operands (values)
// do the operation on the operands
// print the operation and results ex:  3 + 7 = 10

const args = process.argv.slice(2);
console.log(process.argv);
console.log(args);
const operator = args[0];
const operands = args.slice(1).map(parseFloat);
let results = 0;
switch (operator) {
  case "+":
    results = operands.reduce((a, b) => a + b, 0);
    break;

  case "-":
    results = operands.reduce((a, b) => a - b);
    break;
  case "*":
    results = operands.reduce((a, b) => a * b, 1);

    break;

  case "/":
    results = operands.reduce((a, b) => a / b);
    break;
    case "**":
        results = operands.reduce((a, b) => a ** b);
        break;
  default:
    console.log("Invalid operator");
    break;
}
console.log(`${operands.join(`${operator}`)} = ${results}`);
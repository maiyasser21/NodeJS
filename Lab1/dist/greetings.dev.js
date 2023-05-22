"use strict";

// Sample input: node greetings.js -n ahmed -a 30 -c Egypt
// steps
// from process.argv
// get the options -n -a -c
// get the options' values
// print the message Hello, <name> <age> from <country>!
var args = process.argv.slice(2);
var name, age, country;

for (i = 0; i < args.length; i++) {
  if (args[i] === '-n') {
    name = args[i + 1];
  } else if (args[i] === '-a') {
    age = args[i + 1];
  } else if (args[i] === '-c') {
    country = args[i + 1];
  }
}

console.log("Hello ".concat(name, " ").concat(age, " from ").concat(country, "!"));
//# sourceMappingURL=greetings.dev.js.map

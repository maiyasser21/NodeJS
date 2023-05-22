"use strict";

var readline = require('node:readline/promises');

var reader = readline.createInterface(process.stdin, process.stdout); // generate random number between 0 - 10

var target = Math.round(Math.random() * 10);

(function run() {
  var guess;
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(reader.question('What is your guess?\n'));

        case 3:
          guess = _context.sent;

          if (+guess > target) {
            console.log('Sorry, too large!');
          } else if (+guess < target) {
            console.log('Sorry, too small!');
          } else {
            console.log('Congratulations. You win!');
          } // Modify the logic to implement this functionality
          // while(answer is wrong) {
          // ASK USER
          // check answer
          // right --> exit loop
          // wrong --> continue
          // }


          reader.close();
          _context.next = 0;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
})();
//# sourceMappingURL=guessing.dev.js.map

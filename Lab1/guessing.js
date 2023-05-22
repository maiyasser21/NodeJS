const readline = require('node:readline/promises');

const reader = readline.createInterface(process.stdin, process.stdout);

// generate random number between 0 - 10
const target = Math.round(Math.random() * 10);

(async function run() {
  let guess;
  while(true){
  guess = await reader.question('What is your guess?\n');
  if (+guess > target) {
    console.log('Sorry, too large!')
  } else if (+guess < target) {
    console.log('Sorry, too small!')
  } else {
    console.log('Congratulations. You win!')
  }
  // Modify the logic to implement this functionality
  // while(answer is wrong) {
  // ASK USER
  // check answer
  // right --> exit loop
  // wrong --> continue
  // }
  reader.close();
}})();
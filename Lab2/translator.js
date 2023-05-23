const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

async function translateFile(inputFile, encoding) {
  try {
    const data = await readFile(inputFile, { encoding: 'binary' });

    let translatedData = '';
    if (encoding === 'utf-8') {
      translatedData = Buffer.from(data, 'binary').toString('utf-8');
    } else if (encoding === 'base64') {
      translatedData = Buffer.from(data, 'binary').toString('base64');
    } else {
      console.log('Unsupported encoding:', encoding);
      return;
    }

    console.log(translatedData);
  } catch (error) {
    console.log('An error occurred:', error);
  }
}
const args = process.argv.slice(2);
const options = {};

for (let i = 0; i < args.length; i += 2) {
  const option = args[i];
  const value = args[i + 1];
  options[option] = value;
}

if (!options.hasOwnProperty('-i') || !options.hasOwnProperty('-e')) {
  console.log('Usage: node translator.js -i <inputFile> -e <encoding>');
  return;
}

const inputFile = options['-i'];
const encoding = options['-e'];

translateFile(inputFile, encoding);

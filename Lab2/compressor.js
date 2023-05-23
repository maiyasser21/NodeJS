const fs = require('fs');
const zlib = require('zlib');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function compressFile(inputFile) {
  try {
    const data = await readFile(inputFile);
    const compressedData = zlib.gzipSync(data);
    const outputFileName = inputFile + '.gz';
    await writeFile(outputFileName, compressedData);
    console.log(`File compressed successfully. Compressed file: ${outputFileName}`);
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
if (!options.hasOwnProperty('-i')) {
  console.log('Usage: node compressor.js -i <inputFile>');
  return;
}

const inputFile = options['-i'];

compressFile(inputFile);

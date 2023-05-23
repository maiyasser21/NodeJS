const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function copyFile(inputFile, outputFile) {
  try {
    const stats = await promisify(fs.stat)(inputFile);
    if (!stats.isFile()) {
      console.log("Input file does not exist or is not a file.");
      return;
    }

    const data = await readFile(inputFile);
    const outputPath = path.dirname(outputFile);
    const outputFileName = path.basename(outputFile);
    const outputFilePath = path.join(outputPath, outputFileName);

    await writeFile(outputFilePath, data);

    console.log(`File copied successfully to ${outputFilePath}.`);
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

const args = process.argv.slice(2);
const options = {};

for (let i = 0; i < args.length; i += 2) {
  const option = args[i];
  const value = args[i + 1];
  options[option] = value;
}

const inputFile = options["-i"];
const outputFile = options["-o"];

copyFile(inputFile, outputFile);

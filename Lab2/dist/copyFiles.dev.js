"use strict";

var fs = require("fs");

var path = require("path");

var _require = require("util"),
    promisify = _require.promisify;

var readFile = promisify(fs.readFile);
var writeFile = promisify(fs.writeFile);

function copyFile(inputFile, outputFile) {
  var stats, data, outputPath, outputFileName, outputFilePath;
  return regeneratorRuntime.async(function copyFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(promisify(fs.stat)(inputFile));

        case 3:
          stats = _context.sent;

          if (stats.isFile()) {
            _context.next = 7;
            break;
          }

          console.log("Input file does not exist or is not a file.");
          return _context.abrupt("return");

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(readFile(inputFile));

        case 9:
          data = _context.sent;
          outputPath = path.dirname(outputFile);
          outputFileName = path.basename(outputFile);
          outputFilePath = path.join(outputPath, outputFileName);
          _context.next = 15;
          return regeneratorRuntime.awrap(writeFile(outputFilePath, data));

        case 15:
          console.log("File copied successfully to ".concat(outputFilePath, "."));
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.log("An error occurred:", _context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
}

var args = process.argv.slice(2);
var options = {};

for (var i = 0; i < args.length; i += 2) {
  var option = args[i];
  var value = args[i + 1];
  options[option] = value;
}

var inputFile = options["-i"];
var outputFile = options["-o"];
copyFile(inputFile, outputFile);
//# sourceMappingURL=copyFiles.dev.js.map

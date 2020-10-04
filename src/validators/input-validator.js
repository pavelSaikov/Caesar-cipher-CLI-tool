const fs = require('fs');

const isInputValid = inputPath => {
  let result = true;

  try {
    fs.readFileSync(inputPath);
  } catch {
    result = false;
  } finally {
    return result;
  }
};

exports.isInputValid = isInputValid;

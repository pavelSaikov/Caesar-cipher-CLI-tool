// eslint-disable-next-line no-unused-vars
const colors = require('colors');

const { isShiftValid, isActionValid, isInputValid } = require('./validators');

const checkInputData = ({ action, shift, input, output }) => {
  if (!shift) {
    console.error("'shift' is not defined".red);
    process.exit(-1);
  }

  if (!isShiftValid(shift)) {
    console.error("'shift' is no valid".red);
    process.exit(-1);
  }

  if (!action) {
    console.error("'action' is not defined".red);
    process.exit(-1);
  }

  if (!isActionValid(action)) {
    console.error("'action' is not valid".red);
    process.exit(-1);
  }

  if (input && !isInputValid(input)) {
    console.error("'input' is not valid".red);
    process.exit(-1);
  }

  if (output && !isInputValid(output)) {
    console.error("'output' is not valid".red);
    process.exit(-1);
  }
};

exports.checkInputData = checkInputData;

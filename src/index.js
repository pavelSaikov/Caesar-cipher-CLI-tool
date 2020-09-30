#!/usr/bin/env node

// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const { program } = require('commander');
const readline = require('readline');
const path = require('path');
const fs = require('fs');

const { checkInputData } = require('./check-input');
const { ACTION } = require('./validators');
const { writeFile } = require('./write-file');
const { decode, encode } = require('./text-manipulations');

const makeConversion = ({ action, text, output, shift }) => {
  const convertedData = action === ACTION.decode ? decode(text, shift) : encode(text, shift);
  output ? writeFile(output, convertedData) : console.log(convertedData);
};

const askInput = () =>
  new Promise(res =>
    reader.question('input some text\n'.green, text => {
      // reader.close();
      makeConversion({ action, text, output: consoleOutput, shift });
      res();
    }),
  ).then(() => askInput());

const reader = readline.createInterface({ input: process.stdin, output: process.stdout });

program.storeOptionsAsProperties(false);
program
  .option('-s, --shift <type>')
  .option('-i, --input [type]')
  .option('-o, --output [type]')
  .option('-a, --action <type>')
  .parse(process.argv);

const { shift, action, input, output } = program._optionValues;

const consoleInput = !input ? null : path.join(process.cwd(), input).normalize();
const consoleOutput = !output ? null : path.join(process.cwd(), output).normalize();

checkInputData({ action, shift, input: consoleInput, output: consoleOutput });

const text = consoleInput ? fs.readFileSync(consoleInput).toString() : null;

if (!text) {
  askInput();
  // while (true) {
  //   reader.question('input some text\n'.green, text => {
  //     // reader.close();
  //     makeConversion({ action, text, output: consoleOutput, shift });
  //   });
  // }
} else {
  makeConversion({ action, text, output: consoleOutput, shift });
  reader.close();
}

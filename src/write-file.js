const fs = require('fs');

const writeFile = (path, text) => {
  fs.appendFile(path, text + '\n', err => {
    if (err) {
      console.error(err.message.red);
      process.exit(-1);
    }
  });
};

exports.writeFile = writeFile;

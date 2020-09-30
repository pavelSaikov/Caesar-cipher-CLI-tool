const LOWER_CASE_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_CASE_ALPHABET = LOWER_CASE_ALPHABET.toUpperCase();

const decode = (text, shift) =>
  text.split('').reduce((res, character) => {
    if (!LOWER_CASE_ALPHABET.includes(character.toLowerCase(character))) {
      return res.concat(character);
    }

    const positionEncodedSymbol = LOWER_CASE_ALPHABET.indexOf(character.toLowerCase());
    let realShift = shift % LOWER_CASE_ALPHABET.length;
    let positionDecodedSymbol = positionEncodedSymbol;

    while (realShift) {
      positionDecodedSymbol--;
      if (positionDecodedSymbol < 0) {
        positionDecodedSymbol = LOWER_CASE_ALPHABET.length - 1;
      }

      realShift--;
    }

    return LOWER_CASE_ALPHABET.includes(character)
      ? res.concat(LOWER_CASE_ALPHABET[positionDecodedSymbol])
      : res.concat(UPPER_CASE_ALPHABET[positionDecodedSymbol]);
  }, '');

const encode = (text, shift) => {
  const realShift = shift % LOWER_CASE_ALPHABET.length;

  return text.split('').reduce((res, character) => {
    if (!LOWER_CASE_ALPHABET.includes(character.toLowerCase(character))) {
      return res.concat(character);
    }

    const positionDecodedSymbol = LOWER_CASE_ALPHABET.indexOf(character.toLowerCase());
    let positionEncodedSymbol = positionDecodedSymbol;
    let shift = realShift;

    while (shift) {
      positionEncodedSymbol++;
      if (positionEncodedSymbol === LOWER_CASE_ALPHABET.length) {
        positionEncodedSymbol = 0;
      }

      shift--;
    }

    return LOWER_CASE_ALPHABET.includes(character)
      ? res.concat(LOWER_CASE_ALPHABET[positionEncodedSymbol])
      : res.concat(UPPER_CASE_ALPHABET[positionEncodedSymbol]);
  }, '');
};

exports.encode = encode;
exports.decode = decode;

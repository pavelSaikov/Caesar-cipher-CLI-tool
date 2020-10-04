const ACTION = { encode: 'encode', decode: 'decode' };
const ACTIONS = [ACTION.encode, ACTION.decode];

const isActionValid = action => ACTIONS.includes(action);

exports.isActionValid = isActionValid;
exports.ACTION = ACTION;

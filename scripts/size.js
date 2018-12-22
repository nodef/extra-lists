const itr = require('iterable-size');
function size(lst) {
  return itr(lst[0]);
};
module.exports = size;

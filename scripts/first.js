const itr = require('iterable-first');
function first(lst) {
  return [itr(lst[0]), itr(lst[1])];
};
module.exports = first;

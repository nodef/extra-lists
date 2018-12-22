const itr = require('iterable-last');
function last(lst) {
  return [itr(lst[0]), itr(lst[1])];
};
module.exports = last;

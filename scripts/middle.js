const itr = require('iterable-middle');
function middle(lst, idx) {
  return [itr(lst[0], idx), itr(lst[1], idx)];
};
module.exports = middle;

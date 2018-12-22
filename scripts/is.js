const itr = require('iterable-is');
function is(a) {
  return Array.isArray(a) && itr(a[0]) && itr(a[1]);
};
module.exports = is;

const is = require('@extra-iterable/is');
function listsIs(a) {
  return Array.isArray(a) && is(a[0]) && is(a[1]);
};
module.exports = listsIs;

const first = require('@extra-iterable/first');
function listsFirst(lst) {
  return [first(lst[0]), first(lst[1])];
};
module.exports = listsFirst;

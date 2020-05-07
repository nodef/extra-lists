const last = require('@extra-iterable/last');
function listsLast(lst) {
  return [last(lst[0]), last(lst[1])];
};
module.exports = listsLast;

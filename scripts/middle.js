const middle = require('@extra-iterable/middle');
function listsMiddle(lst, idx) {
  return [middle(lst[0], idx), middle(lst[1], idx)];
};
module.exports = listsMiddle;

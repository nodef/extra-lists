function keys(lst) {
  return Array.isArray(lst[0])? lst[0]:Array.from(lst[0]);
};
module.exports = keys;

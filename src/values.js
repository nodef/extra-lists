function values(lst) {
  return Array.isArray(lst[1])? lst[1]:Array.from(lst[1]);
};
module.exports = values;

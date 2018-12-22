function forEach(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    fn.call(ths, vi.next().value, k, lst);
};
module.exports = forEach;

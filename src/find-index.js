function findIndex(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) return k;
  }
};
module.exports = findIndex;

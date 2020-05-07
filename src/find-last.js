function findLast(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), z;
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) z = v;
  }
  return z;
};
module.exports = findLast;

function findLastIndex(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), z;
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) z = k;
  return z;
};
module.exports = findLastIndex;

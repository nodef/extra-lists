function findAllIndices(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) z[++i] = k;
  return z;
};
module.exports = findAllIndices;

function findAll(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) z[++i] = v;
  }
  return z;
};
module.exports = findAll;

function map(lst, fn, ths) {
  var i = 0, y = [], z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    y[i] = k;
    z[i++] = fn.call(ths, vi.next().value, k, lst);
  }
  return [y, z];
};
module.exports = map;

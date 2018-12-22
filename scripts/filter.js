function filter(lst, fn, ths) {
  var i = 0, y = [], z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) { y[i] = k; z[i++] = v; }
  }
  return [y, z];
};
module.exports = filter;

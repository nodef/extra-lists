function entries(lst) {
  var i = 0, z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    z[i++] = [k, vi.next().value];
  return z;
};
module.exports = entries;

function indicesOf(lst, val) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0])
    if(vi.next().value===val) z[++i] = k;
  return z;
};
module.exports = indicesOf;

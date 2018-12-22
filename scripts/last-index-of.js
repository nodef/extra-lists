function lastIndexOf(lst, val) {
  var z, vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(vi.next().value===val) z = k;
  return z;
};
module.exports = lastIndexOf;

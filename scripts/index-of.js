function indexOf(lst, val) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(vi.next().value===val) return k;
};
module.exports = indexOf;

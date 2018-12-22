function reduce(lst, fn, acc) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    acc = acc!==undefined? fn(acc, v, k, lst):v;
  }
  return acc;
};
module.exports = reduce;

function every(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(!fn.call(ths, vi.next().value, k, lst)) return false;
  return true;
};
module.exports = every;

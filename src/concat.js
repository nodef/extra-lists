function concat() {
  var j = 0, y = [], z = [];
  for(var i=0, I=arguments.length; i<I; i++) {
    var vi = arguments[i][1][Symbol.iterator]();
    for(var k of arguments[i][0]) {
      y[j] = k;
      z[j++] = vi.next().value;
    }
  }
  return [y, z];
};
module.exports = concat;

const map = require('map-fromlists');
function equal(l1, l2) {
  var m1 = map(l1), v2i = l2[1][Symbol.iterator]();
  for(var k2 of l2[0])
    if(m1.get(k2)!==v2i.next().value || !m1.delete(k2)) return false;
  return m1.size===0;
};
module.exports = equal;

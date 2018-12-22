function join(lst, fmt='%k=%v', sep=',', idx=0, tgt=null) {
  var i = idx, vi = lst[1][Symbol.iterator](), z = '';
  for(var k of lst[0]) {
    var v = vi.next().value;
    z += fmt.replace(/%i/g, i++).replace(/%k/g, k).replace(/%v/g, v)+sep;
    if(tgt!=null) tgt.push(v);
  }
  return z.substr(0, z.length-sep.length);
};
module.exports = join;

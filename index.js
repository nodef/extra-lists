function first0(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
};
function last1(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
};
function middle2(itr, idx=0) {
  return idx<0? last1(itr, idx):first0(itr, idx);
};
function size3(itr) {
  var z = 0;
  if(itr.size!=null) return itr.size;
  if(itr.length!=null) return itr.length;
  for(var v of itr)
    z++;
  return z;
};
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
function entries(lst) {
  var i = 0, z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    z[i++] = [k, vi.next().value];
  return z;
};
function equal(l1, l2) {
  var m1 = fromLists30(l1), v2i = l2[1][Symbol.iterator]();
  for(var k2 of l2[0])
    if(m1.get(k2)!==v2i.next().value || !m1.delete(k2)) return false;
  return m1.size===0;
};
function every(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(!fn.call(ths, vi.next().value, k, lst)) return false;
  return true;
};
function filter(lst, fn, ths) {
  var i = 0, y = [], z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) { y[i] = k; z[i++] = v; }
  }
  return [y, z];
};
function find(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) return v;
  }
};
function findAll(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) z[++i] = v;
  }
  return z;
};
function findAllIndices(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) z[++i] = k;
  return z;
};
function findIndex(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) return k;
  }
};
function findLast(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), z;
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) z = v;
  }
  return z;
};
function findLastIndex(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), z;
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) z = k;
  return z;
};
function first(lst) {
  return [first0(lst[0]), first0(lst[1])];
};
function forEach(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    fn.call(ths, vi.next().value, k, lst);
};
function includes(lst, val) {
  for(var v of lst[1])
    if(v===val) return true;
  return false;
};
function indexOf(lst, val) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(vi.next().value===val) return k;
};
function indicesOf(lst, val) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0])
    if(vi.next().value===val) z[++i] = k;
  return z;
};
function join(lst, fmt='%k=%v', sep=',', idx=0, tgt=null) {
  var i = idx, vi = lst[1][Symbol.iterator](), z = '';
  for(var k of lst[0]) {
    var v = vi.next().value;
    z += fmt.replace(/%i/g, i++).replace(/%k/g, k).replace(/%v/g, v)+sep;
    if(tgt!=null) tgt.push(v);
  }
  return z.substr(0, z.length-sep.length);
};
function keys(lst) {
  return Array.isArray(lst[0])? lst[0]:Array.from(lst[0]);
};
function last(lst) {
  return [last1(lst[0]), last1(lst[1])];
};
function lastIndexOf(lst, val) {
  var z, vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(vi.next().value===val) z = k;
  return z;
};
function map(lst, fn, ths) {
  var i = 0, y = [], z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    y[i] = k;
    z[i++] = fn.call(ths, vi.next().value, k, lst);
  }
  return [y, z];
};
function middle(lst, idx) {
  return [middle2(lst[0], idx), middle2(lst[1], idx)];
};
function reduce(lst, fn, acc) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    acc = acc!==undefined? fn(acc, v, k, lst):v;
  }
  return acc;
};
function size(lst) {
  return size3(lst[0]);
};
function some(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) return true;
  return false;
};
function values(lst) {
  return Array.isArray(lst[1])? lst[1]:Array.from(lst[1]);
};
function fromLists30(lst) {
  var vi = lst[1][Symbol.iterator](), z = new Map();
  for(var k of lst[0])
    z.set(k ,vi.next().value);
  return z;
};
exports.concat = concat;
exports.entries = entries;
exports.equal = equal;
exports.every = every;
exports.filter = filter;
exports.find = find;
exports.findAll = findAll;
exports.findAllIndices = findAllIndices;
exports.findIndex = findIndex;
exports.findLast = findLast;
exports.findLastIndex = findLastIndex;
exports.first = first;
exports.forEach = forEach;
exports.includes = includes;
exports.indexOf = indexOf;
exports.indicesOf = indicesOf;
exports.join = join;
exports.keys = keys;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.map = map;
exports.middle = middle;
exports.reduce = reduce;
exports.size = size;
exports.some = some;
exports.values = values;

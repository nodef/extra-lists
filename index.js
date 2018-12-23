function is(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
function listsIs(a) {
  return Array.isArray(a) && is(a[0]) && is(a[1]);
}
function fromLists(lst) {
  var vi = lst[1][Symbol.iterator](), z = new Map();
  for(var k of lst[0])
    z.set(k ,vi.next().value);
  return z;
}
const map = fromLists;
function equal(l1, l2) {
  var m1 = map(l1), v2i = l2[1][Symbol.iterator]();
  for(var k2 of l2[0])
    if(m1.get(k2)!==v2i.next().value || !m1.delete(k2)) return false;
  return m1.size===0;
}
function size(itr) {
  var z = 0;
  if(itr.size!=null) return itr.size;
  if(itr.length!=null) return itr.length;
  for(var v of itr)
    z++;
  return z;
}
function listsSize(lst) {
  return size(lst[0]);
}
function first(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
}
function listsFirst(lst) {
  return [first(lst[0]), first(lst[1])];
}
function first8(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
}
function last(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
}
const first10 = first8;
function middle(itr, idx=0) {
  return idx<0? last(itr, idx):first10(itr, idx);
}
function listsMiddle(lst, idx) {
  return [middle(lst[0], idx), middle(lst[1], idx)];
}
function last12(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
}
const last13 = last12;
function listsLast(lst) {
  return [last13(lst[0]), last13(lst[1])];
}
function keys(lst) {
  return Array.isArray(lst[0])? lst[0]:Array.from(lst[0]);
}
function values(lst) {
  return Array.isArray(lst[1])? lst[1]:Array.from(lst[1]);
}
function entries(lst) {
  var i = 0, z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    z[i++] = [k, vi.next().value];
  return z;
}
function indexOf(lst, val) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(vi.next().value===val) return k;
}
function lastIndexOf(lst, val) {
  var z, vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(vi.next().value===val) z = k;
  return z;
}
function indicesOf(lst, val) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0])
    if(vi.next().value===val) z[++i] = k;
  return z;
}
function includes(lst, val) {
  for(var v of lst[1])
    if(v===val) return true;
  return false;
}
function join(lst, fmt='%k=%v', sep=',', idx=0, tgt=null) {
  var i = idx, vi = lst[1][Symbol.iterator](), z = '';
  for(var k of lst[0]) {
    var v = vi.next().value;
    z += fmt.replace(/%i/g, i++).replace(/%k/g, k).replace(/%v/g, v)+sep;
    if(tgt!=null) tgt.push(v);
  }
  return z.substr(0, z.length-sep.length);
}
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
}
function forEach(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    fn.call(ths, vi.next().value, k, lst);
}
function some(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) return true;
  return false;
}
function every(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0])
    if(!fn.call(ths, vi.next().value, k, lst)) return false;
  return true;
}
function find(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) return v;
  }
}
function findIndex(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) return k;
  }
}
function findLast(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), z;
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) z = v;
  }
  return z;
}
function findLastIndex(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), z;
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) z = k;
  return z;
}
function findAll(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) z[++i] = v;
  }
  return z;
}
function findAllIndices(lst, fn, ths) {
  var vi = lst[1][Symbol.iterator](), i = -1, z = [];
  for(var k of lst[0])
    if(fn.call(ths, vi.next().value, k, lst)) z[++i] = k;
  return z;
}
function reduce(lst, fn, acc) {
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    acc = acc!==undefined? fn(acc, v, k, lst):v;
  }
  return acc;
}
function filter(lst, fn, ths) {
  var i = 0, y = [], z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    var v = vi.next().value;
    if(fn.call(ths, v, k, lst)) { y[i] = k; z[i++] = v; }
  }
  return [y, z];
}
function map34(lst, fn, ths) {
  var i = 0, y = [], z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    y[i] = k;
    z[i++] = fn.call(ths, vi.next().value, k, lst);
  }
  return [y, z];
}
// Datatype methods:
exports.is = listsIs;

// About methods:
exports.equal = equal;
exports.size = listsSize;
exports.first = listsFirst;
exports.middle = listsMiddle;
exports.last = listsLast;
exports.keys = keys;
exports.values = values;
exports.entries = entries;

// Search methods:
exports.indexOf = indexOf;
exports.lastIndexOf = lastIndexOf;
exports.indicesOf = indicesOf;
exports.includes = includes;

// Transform methods:
exports.join = join;
exports.concat = concat;

// Functional methods:
exports.forEach = forEach;
exports.some = some;
exports.every = every;
exports.find = find;
exports.findIndex = findIndex;
exports.findLast = findLast;
exports.findLastIndex = findLastIndex;
exports.findAll = findAll;
exports.findAllIndices = findAllIndices;
exports.reduce = reduce;
exports.filter = filter;
exports.map = map34;

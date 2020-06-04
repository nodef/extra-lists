import type {Lists, mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x lists
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function map<T, U, V>(x: Lists<T, U>, fn: mapFn<T, U, V>, ths: object=null): Lists<T, V> {
  var i = -1;
  for(var v of x)
    yield fn.call(ths, v, ++i, x);
}
export default map;


function map(lst, fn, ths) {
  var i = 0, y = [], z = [];
  var vi = lst[1][Symbol.iterator]();
  for(var k of lst[0]) {
    y[i] = k;
    z[i++] = fn.call(ths, vi.next().value, k, lst);
  }
  return [y, z];
};
module.exports = map;

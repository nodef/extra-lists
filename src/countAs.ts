import id from './_id';
import type {Lists, mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x lists
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Lists<T, U>, fn: mapFn<T, U, U|V>=null, ths: object=null): Map<U|V, number> {
  var fn = fn||id;
  var [ks, vs] = x, ki = ks[Symbol.iterator](), a = new Map();
  for(var v of vs) {
    var k = ki.next().value;
    var v1 = fn.call(ths, v, k, x);
    a.set(v1, (a.get(v1)||0) + 1);
  }
  return a;
}
export default countAs;

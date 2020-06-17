import id from './_id';
import keys from './keys';
import values from './values';
import type {Lists, mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x lists
 * @param fn map function (v, k, x)
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Lists<T, U>, fn: mapFn<T, U, U|V>=null): Map<U|V, number> {
  var fn = fn||id, a = new Map();
  var vi = values(x)[Symbol.iterator]();
  for(var k of keys(x)) {
    var v = vi.next().value;
    var v1 = fn(v, k, x);
    a.set(v1, (a.get(v1)||0) + 1);
  }
  return a;
}
export default countAs;

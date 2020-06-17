import id from './_id';
import cmp from './_cmp';
import get from './get';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Checks if map has an entry.
 * @param x a map
 * @param e entry?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEntry<T, U, V=U>(x: Lists<T, U>, e: [T, U], fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id, [k, v] = e;
  var [k, v] = e, u = get(x, k);
  return fc(fm(u, k, x), v)===0;
}
export default isEntry;

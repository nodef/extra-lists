import entries from './entries';
import {searchValueAll as mapSearchValueAll} from 'extra-map';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Finds keys with given value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValueAll<T, U, V=U>(x: Lists<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): Iterable<T> {
  return mapSearchValueAll(entries(x), v, fc, fm as any);
}
export default searchValueAll;

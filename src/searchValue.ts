import entries from './entries';
import {searchValue as mapSearchValue} from 'extra-map';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Finds key with given value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValue<T, U, V=U>(x: Lists<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T {
  return mapSearchValue(entries(x), v, fc, fm as any);
}
export default searchValue;

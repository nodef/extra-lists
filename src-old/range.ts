import entries from './entries';
import {range as mapRange} from 'extra-map';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Finds smallest and largest entries.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [smallest, largest]
 */
function range<T, U, V=U>(x: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [[T, U], [T, U]] {
  return mapRange(entries(x), fc, fm as any);
}
export default range;

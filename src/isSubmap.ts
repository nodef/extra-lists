import entries from './entries';
import {isSubmap as mapIsSubmap} from 'extra-map';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Checks if lists has a submap.
 * @param x lists
 * @param y submap?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isSubmap<T, U, V=U>(x: Lists<T, U>, y: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return mapIsSubmap(new Map(entries(x)), entries(y), fc, fm as any);
}
export default isSubmap;

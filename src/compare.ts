import entries from './entries';
import {compare as entriesCompare} from 'extra-entries';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Compares two lists.
 * @param x lists
 * @param y another lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
function compare<T, U, V=U>(x: Lists<T, U>, y: Lists<T, U>, fc?: compareFn<U|V>, fm?: mapFn<T, U, U|V>): number {
  return entriesCompare(entries(x), entries(y), fc, fm as any);
}
export default compare;

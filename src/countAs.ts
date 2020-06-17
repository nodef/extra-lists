import entries from './entries';
import {countAs as mapCountAs} from 'extra-map';
import type {Lists, mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x lists
 * @param fm map function (v, k, x)
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Lists<T, U>, fm: mapFn<T, U, U|V>=null): Map<U|V, number> {
  return mapCountAs(entries(x), fm as any);
}
export default countAs;

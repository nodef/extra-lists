import compare from './compare';
import type {compareFn, mapFn, Lists} from './_types';

/**
 * Checks if two lists are equal.
 * @param x lists
 * @param y another lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEqual<T, U, V=U>(x: Lists<T, U>, y: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return compare(x, y, fc, fm)===0;
}
export default isEqual;

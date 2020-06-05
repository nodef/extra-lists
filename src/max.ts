import {max as iterableMax} from 'extra-iterable';
import type {Lists, compareFn, mapFn} from './_types';

/**
 * Finds largest value.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function max<T, U, V=U>(x: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): U {
  // @ts-ignore
  return iterableMax(x[1], fc, fm);
  // (will not work so sad)
}
export default max;

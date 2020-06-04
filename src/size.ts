import {size as iterableSize, END} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Gets size of part of lists.
 * @param x lists
 * @param i start index (-ve: from right) (0)
 * @param I end index (-ve: from right) (end)
 */
function size<T, U>(x: Lists<T, U>, i: number=0, I: number=END): number {
  return iterableSize(x[0], i, I);
}
export default size;

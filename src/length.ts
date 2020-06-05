import size from './size';
import {END} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Counts the number of values.
 * @param x lists
 * @param i start index (0)
 * @param I end index (end)
 */
function length<T, U>(x: Lists<T, U>, i: number=0, I: number=END): number {
  return size(x, i, I);
}
export default length;

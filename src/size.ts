import keys from './keys';
import {size as iterableSize} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Gets size of lists.
 * @param x lists
 */
function size<T, U>(x: Lists<T, U>): number {
  return iterableSize(keys(x));
}
export default size;

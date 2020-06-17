import {isEmpty as iterableIsEmpty} from 'extra-iterable';
import keys from './keys';
import type {Lists} from './_types';

/**
 * Checks if lists is empty.
 * @param x lists
 */
function isEmpty<T, U>(x: Lists<T, U>): boolean {
  return iterableIsEmpty(keys(x));
}
export default isEmpty;

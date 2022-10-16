import keys from './keys';
import {hasValue as iterableHasValue} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Checks if lists has a key.
 * @param x lists
 * @param k key?
 */
function has<T, U>(x: Lists<T, U>, k: T): boolean {
  return iterableHasValue(keys(x), k);
}
export default has;

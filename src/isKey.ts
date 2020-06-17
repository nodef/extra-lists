import keys from './keys';
import {isValue as iterableIsValue} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Checks if lists has a key.
 * @param x lists
 * @param k key?
 */
function isKey<T, U>(x: Lists<T, U>, k: T): boolean {
  return iterableIsValue(keys(x), k);
}
export default isKey;

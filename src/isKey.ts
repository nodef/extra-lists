import keys from './keys';
import {includes as iterableIncludes} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Checks if lists has a key.
 * @param x lists
 * @param k key?
 */
function isKey<T, U>(x: Lists<T, U>, k: T): boolean {
  return iterableIncludes(keys(x), k);
}
export default isKey;

import keys from './keys';
import values from './values';
import {concat as iterableConcat} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Appends entries from all lists.
 * @param xs n lists
 */
function concat<T, U>(...xs: Lists<T, U>[]): Lists<T, U> {
  var ks = iterableConcat(...xs.map(keys));
  var vs = iterableConcat(...xs.map(values));
  return [ks, vs];
}
export default concat;

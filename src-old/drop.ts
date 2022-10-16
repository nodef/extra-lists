import keys from './keys';
import values from './values';
import {drop as iterableDrop} from 'extra-iterable';
import type {Lists} from './_types';


/**
 * Removes first n entries.
 * @param x lists
 * @param n number of entries (1)
 */
function drop<T, U>(x: Lists<T, U>, n: number=1): Lists<T, U> {
  var ks = iterableDrop(keys(x), n);
  var vs = iterableDrop(values(x), n);
  return [ks, vs];
}
export default drop;

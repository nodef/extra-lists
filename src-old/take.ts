import keys from './keys';
import values from './values';
import {take as iterableTake} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Keeps first n entries only.
 * @param x lists
 * @param n number of entries (1)
 */
function take<T, U>(x: Lists<T, U>, n: number=1): Lists<T, U> {
  var ks = iterableTake(keys(x), n);
  var vs = iterableTake(values(x), n);
  return [ks, vs];
}
export default take;

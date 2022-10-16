import keys from './keys';
import values from './values';
import {map as iterableMap} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Exchanges two values.
 * @param x lists
 * @param k a key
 * @param l another key
 */
function swap<T, U>(x: Lists<T, U>, k: T, l: T): Lists<T, U> {
  var ks = iterableMap(keys(x), j => j===k? l : (j===l? k : j));
  return [ks, values(x)];
}
export default swap;

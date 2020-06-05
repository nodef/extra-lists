import type {Lists} from './_types';

/**
 * Fills with given value.
 * @param x lists
 * @param v value
 */
function fill<T, U>(x: Lists<T, U>, v: U): Lists<T, U> {
  var ks = Array.from(x[0]);
  var vs = Array.from(x[1]).map(_ => v);
  return [ks, vs];
}
export default fill;

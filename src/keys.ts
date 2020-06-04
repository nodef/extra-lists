import type {Lists} from './_types';

/**
 * Lists all keys.
 * @param x lists
 */
function keys<T, U>(x: Lists<T, U>): Iterable<T> {
  return x[0];
}
export default keys;

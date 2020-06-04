/**
 * Lists all keys.
 * @param x lists
 */
function keys<T, U>(x: [Iterable<T>, Iterable<U>]): Iterable<T> {
  return x[0];
}
export default keys;

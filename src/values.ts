import type {Lists} from './_types';

/**
 * Lists all values.
 * @param x lists
 */
function values<T, U>(x: Lists<T, U>): Iterable<U> {
  return x[1];
}
export default values;

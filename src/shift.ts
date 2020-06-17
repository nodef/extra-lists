import drop from './drop';
import type {Lists} from './_types';

/**
 * Removes first entry.
 * @param x lists
 */
function shift<T, U>(x: Lists<T, U>): Lists<T, U> {
  return drop(x, 1);
}
export default shift;

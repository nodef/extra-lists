import drop from './drop';
import type {Lists} from './_types';

/**
 * Gets lists without the first entry.
 * @param x lists
 */
function tail<T, U>(x: Lists<T, U>): Lists<T, U> {
  return drop(x, 1);
}
export default tail;

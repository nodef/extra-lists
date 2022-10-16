import size from './size';
import type {Lists} from './_types';

/**
 * Gets size of lists.
 * @param x lists
 */
function length<T, U>(x: Lists<T, U>): number {
  return size(x);
}
export default length;

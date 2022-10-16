import entries from './entries';
import {head as iterableHead} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Gets first entry.
 * @param x lists
 * @param ed default entry
 */
function head<T, U>(x: Lists<T, U>, ed: [T, U]=[] as any): [T, U] {
  return iterableHead(entries(x), ed);
}
export default head;

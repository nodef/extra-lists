import entries from './entries';
import {get as entriesGet} from 'extra-entries';
import type {Lists} from './_types';

/**
 * Gets value at key.
 * @param x lists
 * @param k key
 */
function get<T, U>(x: Lists<T, U>, k: T): U {
  return entriesGet(entries(x), k);
}
export default get;

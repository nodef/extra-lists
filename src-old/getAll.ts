import entries from './entries';
import {getAll as mapGetAll} from 'extra-map';
import type {Lists} from './_types';

/**
 * Gets values at keys.
 * @param x lists
 * @param ks keys
 */
function getAll<T, U>(x: Lists<T, U>, ks: T[]): Iterable<U> {
  return mapGetAll(new Map(entries(x)), ks);
}
export default getAll;

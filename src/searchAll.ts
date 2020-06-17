import entries from './entries';
import {searchAll as mapSearchAll} from 'extra-map';
import type {testFn, Lists} from './_types';

/**
 * Finds keys of entries passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function searchAll<T, U>(x: Lists<T, U>, ft: testFn<T, U>): Iterable<T> {
  return mapSearchAll(entries(x), ft as any);
}
export default searchAll;

import entries from './entries';
import {search as mapSearch} from 'extra-map';
import type {testFn, Lists} from './_types';

/**
 * Finds key of an entry passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function search<T, U>(x: Lists<T, U>, ft: testFn<T, U>): T {
  return mapSearch(entries(x), ft as any);
}
export default search;

import entries from './entries';
import {count as mapCount} from 'extra-map';
import type {Lists, testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function count<T, U>(x: Lists<T, U>, ft: testFn<T, U>): number {
  return mapCount(entries(x), ft as any);
}
export default count;

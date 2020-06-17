import entries from './entries';
import {every as mapEvery} from 'extra-map';
import type {Lists, testFn} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x lists
 * @param ft test function (v, k ,x)
 */
function every<T, U>(x: Lists<T, U>, ft: testFn<T, U>): boolean {
  return mapEvery(entries(x), ft as any);
}
export default every;

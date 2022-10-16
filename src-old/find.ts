import entries from './entries';
import {find as mapFind} from 'extra-map';
import type {testFn, Lists} from './_types';

/**
 * Finds a value passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function find<T, U>(x: Lists<T, U>, ft: testFn<T, U>): U {
  return mapFind(entries(x), ft as any);
}
export default find;

import entries from './entries';
import {findAll as mapFindAll} from 'extra-map';
import type {testFn, Lists} from './_types';

/**
 * Finds values passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function findAll<T, U>(x: Lists<T, U>, ft: testFn<T, U>): Iterable<U> {
  return mapFindAll(entries(x), ft as any);
}
export default findAll;

import entries from './entries';
import {some as mapSome} from 'extra-map';
import type {testFn, Lists} from './_types';

/**
 * Checks if any value satisfies a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function some<T, U>(x: Lists<T, U>, ft: testFn<T, U>=null): boolean {
  return mapSome(entries(x), ft as any);
}
export default some;

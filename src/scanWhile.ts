import entries from './entries';
import {scanWhile as mapScanWhile} from 'extra-map';
import type {testFn, Lists} from './_types';

/**
 * Finds key of first entry not passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function scanWhile<T, U>(x: Lists<T, U>, ft: testFn<T, U>): T {
  return mapScanWhile(entries(x), ft as any);
}
export default scanWhile;

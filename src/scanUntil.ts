import entries from './entries';
import {scanUntil as mapScanUntil} from 'extra-map';
import type {testFn, Lists} from './_types';

/**
 * Finds key of first entry not passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function scanUntil<T, U>(x: Lists<T, U>, ft: testFn<T, U>): T {
  return mapScanUntil(entries(x), ft as any);
}
export default scanUntil;

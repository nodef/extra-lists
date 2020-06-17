import keys from './keys';
import values from './values';
import type {testFn, Lists} from './_types';

/**
 * Finds key of first entry not passing a test.
 * @param x lists
 * @param fn test function (v, k, x)
 */
function scanWhile<T, U>(x: Lists<T, U>, fn: testFn<T, U>): T {
  for(var [k, v] of x) {

  }
    if(!fn.call(ths, v, k, x)) return k;
}
export default scanWhile;

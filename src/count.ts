import keys from './keys';
import values from './values';
import type {Lists, testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x lists
 * @param fn test function (v, k, x)
 */
function count<T, U>(x: Lists<T, U>, fn: testFn<T, U>): number {
  var vi = values(x)[Symbol.iterator](), a = 0;
  for(var k of keys(x)) {
    var v = vi.next().value;
    if(fn(v, k, x)) a++;
  }
  return a;
}
export default count;

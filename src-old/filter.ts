import entries from './entries';
import type {testFn, Lists} from './_types';

/**
 * Keeps entries which pass a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function filter<T, U>(x: Lists<T, U>, ft: testFn<T, U>): Lists<T, U> {
  var ks = [], vs = [];
  for(var [k, v] of entries(x))
    if(ft(v, k, x)) { ks.push(k); vs.push(v); }
  return [ks, vs];
}
export default filter;

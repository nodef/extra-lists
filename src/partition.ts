import entries from './entries';
import type {testFn, Lists} from './_types';

/**
 * Segregates values by test result.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Lists<T, U>, ft: testFn<T, U>): [Lists<T, U>, Lists<T, U>] {
  var tk = [], tv = [], fk = [], fv = [];
  for(var [k, v] of entries(x)) {
    if(ft(v, k, x)) { tk.push(k); tv.push(v); }
    else { fk.push(k); fv.push(v); }
  }
  return [[tk, tv], [fk, fv]];
}
export default partition;

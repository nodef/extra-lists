import is from './is';
import entries from './entries';
import type {testFn, Lists} from './_types';

function flatTo<T>(x: Lists<T, any>, n: number, ft: testFn<T, any>, a: Map<T, any>): Map<T, any> {
  for(var [k, v] of entries(x)) {
    if(n!==0 && ft(v, k, x)) flatTo(v, n-1, ft, a);
    else a.set(k, v);
  }
  return a;
}

/**
 * Flattens nested lists to given depth.
 * @param x nested lists
 * @param n maximum depth (-1)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Lists<T, any>, n: number=-1, ft: testFn<T, any>=null): Map<T, any> {
  return flatTo(x, n, ft||is, new Map());
}
export default flat;

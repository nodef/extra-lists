import id from './_id';
import is from './is';
import entries from './entries';
import type {mapFn, testFn, Lists} from './_types';

function flatTo<T>(x: Lists<T, any>, n: number, fm: mapFn<T, any, any>, ft: testFn<T, any>, a: Map<T, any>): Map<T, any> {
  for(var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if(n!==0 && ft(v1, k, x)) flatTo(v1, n-1, fm, ft, a);
    else a.set(k, v1);
  }
  return a;
}

/**
 * Flattens nested lists to given depth.
 * @param x nested lists
 * @param n maximum depth (-1)
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Lists<T, any>, n: number=-1, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Lists<T, any> {
  var fm = fm||id, ft = ft||is;
  var a = flatTo(x, n, fm, ft, new Map());
  return [a.keys(), a.values()];
}
export default flat;

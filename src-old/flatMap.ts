import id from './_id';
import is from './is';
import entries from './entries';
import {concat$} from 'extra-map'
import type {mapFn, testFn, Lists} from './_types';

/**
 * Flattens nested lists, using map function.
 * @param x nested lists
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flatMap<T>(x: Lists<T, any>, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Lists<T, any> {
  var fm = fm||id, ft = ft||is;
  var a = new Map();
  for(var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if(ft(v1, k, x)) concat$(a, entries(v1));
    else a.set(k, v1);
  }
  return [a.keys(), a.values()];
}
export default flatMap;

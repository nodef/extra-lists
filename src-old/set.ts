import entries from './entries';
import type {Lists} from './_types';

/**
 * Sets value at key.
 * @param x lists
 * @param k key
 * @param v value
 */
function set<T, U>(x: Lists<T, U>, k: T, v: U): Lists<T, U> {
  var ks = [], vs = [];
  for(var [j, u] of entries(x))
  { ks.push(j); vs.push(j===k? v : u); }
  return [ks, vs];
}
export default set;

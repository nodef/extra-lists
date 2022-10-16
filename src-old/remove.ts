import entries from './entries';
import type {Lists} from './_types';

/**
 * Deletes an entry.
 * @param x lists
 * @param k key
 */
function remove<T, U>(x: Lists<T, U>, k: T): Lists<T, U> {
  var ks = [], vs = [];
  for(var [j, u] of entries(x))
    if(j!==k) { ks.push(j); vs.push(u); }
  return [ks, vs];
}
export default remove;

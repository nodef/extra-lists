import id from './_id';
import entries from './entries';
import type {mapFn, Lists} from './_types';

/**
 * Segregates values by similarity.
 * @param x lists
 * @param fm map function (v, k, x)
 * @returns Map {key => values}
 */
function partitionAs<T, U, V=U>(x: Lists<T, U>, fm: mapFn<T, U, U|V>=null): Map<U|V, Lists<T, U>> {
  var fm = fm||id, a = new Map();
  for(var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if(!a.has(v1)) a.set(v1, [[], []]);
    var [ak, av] = a.get(v1);
    ak.push(k); av.push(v);
  }
  return a;
}
export default partitionAs;

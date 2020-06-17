import id from './_id';
import type {Lists, mapFn} from './_types';

/**
 * Segregates values by similarity.
 * @param x lists
 * @param fn map function (v, k, x)
 * @returns Map {key => values}
 */
function partitionAs<T, U, V=U>(x: Lists<T, U>, fn: mapFn<T, U, U|V>=null): Map<U|V, Lists<T, U>> {
  var fn = fn||id;
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  var a = new Map();
  for(var v of vs) {
    var k = ki.next().value;
    var v1 = fn.call(ths, v, k, x);
    if(!a.has(v1)) a.set(v1, [[], []]);
    var [aks, avs] = a.get(v1);
    aks.push(k); avs.push(v);
  }
  return a;
}
export default partitionAs;

import id from './_id';
import cmp from './_cmp';
import type {Lists, compareFn, mapFn} from './_types';

/**
 * Searches a value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns key of value
 */
function search<T, U, V=U>(x: Lists<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T {
  var fc = fc||cmp, fm = fm||id;
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  var v1 = fm(v, null, null);
  for(var u of vs) {
    var k = ki.next().value;
    var u1 = fm(u, k, x);
    if(fc(u1, v1)===0) return k;
  }
}
export default search;

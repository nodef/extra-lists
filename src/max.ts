import id from './_id';
import cmp from './_cmp';
import type {Lists, compareFn, mapFn} from './_types';

/**
 * Finds largest value.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function max<T, U, V=U>(x: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): U {
  var fc = fc||cmp, fm = fm||id;
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  var a: U, a1: U|V, i = -1;
  for(var v of vs) {
    var k = ki.next().value;
    var v1 = fm(v, k, x);
    if(++i===0 || fc(v1, a1)>0) { a = v; a1 = v1; }
  }
  return a;
}
export default max;

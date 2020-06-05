import type {Lists} from './_types';

/**
 * Gets value at key.
 * @param x lists
 * @param k key
 */
function get<T, U>(x: Lists<T, U>, k: T): U {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  for(var v of vs) {
    var k0 = ki.next().value;
    if(k===k0) return v;
  }
}
export default get;

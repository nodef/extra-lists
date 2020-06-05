import type {Lists} from './_types';

/**
 * Joins values together.
 * @param x lists
 * @param sep separator (,)
 * @param asc associator
 */
function join<T, U>(x: Lists<T, U>, sep: string=',', asc: string=null): string {
  var [ks, vs] = x, ki = ks[Symbol.iterator](), a = '';
  for(var v of vs) {
    var k = ki.next().value;
    if(asc) a += k+asc;
    a += v+sep;
  }
  return a.slice(0, -sep.length);
}
export default join;

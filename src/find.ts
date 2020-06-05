import type {Lists, testFn} from './_types';

/**
 * Finds first value passing a test.
 * @param x lists
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function find<T, U>(x: Lists<T, U>, fn: testFn<T, U>, ths: object=null): U {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  for(var v of vs) {
    var k = ki.next().value;
    if(fn.call(ths, v, k, x)) return v;
  }
}
export default find;

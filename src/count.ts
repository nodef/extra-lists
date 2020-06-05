import type {Lists, testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x lists
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function count<T, U>(x: Lists<T, U>, fn: testFn<T, U>, ths: object=null): number {
  var [ks, vs] = x, ki = ks[Symbol.iterator](), a = 0;
  for(var v of vs) {
    var k = ki.next().value;
    if(fn.call(ths, v, k, x)) a++;
  }
  return a;
}
export default count;

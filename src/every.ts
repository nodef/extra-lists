import type {Lists, testFn} from './_types';

function everyTest<T, U>(x: Lists<T, U>, fn: testFn<T, U>, ths: object=null): boolean {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  for(var v of vs) {
    var k = ki.next().value;
    if(!fn.call(ths, v, k, x)) return false;
  }
  return true;
}

/**
 * Checks if all values satisfy a test.
 * @param x lists
 * @param fn test function (v, k ,x)
 * @param ths this argument
 */
function every<T, U>(x: Lists<T, U>, fn: testFn<T, U>, ths: object=null): boolean {
  if(fn) return everyTest(x, fn, ths);
  else return everyIf(x);
}
export default every;

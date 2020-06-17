import type {Lists, testFn} from './_types';

function someIf<T, U>(x: Lists<T, U>): boolean {
  for(var v of x[1])
    if(v) return true;
  return false;
}

function someTest<T, U>(x: Lists<T, U>, fn: testFn<T, U>, ths: object=null): boolean {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  for(var v of vs) {
    var k = ki.next().value;
    if(fn.call(ths, v, k, x)) return true;
  }
  return false;
}

/**
 * Checks if any value satisfies a test.
 * @param x lists
 * @param fn test function (v, k ,x)
 */
function some<T, U>(x: Lists<T, U>, fn: testFn<T, U>=null): boolean {
  if(fn) return someTest(x, fn, ths);
  else return someIf(x);
}
export default some;

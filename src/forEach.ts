import type {Lists, calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x lists
 * @param fn called function (v, k, x)
 */
function forEach<T, U>(x: Lists<T, U>, fn: calledFn<T, U>): void {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  for(var v of vs) {
    var k = ki.next();
    fn(v, k, x);
  }
}
export default forEach;

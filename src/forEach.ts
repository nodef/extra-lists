import type {Lists, calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x lists
 * @param fn called function (v, k, x)
 * @param ths this argument
 */
function forEach<T, U>(x: Lists<T, U>, fn: calledFn<T, U>, ths: object=null): void {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  for(var v of x) {
    var k = ki.next();
    fn.call(ths, v, k, x);
  }
}
export default forEach;

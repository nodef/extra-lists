import type {Lists, testFn} from './_types';

/**
 * Segregates values by test result.
 * @param x lists
 * @param fn test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Lists<T, U>, fn: testFn<T, U>): [Lists<T, U>, Lists<T, U>] {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  var t: [T[], U[]] = [[], []], f: [T[], U[]] = [[], []];
  for(var v of vs) {
    var k = ki.next().value;
    if(fn.call(ths, v, k, x)) { t[0].push(k); t[1].push(v); }
    else { f[0].push(k); f[1].push(v); }
  }
  return [t, f];
}
export default partition;

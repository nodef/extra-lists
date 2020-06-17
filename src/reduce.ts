import type {reduceFn, Lists} from './_types';

/**
 * Reduces values to a single value.
 * @param x lists
 * @param fn reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<T, U, V>(x: Lists<T, U>, fn: reduceFn<T, U, V>, acc?: V): V {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  var init = arguments.length <= 2;
  for(var v of vs) {
    var k = ki.next().value;
    if(init) { init = false; acc = v as any as V; }
    else acc = fn(acc, v, k, x);
  }
  return acc;
}
export default reduce;

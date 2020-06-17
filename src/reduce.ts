import {reduce as mapReduce} from 'extra-map';
import type {reduceFn, Lists} from './_types';
import entries from './entries';

/**
 * Reduces values to a single value.
 * @param x lists
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<T, U, V=U>(x: Lists<T, U>, fr: reduceFn<T, U, U|V>, acc?: U|V): U|V {
  var A = arguments.length, es = entries(x);
  return A>2? mapReduce(es, fr as any, acc) : mapReduce(es, fr as any);
}
export default reduce;

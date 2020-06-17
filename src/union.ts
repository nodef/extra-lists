import {fromLists} from 'extra-map';
import type {combineFn, Lists} from './_types';
import keys from './keys';
import values from './values';

/**
 * Gives lists present in any lists.
 * @param x lists
 * @param y another lists
 * @param fn combine function (a, b)
 */
function union<T, U>(x: Lists<T, U>, y: Lists<T, U>, fn: combineFn<U>=null): Lists<T, U> {
  var a = fromLists(x);
  var [ks, vs] = y, vi = vs[Symbol.iterator]();
  for(var k of ks)
}
export default union;

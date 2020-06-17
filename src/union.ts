import entries from './entries';
import {union as mapUnion} from 'extra-map';
import type {combineFn, Lists} from './_types';

/**
 * Gives lists present in any lists.
 * @param x lists
 * @param y another lists
 * @param fc combine function (a, b)
 */
function union<T, U>(x: Lists<T, U>, y: Lists<T, U>, fc: combineFn<U>=null): Lists<T, U> {
  var a = mapUnion(entries(x), entries(y), fc);
  return [a.keys(), a.values()];
}
export default union;

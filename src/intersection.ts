import entries from './entries';
import {intersection as mapIntersection} from 'extra-map';
import type {combineFn, Lists} from './_types';

/**
 * Gives entries present in both lists.
 * @param x lists
 * @param y another lists
 * @param fc combine function (a, b)
 */
function intersection<T, U>(x: Lists<T, U>, y: Lists<T, U>, fc: combineFn<U>=null): Lists<T, U> {
  var a = mapIntersection(new Map(entries(x)), entries(y), fc);
  return [a.keys(), a.values()];
}
export default intersection;

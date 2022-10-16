import entries from './entries';
import {symmetricDifference as mapSymmetricDifference} from 'extra-map';
import type {Lists} from './_types';

/**
 * Gives entries not present in both lists.
 * @param x lists
 * @param y another lists
 */
function symmetricDifference<T, U>(x: Lists<T, U>, y: Lists<T, U>): Lists<T, U> {
  var a = mapSymmetricDifference(entries(x), entries(y));
  return [a.keys(), a.values()];
}
export default symmetricDifference;

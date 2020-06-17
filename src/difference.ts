import keys from './keys';
import {fromLists} from 'extra-map';
import type {Lists} from './_types';

/**
 * Gives entries of lists not present in another.
 * @param x lists
 * @param y another lists
 */
function difference<T, U>(x: Lists<T, U>, y: Lists<T, U>): Lists<T, U> {
  var a = fromLists(x);
  for(var k of keys(y))
    a.delete(k);
  return [a.keys(), a.values()];
}
export default difference;

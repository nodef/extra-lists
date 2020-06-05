import {concat as iterableConcat} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Appends lists' together.
 * @param xs lists'
 */
function concat<T, U>(...xs: Lists<T, U>[]): Lists<T, U> {
  var kss = xs.map(x => x[0]);
  var vss = xs.map(x => x[1]);
  return [iterableConcat(...kss), iterableConcat(...vss)];
}
export default concat;

import {is as iterableIs} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Checks if value is lists.
 * @param v value
 */
function is<T, U>(v: any): v is Lists<T, U> {
  return Array.isArray(v) && v.length===2 && iterableIs(v[0]) && iterableIs(v[1]);
}
export default is;

import {isList} from 'extra-iterable';
import type {Lists} from './_types';

/**
 * Checks if value is lists.
 * @param v value
 */
function is<T, U>(v: any): v is Lists<T, U> {
  return Array.isArray(v) && v.length===2 && isList(v[0]) && isList(v[1]);
}
export default is;

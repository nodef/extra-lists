import entries from './entries';
import {join as mapJoin} from 'extra-map';
import type {Lists} from './_types';

/**
 * Joins values together.
 * @param x lists
 * @param sep separator (,)
 * @param asc associator (=)
 */
function join<T, U>(x: Lists<T, U>, sep: string=',', asc: string='='): string {
  return mapJoin(entries(x), sep, asc);
}
export default join;

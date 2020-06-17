import keys from './keys';
import {concat} from 'extra-set';
import type {Lists} from './_types';

/**
 * Gives keys present in any lists.
 * @param xs n lists
 */
function unionKeys<T, U>(...xs: Lists<T, U>[]): Set<T> {
  return concat(...xs.map(x => keys(x)));
}
export default unionKeys;

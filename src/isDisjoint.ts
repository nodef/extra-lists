import keys from './keys';
import {isDisjoint as setIsDisjoint} from 'extra-set';
import type {Lists} from './_types';

/**
 * Checks if lists have no common keys.
 * @param x lists
 * @param y another lists
 */
function isDisjoint<T, U>(x: Lists<T, U>, y: Lists<T, U>): boolean {
  return setIsDisjoint(new Set(keys(x)), keys(y));
}
export default isDisjoint;

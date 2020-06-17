import keys from './keys';
import {value} from 'extra-array';
import type {Lists} from './_types';

/**
 * Picks an arbitrary key.
 * @param x lists
 * @param r random seed 0->1
 */
function key<T, U>(x: Lists<T, U>, r: number=Math.random()): T {
  return value([...keys(x)], r);
}
export default key;

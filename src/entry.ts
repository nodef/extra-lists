import entries from './entries';
import {value} from 'extra-array';
import type {Lists} from './_types';

/**
 * Picks an arbitrary entry.
 * @param x lists
 * @param r random seed 0->1
 */
function entry<T, U>(x: Lists<T, U>, r: number=Math.random()): [T, U] {
  return value([...entries(x)], r);
}
export default entry;

import entries from './entries';
import {submap as mapSubmap} from 'extra-map';
import type {Lists} from './_types';

/**
 * Picks an arbitrary submap.
 * @param x lists
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function submap<T, U>(x: Lists<T, U>, n: number=-1, r: number=Math.random()): Lists<T, U> {
  var a = mapSubmap(new Map(entries(x)), n ,r);
  return [a.keys(), a.values()];
}
export default submap;

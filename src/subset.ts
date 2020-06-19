import entries from './entries';
import {subset as mapSubset} from 'extra-map';
import type {Lists} from './_types';

/**
 * Picks an arbitrary submap.
 * @param x lists
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function subset<T, U>(x: Lists<T, U>, n: number=-1, r: number=Math.random()): Lists<T, U> {
  var a = mapSubset(new Map(entries(x)), n ,r);
  return [a.keys(), a.values()];
}
export default subset;

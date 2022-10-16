import entries from './entries';
import {zip as mapZip} from 'extra-map';
import type {mapFn, tillFn, Lists} from './_types';

/**
 * Combines matching entries from all lists.
 * @param xs n lists
 * @param fm map function (vs, k)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function zip<T, U, V=U>(xs: Lists<T, U>[], fm: mapFn<T, U[], U[]|V>=null, ft: tillFn=null, vd?: U): Lists<T, U[]|V> {
  var a = mapZip(xs.map(x => new Map(entries(x))), fm as any, ft, vd);
  return [a.keys(), a.values() as any];
}
export default zip;

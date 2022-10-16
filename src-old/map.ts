import entries from './entries';
import type {Lists, mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x lists
 * @param fm map function (v, k, x)
s */
function map<T, U, V>(x: Lists<T, U>, fm: mapFn<T, U, V>) {
  var ks = [], vs = [];
  for(var [k, v] of entries(x))
  { ks.push(k); vs.push(fm(v, k, x)); }
  return [ks, vs];
}
export default map;

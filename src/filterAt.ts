import entries from './entries';
import type {Lists} from './_types';

/**
 * Gets lists with given keys.
 * @param x lists
 * @param ks keys
 */
function filterAt<T, U>(x: Lists<T, U>, ks: T[]): Lists<T, U> {
  var js = [], us = [];
  for(var [k, v] of entries(x))
    if(ks.includes(k)) { js.push(k); us.push(v); }
  return [js, us];
}
export default filterAt;

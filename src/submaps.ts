import filterAt from './filterAt';
import {subsequences} from 'extra-array';
import type {Lists} from './_types';

/**
 * Lists all possible submaps.
 * @param x lists
 * @param n number of entries (-1 => any)
 */
function* submaps<T, U>(x: Lists<T, U>, n: number=-1): Iterable<Lists<T, U>> {
  for(var ks of subsequences([...x.keys()], n))
    yield filterAt(x, ks);
}
export default submaps;

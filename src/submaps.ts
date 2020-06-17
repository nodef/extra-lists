import entries from './entries';
import {submaps as mapSubmaps} from 'extra-map';
import type {Lists} from './_types';

/**
 * Lists all possible submaps.
 * @param x lists
 * @param n number of entries (-1 => any)
 */
function* submaps<T, U>(x: Lists<T, U>, n: number=-1): Iterable<Lists<T, U>> {
  for(var a of mapSubmaps(new Map(entries(x)), n))
    yield [a.keys(), a.values()];
}
export default submaps;

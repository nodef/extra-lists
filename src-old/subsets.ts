import entries from './entries';
import {subsets as mapSubsets} from 'extra-map';
import type {Lists} from './_types';

/**
 * Lists all possible subsets.
 * @param x lists
 * @param n number of entries (-1 => any)
 */
function* subsets<T, U>(x: Lists<T, U>, n: number=-1): Iterable<Lists<T, U>> {
  for(var a of mapSubsets(new Map(entries(x)), n))
    yield [a.keys(), a.values()];
}
export default subsets;

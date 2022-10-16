import id from './_id';
import entries from './entries';
import {cartesianProduct as mapCartesianProduct} from 'extra-map';
import type {mapFn, Lists} from './_types';

/**
 * Lists cartesian product of lists.
 * @param xs lists
 * @param fm map function (vs, i)
 */
function* cartesianProduct<T, U, V=U>(xs: Lists<T, U>[], fm: mapFn<number, Lists<T, U>, Lists<T, U>|V>=null): Iterable<Lists<T, U>|V> {
  var fm = fm||id, ys = xs.map(x => new Map(entries(x)));
  yield* mapCartesianProduct(ys, (vs, i) => fm([vs.keys(), vs.values()], i, null)) as any;
}
export default cartesianProduct;

import type {Lists, Entries} from './_types';

/**
 * Lists all key-value pairs.
 * @param x lists
 */
function* entries<T, U>(x: Lists<T, U>): Entries<T, U> {
  var [ks, vs] = x, vi = vs[Symbol.iterator]();
  for(var k of ks)
    yield [k, vi.next().value];
}
export default entries;

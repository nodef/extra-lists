import type {Lists} from './_types';

/**
 * Lists all key-value pairs.
 * @param x lists
 */
function* entries<T, U>(x: Lists<T, U>): Iterable<[T, U]> {
  var [ks, vs] = x;
  var vi = vs[Symbol.iterator]();
  for(var k of ks) {
    var v = vi.next().value;
    yield [k, v];
  }
}
export default entries;

import type {Lists} from './_types';

/**
 * Lists all key-value pairs.
 * @param x lists
 */
function* entries<T, U>(x: Lists<T, U>): Iterable<[T, U]> {
  var [ks, vs] = x, ki = ks[Symbol.iterator]();
  for(var v of vs) {
    var k = ki.next().value;
    yield [k, v];
  }
}
export default entries;

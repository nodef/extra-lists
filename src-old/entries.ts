import keys from './keys';
import values from './values';
import type {Lists, Entries} from './_types';

/**
 * Lists all key-value pairs.
 * @param x lists
 */
function* entries<T, U>(x: Lists<T, U>): Entries<T, U> {
  var vi = values(x)[Symbol.iterator]();
  for(var k of keys(x))
    yield [k, vi.next().value];
}
export default entries;

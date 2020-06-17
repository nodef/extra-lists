import keys from './keys';
import values from './values';
import {zip} from 'extra-array';
import {chunk as arrayChunk} from 'extra-array';
import type {Lists} from './_types';

/**
 * Breaks lists into chunks of given size.
 * @param x lists
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T, U>(x: Lists<T, U>, n: number=1, s: number=n): Lists<T, U>[] {
  var kss = arrayChunk([...keys(x)], n, s);
  var vss = arrayChunk([...values(x)], n, s);
  return zip([kss, vss as any]) as Lists<T, U>[];
}
export default chunk;

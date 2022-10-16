import is from './is';
import get from './get';
import type {Lists} from './_types';

/**
 * Gets value at path in nested lists.
 * @param x nested lists
 * @param p path
 */
function getPath<T>(x: Lists<T, any>, p: T[]): any {
  for(var k of p)
    x = is(x)? get(x, k) : undefined;
  return x;
}
export default getPath;

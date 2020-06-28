import getPath from './getPath';
import type {Lists} from './_types';

/**
 * Checks if nested lists has a path.
 * @param x nested lists
 * @param p path
 */
function hasPath<T>(x: Lists<T, any>, p: T[]): boolean {
  return getPath(x, p)!==undefined;
}
export default hasPath;

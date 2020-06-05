import {isOnce as iterableIsOnce} from 'extra-iterable';

/**
 * Checks if value is once iterable lists.
 * @param v a value
 */
function isOnce(v: any): boolean {
  if(!Array.isArray(v) || v.length!==2) return false;
  return iterableIsOnce(v[0]) || iterableIsOnce(v[1]);
}
export default isOnce;

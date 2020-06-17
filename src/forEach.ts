import entries from './entries';
import {forEach as mapForEach} from 'extra-map';
import type {calledFn, Lists} from './_types';

/**
 * Calls a function for each value.
 * @param x lists
 * @param fc called function (v, k, x)
 */
function forEach<T, U>(x: Lists<T, U>, fc: calledFn<T, U>): void {
  mapForEach(entries(x), fc as any);
}
export default forEach;

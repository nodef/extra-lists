import type {Entries, Lists} from './_types';

/**
 * Creates lists from entries.
 * @param es entries
 */
function fromEntries<T, U>(es: Entries<T, U>): Lists<T, U> {
  var a = new Map(es);
  return [a.keys(), a.values()];
}
export default fromEntries;

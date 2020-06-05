import type {Lists} from './_types';

/**
 * Gets values at keys.
 * @param x lists
 * @param ks keys
 */
function* getAll<T, U>(x: Lists<T, U>, ks: Iterable<T>): IterableIterator<U> {
  var [js, vs] = x, m = new Map();
  var ji = js[Symbol.iterator]();
  var ki = ks[Symbol.iterator]();
  var {value, done} = ki.next();
  if(done) return;
  for(var v of vs) {
    var j = ji.next().value;
    m.set(j, v);
  }
  // for(var v of x) {
  //   while(value<=j) {
  //     var {value, done} = ii.next();
  //     if(done) return;
  //     if(value<=j) yield undefined;
  //   }
  //   if(value===++j) yield v;
  // }
  // while(!ii.next().done) yield undefined;
}
export default getAll;

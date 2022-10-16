export type tillFn            = (dones: boolean[]) => boolean;
export type reduceFn<T, U, V> = (acc: V, v: U, k: T, x: Lists<T, U>) => V;
export type calledFn<T, U>    = (v: U, k: T, x: Lists<T, U>) => void;
export type testFn<T, U>      = (v: U, k: T, x: Lists<T, U>) => boolean;
export type mapFn<T, U, V>    = (v: U, k: T, x: Lists<T, U>) => V;
export type combineFn<T>      = (a: T, b: T) => T;
export type compareFn<T>      = (a: T, b: T) => number;
export type getFn<T>          = () => T;
export type Entries<T, U>     = Iterable<[T, U]>;
export type Lists<T, U>       = [Iterable<T>, Iterable<U>];


/**
 * Compares two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
 function cmp<T>(a: T, b: T): number {
  return a<b? -1:(a>b? 1:0);
}


/**
 * Gives same value.
 * @param v a value
 * @returns v
 */
 function id<T>(v: T): T {
  return v;
}


import {cartesianProduct as mapCartesianProduct} from 'extra-map';

/**
 * Lists cartesian product of lists.
 * @param xs lists
 * @param fm map function (vs, i)
 */
function* cartesianProduct<T, U, V=U>(xs: Lists<T, U>[], fm: mapFn<number, Lists<T, U>, Lists<T, U>|V>=null): Iterable<Lists<T, U>|V> {
  var fm = fm||id, ys = xs.map(x => new Map(entries(x)));
  yield* mapCartesianProduct(ys, (vs, i) => fm([vs.keys(), vs.values()], i, null)) as any;
}


import {zip} from 'extra-array';
import {chunk as arrayChunk} from 'extra-array';

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


import {compare as entriesCompare} from 'extra-entries';

/**
 * Compares two lists.
 * @param x lists
 * @param y another lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
function compare<T, U, V=U>(x: Lists<T, U>, y: Lists<T, U>, fc?: compareFn<U|V>, fm?: mapFn<T, U, U|V>): number {
  return entriesCompare(entries(x), entries(y), fc, fm as any);
}


import {concat as iterableConcat} from 'extra-iterable';

/**
 * Appends entries from all lists.
 * @param xs n lists
 */
function concat<T, U>(...xs: Lists<T, U>[]): Lists<T, U> {
  var ks = iterableConcat(...xs.map(keys));
  var vs = iterableConcat(...xs.map(values));
  return [ks, vs];
}


import {count as mapCount} from 'extra-map';

/**
 * Counts values which satisfy a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function count<T, U>(x: Lists<T, U>, ft: testFn<T, U>): number {
  return mapCount(entries(x), ft as any);
}


import {countAs as mapCountAs} from 'extra-map';

/**
 * Counts occurrences of values.
 * @param x lists
 * @param fm map function (v, k, x)
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Lists<T, U>, fm: mapFn<T, U, U|V>=null): Map<U|V, number> {
  return mapCountAs(entries(x), fm as any);
}


import {fromLists} from 'extra-map';

/**
 * Gives entries of lists not present in another.
 * @param x lists
 * @param y another lists
 */
function difference<T, U>(x: Lists<T, U>, y: Lists<T, U>): Lists<T, U> {
  var a = fromLists(x);
  for(var k of keys(y))
    a.delete(k);
  return [a.keys(), a.values()];
}


import {drop as iterableDrop} from 'extra-iterable';


/**
 * Removes first n entries.
 * @param x lists
 * @param n number of entries (1)
 */
function drop<T, U>(x: Lists<T, U>, n: number=1): Lists<T, U> {
  var ks = iterableDrop(keys(x), n);
  var vs = iterableDrop(values(x), n);
  return [ks, vs];
}


/**
 * Lists all key-value pairs.
 * @param x lists
 */
function* entries<T, U>(x: Lists<T, U>): Entries<T, U> {
  var vi = values(x)[Symbol.iterator]();
  for(var k of keys(x))
    yield [k, vi.next().value];
}


import {value} from 'extra-array';

/**
 * Picks an arbitrary entry.
 * @param x lists
 * @param r random seed 0->1
 */
function entry<T, U>(x: Lists<T, U>, r: number=Math.random()): [T, U] {
  return value([...entries(x)], r);
}


import {every as mapEvery} from 'extra-map';

/**
 * Checks if all values satisfy a test.
 * @param x lists
 * @param ft test function (v, k ,x)
 */
function every<T, U>(x: Lists<T, U>, ft: testFn<T, U>): boolean {
  return mapEvery(entries(x), ft as any);
}


/**
 * Keeps entries which pass a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function filter<T, U>(x: Lists<T, U>, ft: testFn<T, U>): Lists<T, U> {
  var ks = [], vs = [];
  for(var [k, v] of entries(x))
    if(ft(v, k, x)) { ks.push(k); vs.push(v); }
  return [ks, vs];
}


/**
 * Gets lists with given keys.
 * @param x lists
 * @param ks keys
 */
function filterAt<T, U>(x: Lists<T, U>, ks: T[]): Lists<T, U> {
  var js = [], us = [];
  for(var [k, v] of entries(x))
    if(ks.includes(k)) { js.push(k); us.push(v); }
  return [js, us];
}


import {find as mapFind} from 'extra-map';

/**
 * Finds a value passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function find<T, U>(x: Lists<T, U>, ft: testFn<T, U>): U {
  return mapFind(entries(x), ft as any);
}


import {findAll as mapFindAll} from 'extra-map';

/**
 * Finds values passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function findAll<T, U>(x: Lists<T, U>, ft: testFn<T, U>): Iterable<U> {
  return mapFindAll(entries(x), ft as any);
}


function flatTo<T>(x: Lists<T, any>, n: number, fm: mapFn<T, any, any>, ft: testFn<T, any>, a: Map<T, any>): Map<T, any> {
  for(var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if(n!==0 && ft(v1, k, x)) flatTo(v1, n-1, fm, ft, a);
    else a.set(k, v1);
  }
  return a;
}

/**
 * Flattens nested lists to given depth.
 * @param x nested lists
 * @param n maximum depth (-1)
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Lists<T, any>, n: number=-1, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Lists<T, any> {
  var fm = fm||id, ft = ft||is;
  var a = flatTo(x, n, fm, ft, new Map());
  return [a.keys(), a.values()];
}


import {concat$} from 'extra-map'

/**
 * Flattens nested lists, using map function.
 * @param x nested lists
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flatMap<T>(x: Lists<T, any>, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Lists<T, any> {
  var fm = fm||id, ft = ft||is;
  var a = new Map();
  for(var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if(ft(v1, k, x)) concat$(a, entries(v1));
    else a.set(k, v1);
  }
  return [a.keys(), a.values()];
}


import {forEach as mapForEach} from 'extra-map';

/**
 * Calls a function for each value.
 * @param x lists
 * @param fc called function (v, k, x)
 */
function forEach<T, U>(x: Lists<T, U>, fc: calledFn<T, U>): void {
  mapForEach(entries(x), fc as any);
}


/**
 * Creates lists from entries.
 * @param es entries
 */
function fromEntries<T, U>(es: Entries<T, U>): Lists<T, U> {
  var a = new Map(es);
  return [a.keys(), a.values()];
}


import {get as entriesGet} from 'extra-entries';

/**
 * Gets value at key.
 * @param x lists
 * @param k key
 */
function get<T, U>(x: Lists<T, U>, k: T): U {
  return entriesGet(entries(x), k);
}


import {getAll as mapGetAll} from 'extra-map';

/**
 * Gets values at keys.
 * @param x lists
 * @param ks keys
 */
function getAll<T, U>(x: Lists<T, U>, ks: T[]): Iterable<U> {
  return mapGetAll(new Map(entries(x)), ks);
}


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


import {hasValue as iterableHasValue} from 'extra-iterable';

/**
 * Checks if lists has a key.
 * @param x lists
 * @param k key?
 */
function has<T, U>(x: Lists<T, U>, k: T): boolean {
  return iterableHasValue(keys(x), k);
}


/**
 * Checks if map has an entry.
 * @param x a map
 * @param e entry?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasEntry<T, U, V=U>(x: Lists<T, U>, e: [T, U], fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id, [k, v] = e;
  var [k, v] = e, u = get(x, k);
  return fc(fm(u, k, x), v)===0;
}


/**
 * Checks if nested lists has a path.
 * @param x nested lists
 * @param p path
 */
function hasPath<T>(x: Lists<T, any>, p: T[]): boolean {
  return getPath(x, p)!==undefined;
}


import {hasSubset as mapHasSubset} from 'extra-map';

/**
 * Checks if lists has a subset.
 * @param x lists
 * @param y subset?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasSubset<T, U, V=U>(x: Lists<T, U>, y: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return mapHasSubset(new Map(entries(x)), entries(y), fc, fm as any);
}


/**
 * Checks if lists has a value.
 * @param x lists
 * @param v value?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasValue<T, U, V=U>(x: Lists<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return searchValue(x, v, fc, fm)!==undefined;
}


import {head as iterableHead} from 'extra-iterable';

/**
 * Gets first entry.
 * @param x lists
 * @param ed default entry
 */
function head<T, U>(x: Lists<T, U>, ed: [T, U]=[] as any): [T, U] {
  return iterableHead(entries(x), ed);
}


import {intersection as mapIntersection} from 'extra-map';

/**
 * Gives entries present in both lists.
 * @param x lists
 * @param y another lists
 * @param fc combine function (a, b)
 */
function intersection<T, U>(x: Lists<T, U>, y: Lists<T, U>, fc: combineFn<U>=null): Lists<T, U> {
  var a = mapIntersection(new Map(entries(x)), entries(y), fc);
  return [a.keys(), a.values()];
}


import {isList} from 'extra-iterable';

/**
 * Checks if value is lists.
 * @param v value
 */
function is<T, U>(v: any): v is Lists<T, U> {
  return Array.isArray(v) && v.length===2 && isList(v[0]) && isList(v[1]);
}


import {isDisjoint as setIsDisjoint} from 'extra-set';

/**
 * Checks if lists have no common keys.
 * @param x lists
 * @param y another lists
 */
function isDisjoint<T, U>(x: Lists<T, U>, y: Lists<T, U>): boolean {
  return setIsDisjoint(new Set(keys(x)), keys(y));
}


import {isEmpty as iterableIsEmpty} from 'extra-iterable';

/**
 * Checks if lists is empty.
 * @param x lists
 */
function isEmpty<T, U>(x: Lists<T, U>): boolean {
  return iterableIsEmpty(keys(x));
}


/**
 * Checks if two lists are equal.
 * @param x lists
 * @param y another lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEqual<T, U, V=U>(x: Lists<T, U>, y: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return compare(x, y, fc, fm)===0;
}


import {join as mapJoin} from 'extra-map';

/**
 * Joins values together.
 * @param x lists
 * @param sep separator (,)
 * @param asc associator (=)
 */
function join<T, U>(x: Lists<T, U>, sep: string=',', asc: string='='): string {
  return mapJoin(entries(x), sep, asc);
}


import {value} from 'extra-array';

/**
 * Picks an arbitrary key.
 * @param x lists
 * @param r random seed 0->1
 */
function key<T, U>(x: Lists<T, U>, r: number=Math.random()): T {
  return value([...keys(x)], r);
}


/**
 * Lists all keys.
 * @param x lists
 */
function keys<T, U>(x: Lists<T, U>): Iterable<T> {
  return x[0];
}


/**
 * Gets size of lists.
 * @param x lists
 */
function length<T, U>(x: Lists<T, U>): number {
  return size(x);
}


/**
 * Updates values based on map function.
 * @param x lists
 * @param fm map function (v, k, x)
s */
function map<T, U, V>(x: Lists<T, U>, fm: mapFn<T, U, V>) {
  var ks = [], vs = [];
  for(var [k, v] of entries(x))
  { ks.push(k); vs.push(fm(v, k, x)); }
  return [ks, vs];
}


/**
 * Finds largest value.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [key, value]
 */
function max<T, U, V=U>(x: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [T, U] {
  return range(x, fc, fm)[1];
}


/**
 * Finds smallest entry.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [key, value]
 */
function min<T, U, V=U>(x: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [T, U] {
  return range(x, fc, fm)[0];
}


/**
 * Segregates values by test result.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Lists<T, U>, ft: testFn<T, U>): [Lists<T, U>, Lists<T, U>] {
  var tk = [], tv = [], fk = [], fv = [];
  for(var [k, v] of entries(x)) {
    if(ft(v, k, x)) { tk.push(k); tv.push(v); }
    else { fk.push(k); fv.push(v); }
  }
  return [[tk, tv], [fk, fv]];
}


/**
 * Segregates values by similarity.
 * @param x lists
 * @param fm map function (v, k, x)
 * @returns Map {key => values}
 */
function partitionAs<T, U, V=U>(x: Lists<T, U>, fm: mapFn<T, U, U|V>=null): Map<U|V, Lists<T, U>> {
  var fm = fm||id, a = new Map();
  for(var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if(!a.has(v1)) a.set(v1, [[], []]);
    var [ak, av] = a.get(v1);
    ak.push(k); av.push(v);
  }
  return a;
}


import {range as mapRange} from 'extra-map';

/**
 * Finds smallest and largest entries.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [smallest, largest]
 */
function range<T, U, V=U>(x: Lists<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [[T, U], [T, U]] {
  return mapRange(entries(x), fc, fm as any);
}


import {reduce as mapReduce} from 'extra-map';

/**
 * Reduces values to a single value.
 * @param x lists
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<T, U, V=U>(x: Lists<T, U>, fr: reduceFn<T, U, U|V>, acc?: U|V): U|V {
  var A = arguments.length, es = entries(x);
  return A>2? mapReduce(es, fr as any, acc) : mapReduce(es, fr as any);
}


/**
 * Discards entries which pass a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function reject<T, U>(x: Lists<T, U>, ft: testFn<T, U>): Lists<T, U> {
  var ks = [], vs = [];
  for(var [k, v] of entries(x))
    if(!ft(v, k, x)) { ks.push(k); vs.push(v); }
  return [ks, vs];
}


/**
 * Gets lists without given keys.
 * @param x lists
 * @param ks keys
 */
function rejectAt<T, U>(x: Lists<T, U>, ks: T[]): Lists<T, U> {
  var js = [], us = [];
  for(var [k, v] of entries(x))
    if(!ks.includes(k)) { js.push(k); us.push(v); }
  return [js, us];
}


/**
 * Deletes an entry.
 * @param x lists
 * @param k key
 */
function remove<T, U>(x: Lists<T, U>, k: T): Lists<T, U> {
  var ks = [], vs = [];
  for(var [j, u] of entries(x))
    if(j!==k) { ks.push(j); vs.push(u); }
  return [ks, vs];
}


import {scanUntil as mapScanUntil} from 'extra-map';

/**
 * Finds key of first entry not passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function scanUntil<T, U>(x: Lists<T, U>, ft: testFn<T, U>): T {
  return mapScanUntil(entries(x), ft as any);
}


import {scanWhile as mapScanWhile} from 'extra-map';

/**
 * Finds key of first entry not passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function scanWhile<T, U>(x: Lists<T, U>, ft: testFn<T, U>): T {
  return mapScanWhile(entries(x), ft as any);
}


import {search as mapSearch} from 'extra-map';

/**
 * Finds key of an entry passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function search<T, U>(x: Lists<T, U>, ft: testFn<T, U>): T {
  return mapSearch(entries(x), ft as any);
}


import {searchAll as mapSearchAll} from 'extra-map';

/**
 * Finds keys of entries passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function searchAll<T, U>(x: Lists<T, U>, ft: testFn<T, U>): Iterable<T> {
  return mapSearchAll(entries(x), ft as any);
}


import {searchValue as mapSearchValue} from 'extra-map';

/**
 * Finds key with given value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValue<T, U, V=U>(x: Lists<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T {
  return mapSearchValue(entries(x), v, fc, fm as any);
}


import {searchValueAll as mapSearchValueAll} from 'extra-map';

/**
 * Finds keys with given value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValueAll<T, U, V=U>(x: Lists<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): Iterable<T> {
  return mapSearchValueAll(entries(x), v, fc, fm as any);
}


/**
 * Sets value at key.
 * @param x lists
 * @param k key
 * @param v value
 */
function set<T, U>(x: Lists<T, U>, k: T, v: U): Lists<T, U> {
  var ks = [], vs = [];
  for(var [j, u] of entries(x))
  { ks.push(j); vs.push(j===k? v : u); }
  return [ks, vs];
}


/**
 * Removes first entry.
 * @param x lists
 */
function shift<T, U>(x: Lists<T, U>): Lists<T, U> {
  return drop(x, 1);
}


import {size as iterableSize} from 'extra-iterable';

/**
 * Gets size of lists.
 * @param x lists
 */
function size<T, U>(x: Lists<T, U>): number {
  return iterableSize(keys(x));
}


import {some as mapSome} from 'extra-map';

/**
 * Checks if any value satisfies a test.
 * @param x lists
 * @param ft test function (v, k, x)
 */
function some<T, U>(x: Lists<T, U>, ft: testFn<T, U>=null): boolean {
  return mapSome(entries(x), ft as any);
}


import {subset as mapSubset} from 'extra-map';

/**
 * Picks an arbitrary submap.
 * @param x lists
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function subset<T, U>(x: Lists<T, U>, n: number=-1, r: number=Math.random()): Lists<T, U> {
  var a = mapSubset(new Map(entries(x)), n ,r);
  return [a.keys(), a.values()];
}


import {subsets as mapSubsets} from 'extra-map';

/**
 * Lists all possible subsets.
 * @param x lists
 * @param n number of entries (-1 => any)
 */
function* subsets<T, U>(x: Lists<T, U>, n: number=-1): Iterable<Lists<T, U>> {
  for(var a of mapSubsets(new Map(entries(x)), n))
    yield [a.keys(), a.values()];
}


import {map as iterableMap} from 'extra-iterable';

/**
 * Exchanges two values.
 * @param x lists
 * @param k a key
 * @param l another key
 */
function swap<T, U>(x: Lists<T, U>, k: T, l: T): Lists<T, U> {
  var ks = iterableMap(keys(x), j => j===k? l : (j===l? k : j));
  return [ks, values(x)];
}


import {symmetricDifference as mapSymmetricDifference} from 'extra-map';

/**
 * Gives entries not present in both lists.
 * @param x lists
 * @param y another lists
 */
function symmetricDifference<T, U>(x: Lists<T, U>, y: Lists<T, U>): Lists<T, U> {
  var a = mapSymmetricDifference(entries(x), entries(y));
  return [a.keys(), a.values()];
}


/**
 * Gets lists without the first entry.
 * @param x lists
 */
function tail<T, U>(x: Lists<T, U>): Lists<T, U> {
  return drop(x, 1);
}


import {take as iterableTake} from 'extra-iterable';

/**
 * Keeps first n entries only.
 * @param x lists
 * @param n number of entries (1)
 */
function take<T, U>(x: Lists<T, U>, n: number=1): Lists<T, U> {
  var ks = iterableTake(keys(x), n);
  var vs = iterableTake(values(x), n);
  return [ks, vs];
}


import {union as mapUnion} from 'extra-map';

/**
 * Gives lists present in any lists.
 * @param x lists
 * @param y another lists
 * @param fc combine function (a, b)
 */
function union<T, U>(x: Lists<T, U>, y: Lists<T, U>, fc: combineFn<U>=null): Lists<T, U> {
  var a = mapUnion(entries(x), entries(y), fc);
  return [a.keys(), a.values()];
}


import {concat} from 'extra-set';

/**
 * Gives keys present in any lists.
 * @param xs n lists
 */
function unionKeys<T, U>(...xs: Lists<T, U>[]): Set<T> {
  return concat(...xs.map(x => keys(x)));
}


import {value as arrayValue} from 'extra-array';

/**
 * Picks an arbitrary value.
 * @param x lists
 * @param r random seed 0->1
 */
function value<T, U>(x: Lists<T, U>, r: number=Math.random()): U {
  return arrayValue([...values(x)], r);
}


/**
 * Lists all values.
 * @param x lists
 */
function values<T, U>(x: Lists<T, U>): Iterable<U> {
  return x[1];
}


import {zip as mapZip} from 'extra-map';

/**
 * Combines matching entries from all lists.
 * @param xs n lists
 * @param fm map function (vs, k)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function zip<T, U, V=U>(xs: Lists<T, U>[], fm: mapFn<T, U[], U[]|V>=null, ft: tillFn=null, vd?: U): Lists<T, U[]|V> {
  var a = mapZip(xs.map(x => new Map(entries(x))), fm as any, ft, vd);
  return [a.keys(), a.values() as any];
}

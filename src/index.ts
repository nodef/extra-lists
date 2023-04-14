import {
  IDENTITY,
  COMPARE,
} from "extra-function";
import * as xiterable from "extra-iterable";
import * as xarray    from "extra-array";
import * as xset      from "extra-set";
import * as xentries  from "extra-entries";
import * as xmap      from "extra-map";




// TYPES
// =====

/** Entries is an array of key-value pairs, with unique keys. */
export type Entries<K, V> = [K, V][];
/** Lists is a pair of key array and value array, with unique keys. */
export type Lists<K, V> = [K[], V[]];


/**
 * Handle reading of a single value.
 * @returns value
 */
export type ReadFunction<T> = () => T;


/**
 * Handle combining of two values.
 * @param a a value
 * @param b another value
 * @returns combined value
 */
export type CombineFunction<T> = (a: T, b: T) => T;


/**
 * Handle comparison of two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
export type CompareFunction<T> = (a: T, b: T) => number;


/**
 * Handle processing of values in lists.
 * @param v value in lists
 * @param k key of value in lists
 * @param x lists containing the value
 */
export type ProcessFunction<K, V> = (v: V, k: K, x: Lists<K, V>) => void;


/**
 * Handle selection of values in lists.
 * @param v value in lists
 * @param k key of value in lists
 * @param x lists containing the value
 * @returns selected?
 */
export type TestFunction<K, V> = (v: V, k: K, x: Lists<K, V>) => boolean;


/**
 * Handle transformation of a value to another.
 * @param v value in lists
 * @param k key of value in lists
 * @param x lists containing the value
 * @returns transformed value
 */
export type MapFunction<K, V, W> = (v: V, k: K, x: Lists<K, V>) => W;


/**
 * Handle reduction of multiple values into a single value.
 * @param acc accumulator (temporary result)
 * @param v value in lists
 * @param k key of value in lists
 * @param x lists containing the value
 * @returns reduced value
 */
export type ReduceFunction<K, V, W> = (acc: W, v: V, k: K, x: Lists<K, V>) => W;


/**
 * Handle ending of combined lists.
 * @param dones iᵗʰ lists done?
 * @returns combined lists done?
 */
export type EndFunction = (dones: boolean[]) => boolean;




// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is lists.
 * @param v value
 * @returns v is lists?
 */
export function is<K, V>(v: any): v is Lists<K, V> {
  return Array.isArray(v) && v.length===2 && Array.isArray(v[0]) && Array.isArray(v[1]);
}


/**
 * Get all keys.
 * @param x lists
 * @returns [k₀, k₁, ...] | kᵢ ∈ x[0]
 */
export function keys<K, V>(x: Lists<K, V>): K[] {
  return x[0];
}


/**
 * Get all values.
 * @param x lists
 * @returns [v₀, v₁, ...] | vᵢ ∈ x[1]
 */
export function values<K, V>(x: Lists<K, V>): V[] {
  return x[1];
}


/**
 * Obtain all key-value pairs.
 * @param x lists
 * @returns [[k₀, v₀], [k₁, v₁], ...] | kᵢ ∈ x[0]; vᵢ ∈ x[1]
 */
export function entries<K, V>(x: Lists<K, V>): Entries<K, V> {
  var a: Entries<K, V> = [];
  var xk = x[0],  xv = x[1];
  for (var i=0, X=xk.length; i<X; ++i)
    a.push([xk[i], xv[i]]);
  return a;
}




// GENERATE
// --------

/**
 * Convert map to lists.
 * @param x map
 * @returns x as lists
 */
export function fromMap<K, V>(x: Map<K, V>): Lists<K, V> {
  return [Array.from(x.keys()), Array.from(x.values())];
}


/**
 * Convert entries to lists.
 * @param x entries
 * @returns x as lists
 */
export function fromEntries<K, V>(x: Entries<K, V>): Lists<K, V> {
  var ak: K[] = [];
  var av: V[] = [];
  for (var [k, v] of x) {
    ak.push(k);
    av.push(v);
  }
  return [ak, av];
}




// CLONE
// -----

/**
 * Shallow clone lists.
 * @param x lists
 * @returns shallow clone of x
 */
export function shallowClone<K, V>(x: Lists<K, V>): Lists<K, V> {
  return [x[0].slice(), x[1].slice()];
}
export {shallowClone as shallowCopy};
export {shallowClone as clone};
export {shallowClone as copy};


/**
 * Deep clone lists.
 * @param x lists
 * @returns deep clone of x
 */
export function deepClone<K, V>(x: Lists<K, V>): Lists<K, V> {
  return structuredClone(x);
}
export {deepClone as structuredClone};
export {deepClone as deepCopy};




// SIZE
// ----

/**
 * Find the size of lists.
 * @param x lists
 * @returns |x|
 */
export function size<K, V>(x: Lists<K, V>): number {
  return x[0].length;
}
export {size as length};


/**
 * Check if lists is empty.
 * @param x lists
 * @returns |x| = 0?
 */
export function isEmpty<K, V>(x: Lists<K, V>): boolean {
  return x[0].length===0;
}




// COMPARE
// -------

/**
 * Compare two lists.
 * @param x lists
 * @param y another lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
export function compare<K, V, W=V>(x: Lists<K, V>, y: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): number {
  return xmap.compare(xmap.fromLists(x), xmap.fromLists(y), fc, fm as any);
}


/**
 * Check if two lists are equal.
 * @param x lists
 * @param y another lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y?
 */
export function isEqual<K, V, W=V>(x: Lists<K, V>, y: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  return compare(x, y, fc, fm)===0;
}




// GET/SET
// -------

/**
 * Get key at index.
 * @param x lists
 * @param i index
 * @returns k₀ | kᵢ = x[0][i]
 */
export function keyAt<K, V>(x: Lists<K, V>, i: number): K {
  return x[0][i];
}


/**
 * Get value at index.
 * @param x lists
 * @param i index
 * @returns v₀ | vᵢ = x[1][i]
 */
export function valueAt<K, V>(x: Lists<K, V>, i: number): V {
  return x[1][i];
}


/**
 * Get entry at index.
 * @param x lists
 * @param i index
 * @returns [k₀, v₀] | kᵢ = x[0][i]; vᵢ = x[1][i]
 */
export function entryAt<K, V>(x: Lists<K, V>, i: number): [K, V] {
  return [x[0][i], x[1][i]];
}


/**
 * Obtain value at key.
 * @param x lists
 * @param k key
 * @returns x[k]
 */
export function get<K, V>(x: Lists<K, V>, k: K): V {
  var i = x[0].indexOf(k);
  return i>=0? x[1][i] : undefined;
}


/**
 * Obtain values at keys.
 * @param x lists
 * @param ks keys
 * @returns [x[k₀], x[k₁], ...] | [k₀, k₁, ...] = ks
 */
export function getAll<K, V>(x: Lists<K, V>, ks: K[]): V[] {
  var a: V[] = [];
  for (var k of ks)
    a.push(get(x, k));
  return a;
}


/**
 * Obtain value at path in nested lists.
 * @param x nested lists
 * @param p path
 * @returns x[k₀][k₁][...] | [k₀, k₁, ...] = p
 */
export function getPath<K>(x: Lists<K, any>, p: K[]): any {
  for (var k of p)
    x = is(x)? get(x, k) : undefined;
  return x;
}


/**
 * Check if nested lists has a path.
 * @param x nested lists
 * @param p search path
 * @returns x[k₀][k₁][...] exists? | [k₀, k₁, ...] = p
 */
export function hasPath<T>(x: Lists<T, any>, p: T[]): boolean {
  return getPath(x, p)!==undefined;
}


/**
 * Set value at key.
 * @param x lists (updated!)
 * @param k key
 * @param v value
 * @returns x | x[k] = v
 */
export function set$<K, V>(x: Lists<K, V>, k: K, v: V): Lists<K, V> {
  var i =   x[0].indexOf(k);
  if (i>=0) x[1][i] = v;
  else { x[0].push(k); x[1].push(v); }
  return x;
}


/**
 * Set value at key.
 * @param x lists
 * @param k key
 * @param v value
 * @returns x' | x' = x; x'[k] = v
 */
export function set<K, V>(x: Lists<K, V>, k: K, v: V): Lists<K, V> {
  return set$(shallowClone(x), k, v);
}


/**
 * Exchange two values.
 * @param x lists (updated!)
 * @param k a key
 * @param l another key
 * @returns x | x[k] ⇔ x[l]
 */
export function swap$<K, V>(x: Lists<K, V>, k: K, l: K): Lists<K, V> {
  var i = x[0].indexOf(k);
  var j = x[0].indexOf(l);
  if (i>=0 && j>=0) {  // xarray.swap$(x[1], i, j)
    var t   = x[1][i];
    x[1][i] = x[1][j];
    x[1][j] = t;
  }
  return x;
}


/**
 * Exchange two values.
 * @param x lists
 * @param k a key
 * @param l another key
 * @returns x' | x' = x; x'[k] = x[l]; x'[l] = x[k]
 */
export function swap<K, V>(x: Lists<K, V>, k: K, l: K): Lists<K, V> {
  return swap$(shallowClone(x), k, l);
}


/**
 * Remove value at key.
 * @param x lists (updated!)
 * @param k key
 * @returns x | x = x \\ \{[k, *]\}
 */
export function remove$<K, V>(x: Lists<K, V>, k: K): Lists<K, V> {
  var i = x[0].indexOf(k);
  if (i>=0) {
    x[0].splice(i, 1);
    x[1].splice(i, 1);
  }
  return x;
}


/**
 * Remove value at key.
 * @param x lists
 * @param k key
 * @returns x \\ \{[k, *]\}
 */
export function remove<K, V>(x: Lists<K, V>, k: K): Lists<K, V> {
  return remove$(shallowClone(x), k);
}




// PART
// ----

/**
 * Get first entry from lists.
 * @param x lists
 * @param ed default entry
 * @returns [k₀, v₀] if x ≠ Φ else ed | [k₀, v₀] ∈ x
 */
export function head<K, V>(x: Lists<K, V>, ed: [K, V]=[] as any): [K, V] {
  return x[0].length > 0? [x[0][0], x[1][0]] : ed;
}


/**
 * Obtain lists without its first entry.
 * @param x lists
 * @returns x \\ \{[k₀, v₀]\} if x ≠ Φ else x | [k₀, v₀] ∈ x
 */
export function tail<K, V>(x: Lists<K, V>): Lists<K, V> {
  return slice(x, 1);
}


/**
 * Obtain all but the last entry from lists.
 * @param x lists
 * @returns x \\ \{[kᵢ, vᵢ]\} if x ≠ Φ else x | [kᵢ, vᵢ] ∈ x; i = |x| - 1
 */
export function init<K, V>(x: Lists<K, V>): Lists<K, V> {
  return slice(x, 0, -1);
}


/**
 * Get last entry from lists.
 * @param x lists
 * @param ed default entry
 * @returns [kᵢ, vᵢ] if x ≠ Φ else ed | [kᵢ, vᵢ] ∈ x; i = |x| - 1
 */
export function last<K, V>(x: Lists<K, V>, ed: [K, V]=[] as any): [K, V] {
  var i = x[0].length - 1;
  return i>=0? [x[0][i], x[1][i]] : ed;
}


/**
 * Obtain a portion of lists (shallow).
 * @param x lists (updated!)
 * @param i start index [0]
 * @param I end index (exclusive) [|x|]
 * @returns x | x = \{[kᵢ, vᵢ], [kᵢ₊₁, vᵢ₊₁], ...\} | [kⱼ, vⱼ] ∈ x and i ≤ j < I
 */
export function slice$<K, V>(x: Lists<K, V>, i: number=0, I: number=x[0].length): Lists<K, V> {
  var X = x[0].length;
  var i = i<0? Math.max(X+i, 0) : i;
  var I = I<0? Math.max(X+I, 0) : I;
  x[0].length = I;
  x[1].length = I;
  x[0].splice(0, i);
  x[0].splice(0, i);
  return x;
}


/**
 * Obtain a portion of lists (shallow).
 * @param x lists
 * @param i start index [0]
 * @param I end index (exclusive) [|x|]
 * @returns \{[kᵢ, vᵢ], [kᵢ₊₁, vᵢ₊₁], ...\} | [kⱼ, vⱼ] ∈ x and i ≤ j < I
 */
export function slice<K, V>(x: Lists<K, V>, i: number=0, I: number=x[0].length): Lists<K, V> {
  return [x[0].slice(i, I), x[1].slice(i, I)];
}


/**
 * Change contents of lists by removing existing entries and/or adding new ones.
 * @param x lists (updated!)
 * @param i start index [0]
 * @param n number of entries to remove [|x|-i]
 * @param es entries to add [Φ]
 * @returns x | x = \{[k₀, v₀], ..., [kᵢ₋₁, vᵢ₋₁], [kᵢ₊ₙ, vᵢ₊ₙ], ...\} | [kⱼ, vⱼ] ∈ x and j ∈ [0, i) ∪ [i+n, |x|)
 */
export function splice$<K, V>(x: Lists<K, V>, i: number=0, n: number=x[0].length, ...es: [K, V][]): Lists<K, V> {
  var X = x[0].length;
  var i = i<0? Math.max(X+i, 0) : i;
  var n = Math.max(n, 0);
  var ks = [], vs = [];
  for(var [k, v] of es) {
    ks.push(k);
    vs.push(v);
  }
  x[0].splice(i, n, ...ks);
  x[1].splice(i, n, ...vs);
  return x;
}


/**
 * Change contents of lists by removing existing entries and/or adding new ones.
 * @param x lists
 * @param i start index [0]
 * @param n number of entries to remove [|x|-i]
 * @param es entries to add [Φ]
 * @returns \{[k₀, v₀], ..., [kᵢ₋₁, vᵢ₋₁], [kᵢ₊ₙ, vᵢ₊ₙ], ...\} | [kⱼ, vⱼ] ∈ x and j ∈ [0, i) ∪ [i+n, |x|)
 */
export function splice<K, V>(x: Lists<K, V>, i: number=0, n: number=x[0].length, ...es: [K, V][]): Lists<K, V> {
  var ks = [], vs = [];
  for (var [k, v] of es) {
    ks.push(k);
    vs.push(v);
  }
  var xk = x[0].slice(0, i).concat(ks, x[0].slice(i+n));
  var xv = x[1].slice(0, i).concat(vs, x[1].slice(i+n));
  return [xk, xv];
}


/**
 * Keep first n entries only.
 * @param x lists (updated!)
 * @param n number of entries [1]
 * @returns x | x = \{[k₀, v₀], [k₁, v₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[k₀, v₀], [k₁, v₁], ...\}| ≤ n
 */
export function take$<K, V>(x: Lists<K, V>, n: number=1): Lists<K, V> {
  return slice$(x, 0, n);
}


/**
 * Keep first n entries only.
 * @param x lists
 * @param n number of entries [1]
 * @returns \{[k₀, v₀], [k₁, v₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[k₀, v₀], [k₁, v₁], ...\}| ≤ n
 */
export function take<K, V>(x: Lists<K, V>, n: number=1): Lists<K, V> {
  return slice(x, 0, n);
}


/**
 * Remove first n entries.
 * @param x lists (updated!)
 * @param n number of entries [1]
 * @returns x | x = \{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\}| ≤ max(|x| - n, 0)
 */
export function drop$<K, V>(x: Lists<K, V>, n: number=1): Lists<K, V> {
  return slice$(x, n);
}


/**
 * Remove first n entries.
 * @param x a map
 * @param n number of entries [1]
 * @returns \{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\}| ≤ max(|x| - n, 0)
 */
export function drop<K, V>(x: Lists<K, V>, n: number=1): Lists<K, V> {
  return slice(x, n);
}




// PROPERTY
// --------

/**
 * Count values which satisfy a test.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns Σtᵢ | tᵢ = 1 if ft(vᵢ) else 0; [kᵢ, vᵢ] ∈ x
 */
export function count<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): number {
  var a  = 0;
  var xk = x[0], xv = x[1];
  for (var i=0, X=xk.length; i<X; ++i)
    if (ft(xv[i], xk[i], x)) ++a;
  return a;
}


/**
 * Count occurrences of values.
 * @param x lists
 * @param fm map function (v, k, x)
 * @returns Map \{value ⇒ count\}
 */
export function countAs<K, V, W=V>(x: Lists<K, V>, fm: MapFunction<K, V, V|W> | null=null): Map<V|W, number> {
  var fm = fm || IDENTITY;
  var xk = x[0], xv = x[1];
  var a  = new Map<V|W, number>();
  for (var i=0, X=xk.length; i<X; ++i) {
    var w = fm(xv[i], xk[i], x);
    a.set(w, (a.get(w) || 0) + 1);
  }
  return a;
}


/**
 * Find smallest value.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns v | v ≤ vᵢ; [kᵢ, vᵢ] ∈ x
 */
export function min<K, V, W=V>(x: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): V {
  return rangeEntries(x, fc, fm)[0][1];
}


/**
 * Find smallest entry.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_key, min_value]
 */
export function minEntry<K, V, W=V>(x: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [K, V] {
  return rangeEntries(x, fc, fm)[0];
}


/**
 * Find largest value.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns v | v ≥ vᵢ; [kᵢ, vᵢ] ∈ x
 */
export function max<K, V, W=V>(x: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): V {
  return rangeEntries(x, fc, fm)[1][1];
}


/**
 * Find largest entry.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [max_key, max_value]
 */
export function maxEntry<K, V, W=V>(x: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [K, V] {
  return rangeEntries(x, fc, fm)[1];
}


/**
 * Find smallest and largest values.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_value, max_value]
 */
export function range<K, V, W=V>(x: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [V, V] {
  var [a, b] = rangeEntries(x, fc, fm);
  return [a[1], b[1]];
}


/**
 * Find smallest and largest entries.
 * @param x lists
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_entry, max_entry]
 */
export function rangeEntries<K, V, W=V>(x: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [[K, V], [K, V]] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var xk = x[0], xv = x[1];
  var mk = xk[0], mv = xv[0], mw = fm(mv, mk, x);
  var nk = xk[0], nv = xv[0], nw = mw;
  for (var i=1, X=x[0].length; i<X; ++i) {
    var w = fm(xv[i], xk[i], x);
    if (fc(w, mw)<0) { mk = xk[i]; mv = xv[i]; mw = w; }
    if (fc(w, nw)>0) { nk = xk[i]; nv = xv[i]; nw = w; }
  }
  return [[mk, mv], [nk, nv]];
}




// ARRANGEMENTS
// ------------

/**
 * List all possible subsets.
 * @param x lists
 * @param n number of entries in each subset [-1 ⇒ any]
 * @returns entries selected by bit from 0..2^|x| if n<0; only of length n otherwise
 */
export function* subsets<K, V>(x: Lists<K, V>, n: number=-1): Iterable<Lists<K, V>> {
  for(var a of xmap.subsets(xmap.fromLists(x), n))
    yield [a.keys(), a.values()];
}


/**
 * Pick an arbitrary key.
 * @param x lists
 * @param fr random number generator ([0, 1))
 * @returns kᵢ | kᵢ ∈ x[0]
 */
export function randomKey<K, V>(x: Lists<K, V>, fr: ReadFunction<number>=Math.random): K {
  return xarray.randomValue([...keys(x)], fr);
}
export {randomKey as key};


/**
 * Pick an arbitrary value.
 * @param x lists
 * @param fr random number generator ([0, 1))
 * @returns vᵢ | vᵢ ∈ x[1]
 */
export function randomValue<K, V>(x: Lists<K, V>, fr: ReadFunction<number>=Math.random): V {
  return xarray.randomValue([...values(x)], fr);
}
export {randomValue as value};


/**
 * Pick an arbitrary entry.
 * @param x lists
 * @param fr random number generator ([0, 1))
 * @returns [kᵢ, vᵢ] | kᵢ ∈ x[0]; vᵢ ∈ x[1]
 */
export function randomEntry<K, V>(x: Lists<K, V>, fr: ReadFunction<number>=Math.random): [K, V] {
  return xarray.randomValue([...entries(x)], fr);
}
export {randomEntry as entry};


/**
 * Pick an arbitrary subset.
 * @param x lists
 * @param n number of entries [-1 ⇒ any]
 * @param fr random number generator ([0, 1))
 * @returns [[kᵢ, kⱼ, ...], [vᵢ, vⱼ, ...]] | kᵢ, kⱼ, ... ∈ x[0]; vᵢ, vⱼ, ... ∈ x[1]; |[kᵢ, kⱼ, , ...]| = |x| if n<0 else n
 */
export function randomSubset<K, V>(x: Lists<K, V>, n: number=-1, fr: ReadFunction<number>=Math.random): Lists<K, V> {
  var a = xmap.randomSubset(xmap.fromLists(x), n, fr);
  return [a.keys(), a.values()];
}
export {randomSubset as subset};




// FIND
// ----

/**
 * Check if lists has a key.
 * @param x lists
 * @param k search key
 * @returns k ∈ keys(x)?
 */
export function hasKey<K, V>(x: Lists<K, V>, k: K): boolean {
  return x[0].includes(k);
}
export {hasKey as has};


/**
 * Check if lists has a value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns v ∈ values(x)?
 */
export function hasValue<K, V, W=V>(x: Lists<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  if (!fc && !fm) return x[1].includes(v);
  return searchValue(x, v, fc, fm)!==undefined;
}


/**
 * Check if lists has an entry.
 * @param x lists
 * @param e search entry
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns k ∈ x[0]; v ∈ x[1]; k ⇒ v? | [k, v] = e
 */
export function hasEntry<K, V, W=V>(x: Lists<K, V>, e: [K, V], fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var [k, v] = e, u = get(x, k);
  var u1 = fm(u, k, x);
  var v1 = fm(v, k, x);
  return fc(u1, v1)===0;
}


/**
 * Check if lists has a subset.
 * @param x lists
 * @param y search subset
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns y ⊆ x?
 */
export function hasSubset<K, V, W=V>(x: Lists<K, V>, y: Lists<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  return xmap.hasSubset(xmap.fromLists(x), xmap.fromLists(y), fc, fm as any);
}


/**
 * Find first value passing a test (default order).
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns first v | ft(v) = true; [k, v] ∈ x
 */
export function find<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): V {
  return xentries.find(entries(x), ft as any);
}


/**
 * Find values passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns v₀, v₁, ... | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function findAll<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): Iterable<V> {
  return xentries.findAll(entries(x), ft as any);
}


/**
 * Finds key of an entry passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns key of entry
 */
export function search<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): K {
  return xentries.search(entries(x), ft as any);
}


/**
 * Find keys of entries passing a test.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns keys of entries
 */
export function searchAll<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): Iterable<K> {
  return xentries.searchAll(entries(x), ft as any);
}


/**
 * Find a key with given value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns key of value
 */
export function searchValue<K, V, W=V>(x: Lists<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): K {
  return xentries.searchValue(entries(x), v, fc, fm as any);
}


/**
 * Find keys with given value.
 * @param x lists
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns keys of value
 */
export function searchValueAll<K, V, W=V>(x: Lists<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): Iterable<K> {
  return xentries.searchValueAll(entries(x), v, fc, fm as any);
}




// FUNCTIONAL
// ----------

/**
 * Call a function for each value.
 * @param x lists
 * @param fp process function (v, k, x)
 */
export function forEach<K, V>(x: Lists<K, V>, fc: ProcessFunction<K, V>): void {
  xentries.forEach(entries(x), fc as any);
}


/**
 * Check if any value satisfies a test.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns true if ft(vᵢ) = true for some [kᵢ, vᵢ] ∈ x
 */
export function some<K, V>(x: Lists<K, V>, ft: TestFunction<K, V> | null=null): boolean {
  return xentries.some(entries(x), ft as any);
}


/**
 * Check if all values satisfy a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns true if ft(vᵢ) = true for every [kᵢ, vᵢ] ∈ x
 */
export function every<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): boolean {
  return xentries.every(entries(x), ft as any);
}


/**
 * Transform values of entries.
 * @param x lists
 * @param fm map function (v, k, x)
 * @returns [k₀, fm(v₀)], [k₁, fm(v₁)], ... | [kᵢ, vᵢ] ∈ x
 */
export function map<K, V, W>(x: Lists<K, V>, fm: MapFunction<K, V, W>) {
  var ks = [], vs = [];
  for (var [k, v] of entries(x)) {
    ks.push(k);
    vs.push(fm(v, k, x));
  }
  return [ks, vs];
}


/**
 * Reduce values of entries to a single value.
 * @param x lists
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 * @returns fr(fr(acc, v₀), v₁)... | fr(acc, v₀) = v₀ if acc not given
 */
export function reduce<K, V, W=V>(x: Lists<K, V>, fr: ReduceFunction<K, V, V|W>, acc?: V|W): V|W {
  var A = arguments.length, es = entries(x);
  return A>2? xentries.reduce(es, fr as any, acc) : xentries.reduce(es, fr as any);
}


/**
 * Keep entries which pass a test.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns [k₀, v₀], [k₁, v₁], ... | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function filter<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): Lists<K, V> {
  var ks = [], vs = [];
  for (var [k, v] of entries(x))
    if (ft(v, k, x)) { ks.push(k); vs.push(v); }
  return [ks, vs];
}


/**
 * Keep entries with given keys.
 * @param x lists
 * @param ks keys
 * @returns [k₀, v₀], [k₁, v₁], ... | kᵢ ∈ ks; [kᵢ, vᵢ] ∈ x
 */
export function filterAt<K, V>(x: Lists<K, V>, ks: K[]): Lists<K, V> {
  var js = [], us = [];
  for (var [k, v] of entries(x))
    if (ks.includes(k)) { js.push(k); us.push(v); }
  return [js, us];
}


/**
 * Discard entries which pass a test.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns [k₀, v₀], [k₁, v₁], ... | ft(vᵢ) = false; [kᵢ, vᵢ] ∈ x
 */
export function reject<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): Lists<K, V> {
  var ks = [], vs = [];
  for (var [k, v] of entries(x))
    if (!ft(v, k, x)) { ks.push(k); vs.push(v); }
  return [ks, vs];
}


/**
 * Discard entries with given keys.
 * @param x lists
 * @param ks keys
 * @returns [k₀, v₀], [k₁, v₁], ... | kᵢ ∉ ks; [kᵢ, vᵢ] ∈ x
 */
export function rejectAt<K, V>(x: Lists<K, V>, ks: K[]): Lists<K, V> {
  var js = [], us = [];
  for (var [k, v] of entries(x))
    if (!ks.includes(k)) { js.push(k); us.push(v); }
  return [js, us];
}


/**
 * Flatten nested lists to given depth.
 * @param x nested lists
 * @param n maximum depth [-1 ⇒ all]
 * @param fm map function (v, k, x)
 * @param ft test function for flatten (v, k, x) [is]
 * @returns flat lists
 */
export function flat<K>(x: Lists<K, any>, n: number=-1, fm: MapFunction<K, any, any> | null=null, ft: TestFunction<K, any> | null=null): Lists<K, any> {
  var fm = fm || IDENTITY;
  var ft = ft || is;
  var a = flatTo$(new Map(), x, n, fm, ft);
  return [a.keys(), a.values()];
}

function flatTo$<K>(a: Map<K, any>, x: Lists<K, any>, n: number, fm: MapFunction<K, any, any>, ft: TestFunction<K, any>): Map<K, any> {
  for (var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if (n!==0 && ft(v1, k, x)) flatTo$(a, v1, n-1, fm, ft);
    else a.set(k, v1);
  }
  return a;
}


/**
 * Flatten nested lists, based on map function.
 * @param x nested lists
 * @param fm map function (v, k, x)
 * @param ft test function for flatten (v, k, x) [is]
 * @returns flat lists
 */
export function flatMap<K>(x: Lists<K, any>, fm: MapFunction<K, any, any> | null=null, ft: TestFunction<K, any> | null=null): Lists<K, any> {
  var fm = fm || IDENTITY;
  var ft = ft || is;
  var a  = new Map();
  for (var [k, v] of entries(x)) {
    var w = fm(v, k, x);
    if (ft(w, k, x)) xmap.concat$(a, entries(w));
    else a.set(k, w);
  }
  return [a.keys(), a.values()];
}


/**
 * Combine matching entries from all lists.
 * @param xs all lists
 * @param fm map function (vs, k)
 * @param ft end function (dones) [some]
 * @param vd default value
 * @returns fm([x₀[k₀], x₁[k₀], ...]), fm([x₀[k₁], x₁[k₁], ...]), ...
 */
export function zip<K, V, W=V>(xs: Lists<K, V>[], fm: MapFunction<K, V[], V[]|W> | null=null, ft: EndFunction=null, vd?: V): Lists<K, V[]|W> {
  var a = xmap.zip(xs.map(x => new Map(entries(x))), fm as any, ft, vd);
  return [a.keys(), a.values() as any];
}




// MANIPULATION
// ------------

/**
 * Segregate values by test result.
 * @param x lists
 * @param ft test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
export function partition<K, V>(x: Lists<K, V>, ft: TestFunction<K, V>): [Lists<K, V>, Lists<K, V>] {
  var tk = [], tv = [], fk = [], fv = [];
  for (var [k, v] of entries(x)) {
    if (ft(v, k, x)) { tk.push(k); tv.push(v); }
    else             { fk.push(k); fv.push(v); }
  }
  return [[tk, tv], [fk, fv]];
}


/**
 * Segregate entries by similarity.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns Map \{key ⇒ entries\}
 */
export function partitionAs<K, V, W=V>(x: Lists<K, V>, fm: MapFunction<K, V, V|W> | null=null): Map<V|W, Lists<K, V>> {
  var fm = fm || IDENTITY;
  var a  = new Map();
  for (var [k, v] of entries(x)) {
    var v1 = fm(v, k, x);
    if (!a.has(v1)) a.set(v1, [[], []]);
    var [ak, av] = a.get(v1);
    ak.push(k); av.push(v);
  }
  return a;
}


/**
 * Break lists into chunks of given size.
 * @param x lists
 * @param n chunk size [1]
 * @param s chunk step [n]
 * @returns [x[0..n], x[s..s+n], x[2s..2s+n], ...]
 */
export function chunk<K, V>(x: Lists<K, V>, n: number=1, s: number=n): Lists<K, V>[] {
  var kss = xarray.chunk([...keys(x)], n, s);
  var vss = xarray.chunk([...values(x)], n, s);
  return xarray.zip([kss, vss as any]) as Lists<K, V>[];
}




// COMBINE
// -------

/**
 * Append entries from all lists, preferring last.
 * @param xs all lists
 * @returns x₀ ∪ x₁ ∪ ... | [x₀, x₁, ...] = xs
 */
export function concat<K, V>(...xs: Lists<K, V>[]): Lists<K, V> {
  var ks = xiterable.concat(...xs.map(keys));
  var vs = xiterable.concat(...xs.map(values));
  var a  = xmap.fromLists([ks, vs]);
  return [a.keys(), a.values()];
}


/**
 * Join lists together into a string.
 * @param x lists
 * @param sep separator [,]
 * @param asc associator [=]
 * @returns "$\{k₀\}=$\{v₀\},$\{k₁\}=$\{v₁\}..." | [kᵢ, vᵢ] ∈ x
 */
export function join<K, V>(x: Lists<K, V>, sep: string=',', asc: string='='): string {
  return xentries.join(entries(x), sep, asc);
}




// SET OPERATIONS
// --------------

/**
 * Check if lists have no common keys.
 * @param x lists
 * @param y another lists
 * @returns x ∩ y = Φ?
 */
export function isDisjoint<K, V>(x: Lists<K, V>, y: Lists<K, V>): boolean {
  var xs = new Set<K>(x[0]);
  for (var k of y[0])
    if (xs.has(k)) return false;
  return true;
}


/**
 * Obtain keys present in any lists.
 * @param xs all lists
 * @returns \{k₀, k₁, ...\} | [kᵢ, vᵢ] ∈ x₀ ∪ x₁, ...; [x₀, x₁, ...] = xs
 */
export function unionKeys<K, V>(...xs: Lists<K, V>[]): Set<K> {
  var a = new Set<K>();
  for (var x of xs) {
    for (var k of x[0])
      a.add(k);
  }
  return a;
}


/**
 * Obtain entries present in any lists.
 * @param x lists
 * @param y another lists
 * @param fc combine function (a, b)
 * @returns x ∪ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x or [kᵢ, vᵢ] ∈ y\}
 */
export function union<K, V>(x: Lists<K, V>, y: Lists<K, V>, fc: CombineFunction<V> | null=null): Lists<K, V> {
  var a  = new Map<K, V>();
  var xk = x[0], xv = x[1];
  var yk = y[0], yv = y[1];
  for (var i=0, X=x[0].length; i<X; ++i)
    a.set(xk[i], xv[i]);
  for (var i=0, Y=y[0].length; i<Y; ++i) {
    var k = yk[i], v = yv[i];
    var w = fc && a.has(k)? fc(a.get(k), v) : v;
    a.set(k, w);
  }
  return fromMap(a);
}


/**
 * Obtain entries present in both lists.
 * @param x lists
 * @param y another lists
 * @param fc combine function (a, b)
 * @returns x ∩ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x and [kᵢ, vᵢ] ∈ y\}
 */
export function intersection<K, V>(x: Lists<K, V>, y: Lists<K, V>, fc: CombineFunction<V> | null=null): Lists<K, V> {
  var xm = new Map<K, V>();
  var a  = new Map<K, V>();
  var xk = x[0], xv = x[1];
  var yk = y[0], yv = y[1];
  for (var i=0, X=x[0].length; i<X; ++i)
    xm.set(xk[i], xv[i]);
  for (var i=0, Y=y[0].length; i<Y; ++i) {
    var k = yk[i], v = yv[i];
    if (xm.has(k)) {
      var w = fc? fc(xm.get(k), v) : v;
      a.set(k, w);
    }
  }
  return fromMap(a);
}


/**
 * Obtain entries not present in another lists.
 * @param x lists
 * @param y another lists
 * @returns x = x - y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x, [kᵢ, *] ∉ y\}
 */
export function difference<K, V>(x: Lists<K, V>, y: Lists<K, V>): Lists<K, V> {
  var a  = new Map<K, V>();
  var xk = x[0], xv = x[1];
  var yk = y[0];
  for (var i=0, X=x[0].length; i<X; ++i)
    a.set(xk[i], xv[i]);
  for (var k of yk)
    a.delete(k);
  return fromMap(a);
}


/**
 * Obtain entries not present in both lists.
 * @param x lists
 * @param y another lists
 * @returns x = x-y ∪ y-x
 */
export function symmetricDifference<K, V>(x: Lists<K, V>, y: Lists<K, V>): Lists<K, V> {
  var a = xmap.symmetricDifference(entries(x), entries(y));
  return [a.keys(), a.values()];
}

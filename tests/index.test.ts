import * as array from "extra-array";
import {
  is,
  keys,
  values,
  fromEntries,
  compare,
  isEqual,
  size,
  isEmpty,
  get,
  getAll,
  getPath,
  hasPath,
  set,
  swap,
  remove,
  head,
  tail,
  take,
  drop,
  count,
  countAs,
  min,
  minEntry,
  max,
  maxEntry,
  range,
  rangeEntries,
  subsets,
  randomKey,
  randomValue,
  randomEntry,
  randomSubset,
  has,
  hasValue,
  hasEntry,
  hasSubset,
  find,
  findAll,
  search,
  searchAll,
  searchValue,
  searchValueAll,
  forEach,
  some,
  every,
  map,
  reduce,
  filter,
  filterAt,
  reject,
  rejectAt,
  flat,
  flatMap,
  zip,
  partition,
  partitionAs,
  chunk,
  concat,
  join,
  isDisjoint,
  unionKeys,
  union,
  intersection,
  difference,
  symmetricDifference,
} from "../src";




// ABOUT
// -----

test("is", () => {
  var a = is([["a", "b"], [1, 2]]);
  expect(a).toBe(true);
  var a = is([[], []]);
  expect(a).toBe(true);
  var a = is(1);
  expect(a).toBe(false);
});


test("keys", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = keys(x);
  expect([...a]).toStrictEqual(["a", "b", "c"]);
});


test("values", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = values(x);
  expect([...a]).toStrictEqual([1, 2, 3]);
});




// GENERATE
// --------

test("fromEntries", () => {
  var x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  var a = fromEntries(x);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c"], [1, 2, 3]]);
});




// COMPARE
// -------

test("compare", () => {
  var x: [string[], number[]] = [["a", "b"], [1, 2]];
  var y: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = compare(x, y);
  expect(a).toBe(-1);
  var y: [string[], number[]] = [["a", "b"], [1, 2]];
  var a = compare(x, y);
  expect(a).toBe(0);
  var y: [string[], number[]] = [["a", "b"], [1, -2]];
  var a = compare(x, y);
  expect(a).toBe(1);
  var a = compare(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(0);
  var a = compare(x, y, null, v => Math.abs(v));
  expect(a).toBe(0);
});


test("isEqual", () => {
  var x: [string[], number[]] = [["a", "b"], [1, 2]];
  var y: [string[], number[]] = [["a", "b"], [1, 2]];
  var a = isEqual(x, y);
  expect(a).toBe(true);
  var y: [string[], number[]] = [["a", "b"], [11, 12]];
  var a = isEqual(x, y);
  expect(a).toBe(false);
  var a = isEqual(x, y, (a, b) => (a % 10) - (b % 10));
  expect(a).toBe(true);
  var a = isEqual(x, y, null, v => v % 10);
  expect(a).toBe(true);
});




// SIZE
// ----

test("size", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = size(x);
  expect(a).toBe(3);
});


test("isEmpty", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = isEmpty(x);
  expect(a).toBe(false);
  var x: [string[], number[]] = [[], []];
  var a = isEmpty(x);
  expect(a).toBe(true);
});




// GET/SET
// -------

test("get", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [2, 4, 6, 8]];
  var a = get(x, "b");
  expect(a).toBe(4);
  var a = get(x, "d");
  expect(a).toBe(8);
});


test("getAll", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [2, 4, 6, 8]];
  var a = getAll(x, ["b", "d"]);
  expect([...a]).toStrictEqual([4, 8]);
  var a = getAll(x, ["e"]);
  expect([...a]).toStrictEqual([undefined]);
});


test("getPath", () => {
  var x: [string[], any[]] = [["a", "b", "c"], [2, 4, 6]];
  var y: [string[], any[]] = [["x", "e", "f"], [x, 10, 12]];
  var a = getPath(y, ["e"]);
  expect(a).toBe(10);
  var a = getPath(y, ["x", "b"]);
  expect(a).toBe(4);
  var a = getPath(y, ["x", "b", "c"]);
  expect(a).toBe(undefined);
});


test("hasPath", () => {
  var x: [string[], any[]] = [["a", "b", "c"], [2, 4, 6]];
  var y: [string[], any[]] = [["x", "e", "f"], [x, 10, 12]];
  var a = hasPath(y, ["e"]);
  expect(a).toBe(true);
  var a = hasPath(y, ["x", "b"]);
  expect(a).toBe(true);
  var a = hasPath(y, ["x", "b", "c"]);
  expect(a).toBe(false);
});


test("set", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [2, 4, 6, 8]];
  var a = set(x, "b", 40);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d"], [2, 40, 6, 8]]);
  var a = set(x, "d", 80);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d"], [2, 4, 6, 80]]);
});


test("swap", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = swap(x, "a", "b");
  expect(a.map(x => [...x])).toStrictEqual([["b", "a", "c", "d"], [1, 2, 3, 4]]);
  var a = swap(x, "a", "d");
  expect(a.map(x => [...x])).toStrictEqual([["d", "b", "c", "a"], [1, 2, 3, 4]]);
});


test("remove", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [2, 4, 6, 8]];
  var a = remove(x, "b");
  expect(a.map(x => [...x])).toStrictEqual([["a", "c", "d"], [2, 6, 8]]);
  var a = remove(x, "d");
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c"], [2, 4, 6]]);
});




// PROPERTY
// --------

test("count", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 1, 2, 2, 4]];
  var a = count(x, v => v % 2 === 1);
  expect(a).toBe(2);
  var a = count(x, v => v % 2 === 0);
  expect(a).toBe(3);
});


test("countAs", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 1, 2, 2, 4]];
  var a = countAs(x);
  expect(a).toStrictEqual(new Map([[1, 2], [2, 2], [4, 1]]));
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = countAs(x, v => v % 2);
  expect(a).toStrictEqual(new Map([[1, 2], [0, 2]]));
})


test("min", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = min(x);
  expect(a).toBe(-4);
  var a = min(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var a = min(x, null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("minEntry", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = minEntry(x);
  expect(a).toStrictEqual(["d", -4]);
  var a = minEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual(["a", 1]);
  var a = minEntry(x, null, v => Math.abs(v));
  expect(a).toStrictEqual(["a", 1]);
});


test("max", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = max(x);
  expect(a).toBe(2);
  var a = max(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(-4);
  var a = max(x, null, v => Math.abs(v));
  expect(a).toBe(-4);
});


test("maxEntry", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = maxEntry(x);
  expect(a).toStrictEqual(["b", 2]);
  var a = maxEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual(["d", -4]);
  var a = maxEntry(x, null, v => Math.abs(v));
  expect(a).toStrictEqual(["d", -4]);
});


test("range", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = range(x);
  expect(a).toStrictEqual([-4, 2]);
  var a = range(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([1, -4]);
  var a = range(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([1, -4]);
});


test("rangeEntries", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = rangeEntries(x);
  expect(a).toStrictEqual([["d", -4], ["b", 2]]);
  var a = rangeEntries(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([["a", 1], ["d", -4]]);
  var a = rangeEntries(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([["a", 1], ["d", -4]]);
});




// ARRANGEMENTS
// ------------

test("subsets", () => {
  var x: [string[], number[]] = [["a", "b"], [1, 2]];
  var a = subsets(x);
  expect([...a].map(x => [[...x[0]], [...x[1]]])).toStrictEqual([[[], []], [["a"], [1]], [["b"], [2]], [["a", "b"], [1, 2]]]);
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = subsets(x);
  expect([...a].map(x => [[...x[0]], [...x[1]]])).toStrictEqual([
    [[], []],
    [["a"], [1]],
    [["b"], [2]],
    [["a", "b"], [1, 2]],
    [["c"], [3]],
    [["a", "c"], [1, 3]],
    [["b", "c"], [2, 3]],
    [["a", "b", "c"], [1, 2, 3]]
  ]);
});


test("randomKey", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = randomKey(x);
  expect(has(x, a)).toBe(true);
  var a = randomKey(x);
  expect(has(x, a)).toBe(true);
});


test("randomValue", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = randomValue(x);
  expect(hasValue(x, a)).toBe(true);
  var a = randomValue(x);
  expect(hasValue(x, a)).toBe(true);
});


test("randomEntry", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = randomEntry(x);
  expect(hasEntry(x, a)).toBe(true);
  var a = randomEntry(x);
  expect(hasEntry(x, a)).toBe(true);
});


test("randomSubset", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = randomSubset(x);
  expect(hasSubset(x, a)).toBe(true);
  var a = randomSubset(x, 3);
  var b: [string[], number[]] = [[...a[0]], [...a[1]]];
  expect(hasSubset(x, b)).toBe(true);
  expect(size(b)).toBe(3);
  var a = randomSubset(x, 2);
  var b: [string[], number[]] = [[...a[0]], [...a[1]]];
  expect(hasSubset(x, b)).toBe(true);
  expect(size(b)).toBe(2);
});




// FIND
// ----

test("has", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, -3]];
  var a = has(x, "d");
  expect(a).toBe(false);
  var a = has(x, "c");
  expect(a).toBe(true);
});


test("hasValue", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, -3]];
  var a = hasValue(x, 3);
  expect(a).toBe(false);
  var a = hasValue(x, 3, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasValue(x, 3, null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasEntry", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, -3]];
  var a = hasEntry(x, ["c", 3]);
  expect(a).toBe(false);
  var a = hasEntry(x, ["c", 3], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasEntry(x, ["c", 3], null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasSubset", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var y: [string[], number[]] = [["b", "d"], [2, 4]];
  var a = hasSubset(x, y);
  expect(a).toBe(true);
  var y: [string[], number[]] = [["b", "d"], [-2, -4]];
  var a = hasSubset(x, y);
  expect(a).toBe(false);
  var a = hasSubset(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasSubset(x, y, null, v => Math.abs(v));
  expect(a).toBe(true);
})


test("find", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = find(x, v => v % 2 === 0);
  expect(a).toBe(2);
  var a = find(x, v => v % 8 === 0);
  expect(a).toBeUndefined();
});


test("findAll", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = findAll(x, v => v % 2 === 0);
  expect([...a]).toStrictEqual([2, 4]);
  var a = findAll(x, v => v % 8 === 0);
  expect([...a]).toStrictEqual([]);
});


test("search", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 2]];
  var a = search(x, v => v === 2);
  expect(a).toBe("b");
  var a = search(x, v => v === 4);
  expect(a).toBeUndefined();
});


test("searchAll", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, -2]];
  var a = searchAll(x, v => v === 2);
  expect([...a]).toStrictEqual(["b"]);
  var a = searchAll(x, v => Math.abs(v) === 2);
  expect([...a]).toStrictEqual(["b", "d"]);
});


test("searchValue", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, -2, 3, 2, 5]];
  var a = searchValue(x, 2);
  expect(a).toBe("d");
  var a = searchValue(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe("b");
  var a = searchValue(x, 2, null, v => Math.abs(v));
  expect(a).toBe("b");
});


test("searchValueAll", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, -2, 3, 2, 5]];
  var a = searchValueAll(x, 2);
  expect([...a]).toStrictEqual(["d"]);
  var a = searchValueAll(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  expect([...a]).toStrictEqual(["b", "d"]);
  var a = searchValueAll(x, 2, null, v => Math.abs(v));
  expect([...a]).toStrictEqual(["b", "d"]);
});




// FUNCTIONAL
// ----------

test("forEach", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]]
  var a: number[] = [];
  forEach(x, v => a.push(v));
  expect(a).toStrictEqual([1, 2, -3, -4]);
});


test("some", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = some(x, v => v > 10);
  expect(a).toBe(false);
  var a = some(x, v => v < 0);
  expect(a).toBe(true);
});


test("every", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, -3, -4]];
  var a = every(x, v => v > 0);
  expect(a).toBe(false);
  var a = every(x, v => v > -10);
  expect(a).toBe(true);
});


test("map", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = map(x, v => v * 2);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d"], [2, 4, 6, 8]]);
});


test("reduce", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = reduce(x, (acc, v) => acc+v);
  expect(a).toBe(10);
  var a = reduce(x, (acc, v) => acc+v, 100);
  expect(a).toBe(110);
});


test("filter", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]];
  var a = filter(x, v => v % 2 === 1);
  expect(a.map(x => [...x])).toStrictEqual([["a", "c", "e"], [1, 3, 5]]);
  var a = filter(x, v => v % 2 === 0);
  expect(a.map(x => [...x])).toStrictEqual([["b", "d"], [2, 4]]);
});


test("filterAt", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]];
  var a = filterAt(x, ["a", "c", "e"]);
  expect(a.map(x => [...x])).toStrictEqual([["a", "c", "e"], [1, 3, 5]]);
  var a = filterAt(x, ["b", "d"]);
  expect(a.map(x => [...x])).toStrictEqual([["b", "d"], [2, 4]]);
});


test("reject", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]];
  var a = reject(x, v => v % 2 === 1);
  expect(a.map(x => [...x])).toStrictEqual([["b", "d"], [2, 4]]);
  var a = reject(x, v => v % 2 === 0);
  expect(a.map(x => [...x])).toStrictEqual([["a", "c", "e"], [1, 3, 5]]);
});


test("rejectAt", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]];
  var a = rejectAt(x, ["a", "c", "e"]);
  expect(a.map(x => [...x])).toStrictEqual([["b", "d"], [2, 4]]);
  var a = rejectAt(x, ["b", "d"]);
  expect(a.map(x => [...x])).toStrictEqual([["a", "c", "e"], [1, 3, 5]]);
});


test("flat", () => {
  var x: [string[], any[]] = [
    ["ab", "cde"], [
      [["a", "b"],  [1, 2]],
      [["c", "de"], [
        3,
        [["d", "e"], [
          4,
          [["e"], [5]]
        ]]
      ]]
    ]
  ];
  var a = flat(x);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]]);
  var a = flat(x, 1);
  expect(a.map(x => [...x])).toStrictEqual([
    ["a", "b", "c", "de"], [
      1,
      2,
      3,
      [["d", "e"], [
        4,
        [["e"], [5]]
      ]]
    ]
  ]);
  var a = flat(x, 2);
  expect(a.map(x => [...x])).toStrictEqual([
    ["a", "b", "c", "d", "e"], [
      1,
      2,
      3,
      4,
      [["e"], [5]]
    ]
  ]);
});


test("flatMap", () => {
  var x: [string[], any[]] = [
    ["ab", "cde"], [
      [["a", "b"],  [1, 2]],
      [["c", "de"], [
        3,
        [["d", "e"], [
          4,
          [["e"], [5]]
        ]]
      ]]
    ]
  ];
  var a = flatMap(x);
  expect(a.map(x => [...x])).toStrictEqual([
    ["a", "b", "c", "de"], [
      1,
      2,
      3,
      [["d", "e"], [
        4,
        [["e"], [5]]
      ]]
    ]
  ]);
  var a = flatMap(x, v => flat(v, 1));
  expect(a.map(x => [...x])).toStrictEqual([
    ["a", "b", "c", "d", "e"], [
      1,
      2,
      3,
      4,
      [["e"], [5]]
    ]
  ]);
  var a = flatMap(x, v => flat(v));
  expect(a.map(x => [...x])).toStrictEqual([
    ["a", "b", "c", "d", "e"], [
      1,
      2,
      3,
      4,
      5
    ]
  ]);
});


test("zip", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var y: [string[], number[]] = [["a", "b"], [10, 20]];
  var a = zip([x, y]);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b"], [[1, 10], [2, 20]]]);  // shortest
  var a = zip([x, y], ([a, b]) => a + b);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b"], [11, 22]]);
  var a = zip([x, y], null, array.some);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b"], [[1, 10], [2, 20]]]);  // shortest
  var a = zip([x, y], null, array.every, 0);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c"], [[1, 10], [2, 20], [3, 0]]]);  // longest
});




// MANIPULATION
// ------------

test("partition", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = partition(x, v => v % 2 == 0).map(x => [...x]);
  expect(a).toStrictEqual([[["b", "d"], [2, 4]], [["a", "c"], [1, 3]]]);
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]];
  var a = partition(x, v => v % 2 == 1).map(x => [...x]);
  expect(a).toStrictEqual([[["a", "c", "e"], [1, 3, 5]], [["b", "d"], [2, 4]]]);
});


test("partitionAs", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var a = partitionAs(x, v => v % 2 == 0);
  expect(a).toStrictEqual(new Map([
    [false, [["a", "c"], [1, 3]]],
    [true,  [["b", "d"], [2, 4]]],
  ]));
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]];
  var b = partitionAs(x, v => v % 3);
  expect(b).toStrictEqual(new Map([
    [1, [["a", "d"], [1, 4]]],
    [2, [["b", "e"], [2, 5]]],
    [0, [["c"], [3]]],
  ]));
});


test("chunk", () => {
  var x: [string[], number[]] = [
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    [1, 2, 3, 4, 5, 6, 7, 8]
  ];
  var a = chunk(x, 3).map(x => [...x]);
  expect(a).toStrictEqual([
    [["a", "b", "c"], [1, 2, 3]],
    [["d", "e", "f"], [4, 5, 6]],
    [["g", "h"], [7, 8]]
  ]);
  var a = chunk(x, 2, 3).map(x => [...x]);
  expect(a).toStrictEqual([
    [["a", "b"], [1, 2]],
    [["d", "e"], [4, 5]],
    [["g", "h"], [7, 8]]
  ]);
  var a = chunk(x, 4, 3).map(x => [...x]);
  expect(a).toStrictEqual([
    [["a", "b", "c", "d"], [1, 2, 3, 4]],
    [["d", "e", "f", "g"], [4, 5, 6, 7]],
    [["g", "h"], [7, 8]]
  ]);
});




// COMBINE
// -------

test("concat", () => {
  var x: [string[], number[]] = [["a", "b"], [1, 2]];
  var y: [string[], number[]] = [["c", "d"], [3, 4]];
  var a = concat(x, y);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d"], [1, 2, 3, 4]]);
  var z: [string[], number[]] = [["d", "e"], [40, 50]];
  var a = concat(x, y, z);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d", "e"], [1, 2, 3, 40, 50]]);
});


test("join", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = join(x);
  expect(a).toBe("a=1,b=2,c=3");
  var a = join(x, ", ", " => ");
  expect(a).toBe("a => 1, b => 2, c => 3");
});




// SET OPERATIONS
// --------------

test("isDisjoint", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var y: [string[], number[]] = [["c", "d"], [3, 4]];
  var a = isDisjoint(x, y);
  expect(a).toBe(false);
  var y: [string[], number[]] = [["d"], [4]];
  var a = isDisjoint(x, y);
  expect(a).toBe(true);
});


test("unionKeys", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var y: [string[], number[]] = [["b", "c", "e"], [20, 30, 50]];
  var a = unionKeys(x, y);
  expect(a).toStrictEqual(new Set(["a", "b", "c", "d", "e"]));
});


test("union", () => {
  var x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var y: [string[], number[]] = [["b", "c", "d"], [20, 30, 40]];
  var a = union(x, y);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d"], [1, 2, 3, 40]]);
  var a = union(x, y, (a, b) => b);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "d"], [1, 20, 30, 40]]);
});


test("intersection", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var y: [string[], number[]] = [["b", "c", "e"], [20, 30, 50]];
  var a = intersection(x, y);
  expect(a.map(x => [...x])).toStrictEqual([["b", "c"], [2, 3]]);
  var a = intersection(x, y, (a, b) => b);
  expect(a.map(x => [...x])).toStrictEqual([["b", "c"], [20, 30]]);
});


test("difference", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]];
  var y: [string[], number[]] = [["b", "d"], [2, 4]];
  var a = difference(x, y);
  expect(a.map(x => [...x])).toStrictEqual([["a", "c", "e"], [1, 3, 5]]);
  var y: [string[], number[]] = [["b", "d"], [-2, -4]];
  var a = difference(x, y);
  expect(a.map(x => [...x])).toStrictEqual([["a", "c", "e"], [1, 3, 5]]);
});


test("symmetricDifference", () => {
  var x: [string[], number[]] = [["a", "b", "c", "d"], [1, 2, 3, 4]];
  var y: [string[], number[]] = [["c", "d", "e", "f"], [30, 40, 50, 60]];
  var a = symmetricDifference(x, y);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "e", "f"], [1, 2, 50, 60]]);
  var y: [string[], number[]] = [["d", "e", "f"], [40, 50, 60]];
  var a = symmetricDifference(x, y);
  expect(a.map(x => [...x])).toStrictEqual([["a", "b", "c", "e", "f"], [1, 2, 3, 50, 60]]);
});

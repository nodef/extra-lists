[Lists] is a pair of key list and value list, with unique keys. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

In this fourth Crust of Rust video, we cover smart pointers and interior
mutability, by re-implementing the Cell, RefCell, and Rc types from the
standard library. As part of that, we cover when those types are useful,
how they work, and what the equivalent thread-safe versions of these types
are. In the process, we go over some of the finer details of Rust's
ownership model, and the UnsafeCell type. [(1)]

Methods as separate packages:
- `@extra-lists/find`: use [rollup] to bundle this es module.
- `@extra-lists/find.min`: use in browser ([browserify], [uglify-js]).

> Stability: Experimental.

<br>

```javascript
const lists = require('extra-lists');
// import * as lists from 'extra-lists';
// import * as lists from 'https://unpkg.com/extra-lists@2.2.2/index.mjs'; (deno)

var x = [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]];
lists.filter(x, v => v % 2 === 1);
// [ [ 'a', 'c', 'e' ], [ 1, 3, 5 ] ]

var x = [['a', 'b', 'c', 'd'], [1, 2, -3, -4]];
lists.some(x, v => v > 10);
// false

var x = [['a', 'b', 'c', 'd'], [1, 2, -3, -4]];
lists.min(x);
// [ 'd', -4 ]

var x = [['a', 'b', 'c'], [1, 2, 3]];
[...lists.subsets(x)].map(a => [[...a[0]], [...a[1]]]);
// [
//   [ [], [] ],
//   [ [ 'a' ], [ 1 ] ],
//   [ [ 'b' ], [ 2 ] ],
//   [ [ 'a', 'b' ], [ 1, 2 ] ],
//   [ [ 'c' ], [ 3 ] ],
//   [ [ 'a', 'c' ], [ 1, 3 ] ],
//   [ [ 'b', 'c' ], [ 2, 3 ] ],
//   [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
// ]
```

<br>
<br>


## Index

| Method                | Action                                         |
| --------------------- | ---------------------------------------------- |
| [is]                  | Checks if value is lists.                      |
| [get]                 | Gets value at key.                             |
| [set]                 | Sets value at key.                             |
| [remove]              | Deletes an entry.                              |
| [swap]                | Exchanges two values.                          |
| [size]                | Gets size of lists.                            |
|                       |
| [head]                | Gets first entry.                              |
| [take]                | Keeps first n entries only.                    |
| [shift]               | Removes first entry.                           |
| [fromEntries]         | Creates lists from entries.                    |
|                       |
| [concat]              | Appends entries from all lists.                |
| [flat]                | Flattens nested lists to given depth.          |
| [chunk]               | Breaks lists into chunks of given size.        |
| [filterAt]            | Gets lists with given keys.                    |
|                       |
| [map]                 | Updates values based on map function.          |
| [filter]              | Keeps entries which pass a test.               |
| [reduce]              | Reduces values to a single value.              |
| [range]               | Finds smallest and largest entries.            |
| [count]               | Counts values which satisfy a test.            |
| [partition]           | Segregates values by test result.              |
| [cartesianProduct]    | Lists cartesian product of lists.              |
| [some]                | Checks if any value satisfies a test.          |
| [zip]                 | Combines matching entries from all lists.      |
|                       |
| [union]               | Gives lists present in any lists.              |
| [intersection]        | Gives entries present in both lists.           |
| [difference]          | Gives entries of lists not present in another. |
| [symmetricDifference] | Gives entries not present in both lists.       |
| [isDisjoint]          | Checks if lists have no common keys.           |
|                       |
| [key]                 | Picks an arbitrary key.                        |
| [value]               | Picks an arbitrary value.                      |
| [entry]               | Picks an arbitrary entry.                      |
| [subset]              | Picks an arbitrary submap.                     |
|                       |
| [isEmpty]             | Checks if lists is empty.                      |
| [isEqual]             | Checks if two lists are equal.                 |
| [compare]             | Compares two lists.                            |
| [find]                | Finds a value passing a test.                  |
| [search]              | Finds key of an entry passing a test.          |
| [scanWhile]           | Finds key of first entry not passing a test.   |

<br>
<br>

[![](https://img.youtube.com/vi/8O0Nt9qY_vo/maxresdefault.jpg)](https://www.youtube.com/watch?v=8O0Nt9qY_vo)

[(1)]: https://www.youtube.com/watch?v=8O0Nt9qY_vo
[Lists]: https://www.npmjs.com/package/@extra-lists/is
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[is]: https://github.com/nodef/extra-lists/wiki/is
[get]: https://github.com/nodef/extra-lists/wiki/get
[set]: https://github.com/nodef/extra-lists/wiki/set
[remove]: https://github.com/nodef/extra-lists/wiki/remove
[swap]: https://github.com/nodef/extra-lists/wiki/swap
[size]: https://github.com/nodef/extra-lists/wiki/size
[head]: https://github.com/nodef/extra-lists/wiki/head
[take]: https://github.com/nodef/extra-lists/wiki/take
[shift]: https://github.com/nodef/extra-lists/wiki/shift
[fromLists]: https://github.com/nodef/extra-lists/wiki/fromLists
[concat]: https://github.com/nodef/extra-lists/wiki/concat
[flat]: https://github.com/nodef/extra-lists/wiki/flat
[chunk]: https://github.com/nodef/extra-lists/wiki/chunk
[filterAt]: https://github.com/nodef/extra-lists/wiki/filterAt
[map]: https://github.com/nodef/extra-lists/wiki/map
[filter]: https://github.com/nodef/extra-lists/wiki/filter
[reduce]: https://github.com/nodef/extra-lists/wiki/reduce
[range]: https://github.com/nodef/extra-lists/wiki/range
[count]: https://github.com/nodef/extra-lists/wiki/count
[partition]: https://github.com/nodef/extra-lists/wiki/partition
[cartesianProduct]: https://github.com/nodef/extra-lists/wiki/cartesianProduct
[some]: https://github.com/nodef/extra-lists/wiki/some
[zip]: https://github.com/nodef/extra-lists/wiki/zip
[union]: https://github.com/nodef/extra-lists/wiki/union
[intersection]: https://github.com/nodef/extra-lists/wiki/intersection
[difference]: https://github.com/nodef/extra-lists/wiki/difference
[symmetricDifference]: https://github.com/nodef/extra-lists/wiki/symmetricDifference
[isDisjoint]: https://github.com/nodef/extra-lists/wiki/isDisjoint
[key]: https://github.com/nodef/extra-lists/wiki/key
[value]: https://github.com/nodef/extra-lists/wiki/value
[entry]: https://github.com/nodef/extra-lists/wiki/entry
[subset]: https://github.com/nodef/extra-lists/wiki/subset
[isEmpty]: https://github.com/nodef/extra-lists/wiki/isEmpty
[isEqual]: https://github.com/nodef/extra-lists/wiki/isEqual
[compare]: https://github.com/nodef/extra-lists/wiki/compare
[find]: https://github.com/nodef/extra-lists/wiki/find
[search]: https://github.com/nodef/extra-lists/wiki/search
[scanWhile]: https://github.com/nodef/extra-lists/wiki/scanWhile
[:running:]: https://npm.runkit.com/extra-lists
[:package:]: https://www.npmjs.com/package/extra-lists
[:moon:]: https://www.npmjs.com/package/extra-lists.min
[:ledger:]: https://unpkg.com/extra-lists/
[fromEntries]: https://github.com/nodef/extra-lists/wiki/fromEntries
[:vhs:]: https://asciinema.org/a/341134

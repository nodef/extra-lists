[Lists] is a pair of key list and value list, with unique keys. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:
- `@extra-lists/find`: use [rollup] to bundle this es module.
- `@extra-lists/find.min`: use in browser ([browserify], [uglify-js]).

In this fourth Crust of Rust video, we cover smart pointers and interior
mutability, by re-implementing the Cell, RefCell, and Rc types from the
standard library. As part of that, we cover when those types are useful,
how they work, and what the equivalent thread-safe versions of these types
are. In the process, we go over some of the finer details of Rust's
ownership model, and the UnsafeCell type. [(1)]

> Stability: Experimental.

```javascript
const lists = require('extra-lists');
// import * as lists from 'extra-lists';
// import * as lists from 'https://unpkg.com/extra-lists@2.1.0/index.mjs'; (deno)

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
[...lists.submaps(x)].map(a => [[...a[0]], [...a[1]]]);
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

### reference

| Method                | Action
|-----------------------|-------
| [is]                  | Checks if value is entries.
| [get]                 | Gets value at key.
| [set]                 | Sets value at key.
| [remove]              | Deletes an entry.
| [swap]                | Exchanges two values.
| [size]                | Gets size of entries.
|                       | 
| [head]                | Gets first entry.
| [take]                | Keeps first n entries only.
| [shift]               | Removes first entry.
| [fromLists]           | Creates entries from lists.
|                       | 
| [concat]              | Appends entries from maps, preferring last.
| [flat]                | Flattens nested entries to given depth.
| [chunk]               | Breaks entries into chunks of given size.
| [filterAt]            | Gets entries with given keys.
|                       | 
| [map]                 | Updates values based on map function.
| [filter]              | Keeps entries which pass a test.
| [reduce]              | Reduces values to a single value.
| [range]               | Finds smallest and largest entries.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [cartesianProduct]    | Lists cartesian product of entries.
| [some]                | Checks if any value satisfies a test.
| [zip]                 | Combines matching entries from maps.
|                       | 
| [union]               | Gives entries present in any entries.
| [intersection]        | Gives entries present in both entries.
| [difference]          | Gives entries not present in another.
| [symmetricDifference] | Gives entries not present in both entries.
| [isDisjoint]          | Checks if entries have no common keys.
|                       | 
| [key]                 | Picks an arbitrary key.
| [value]               | Picks an arbitrary value.
| [entry]               | Picks an arbitrary entry.
| [submap]              | Gives an arbitrary submap.
|                       | 
| [isEmpty]             | Checks if entries is empty.
| [isEqual]             | Checks if two maps are equal.
| [compare]             | Compares two entries.
| [find]                | Finds a value passing a test.
| [search]              | Finds key of an entry passing a test.
| [scanWhile]           | Finds key of first entry not passing a test.

<br>

[![nodef](https://merferry.glitch.me/card/extra-entries.svg)](https://nodef.github.io)

[(1)]: https://www.youtube.com/watch?v=8O0Nt9qY_vo
[Lists]: https://www.npmjs.com/package/@extra-lists/is
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[:vhs:]: https://asciinema.org/a/340409

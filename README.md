A collection of functions for operating upon Lists.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-lists),
🌐 [Web](https://www.npmjs.com/package/extra-lists.web),
📜 [Files](https://unpkg.com/extra-lists/),
📰 [Docs](https://nodef.github.io/extra-lists/),
📘 [Wiki](https://github.com/nodef/extra-lists/wiki/).

**Lists** is a pair of key list and value list, with unique keys. It is an an
alternative to [Entries]. Unless *entries* are implemented as structs by [v8],
lists should be more space efficient. This package includes common functions
related to querying **about** lists, **generating** them, **comparing** one with
another, finding their **size**, **adding** and **removing** entries, obtaining
its **properties**, getting a **part** of it, getting a **subset** entries in
it, **finding** an entry in it, performing **functional** operations,
**manipulating** it in various ways, **combining** together lists or its
sub-entries, of performing **set operations** upon it. All functions except
`fromEntries()` take lists as 1st parameter.

This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_lists` global variable after loading with a `<script>`
tag from the [jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[v8]: https://v8.dev
[Entries]: https://github.com/nodef/extra-lists/wiki/Entries
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-lists.web/index.js

<br>

```javascript
const xlists = require('extra-lists');
// import * as xlists from 'extra-lists';
// import * as xlists from 'https://unpkg.com/extra-lists/index.mjs'; (deno)

var x = [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]];
xlists.filter(x, v => v % 2 === 1);
// → [ [ 'a', 'c', 'e' ], [ 1, 3, 5 ] ]

var x = [['a', 'b', 'c', 'd'], [1, 2, -3, -4]];
xlists.some(x, v => v > 10);
// → false

var x = [['a', 'b', 'c', 'd'], [1, 2, -3, -4]];
xlists.min(x);
// → -4

var x = [['a', 'b', 'c'], [1, 2, 3]];
[...xlists.subsets(x)].map(a => [[...a[0]], [...a[1]]]);
// → [
// →   [ [], [] ],
// →   [ [ 'a' ], [ 1 ] ],
// →   [ [ 'b' ], [ 2 ] ],
// →   [ [ 'a', 'b' ], [ 1, 2 ] ],
// →   [ [ 'c' ], [ 3 ] ],
// →   [ [ 'a', 'c' ], [ 1, 3 ] ],
// →   [ [ 'b', 'c' ], [ 2, 3 ] ],
// →   [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
// → ]
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is lists. |
| [keys] | List all keys. |
| [values] | List all values. |
| [entries] | List all key-value pairs. |
|  |  |
| [fromEntries] | Convert lists to entries. |
|  |  |
| [size] | Find the size of lists. |
| [isEmpty] | Check if lists is empty. |
|  |  |
| [compare] | Compare two lists. |
| [isEqual] | Check if two lists are equal. |
|  |  |
| [get] | Get value at key. |
| [getAll] | Gets values at keys. |
| [getPath] | Get value at path in nested lists. |
| [hasPath] | Check if nested lists has a path. |
| [set] | Set value at key. |
| [swap] | Exchange two values. |
| [remove] | Remove value at key. |
|  |  |
| [head] | Get first entry from lists (default order). |
| [tail] | Get lists without its first entry (default order). |
| [take] | Keep first n entries only (default order). |
| [drop] | Remove first n entries (default order). |
|  |  |
| [count] | Count values which satisfy a test. |
| [countAs] | Count occurrences of values. |
| [min] | Find smallest value. |
| [minEntry] | Find smallest entry. |
| [max] | Find largest value. |
| [maxEntry] | Find largest entry. |
| [range] | Find smallest and largest values. |
| [rangeEntries] | Find smallest and largest entries. |
|  |  |
| [subsets] | List all possible subsets. |
| [randomKey] | Pick an arbitrary key. |
| [randomValue] | Pick an arbitrary value. |
| [randomEntry] | Pick an arbitrary entry. |
| [randomSubset] | Pick an arbitrary subset. |
|  |  |
| [has] | Check if lists has a key. |
| [hasValue] | Check if lists has a value. |
| [hasEntry] | Check if lists has an entry. |
| [hasSubset] | Check if lists has a subset. |
| [find] | Find first value passing a test (default order). |
| [findAll] | Find values passing a test. |
| [search] | Finds key of an entry passing a test. |
| [searchAll] | Find keys of entries passing a test. |
| [searchValue] | Find a key with given value. |
| [searchValueAll] | Find keys with given value. |
|  |  |
| [forEach] | Call a function for each value. |
| [some] | Check if any value satisfies a test. |
| [every] | Check if all values satisfy a test. |
| [map] | Transform values of entries. |
| [reduce] | Reduce values of entries to a single value. |
| [filter] | Keep entries which pass a test. |
| [filterAt] | Keep entries with given keys. |
| [reject] | Discard entries which pass a test. |
| [rejectAt] | Discard entries with given keys. |
| [flat] | Flatten nested lists to given depth. |
| [flatMap] | Flatten nested lists, based on map function. |
| [zip] | Combine matching entries from all lists. |
|  |  |
| [partition] | Segregate values by test result. |
| [partitionAs] | Segregate entries by similarity. |
| [chunk] | Break lists into chunks of given size. |
|  |  |
| [concat] | Append entries from all lists, preferring last. |
| [join] | Join lists together into a string. |
|  |  |
| [isDisjoint] | Check if lists have no common keys. |
| [unionKeys] | Obtain keys present in any lists. |
| [union] | Obtain entries present in any lists. |
| [intersection] | Obtain entries present in both lists. |
| [difference] | Obtain entries not present in another lists. |
| [symmetricDifference] | Obtain entries not present in both lists. |

<br>
<br>


[![](https://img.youtube.com/vi/8O0Nt9qY_vo/maxresdefault.jpg)](https://www.youtube.com/watch?v=8O0Nt9qY_vo)
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-lists/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-lists?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b7e8da9d66573c40ad3e/test_coverage)](https://codeclimate.com/github/nodef/extra-lists/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/b7e8da9d66573c40ad3e/maintainability)](https://codeclimate.com/github/nodef/extra-lists/maintainability)


[is]: https://github.com/nodef/extra-lists/wiki/is
[keys]: https://github.com/nodef/extra-lists/wiki/keys
[values]: https://github.com/nodef/extra-lists/wiki/values
[entries]: https://github.com/nodef/extra-lists/wiki/entries
[fromEntries]: https://github.com/nodef/extra-lists/wiki/fromEntries
[size]: https://github.com/nodef/extra-lists/wiki/size
[isEmpty]: https://github.com/nodef/extra-lists/wiki/isEmpty
[compare]: https://github.com/nodef/extra-lists/wiki/compare
[isEqual]: https://github.com/nodef/extra-lists/wiki/isEqual
[get]: https://github.com/nodef/extra-lists/wiki/get
[getAll]: https://github.com/nodef/extra-lists/wiki/getAll
[getPath]: https://github.com/nodef/extra-lists/wiki/getPath
[hasPath]: https://github.com/nodef/extra-lists/wiki/hasPath
[set]: https://github.com/nodef/extra-lists/wiki/set
[swap]: https://github.com/nodef/extra-lists/wiki/swap
[remove]: https://github.com/nodef/extra-lists/wiki/remove
[head]: https://github.com/nodef/extra-lists/wiki/head
[tail]: https://github.com/nodef/extra-lists/wiki/tail
[take]: https://github.com/nodef/extra-lists/wiki/take
[drop]: https://github.com/nodef/extra-lists/wiki/drop
[count]: https://github.com/nodef/extra-lists/wiki/count
[countAs]: https://github.com/nodef/extra-lists/wiki/countAs
[min]: https://github.com/nodef/extra-lists/wiki/min
[minEntry]: https://github.com/nodef/extra-lists/wiki/minEntry
[max]: https://github.com/nodef/extra-lists/wiki/max
[maxEntry]: https://github.com/nodef/extra-lists/wiki/maxEntry
[range]: https://github.com/nodef/extra-lists/wiki/range
[rangeEntries]: https://github.com/nodef/extra-lists/wiki/rangeEntries
[subsets]: https://github.com/nodef/extra-lists/wiki/subsets
[randomKey]: https://github.com/nodef/extra-lists/wiki/randomKey
[randomValue]: https://github.com/nodef/extra-lists/wiki/randomValue
[randomEntry]: https://github.com/nodef/extra-lists/wiki/randomEntry
[randomSubset]: https://github.com/nodef/extra-lists/wiki/randomSubset
[has]: https://github.com/nodef/extra-lists/wiki/has
[hasValue]: https://github.com/nodef/extra-lists/wiki/hasValue
[hasEntry]: https://github.com/nodef/extra-lists/wiki/hasEntry
[hasSubset]: https://github.com/nodef/extra-lists/wiki/hasSubset
[find]: https://github.com/nodef/extra-lists/wiki/find
[findAll]: https://github.com/nodef/extra-lists/wiki/findAll
[search]: https://github.com/nodef/extra-lists/wiki/search
[searchAll]: https://github.com/nodef/extra-lists/wiki/searchAll
[searchValue]: https://github.com/nodef/extra-lists/wiki/searchValue
[searchValueAll]: https://github.com/nodef/extra-lists/wiki/searchValueAll
[forEach]: https://github.com/nodef/extra-lists/wiki/forEach
[some]: https://github.com/nodef/extra-lists/wiki/some
[every]: https://github.com/nodef/extra-lists/wiki/every
[map]: https://github.com/nodef/extra-lists/wiki/map
[reduce]: https://github.com/nodef/extra-lists/wiki/reduce
[filter]: https://github.com/nodef/extra-lists/wiki/filter
[filterAt]: https://github.com/nodef/extra-lists/wiki/filterAt
[reject]: https://github.com/nodef/extra-lists/wiki/reject
[rejectAt]: https://github.com/nodef/extra-lists/wiki/rejectAt
[flat]: https://github.com/nodef/extra-lists/wiki/flat
[flatMap]: https://github.com/nodef/extra-lists/wiki/flatMap
[zip]: https://github.com/nodef/extra-lists/wiki/zip
[partition]: https://github.com/nodef/extra-lists/wiki/partition
[partitionAs]: https://github.com/nodef/extra-lists/wiki/partitionAs
[chunk]: https://github.com/nodef/extra-lists/wiki/chunk
[concat]: https://github.com/nodef/extra-lists/wiki/concat
[join]: https://github.com/nodef/extra-lists/wiki/join
[isDisjoint]: https://github.com/nodef/extra-lists/wiki/isDisjoint
[unionKeys]: https://github.com/nodef/extra-lists/wiki/unionKeys
[union]: https://github.com/nodef/extra-lists/wiki/union
[intersection]: https://github.com/nodef/extra-lists/wiki/intersection
[difference]: https://github.com/nodef/extra-lists/wiki/difference
[symmetricDifference]: https://github.com/nodef/extra-lists/wiki/symmetricDifference

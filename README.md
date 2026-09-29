A collection of functions for operating upon Lists.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-lists),
📦 [NPM](https://www.npmjs.com/package/extra-lists),
📰 [Docs](https://jsr.io/@nodef/extra-lists/doc).

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

[v8]: https://v8.dev
[Entries]: https://jsr.io/@nodef/extra-lists/doc/~/Entries

<br>

```javascript
import * as xlists from "jsr:@nodef/extra-lists";

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


## References

- [What is the most efficient way to deep clone an object in JavaScript?](https://stackoverflow.com/a/122704/1413259)
- [structuredClone() global function : MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- [Attain vs. Obtain: What’s The Difference? : Dictionary.com](https://www.dictionary.com/e/attain-vs-obtain/)
- [Acronyms in CamelCase [closed]](https://stackoverflow.com/q/15526107/1413259)

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-lists)


[is]: https://jsr.io/@nodef/extra-lists/doc/~/is
[keys]: https://jsr.io/@nodef/extra-lists/doc/~/keys
[values]: https://jsr.io/@nodef/extra-lists/doc/~/values
[entries]: https://jsr.io/@nodef/extra-lists/doc/~/entries
[fromEntries]: https://jsr.io/@nodef/extra-lists/doc/~/fromEntries
[size]: https://jsr.io/@nodef/extra-lists/doc/~/size
[isEmpty]: https://jsr.io/@nodef/extra-lists/doc/~/isEmpty
[compare]: https://jsr.io/@nodef/extra-lists/doc/~/compare
[isEqual]: https://jsr.io/@nodef/extra-lists/doc/~/isEqual
[get]: https://jsr.io/@nodef/extra-lists/doc/~/get
[getAll]: https://jsr.io/@nodef/extra-lists/doc/~/getAll
[getPath]: https://jsr.io/@nodef/extra-lists/doc/~/getPath
[hasPath]: https://jsr.io/@nodef/extra-lists/doc/~/hasPath
[set]: https://jsr.io/@nodef/extra-lists/doc/~/set
[swap]: https://jsr.io/@nodef/extra-lists/doc/~/swap
[remove]: https://jsr.io/@nodef/extra-lists/doc/~/remove
[head]: https://jsr.io/@nodef/extra-lists/doc/~/head
[tail]: https://jsr.io/@nodef/extra-lists/doc/~/tail
[take]: https://jsr.io/@nodef/extra-lists/doc/~/take
[drop]: https://jsr.io/@nodef/extra-lists/doc/~/drop
[count]: https://jsr.io/@nodef/extra-lists/doc/~/count
[countAs]: https://jsr.io/@nodef/extra-lists/doc/~/countAs
[min]: https://jsr.io/@nodef/extra-lists/doc/~/min
[minEntry]: https://jsr.io/@nodef/extra-lists/doc/~/minEntry
[max]: https://jsr.io/@nodef/extra-lists/doc/~/max
[maxEntry]: https://jsr.io/@nodef/extra-lists/doc/~/maxEntry
[range]: https://jsr.io/@nodef/extra-lists/doc/~/range
[rangeEntries]: https://jsr.io/@nodef/extra-lists/doc/~/rangeEntries
[subsets]: https://jsr.io/@nodef/extra-lists/doc/~/subsets
[randomKey]: https://jsr.io/@nodef/extra-lists/doc/~/randomKey
[randomValue]: https://jsr.io/@nodef/extra-lists/doc/~/randomValue
[randomEntry]: https://jsr.io/@nodef/extra-lists/doc/~/randomEntry
[randomSubset]: https://jsr.io/@nodef/extra-lists/doc/~/randomSubset
[has]: https://jsr.io/@nodef/extra-lists/doc/~/has
[hasValue]: https://jsr.io/@nodef/extra-lists/doc/~/hasValue
[hasEntry]: https://jsr.io/@nodef/extra-lists/doc/~/hasEntry
[hasSubset]: https://jsr.io/@nodef/extra-lists/doc/~/hasSubset
[find]: https://jsr.io/@nodef/extra-lists/doc/~/find
[findAll]: https://jsr.io/@nodef/extra-lists/doc/~/findAll
[search]: https://jsr.io/@nodef/extra-lists/doc/~/search
[searchAll]: https://jsr.io/@nodef/extra-lists/doc/~/searchAll
[searchValue]: https://jsr.io/@nodef/extra-lists/doc/~/searchValue
[searchValueAll]: https://jsr.io/@nodef/extra-lists/doc/~/searchValueAll
[forEach]: https://jsr.io/@nodef/extra-lists/doc/~/forEach
[some]: https://jsr.io/@nodef/extra-lists/doc/~/some
[every]: https://jsr.io/@nodef/extra-lists/doc/~/every
[map]: https://jsr.io/@nodef/extra-lists/doc/~/map
[reduce]: https://jsr.io/@nodef/extra-lists/doc/~/reduce
[filter]: https://jsr.io/@nodef/extra-lists/doc/~/filter
[filterAt]: https://jsr.io/@nodef/extra-lists/doc/~/filterAt
[reject]: https://jsr.io/@nodef/extra-lists/doc/~/reject
[rejectAt]: https://jsr.io/@nodef/extra-lists/doc/~/rejectAt
[flat]: https://jsr.io/@nodef/extra-lists/doc/~/flat
[flatMap]: https://jsr.io/@nodef/extra-lists/doc/~/flatMap
[zip]: https://jsr.io/@nodef/extra-lists/doc/~/zip
[partition]: https://jsr.io/@nodef/extra-lists/doc/~/partition
[partitionAs]: https://jsr.io/@nodef/extra-lists/doc/~/partitionAs
[chunk]: https://jsr.io/@nodef/extra-lists/doc/~/chunk
[concat]: https://jsr.io/@nodef/extra-lists/doc/~/concat
[join]: https://jsr.io/@nodef/extra-lists/doc/~/join
[isDisjoint]: https://jsr.io/@nodef/extra-lists/doc/~/isDisjoint
[unionKeys]: https://jsr.io/@nodef/extra-lists/doc/~/unionKeys
[union]: https://jsr.io/@nodef/extra-lists/doc/~/union
[intersection]: https://jsr.io/@nodef/extra-lists/doc/~/intersection
[difference]: https://jsr.io/@nodef/extra-lists/doc/~/difference
[symmetricDifference]: https://jsr.io/@nodef/extra-lists/doc/~/symmetricDifference

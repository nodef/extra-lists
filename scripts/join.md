Join values in [lists] into [string], like [Array.join()].

```javascript
const join = require('@extra-lists/join');
// join(<lists>, [format=%k=%v], [separator=,], [start index=0], [values target])

a = {a: 'from', b: '1985'};
join([Object.keys(a), Object.values(a)]);
// 'a=from,b=1985'
a = {a: 'to', b: '1955'};
join([Object.keys(a), Object.values(a)], "%k = '%v'");
// "a = 'to',b = '1955'"
a = {a: 'the', b: 'future'};
join([Object.keys(a), Object.values(a)], '%k = $%i', ' OR ', 1);
// "a = $1 OR b = $2"
a = {a: 'back', b: 'to'};
join([Object.keys(a), Object.values(a)], '%k = $%i', ' AND ', 1, val=[]);
// "a = $1 AND b = $2", val = ["back", "to"]
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Array.join()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

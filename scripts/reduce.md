Reduce values in [lists] to single values, like [Array.reduce()].

```javascript
const reduce = require('@extra-lists/reduce');
// reduce(<lists>, <reduce function>, [initial value])

a = ['et', 'tu', 'brute'];
reduce([a.keys(), a], (acc, v) => acc+v);
// 'ettubrute'
a = {w1: 'then', w2: 'fall', w3: 'caesar'};
reduce([Object.keys(a), Object.values(a)], (acc, v, i, lst) => acc+v, ':');
// ':thenfallcaesar'
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.reduce()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

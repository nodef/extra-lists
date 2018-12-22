Get indices of all values in [lists] that satisfy the test, like [Array.findIndex()].

```javascript
const findAllIndices = require('@extra-lists/find-all-indices');
// findAllIndices(<lists>, <test function>, [this])

a = ['syntax', 'description', 'examples'];
findAllIndices([a.keys(), a], (v) => v.includes('x'));
// [0, 2]
a = {t1: 'polyfill', t2: 'specifications', t3: 'compatibility'};
findAllIndices([Object.keys(a), Object.values(a)], (v, i, lst) => i.includes('2'));
// ['t2']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.findIndex()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Get index of last value in [lists] that satisfies the test, like [Array.findIndex()].

```javascript
const findLastIndex = require('@extra-lists/find-last-index');
// findLastIndex(<lists>, <test function>, [this])

a = ['syntax', 'description', 'examples'];
findLastIndex([a.keys(), a], (v) => v.includes('x'));
// 2
a = {t1: 'polyfill', t2: 'specifications', t3: 'compatibility'};
findLastIndex([Object.keys(a), Object.values(a)], (v, i, lst) => i.includes('2'));
// 't2'
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.findIndex()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

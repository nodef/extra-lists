Check if atleast one value in [lists] passes the test, like [Array.some()].

```javascript
const some = require('@extra-lists/some');
// some(<lists>, <test function>, [this])

a = ['defence', 'of', 'the', 'ancients'];
some([a.keys(), a], (v) => v.length===2);
// true
a = {c1: 'sniper', c2: 'invoker', c3: 'kunkka'};
some([Object.keys(a), Object.values(a)], (v, i, lst) => !v.endsWith('er'));
// true
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.some()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

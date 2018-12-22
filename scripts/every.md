Check if all values in [lists] pass the test, like [Array.every()].

```javascript
const every = require('@extra-lists/every');
// every(<lists>, <test function>, [this])

a = ['rocky', 'andes', 'himalayas'];
every([a.keys(), a], (v) => v.length>4);
// true
a = {r1: 'nile', r2: 'amazon', r3: 'ganga'};
every([Object.keys(a), Object.values(a)], (v, i, lst) => v.includes('a'));
// false
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.every()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

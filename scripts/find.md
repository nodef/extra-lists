Get first value in [lists] that satisfies the test, like [Array.find()].

```javascript
const find = require('@extra-lists/find');
// find(<lists>, <test function>, [this])

a = ['edge', 'opera', 'chrome'];
find([a.keys(), a], (v) => v.includes('r'));
// 'opera'
a = {s1: 'bing', s2: 'duckduckgo', s3: 'google'};
find([Object.keys(a), Object.values(a)], (v, i, lst) => v.length>4);
// 'duckduckgo'
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

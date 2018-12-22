Get all values in [lists] that satisfy the test, like [Array.find()].

```javascript
const findAll = require('@extra-lists/find-all');
// findAll(<lists>, <test function>, [this])

a = ['edge', 'opera', 'chrome'];
findAll([a.keys(), a], (v) => v.includes('r'));
// ['opera', 'chrome']
a = {s1: 'bing', s2: 'duckduckgo', s3: 'google'};
findAll([Object.keys(a), Object.values(a)], (v, i, lst) => v.length>4);
// ['duckduckgo', 'google']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

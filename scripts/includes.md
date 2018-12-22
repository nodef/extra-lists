Check if value is present in [lists], like [Array.includes()].

```javascript
const includes = require('@extra-lists/includes');
// includes(<lists>, <search value>)

a = ['geostorm', '2012', 'pacific rim'];
includes([a.keys(), a], '2012');
// true
a = {m1: 'stuart little', m2: 'shrek', m3: 'finding nemo'};
includes([Object.keys(a), Object.values(a)], 'toy story');
// false
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.includes()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

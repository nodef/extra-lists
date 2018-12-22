Get last index of value in [lists], like [Array.lastIndexOf()].

```javascript
const lastIndexOf = require('@extra-lists/last-index-of');
// lastIndexOf(<lists>, <search value>)

a = ['brothers', 'brothers', 'brothers'];
lastIndexOf([a.keys(), a], 'brothers');
// 2
a = {w1: 'friends', w2: 'romans', w3: 'countrymen'};
lastIndexOf([Object.keys(a), Object.values(a)], 'romans');
// 'w2'
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.lastIndexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

Get index of all values in [lists], like [Object.keys()].

```javascript
const keys = require('@extra-lists/keys');
// keys(<lists>)

a = ['ides', 'of',  'march'];
keys([a.keys(), a]);
// [0, 1, 2]
a = {p1: 'caesar', p2: 'antony', p3: 'octavius'};
keys([Object.keys(a), Object.values(a)]);
// ['p1', 'p2', 'p3']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Object.keys()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

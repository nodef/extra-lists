Check if value is [lists].

```javascript
const is = require('@extra-lists/is');
// is(<value>)

a = ['italy', 'rome', 'caesar'];
is([a.keys(), a]);
// true
a = {p1: 'pompeii', p2: 'caesar', p2: 'crassus'};
is([Object.keys(a), Object.values(a)]);
// true
a = new Set(['caesar', 'calphurnia']);
is([a.keys(), a.values()]);
// true
a = new Map([['h', 'brutus'], ['w', 'portia']]);
is([a.keys(), a.values()]);
// true
is('cassius');
// false
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is

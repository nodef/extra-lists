Check if two [lists] are equal.

```javascript
const equal = require('@extra-lists/equal');
// equal(<lists-1>, <lists-2>)

a = ['apj', 'abdul', 'kalam'];
equal([a.keys(), a], [[2, 1, 0], ['kalam', 'abdul', 'apj']]);
// true
a = {w1: 'pranab', w2: 'mukherjee'};
b = {w2: 'mukherjee', w1: 'pranab'};
equal([Object.keys(a), Object.values(a)], [Object.keys(b), Object.values(b)]);
// true
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is

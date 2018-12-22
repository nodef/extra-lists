Get last value in [lists], like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array[length-1]</a>.

```javascript
const last = require('@extra-lists/last');
// last(<lists>)

a = ['world', 'of', 'goo'];
last([a.keys(), a]);
// [2, 'goo']
a = {w1: 'years', w2: 'of', w3: 'work'};
last([Object.keys(a), Object.values(a)]);
// ['w3', 'work']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is

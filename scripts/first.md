Get first value in [lists], like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array[0]</a>.

```javascript
const first = require('@extra-lists/first');
// first(<lists>)

a = ['singh', 'is', 'king'];
first([a.keys(), a]);
// [0, 'singh']
a = {w1: 'chakh', w2: 'de', w3: 'phatte'};
first([Object.keys(a), Object.values(a)]);
// ['w1', 'chakh']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is

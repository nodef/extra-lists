Get all values in [lists], like [Object.values()].

```javascript
const values = require('@extra-lists/values');
// values(<lists>)

a = ['admiral', 'bulldog', 'dota2'];
values([a.keys(), a]);
// ['admiral', 'bulldog', 'dota2']
a = {w1: 'powered', w2: 'by', w3: 'source'};
values([Object.keys(a), Object.values(a)]);
// ['powered', 'by', 'source']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Object.values()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

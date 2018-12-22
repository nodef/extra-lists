Filter values from [lists] that pass the test, like [Array.filter()].

```javascript
const filter = require('@extra-lists/filter');
// filter(<lists>, <test function>, [this])

a = ['avul', 'pakir', 'jainulabdeen'];
filter([a.keys(), a], (v) => v.length>5);
// [[2], ['jainulabdeen']]
a = {br: 'bharat ratna', pb: 'padma bhushan', pv: 'padma vibhushan'};
filter([Object.keys(a), Object.values(a)], (v, i, lst) => v.includes('padma'));
// [['pb', 'pv'], ['padma bhushan', 'padma vibhushan']]
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.filter()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Get [entries] of [lists], like [Array.entries()].

```javascript
const entries = require('@extra-lists/entries');
// entries(<lists>)

a = ['radial', 'dendritic', 'trellised'];
entries([a.keys(), a]);
// [[0, 'radial'], [1, 'dendritic'], [2, 'trellised']]
a = {river: 'nala', road: 'gali', school: 'vidyalaya'};
entries([Object.keys(a), Object.values(a)]);
// [['river', 'nala'], ['road', 'gali'], ['school', 'vidyalaya']]
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[lists]: https://www.npmjs.com/package/lists-is
[Array.entries()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

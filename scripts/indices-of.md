Get indices of all values in [lists] equal to specified value, like [Array.indexOf()].

```javascript
const indicesOf = require('@extra-lists/indices-of');
// indicesOf(<lists>, <search value>)

a = ['sleeping dart', 'noisemaker', 'emp'];
indicesOf([a.keys(), a], 'emp');
// [2]
a = {u1: 'goggles', u2: 'torso', u3: 'torso'};
indicesOf([Object.keys(a), Object.values(a)], 'torso');
// ['u2', 'u3']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.indexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

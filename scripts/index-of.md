Get first index of value in [lists], like [Array.indexOf()].

```javascript
const indexOf = require('@extra-lists/index-of');
// indexOf(<lists>, <search value>)

a = ['sleeping dart', 'noisemaker', 'emp'];
indexOf([a.keys(), a], 'emp');
// 2
a = {u1: 'goggles', u2: 'torso', u3: 'arms'};
indexOf([Object.keys(a), Object.values(a)], 'torso');
// 'u2'
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.indexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

Call a function for each value in [lists], like [Array.forEach()].

```javascript
const forEach = require('@extra-lists/for-each');
// forEach(<lists>, <called function>, [this])

a = ['anger', 'disgust', 'surprised'];
forEach([a.keys(), a], (v, i) => console.log(v, i));
// anger 0
// disgust 1
// surprised 2
a = {e1: 'fear', e2: 'happiness', e3: 'sadness'};
forEach([Object.keys(a), Object.values(a)], (v, i, lst) => console.log(v, i));
// fear e1
// happiness e2
// sadness e3
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.forEach()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Get middle value in [lists], like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections">Array[i]</a>.

```javascript
const middle = require('@extra-lists/middle');
// middle(<lists>, <index>)

a = ['laminate', 'veneer', 'varnish'];
middle([a.keys(), a], 1);
// [1, 'veneer']
a = {w1: 'match', w2: 'making', w3: 'rating'};
middle([Object.keys(a), Object.values(a)], 2);
// ['w3', 'rating']
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is

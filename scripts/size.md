Get size of [lists], like [Set.size].

```javascript
const size = require('@extra-lists/size');
// size(<lists>)

a = ['directed', 'acyclic', 'graph'];
size([a.keys(), a]);
// 3
a = {w1: 'linked', w2: 'list'};
size([Object.keys(a), Object.values(a)]);
// 2
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Set.size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size

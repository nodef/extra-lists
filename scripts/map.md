Map values in [lists] to new values, like [Array.map()].

```javascript
const map = require('@extra-lists/map');
// map(<lists>, <map function>, [this])

a = ['leap', 'anrgy', 'flood'];
map([a.keys(), a], (v) => v+'frog');
// [[0, 1, 2], ['leapfrog', 'angryfrog', 'floodfrog']]
a = {w1: 'swim', w2: 'yonder', w3: 'point'};
map([Object.keys(a), Object.values(a)], (v, i, lst) => v+'tiber');
// [['w1', 'w2', 'w3'], ['swimtiber', 'yondertiber', 'pointtiber']]
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.map()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

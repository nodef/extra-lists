Concatenate [lists], like [Array.concat()].

```javascript
const concat = require('@extra-lists/concat');
// concat(<lists>...)

a = {amd: 'radeon', nvidia: 'gtx'};
b = {intel: 'pentium', qualcomm: 'snapdragon'};
concat([Object.keys(a), Object.values(a)], [Object.keys(b), Object.values(b)]);
// [['amd', 'nvidia', 'intel', 'qualcomm'], ['radeon', 'gtx', 'pentium', 'snapdragon']]
a = {p1: 'anarchy'};
b = {p2: 'democracy'};
c = {p3: 'communism'};
concat([Object.keys(a), Object.values(a)], [Object.keys(b), Object.values(b)], [Object.keys(c), Object.values(c)]);
// [['p1', 'p2', 'p3'], ['anarchy', 'democracy', 'communism']]
```


[![extra-lists](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-lists)

[lists]: https://www.npmjs.com/package/lists-is
[Array.concat()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

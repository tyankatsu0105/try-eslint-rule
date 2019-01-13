# no-var

var 宣言を警告する

# Good 👍

```javascript
const foo = "foo";

let foo;

let foo = "foo";

const foo = () => {};

let foo = () => {};
```

# BAD 👎

```javascript
var foo;

var foo = "foo";

var foo = () => {};
```

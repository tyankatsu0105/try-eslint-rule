# no-literal-call

おかしい構文をチェックする

# Good 👍

```javascript
foo();

obj.foo();

(function() {})();

// es6
(() => 0)();
```

# BAD 👎

```javascript

true();

false();

null();

100();

\"hello\"();

/abc/();

[1,2,3]();

({foo: 0})();

`hello`();

(class A {})();
```

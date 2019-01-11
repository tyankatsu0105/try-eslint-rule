"use strict";

// テスターを読み込む
const RuleTester = require("eslint").RuleTester;

// テスターを作って実行する
// tester.run(ルール名, ルール定義, テストパターン);
const tester = new RuleTester();
tester.run("no-literal-call", require("../lib/rule/no-literal-call"), {
  valid: [
    // 変数や関数を呼び出すのは正しい!
    {
      code: "foo();"
    },
    {
      code: "obj.foo();"
    },
    {
      code: "(function() {})();"
    },
    {
      code: "(() => 0)();",
      env: {
        es6: true
      }
    }
  ],
  invalid: [
    // 関数以外のリテラルを呼び出すのは間違っている!
    {
      code: "true();",
      errors: ["This is not a function."]
    },
    {
      code: "false();",
      errors: ["This is not a function."]
    },
    {
      code: "null();",
      errors: ["This is not a function."]
    },
    {
      code: "100();",
      errors: ["This is not a function."]
    },
    {
      code: "\"hello\"();",
      errors: ["This is not a function."]
    },
    {
      code: "/abc/();",
      errors: ["This is not a function."]
    },
    {
      code: "[1,2,3]();",
      errors: ["This is not a function."]
    },
    {
      code: "({foo: 0})();",
      errors: ["This is not a function."]
    },
    {
      code: "`hello`();",
      env: {
        es6: true
      },
      errors: ["This is not a function."]
    },
    {
      code: "(class A {})();",
      env: {
        es6: true
      },
      errors: ["Class constructors cannot be invoked without 'new'"]
    }
  ]
});
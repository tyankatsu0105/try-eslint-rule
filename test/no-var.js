"use strict";

const RuleTester = require("eslint").RuleTester;

const tester = new RuleTester();
tester.run("no-var", require("../lib/rules/no-var"), {
  valid: [{
      code: "const foo = 'foo'",
      env: {
        es6: true
      },
    },
    {
      code: "let foo;",
      env: {
        es6: true
      },
    },
    {
      code: "let foo = 'foo'",
      env: {
        es6: true
      },
    },
    {
      code: "const foo = () => {}",
      env: {
        es6: true
      },
    },
    {
      code: "let foo = () => {}",
      env: {
        es6: true
      },
    },
  ],
  // invalidケース考えるのめんどくさいね
  invalid: [{
      code: "var foo;",
      errors: ["Replace 'var' with 'let' or 'const'"]
    },
    {
      code: "var foo = 'foo'",
      errors: ["Replace 'var' with 'let' or 'const'"]
    },
    {
      code: "var foo = () => {}",
      env: {
        es6: true
      },
      errors: ["Replace 'var' with 'let' or 'const'"]
    }
  ]
});
"use strict";

const LITERAL_TYPE = /^(?:Literal|ArrayExpression|ObjectExpression|TemplateLiteral)$/;


// ルール定義。
module.exports = function (context) {
  return {
    /**
     * この CallExpression の呼び出し対象が Literal, ArrayExpression, ObjectExpression,
     * TemplateLiteral, ClassExpression のいずれかだった場合、警告する。
     *
     * @param {ASTNode} node - チェックする CallExpression ノード。
     */
    "CallExpression": function (node) {
      /**
       * 説明変数
       * 呼び出し先
       */
      const callee = node.callee

      // linterのエラーメッセージ
      let message = null;

      if (LITERAL_TYPE.test(callee.type)) {
        message = "This is not a function.";
      }
      if (callee.type === "ClassExpression") {
        message = "Class constructors cannot be invoked without 'new'";
      }

      if (message) {
        context.report({
          node: node,
          message: message
        });
      }






    }
  };
};

// ルールのオプション定義。今回は使わない。
module.exports.schema = [];
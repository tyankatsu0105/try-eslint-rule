"use strict";


// ルール定義。
module.exports = {

  create(context) {
    return {
      /**
       * この CallExpression の呼び出し対象が Literal, ArrayExpression, ObjectExpression,
       * TemplateLiteral, ClassExpression のいずれかだった場合、警告する。
       *
       * @param {ASTNode} node - チェックする CallExpression ノード。
       */
      "VariableDeclaration"(node) {
        const kind = node.kind

        // linterのエラーメッセージ
        let message = null;

        if (kind === 'var') {
          message = "Replace 'var' with 'let' or 'const'";
        }

        if (message) {
          context.report({
            node: node,
            loc: node.loc,
            message: message
          });
        }
      }
    };
  }
};
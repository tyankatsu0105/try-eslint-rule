"use strict";


// ルール定義。
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'var宣言を警告する',
      category: 'my-category',
      url: 'https://github.com/tyankatsu0105/try-eslint-rule/blob/master/docs/rules/no-var.md'

    }
  },
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
            message: message
          });
        }
      }
    };
  }
};
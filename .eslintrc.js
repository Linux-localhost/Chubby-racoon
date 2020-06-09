module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'object-curly-spacing': ['warning', 'always'],
    'linebreak-style': ['warning', 'windows'],
    'eslint max-len': ['warning', {code: 1000}],
    'require-jsdoc': [
      'warning',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
  },
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'array-bracket-spacing': ['error', 'always'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { 'multiline': true }],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'never'],
    'function-paren-newline': ['error', 'multiline'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 'tab'],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { 'mode': 'strict' }],
    'keyword-spacing': 'error',
    'line-comment-position': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      'beforeBlockComment': true,
      'beforeLineComment': true,
      'allowBlockStart': true
    }],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'max-len': ['error', { 'code': 160, 'tabWidth': 2 }],
    'max-statements-per-line': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-extra-parens': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-tabs': ['error', { 'allowIndentationTabs': true }],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', { 'multiline': true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'error',
    'operator-linebreak': ['error', 'none'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {'blankLine': 'always', 'prev': '*', 'next': 'return'},
      {'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'},
      {'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']},
      {'blankLine': 'always', 'prev': '*', 'next': 'class'},
      {'blankLine': 'always', 'prev': 'class', 'next': '*'},
      {'blankLine': 'always', 'prev': 'import', 'next': '*'},
      {'blankLine': 'any', 'prev': 'import', 'next': 'import'},
      {'blankLine': 'always', 'prev': 'export', 'next': '*'},
      {'blankLine': 'always', 'prev': '*', 'next': 'export'},
      {'blankLine': 'any', 'prev': 'export', 'next': 'export'},
      {'blankLine': 'always', 'prev': ['block', 'function', 'if', 'for', 'while'], 'next': '*'},
      {'blankLine': 'always', 'prev': '*', 'next': ['block', 'function', 'if', 'for', 'while']},
      {'blankLine': 'never', 'prev': ['case', 'default'], 'next': ['case', 'default']}
    ],
    'quotes': ['error', 'single'],
    'rest-spread-spacing': 'error',
    'semi': ['error', 'never'],
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error'
  },
}

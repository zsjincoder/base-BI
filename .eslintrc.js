module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/html-closing-bracket-newline': 'off',
    'function-call-argument-newline': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/no-duplicate-attributes': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    /**
     * 结尾必须有分号
     * @category Stylistic Issues
     * @fixable
     */
    'semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    indent: ['error', 4],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'no-return-assign': 'off'
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        quotes: [2, 'double']
      }
    }
  ]
}

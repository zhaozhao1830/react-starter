module.exports = {
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['eslint-config-airbnb', 'airbnb/hooks', 'eslint-config-prettier'],
  // 自定义全局变量
  globals: {
    React: true,
    ReactDOM: true,
    _: true,
    $: true,
    globalConfig: true
  },
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: 3
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
      ]
    }
  },
  plugins: ['jsx-a11y', 'react'],
  // "off" or 0 - close the rule
  // "warn" or 1 - open the rule, level is 'warn'
  // "error" or 2 - open the rule, level is 'error'
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 1, // Checks effect dependencies
    'jsx-quotes': [1, 'prefer-single'],
    'import/extensions': [
      'warn',
      {
        js: 'never',
        scss: 'always'
      }
    ],
    'jsx-a11y/href-no-hash': ['off'],
    'object-curly-newline': 'off',
    'max-len': [2, { code: 110 }],
    'max-classes-per-file': 0,
    'jsx-props-no-spreading': 0,
    'no-confusing-arrow': [2, { allowParens: true }],
    'react/destructuring-assignment': [0],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [2, { forbid: ['any'] }],
    'no-underscore-dangle': ['error', { allow: ['_host', '_hostp'] }],
    'react/prop-types': 0
  },
  settings: {
    'import/resolver': {
      webpack: { config: './wp.cfg/webpack.config.base.js' }
    }
  }
}

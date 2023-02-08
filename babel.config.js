/* eslint-disable default-case */
const configs = () => {
  const nodeEnv = process.env.NODE_ENV
  switch (nodeEnv) {
    case 'development':
      return {
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
          '@babel/plugin-proposal-nullish-coalescing-operator',
          'react-refresh/babel'
        ]
      }
    case 'production':
      return {
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
    case 'test':
      return {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: 'commonjs',
              debug: false
            }
          ],
          '@babel/preset-react'
        ],
        plugins: [
          ['@babel/plugin-transform-runtime', { corejs: 3 }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator'
        ]
      }
  }
}

module.exports = configs()

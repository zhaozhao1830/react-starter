module.exports = {
  setupFiles: ['./__tests__/setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.(spec|test).js?(x)'],
  // testMatch: ['<rootDir>/__tests__/**/*.(spec|test).js?(x)'],
  collectCoverage: false,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
    'configs': '<rootDir>/src/configs',
    '^hooks$': '<rootDir>/src/hooks'
  },
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.config.js' }] // 使用babel-jest处理js文件
  },
  // 忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
  // transformIgnorePatterns: ['<rootDir>/node_modules/(?!(lodash-es|other-es-lib))']
  unmockedModulePathPatterns: ['node_modules/react/', 'node_modules/enzyme/'],
  testEnvironment: "jsdom"
}

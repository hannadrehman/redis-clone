const jestBaseConfig = {
  verbose: true,
  roots: ['./'],
  moduleNameMapper: {},
  transform: {},
  moduleFileExtensions: ['js', 'jsx'],
  unmockedModulePathPatterns: [],
  moduleDirectories: ['node_modules', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: [],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: [''],
  coverageReporters: ['json', 'lcov', 'text'],
  setupFilesAfterEnv: ['<rootDir>/jest-after-env.js'],
  setupFiles: [],
  globalSetup: '<rootDir>/jest-global-setup.js',
  watchPlugins: [],
}

module.exports = jestBaseConfig

// @ts-check
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.ts$': ['babel-jest'],
  },
};

// @ts-check
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.ts$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2019',
        },
      },
      {
        sourceMaps: true,
      },
    ],
  },
};

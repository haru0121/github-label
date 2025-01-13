/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: "node",
  transformIgnorePatterns: ["/node_modules/(?!@octokit/rest/)"],
  transform: {
    "node_modules/@octokit/rest/.+.(j|t)sx?$": "ts-jest",
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  extensionsToTreatAsEsm: ['.ts'], // ESM として扱う拡張子,
};
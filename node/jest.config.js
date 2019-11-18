
const common = {
  transform: { '^.+\\.ts$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src',],
  testEnvironment: 'node',
};

function reStr(...types) { return `\\.(${types.join('|')})\\.(js|ts)$`; }

module.exports = {
  projects: [
    {
      // spec.ts or test.ts files in 'src' dir
      ...common,
      'displayName': 'unit',
      testRegex: reStr('spec', 'test'),
    },

    {
      // tslint
      ...common,
      'displayName': 'eslint',
      runner: 'jest-runner-eslint',
      testMatch: ['**/*.ts'],
    },
  ],


  verbose: false,
};

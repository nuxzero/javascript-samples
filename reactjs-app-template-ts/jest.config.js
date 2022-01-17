// issue: SyntaxError: Cannot use import statement outside a module
// https://github.com/facebook/jest/issues/9395
module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

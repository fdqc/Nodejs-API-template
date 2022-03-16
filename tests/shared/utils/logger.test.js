/* eslint-disable no-undef */
/* eslint-disable global-require */
describe('Logger Util', () => {
  test('Should get the same instance', () => {
    const loggerOne = require('../../../src/shared/utils/logger');
    const loggerTwo = require('../../../src/shared/utils/logger');

    expect(loggerOne).toBe(loggerTwo);
  });
});

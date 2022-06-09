/* eslint-disable no-undef */
const asyncWrapper = require('../../../src/shared/utils/asyncWrapper');

describe('asyncWrapper', () => {
  test('Should execute next function on success', async () => {
    const nextSpy = jest.fn();
    const asyncFunction = async (_req, _res, next) => next();

    const wrappedFunction = asyncWrapper(asyncFunction);

    await wrappedFunction({}, {}, nextSpy);
    expect(nextSpy).toBeCalled();
  });

  test('Should execute next with an error object', async () => {
    const nextSpy = jest.fn();
    const asyncFunction = async (_req, _res, _next) => { throw new Error('Error'); };

    const wrappedFunction = asyncWrapper(asyncFunction);

    await wrappedFunction({}, {}, nextSpy);
    expect(nextSpy).toBeCalledWith(new Error('Error'));
  });
});

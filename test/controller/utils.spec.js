/* eslint-disable no-extend-native */
import { uuid } from '../../src/controller/utils';

describe('utils', () => {
  it('uuid devuelve timestamp tomado desde `Date.now`', () => {
    const now = 1556232924512;
    // mockeamos `Date.now`
    Date.now = jest.fn().mockReturnValue(now);

    expect(uuid()).toBe(now);
  });
});

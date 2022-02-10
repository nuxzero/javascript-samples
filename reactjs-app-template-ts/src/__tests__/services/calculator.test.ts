import { add } from '../../services/calculator';

describe('calculator', () => {
  describe('add', () => {
    test('1+1 returns 2', () => {
      expect(add(1, 1)).toEqual(2);
    });
  });
});

import { add } from '../calculator';

describe('calculator', () => {
  describe('add', () => {
    it('1 + 1 should return 2', () => {
      expect.hasAssertions();
      expect(add(1, 1)).toBe(2);
    });
  });
});

import { add } from '../calculator';

describe('calculator', () => {
  describe('add', () => {
    it('should return 2 when 1 + 1', () => {
      expect.hasAssertions();
      expect(add(1, 1)).toBe(2);
    });
  });
});

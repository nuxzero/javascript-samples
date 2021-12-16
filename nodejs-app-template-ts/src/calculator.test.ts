import * as calculator from "./calculator";

describe("calculator", () => {
  describe("add", () => {
    it("1 + 1 should return 2", () => {
      const result = calculator.add(1 + 1);
      expect(result).toBe(2);
    });
  });
});

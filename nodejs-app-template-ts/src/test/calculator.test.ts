import * as calculator from "../src/calculator";

describe("calculator", () => {
  describe("add", () => {
    test("1 + 1 should return 2", () => {
      const result = calculator.add(1 + 1);
      expect(result).toBe(2);
    });
  });
});

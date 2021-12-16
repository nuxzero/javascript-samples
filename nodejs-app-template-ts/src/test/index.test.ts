import { add } from "../src/index";

describe("add", () => {
  test("1+3 should return 4", () => {
    const result = add(1, 3);
    expect(result).toEqual(4);
  });
});

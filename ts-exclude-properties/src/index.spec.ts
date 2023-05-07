import { describe, expect, test } from "vitest";
import { TypeA, TypeB, TypeC, transformIntersectingObject } from "./index";

describe("transform internsecting object", () => {
  test("should contain only property from TypeA", () => {
    const a: TypeA = { propA1: "a" };
    const b: TypeB = { propB1: "b" };
    const c: TypeC = { ...a, ...b };

    const result = transformIntersectingObject(c);

    expect(result).toEqual(a);
  });
});

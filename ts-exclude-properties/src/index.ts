export type TypeA = { propA1: string };
export type TypeB = { propB1: string };
export type TypeC = TypeA & TypeB;

export function transformIntersectingObject(c: TypeC): TypeA {
  const { propB1, ...result } = c;
  return result;
}

console.log(
  "result: ",
  transformIntersectingObject({ propA1: "a", propB1: "b" })
);

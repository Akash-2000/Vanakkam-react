import { sum } from "../sum";

test("check sum correctly work", () => {
  const result = sum(4, 3);

  //Assertion
  expect(result).toBe(7);
});

import { sum } from "../sum.js";

it('sums numbers', () => {
  expect(sum(1,5)).toEqual(3);
  expect(sum(2,2)).toEqual(4);
});
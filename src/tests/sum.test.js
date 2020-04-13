import { sum } from "../sum.js";

it('sums numbers', () => {
  expect(sum(1,2)).toEqual(3);
  expect(sum(2,2)).toEqual(4);
});

it('sums numbers with error', () => {
  expect(sum(1,5)).toEqual(3);
});

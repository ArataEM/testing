import { sum } from "../sum.js";

it('sums numbers', () => {
  expect(sum(1,2)).toEqual(3);
  expect(sum(2,2)).toEqual(4);
});

it('sums numbers 2', () => {
  expect(sum(1,2)).toEqual(3);
});

import isValid from '../validation/isValid';

test.each([
  ['true for valid card number', '4112344112344113', true],
  ['false for invalid card number', '4112344112344114', false],
])('it should be %s', (_, input, expected) => {
  expect(isValid(input)).toBe(expected);
});

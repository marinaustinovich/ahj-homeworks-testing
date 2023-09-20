import findPaymentSystem from '../validation/findPaymentSystem';

test.each([
  ['mir for 2********', '2200123456789010', 'mir'],
  ['visa for 4********', '4000001234567899', 'visa'],
  ['visa for 4********', '4627100101654724', 'visa'],
  ['master for 5********', '5467929858074128', 'master'],
  ['discover for 6********', '6011000990139424', 'discover'],
  ['amex for 34********', '345455289339608', 'amex'],
  ['amex for 37********', '375700000000002', 'amex'],
  ['diners_club for 30********', '30163226829814', 'diners_club'],
  ['diners_club for 36********', '36163226829814', 'diners_club'],
  ['diners_club for 38********', '38163226829814', 'diners_club'],
  ['no-found for 1********', '1712344000054113', 'no-found'],
  ['no-found for 7********', '7712344200344113', 'no-found'],
  ['no-found for 8********', '8712344112343003', 'no-found'],
  ['no-found for 9*********', '975700000000816', 'no-found'],
])('it should be %s', (_, input, expected) => {
  expect(findPaymentSystem(input)).toBe(expected);
});

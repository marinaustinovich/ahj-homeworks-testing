export default function isValid(value) {
  const num = `${value}`;
  let nCheck = 0;
  let bEven = false;
  for (let n = num.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(num.charAt(n), 10);
    /* eslint-disable */
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

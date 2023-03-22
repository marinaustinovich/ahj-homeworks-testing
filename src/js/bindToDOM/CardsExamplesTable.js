export default class CardExamplesTAble {
  static get markupTable() {
    return `
            <h3>Example credit card numbers</h3>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Credit Card Type</th>
                  <th>Credit Card Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>American Express</td>
                  <td>371449635398431</td>
                </tr>
                <tr>
                  <td>Diners Club</td>
                  <td>30569309025904</td>
                </tr>
                <tr>
                  <td>Discover</td>
                  <td>6011111111111117</td>
                </tr>
                <tr>
                  <td>Мир</td>
                  <td>2200123456789001</td>
                </tr>
                <tr>
                  <td>MasterCard</td>
                  <td>5555555555554444</td>
                </tr>
                <tr>
                  <td>Visa</td>
                  <td>4111111111111111</td>
                </tr>
              </tbody>
              </table>
            </div>
        `;
  }
}

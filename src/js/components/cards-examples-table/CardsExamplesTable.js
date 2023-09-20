import './cards-examples-table.css';

export default class CardExamplesTable {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
    this.cards = [
      { type: 'American Express', number: '371449635398431' },
      { type: 'Diners Club', number: '30569309025904' },
      { type: 'Discover', number: '6011111111111117' },
      { type: 'Мир', number: '2200123456789001' },
      { type: 'MasterCard', number: '5555555555554444' },
      { type: 'Visa', number: '4111111111111111' },
    ];
  }

  bindToDOM() {
    this.container.innerHTML = this.markup;
  }

  get markup() {
    return `
      <div class='table-examples'>
        <h3>Example credit card numbers</h3>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Credit Card Type</th>
              <th>Credit Card Number</th>
            </tr>
          </thead>
          <tbody>
            ${this.cards
    .map(
      (card) => `
              <tr>
                <td>${card.type}</td>
                <td>${card.number}</td>
              </tr>
            `,
    )
    .join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

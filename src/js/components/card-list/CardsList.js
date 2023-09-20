import './card-list.css';

export default class CardsList {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
    this.cards = [
      { class: 'visa', title: 'Visa', label: 'Visa' },
      { class: 'master', title: 'Mastercard', label: 'Mastercard' },
      { class: 'amex', title: 'American Express', label: 'American Express' },
      { class: 'discover', title: 'Discover', label: 'Discover' },
      { class: 'mir', title: 'Mir', label: 'Мир' },
      { class: 'diners_club', title: 'Diners Club', label: 'Diners Club' },
    ];
  }

  bindToDOM() {
    this.container.innerHTML = this.markup;
  }

  get markup() {
    return `
      <ul class="cards">
        ${this.cards
    .map(
      (card) => `
          <li><span class="card ${card.class}" title="${card.title}">${card.label}</span></li>
        `,
    )
    .join('')}
      </ul>
    `;
  }
}

import visaElectron from '../../../img/visa_electron_curved.png';
import MasterCard from '../../../img/mastercard_curved.png';
import AmexCard from '../../../img/credit_card_amex.png';
import DiscoverCard from '../../../img/discover_straight_32px.png';
import MirCard from '../../../img/mir_card.png';
import DinersClubCard from '../../../img/diners_club_card.png';

import './card-list.css';

export default class CardsList {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
    this.cards = [
      { class: 'visa', title: 'Visa', url: visaElectron },
      { class: 'master', title: 'Mastercard', url: MasterCard },
      { class: 'amex', title: 'American Express', url: AmexCard },
      { class: 'discover', title: 'Discover', url: DiscoverCard },
      { class: 'mir', title: 'Mir', url: MirCard },
      { class: 'diners_club', title: 'Diners Club', url: DinersClubCard },
    ];
  }

  bindToDOM() {
    this.container.innerHTML = this.markup;
  }

  get markup() {
    return `
      <div class="cards">
        ${this.cards
    .map(
      (card) => `
        <div>
          <img class="card ${card.class}" src=${card.url} alt="${card.title}">
        </div>  
        `,
    )
    .join('')}
      </div>
    `;
  }
}

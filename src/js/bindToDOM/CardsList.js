export default class CardsList {
  static get markupList() {
    return `
      <ul class="cards"
        <li><span class="card visa" title="Visa">Visa</span></li>
        <li><span class="card master" title="Mastercard">Mastercard</span></li>
        <li><span class="card amex" title="American Express">American Express</span></li>
        <li><span class="card discover" title="Discover">Discover</span></li>
        <li><span class="card mir" title="Mir">Мир</span></li>
        <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
      </ul>
      <span class="message hidden">Упсс! Платежной системы нет в базе</span>
    `;
  }
}

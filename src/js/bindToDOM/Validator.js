import findPaymentSystem from '../validation/findPaymentSystem';
import isValid from '../validation/isValid';
import CardsExamplesTable from './CardsExamplesTable';
import Widget from './Widget';

export default class Validator {
  constructor() {
    this.container = null;
    this.inputEl = null;
    this.widget = document.createElement('div');
    this.table = document.createElement('div');
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;

    this.drawUi();
  }

  drawUi() {
    this.checkBinding();

    this.container.innerHTML = `
      <div class="headmast">
        <h2>Validate Credit Card Numbers</h2>
        <h3>Check a credit card number with our online checker!</h3>
      </div>
    `;

    this.widget.innerHTML = new Widget().markupWidget();
    this.widget.classList.add('widget');

    this.table.innerHTML = CardsExamplesTable.markupTable;
    this.table.classList.add('table-examples');
    this.container.append(this.widget, this.table);
    this.inputEl = this.widget.querySelector('.form-control');

    const submit = this.widget.querySelector('#submitform');
    submit.addEventListener('click', (e) => this.onSubmit(e));
    const reset = this.widget.querySelector('#resetform');
    reset.addEventListener('click', (e) => this.reset(e));
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Validator not bind to DOM');
    }
  }

  onSubmit(evt) {
    evt.preventDefault();
    if (isValid(this.inputEl.value)) {
      this.inputEl.classList.add('valid');
      const paymentSystem = findPaymentSystem(this.inputEl.value);
      const card = this.widget.querySelector(`.${paymentSystem}`);
      if (card) {
        card.classList.add('card-active');
      } else {
        this.showMessage();
      }
    } else {
      this.inputEl.classList.add('invalid');
    }
  }

  reset(evt) {
    evt.preventDefault();
    this.inputEl.value = '';
    this.inputEl.classList.remove('invalid');
    this.inputEl.classList.remove('valid');
    this.hideMessage();
    const activeCard = this.widget.querySelector('.card-active');
    if (activeCard) {
      activeCard.classList.remove('card-active');
    }
  }

  showMessage() {
    const message = this.widget.querySelector('.message');
    message.classList.remove('hidden');
  }

  hideMessage() {
    const message = this.widget.querySelector('.message');
    message.classList.add('hidden');
  }
}

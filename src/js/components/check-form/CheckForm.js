import findPaymentSystem from '../../validation/findPaymentSystem';
import isValid from '../../validation/isValid';
import './check-form.css';

export default class CheckForm {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;

    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  bindToDOM() {
    this.container.innerHTML = CheckForm.markup;

    const {
      selector,
      messageSelector,
      submitSelector,
      inputSelector,
      resetSelector,
    } = CheckForm;

    this.element = this.container.querySelector(selector);
    this.message = this.element.querySelector(messageSelector);
    this.submit = this.element.querySelector(submitSelector);
    this.input = this.element.querySelector(inputSelector);
    this.reset = this.element.querySelector(resetSelector);

    this.element.addEventListener('submit', this.onSubmit);
    this.reset.addEventListener('click', this.onReset);
  }

  onSubmit(e) {
    e.preventDefault();

    const isValidCard = isValid(this.input.value);
    this.input.classList.toggle('valid', isValidCard);
    this.input.classList.toggle('invalid', !isValidCard);

    if (isValidCard) {
      const paymentSystem = findPaymentSystem(this.input.value);
      const card = document.querySelector(`.${paymentSystem}`);

      if (card) {
        card.classList.add('card-active');
      } else {
        this.showMessage();
      }
    }
  }

  onReset() {
    this.input.value = '';
    this.input.classList.remove('invalid', 'valid');

    const activeCard = document.querySelector('.card-active');
    if (activeCard) {
      activeCard.classList.remove('card-active');
    }

    this.hideMessage();
  }

  showMessage() {
    this.message.classList.remove('hidden');
  }

  hideMessage() {
    this.message.classList.add('hidden');
  }

  static get markup() {
    return `
      <form id="form" class="form-inline">
          <div class="form-group">
              <input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
          </div>
          <div class='button-wrapper'>
            <button class="submit">Click to Validate</button>
            <button class="reset" type='button'>Reset form</button>
          </div> 
          <span class="message hidden">Упсс! Платежной системы нет в базе</span>
      </form>
    `;
  }

  static get selector() {
    return '.form-inline';
  }

  static get messageSelector() {
    return '.message';
  }

  static get submitSelector() {
    return '.submit';
  }

  static get inputSelector() {
    return '.form-control';
  }

  static get resetSelector() {
    return '.reset';
  }
}

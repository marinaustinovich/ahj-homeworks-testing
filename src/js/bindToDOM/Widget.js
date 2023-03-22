import CardsList from './CardsList';
import CheckForm from './CheckForm';

export default class Widget {
  constructor() {
    this.widget = document.createElement('div');
    this.form = document.createElement('div');
    this.cardList = document.createElement('div');
    this.createEl();
  }

  createEl() {
    this.widget.innerHTML = `
      <h3>Check your credit card number</h3>
      `;
    this.cardList.classList.add('icons');
    this.cardList.innerHTML = CardsList.markupList;
    this.form.innerHTML = CheckForm.markupForm;
    this.widget.append(this.cardList, this.form);
  }

  markupWidget() {
    return this.widget.innerHTML;
  }
}

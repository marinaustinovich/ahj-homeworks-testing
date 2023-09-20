import CardsExamplesTable from '../cards-examples-table/CardsExamplesTable';
import Widget from '../widget/Widget';
import './validator.css';

export default class Validator {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  bindToDOM() {
    this.container.innerHTML = Validator.markUp;
    this.widgetContainer = this.container.querySelector(Validator.widgetSelector);
    this.tableContainer = this.container.querySelector(Validator.tableSelector);

    const widget = new Widget(this.widgetContainer);
    widget.bindToDOM();

    const table = new CardsExamplesTable(this.tableContainer);
    table.bindToDOM();
  }

  static get markUp() {
    return `
      <div class="headmast">
        <h2>Validate Credit Card Numbers</h2>
        <h3>Check a credit card number with our online checker!</h3>
        <div class="widget-container"></div>
        <div class="table-container"></div>
      </div>
    `;
  }

  static get widgetSelector() {
    return '.widget-container';
  }

  static get tableSelector() {
    return '.table-container';
  }
}

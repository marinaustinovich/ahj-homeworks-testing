import Widget from '../bindToDOM/Widget';

const jsdom = require('jsdom'); // eslint-disable-line import/no-extraneous-dependencies

const { JSDOM } = jsdom;

// jest.mock('../Widget');
describe('button', () => {
  beforeEach(() => {
    const dom = new JSDOM('some html', { url: 'https://localhost:3000' });

    global.window = dom.window;
    global.document = dom.window.document;
  });

  test('should render self', () => {
    document.body.innerHTML = '<div id="card-validator-container"></div>';
    const container = document.querySelector('#card-validator-container');
    const widget = new Widget();
    widget.markupWidget();
    container.innerHTML = widget.markupWidget();
    expect(container.innerHTML).toEqual(widget.markupWidget());
  });
});

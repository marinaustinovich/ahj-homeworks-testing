import CardsList from '../components/card-list/CardsList';

describe('CardsList', () => {
  let container;
  let cardsList;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    cardsList = new CardsList(container);
    cardsList.bindToDOM();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('initializes and binds correctly to DOM', () => {
    const ulElement = container.querySelector('.cards');
    expect(ulElement).not.toBeNull();
    expect(container.querySelectorAll('li').length).toBe(cardsList.cards.length);
  });

  test('displays correct card data', () => {
    const listItems = container.querySelectorAll('li');
    listItems.forEach((li, index) => {
      const cardSpan = li.querySelector('.card');
      expect(cardSpan.classList.contains(cardsList.cards[index].class)).toBeTruthy();
      expect(cardSpan.getAttribute('title')).toBe(cardsList.cards[index].title);
      expect(cardSpan.textContent).toBe(cardsList.cards[index].label);
    });
  });
});

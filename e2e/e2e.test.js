import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Credit Card Validator form', () => {
  const baseUrl = 'http://localhost:9000';
  let browser;
  let page;

  beforeEach(async () => {
    try {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        devtools: true,
      });
    } catch (e) {
      console.error(e);
    }

    page = await browser.newPage();
  });

  test('Validator should render on page start', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('#form');
  });

  test('should add .valid  and .card-active class for valid  and found card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('4111111111111111');
    const submit = await form.$('.submit');
    await submit.click();
    await page.waitForSelector('#card_number.valid');
    await page.waitForSelector('.visa.card-active');
    await page.waitForSelector('.message.hidden');
  });

  test('should add .invalid class for invalid card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('4111111111110011');
    const submit = await form.$('.submit');
    await submit.click();
    await page.waitForSelector('#card_number.invalid');
  });

  test('should add .hidden class for valid and not found card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('975700000000816');
    const submit = await form.$('.submit');
    await submit.click();
    await page.waitForSelector('#card_number.valid');
    await page.waitForSelector('.message');
  });

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });
});

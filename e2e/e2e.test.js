import puppetteer from 'puppeteer'; // eslint-disable-line import/no-extraneous-dependencies
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add .valid  and .card-active class for valid  and found card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('4111111111111111');
    const submit = await form.$('#submitform');
    submit.click();
    await page.waitForSelector('#card_number.valid');
    await page.waitForSelector('.visa.card-active');
    await page.waitForSelector('.message.hidden');
  });

  test('should add .invalid class for invalid card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('4111111111110011');
    const submit = await form.$('#submitform');
    submit.click();
    await page.waitForSelector('#card_number.invalid');
  });

  test('should add .hidden class for valid and not found card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('975700000000816');
    const submit = await form.$('#submitform');
    submit.click();
    await page.waitForSelector('#card_number.valid');
    await page.waitForSelector('.message');
  });
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://paywint-qa.netlify.app/app/login.html/');
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('student');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('Password123');
  await page.getByTestId('toggle-password').click();
  await page.getByTestId('login-button').click();
  await page.goto('https://paywint-qa.netlify.app/app/dashboard.html');
  await page.getByTestId('search').click();
  await page.getByTestId('search').fill('');
  await page.getByTestId('add-button').click();
  await page.getByTestId('add-button').click();
  await page.getByTestId('add-button').click({
    clickCount: 3
  });
  await page.getByTestId('add-button').dblclick();
  await page.getByTestId('new-product').click({
    clickCount: 3
  });
  await page.getByTestId('new-product').click();
  await page.getByTestId('new-product').fill('bluetooth speaker');
  await page.getByTestId('add-button').click();
  await page.getByRole('cell', { name: 'New' }).click();
  await page.getByTestId('logout-button').click();
});
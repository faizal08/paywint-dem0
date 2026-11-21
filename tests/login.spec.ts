import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://paywint-qa.netlify.app/app/login.html/');
  await page.locator('body').click();
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('');
  await page.locator('body').click();
  await page.getByText('student').click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('student');
  await page.getByTestId('password').click();
  await page.getByText('Password123').click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.getByTestId('password').dblclick();
  await page.getByTestId('password').fill('assword123');
  await page.getByTestId('login-button').click();
  await page.getByText('QA Demo App Sign in to your').click();
  await page.getByTestId('password').dblclick();
  await page.getByTestId('password').fill('Password123');
  await page.getByTestId('login-button').click();
});
// tests/login.spec.js
import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {
  const baseURL = 'https://practicetestautomation.com/practice-test-login/';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  test('TC01 - Login with valid credentials', async ({ page }) => {
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  });

  test('TC06 - Login with incorrect username', async ({ page }) => {
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'Password123');
    await page.click('#submit');
    await expect(page.locator('#error')).toContainText('Your username is invalid!');
  });

  test('TC07 - Login with incorrect password', async ({ page }) => {
    await page.fill('#username', 'student');
    await page.fill('#password', 'wrongpass');
    await page.click('#submit');
    await expect(page.locator('#error')).toContainText('Your password is invalid!');
  });

  test('TC08 - Login with empty fields', async ({ page }) => {
    await page.fill('#username', '');
    await page.fill('#password', '');
    await page.click('#submit');
    await expect(page.locator('#error')).toBeVisible();
  });
});

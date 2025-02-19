import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await page.goto('https://playwright.dev/community/welcome')
  await expect(page).toHaveTitle(/Playwright/);
  const learnVideoButton = page.locator('[href="/community/learn-videos"][class=menu__link]');
  await learnVideoButton.click();
  expect(page.url()).toContain("/community/learn-videos");


});



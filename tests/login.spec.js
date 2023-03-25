const {test, expect } = require('@playwright/test');

test('login ', async ({page}) => {
      await page.goto('http://167.114.201.175:5000/login')
      await page.locator('.login').fill('Admin')
      await page.locator('.password').fill('Admin@Navi')
      await page.locator('.auth-btn').click()
});
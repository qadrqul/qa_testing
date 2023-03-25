const {test, expect, chromium} = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('http://167.114.201.175:5000/');
    await page.locator('.login').fill('Admin');
    await page.locator('.password').fill('Admin@Navi');
    await page.locator('.auth-btn').click();
    console.log('Logged In!')

});

test.afterEach(async ({page}) => {
    await page.waitForTimeout(500)
});

test.describe('CRUD', () => {
    test('Client Add', async ({page}) => {
        await page.locator('.clients-add-user-dialog').click();
        await page.locator('#mat-input-1').fill('Momunov');
        console.log('Surname Added!');
        await page.locator('#mat-input-2').fill('Kadyrmamat');
        console.log('Name Added!');
        await page.locator('#mat-radio-2').click();
        await page.locator('#mat-input-4').fill('kadyr12345@gmail.com');
        console.log('E-mail Added!');
        await page.locator('#mat-input-5').fill('996500000001');
        console.log('Number Added!');
        await page.locator('#mat-input-6').fill('07/07/2007');
        console.log('Date Added!');
        await page.locator('[name = save]').click();
        console.log('Client Added Successfully!');
    });

    test('Client View ', async ({page}) => {
        const search = page.locator('#mat-input-0');
        await search.fill('Kadyrmamat');
        await search.press('Enter');
        console.log('Searching...');
        try {
            await page.click("text=Momunov Kadyrmamat", {timeout: 2000})
            console.log("Client Exist!");
        } catch (e) {
            console.log('Client Doesn\'t Exist!');
        }
    });

    test('Client Update', async ({page}) => {
        await page.waitForTimeout(5000);
        const search = page.locator('#mat-input-0');
        await search.fill('Kadyrmamat');
        await search.press('Enter');
        console.log('Searching...');
        try {
            await page.click("text=Momunov Kadyrmamat", {timeout: 2000});
            console.log("Client Exist!");
            await page.locator('#mat-input-3').fill('Momunov');
            console.log('Patronymic Added!');
            await page.locator('[name = save]').click();
            console.log('Client Updated Successfully!');
        } catch (e) {
            console.log('Client Doesn\'t Exist!');
        }
    });

});

test.describe('CML', () => {
    test('Create Manual Level', async ({page}) => {
        await page.waitForTimeout(5000);
        await page.goto('http://167.114.201.175:5000/bonus-system/manual-levels');
        await page.waitForTimeout(500);
        await page.locator('.material-icons').nth(-1).click();
        await page.waitForTimeout(500)
        await page.locator('.material-icons').nth(9).click();
        await page.locator('.bonus-level-data__text').nth(-1).fill('Мануальный 40%');
        console.log('Added Manual Name!');
        await page.locator('.bonus-level-input').nth(-2).fill('1');
        console.log('Added Sum!');
        await page.locator('.bonus-level-input').nth(-1).fill('0.4');
        console.log('Added Points!');
        await page.click('button:text("Сохранить")');
        console.log('Successfully Saved!');

    });
});


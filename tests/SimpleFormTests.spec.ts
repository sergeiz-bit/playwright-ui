import {expect, test} from '@playwright/test';

test.describe("Local simple form tests", async () => {
    test.beforeEach(async ({ page }) => {
        const path = require('path');
        const filePath = `file://${path.resolve('src/simpleForm.html')}`;
        await page.goto(filePath);
    })
    test('Form opens', async ({page}) => {

        //locators
        const emailField = page.getByTestId("email")
        const usernameField = page.getByTestId("username")
        const submitButton = page.getByTestId("submit-order")
        const popupMessage = page.getByText("OK")

        //actions

        await expect(emailField).toBeVisible();
        await expect(usernameField).toBeVisible();
        await expect(submitButton).toBeVisible();
        await expect(submitButton).toBeDisabled();
        await usernameField.fill("testusernmae");
       // await usernameField.pressSequentially("testusernmae", {delay: 50});
        await expect(submitButton).toBeDisabled();

        await emailField.fill("test@test.ee");
        await expect(submitButton).toBeEnabled();
        await expect(popupMessage).not.toBeVisible();
        await submitButton.click();
        await expect(popupMessage).toBeVisible();
        await page.waitForTimeout(5100);
        await expect(popupMessage).not.toBeVisible();
    })

});



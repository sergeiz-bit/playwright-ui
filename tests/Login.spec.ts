import {expect, test} from "@playwright/test";
import {LoginPage} from "../pages/login.page";
import {faker} from "@faker-js/faker";

test.describe("Simple Login tests", async () => {
test.beforeEach(async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
})

    test('Login with short login and password, should show validation error and signin button is disabled', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.usernameField.fill(faker.lorem.word(1));
        await expect(loginPage.usernameInputError).toBeVisible();
        await loginPage.passwordField.fill(faker.lorem.word(7));
        await expect(loginPage.passwordInputError).toBeVisible();
        await expect(loginPage.signInButton).toBeDisabled();
    })

    test('Login with empty login and password ', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.usernameField.fill(" ");
        await loginPage.passwordField.fill(" ");
        await expect(loginPage.signInButton).toBeDisabled();
    })

    test("Login with incorrect credentials, verify pop-up message appears", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.openLoginPage();
        await loginPage.login(faker.internet.email(), faker.internet.password())
        await expect(loginPage.incorrectCredentialsPopUp).toContainText("Incorrect credentials");
    })
})

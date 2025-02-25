import {Page} from "playwright";
import {Locator} from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;
    readonly incorrectCredentialsPopUp: Locator;
    readonly usernameInputError: Locator;
    readonly passwordInputError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByTestId("username-input")
        this.passwordField = page.getByTestId("password-input");
        this.signInButton = page.getByTestId("signIn-button");
        this.incorrectCredentialsPopUp = page.getByTestId("authorizationError-popup");
        this.usernameInputError = page.getByTestId("username-input-error").filter({hasText: 'The field must contain at least of characters: 2'});
        this.passwordInputError = page.getByTestId("username-input-error").filter({hasText: 'The field must contain at least of characters: 8'});
    }

    async openLoginPage() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.signInButton.click();
    }
}






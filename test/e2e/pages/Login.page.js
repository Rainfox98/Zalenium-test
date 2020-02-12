class LoginPage {
    openPage() {
        browser.url('/');
    }

    get languageLabel(){
        return $('//*[@id="root"]/header/div/div/div[2]/div/button/span[1]/img');
    }

    get spanLoginButton(){
        return $('//*[@id="root"]/main/div/div/form/button/span[2]');
    }

    get loginButton() {
        return $('[type="submit"]');
    }

    get emailInput() {
        return $('[name="email"]');
    }

    get passwordInput() {
        return $('[name = "password"]');
    }

    get emailErrorMessage() {
        return $('//*[@id="root"]/main/div/div/form/p[1]');
    }

    get passwordErrorMessage() {
        return $('//*[@id="root"]/main/div/div/form/p[2]');
    }

    get userAuthErrorMessage() {
        return $('//*[@id="root"]/main/div/div/form/p[3]');
    }

    logIn(user) {
        this.emailInput.waitForEnabled();
        this.emailInput.setValue(user.email);
        this.passwordInput.setValue(user.password);
        this.loginButton.click();
    }
}

export default new LoginPage();

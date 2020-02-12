class HomePage {
    get root() {
        return $('[id="root"]');
    }

    openPage() {
        browser.url('/dashboard');
    }

    isDisplayed() {
        return this.root.waitForDisplayed();
    }
}

export default new HomePage();

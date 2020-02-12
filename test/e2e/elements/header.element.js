class HeaderElement {
    get menuButton() {
        return $('//*[@id="root"]/header/div/div/div[1]/button/span[1]');
    }

    openMenu() {
        this.menuButton.waitForDisplayed();
        this.menuButton.click();
    }
}

export default new HeaderElement();
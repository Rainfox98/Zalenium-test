class BonusPlanPage {
    openPage() {
        browser.url('/bonus-plan');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Bonus Plan"]');
    }
}
export default new BonusPlanPage();

class CaptainsPage {
    openPage() {
        browser.url('/captains');
    }

    get titleElement() {
        return $('//*[@id="root"]/main/div/div[1]/h5[@text()="Captains"]');
    }
}
export default new CaptainsPage();
